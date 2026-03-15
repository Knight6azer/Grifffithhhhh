from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Spirit Blossom Hub", description="A comprehensive platform for Spirit Blossom enthusiasts")

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

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "title": "Spirit Blossom Hub"})

@app.get("/characters")
async def characters(request: Request):
    characters = []
    if supabase:
        characters = character_manager.get_all_characters()
    return templates.TemplateResponse("characters.html", {"request": request, "characters": characters, "title": "Character Hub"})

@app.get("/tier-lists")
async def tier_lists(request: Request):
    tier_lists = []
    if supabase:
        try:
            response = supabase.table("tier_lists").select("*").execute()
            tier_lists = response.data
        except:
            pass
    return templates.TemplateResponse("tier_lists.html", {"request": request, "tier_lists": tier_lists, "title": "Tier Lists"})

@app.get("/resources")
async def resources(request: Request):
    return templates.TemplateResponse("resources.html", {"request": request, "title": "Community Resources"})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)