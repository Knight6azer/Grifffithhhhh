from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Spirit Blossom Hub",
    description="A comprehensive platform for Spirit Blossom enthusiasts to explore character profiles, track meta-tier lists, and engage with community resources.",
    version="2.0.0",
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

# Try to import supabase
try:
    from supabase import create_client, Client
    from lib.characters import CharacterManager

    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_ANON_KEY")

    supabase: Client = None
    character_manager = None
    if supabase_url and supabase_key:
        supabase = create_client(supabase_url, supabase_key)
        character_manager = CharacterManager(supabase)
except ImportError:
    supabase = None
    character_manager = None

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/public", StaticFiles(directory="public"), name="public")

# Templates
templates = Jinja2Templates(directory="templates")

@app.get("/", tags=["General"])
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "title": "Spirit Blossom Hub"})

@app.get("/characters", tags=["Characters"])
async def characters(request: Request):
    characters = []
    if supabase:
        characters = character_manager.get_all_characters()
    return templates.TemplateResponse("characters.html", {"request": request, "characters": characters, "title": "Character Hub"})

@app.get("/tier-lists", tags=["Rankings"])
async def tier_lists(request: Request):
    tier_lists = []
    if supabase:
        try:
            response = supabase.table("tier_lists").select("*").execute()
            tier_lists = response.data
        except:
            pass
    return templates.TemplateResponse("tier_lists.html", {"request": request, "tier_lists": tier_lists, "title": "Tier Lists"})

@app.get("/resources", tags=["General"])
async def resources(request: Request):
    return templates.TemplateResponse("resources.html", {"request": request, "title": "Community Resources"})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)