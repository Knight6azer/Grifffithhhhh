from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from lib.characters import characters

load_dotenv()

app = FastAPI()

# Supabase client
supabase: Client = create_client(
    supabase_url=os.getenv("SUPABASE_URL"),
    supabase_key=os.getenv("SUPABASE_ANON_KEY")
)

# Templates
templates = Jinja2Templates(directory="templates")

# Static files
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/characters", response_class=HTMLResponse)
async def characters_page(request: Request):
    return templates.TemplateResponse("characters.html", {"request": request, "characters": characters})

@app.get("/characters/{id}", response_class=HTMLResponse)
async def character_profile(request: Request, id: str):
    char = next((c for c in characters if c.id == id), None)
    return templates.TemplateResponse("character_profile.html", {"request": request, "character": char})

@app.get("/tier-list", response_class=HTMLResponse)
async def tier_list(request: Request):
    from lib.characters import tier_order
    sorted_characters = sorted(characters, key=lambda c: tier_order.index(c.tier))
    return templates.TemplateResponse("tier_list.html", {"request": request, "characters": sorted_characters, "tier_order": tier_order})

@app.get("/auth", response_class=HTMLResponse)
async def auth(request: Request):
    return templates.TemplateResponse("auth.html", {"request": request})

@app.get("/404", response_class=HTMLResponse)
async def not_found(request: Request):
    return templates.TemplateResponse("404.html", {"request": request})