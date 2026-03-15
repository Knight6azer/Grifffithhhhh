from fastapi import FastAPI, Request, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from config import config
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title=config.APP_TITLE,
    description=config.APP_DESCRIPTION,
    version=config.APP_VERSION,
    contact={
        "name": "Spirit Blossom Hub Team",
        "url": "https://github.com/Knight6azer/Grifffithhhhh",
    },
    license_info={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT",
    }
)

tags_metadata = [
    {"name": "General", "description": "General endpoints for the platform."},
    {"name": "Characters", "description": "Endpoints related to Spirit Blossom characters."},
    {"name": "Rankings", "description": "Endpoints for tier lists and community rankings."},
]

# Initialize Database Clients
supabase = None
character_manager = None

if config.validate():
    try:
        from supabase import create_client
        from lib.characters import CharacterManager
        
        supabase = create_client(config.SUPABASE_URL, config.SUPABASE_ANON_KEY)
        character_manager = CharacterManager(supabase)
        logger.info("Successfully connected to Supabase")
    except Exception as e:
        logger.error(f"Failed to initialize database clients: {e}")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/public", StaticFiles(directory="public"), name="public")

# Templates
templates = Jinja2Templates(directory="templates")

@app.get("/", tags=["General"])
async def home(request: Request):
    return templates.TemplateResponse("index.html", {
        "request": request, 
        "title": "Spirit Blossom Hub"
    })

@app.get("/characters", tags=["Characters"])
async def characters_list(request: Request, q: str = None):
    characters = []
    if character_manager:
        if q:
            characters = character_manager.search_characters(q)
        else:
            characters = character_manager.get_all_characters()
    
    return templates.TemplateResponse("characters.html", {
        "request": request, 
        "characters": characters, 
        "title": "Character Hub",
        "search_query": q or ""
    })

@app.get("/characters/{character_id}", tags=["Characters"])
async def character_detail(request: Request, character_id: int):
    character = None
    if character_manager:
        character = character_manager.get_character_by_id(character_id)
    
    if not character:
        raise HTTPException(status_code=404, detail="Character not found")
        
    return templates.TemplateResponse("character_detail.html", {
        "request": request, 
        "character": character, 
        "title": f"{character.get('name', 'Character')} - Details"
    })

@app.get("/tier-lists", tags=["Rankings"])
async def tier_lists_view(request: Request):
    tier_lists = []
    if supabase:
        try:
            response = supabase.table("tier_lists").select("*").execute()
            tier_lists = response.data
        except Exception as e:
            logger.error(f"Error fetching tier lists: {e}")
            
    return templates.TemplateResponse("tier_lists.html", {
        "request": request, 
        "tier_lists": tier_lists, 
        "title": "Tier Lists"
    })

@app.get("/resources", tags=["General"])
async def resources_view(request: Request):
    return templates.TemplateResponse("resources.html", {
        "request": request, 
        "title": "Community Resources"
    })

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)