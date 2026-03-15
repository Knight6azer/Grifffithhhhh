# Character data and utilities for Spirit Blossom Hub

from typing import List, Dict, Any
from supabase import Client

class CharacterManager:
    def __init__(self, supabase_client: Client):
        self.supabase = supabase_client

    def get_all_characters(self) -> List[Dict[str, Any]]:
        """Fetch all characters from the database."""
        try:
            response = self.supabase.table("characters").select("*").execute()
            return response.data
        except Exception as e:
            print(f"Error fetching characters: {e}")
            return []

    def get_character_by_id(self, character_id: int) -> Dict[str, Any]:
        """Fetch a specific character by ID."""
        try:
            response = self.supabase.table("characters").select("*").eq("id", character_id).execute()
            return response.data[0] if response.data else {}
        except Exception as e:
            print(f"Error fetching character {character_id}: {e}")
            return {}

    def search_characters(self, query: str) -> List[Dict[str, Any]]:
        """Search characters by name (case-insensitive)."""
        try:
            # Note: Supabase 'ilike' for case-insensitive search
            response = self.supabase.table("characters").select("*").ilike("name", f"%{query}%").execute()
            return response.data
        except Exception as e:
            print(f"Error searching characters with query '{query}': {e}")
            return []

    def create_character(self, character_data: Dict[str, Any]) -> Dict[str, Any]:
        """Create a new character."""
        try:
            response = self.supabase.table("characters").insert(character_data).execute()
            return response.data[0] if response.data else {}
        except Exception as e:
            print(f"Error creating character: {e}")
            return {}