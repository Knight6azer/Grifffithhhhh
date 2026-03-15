from typing import List, Dict

class Character:
    def __init__(self, id: str, name: str, anime: str, power: str, tier: str, description: str, abilities: List[str], stats: Dict[str, int], image: str, quote: str):
        self.id = id
        self.name = name
        self.anime = anime
        self.power = power
        self.tier = tier
        self.description = description
        self.abilities = abilities
        self.stats = stats
        self.image = image
        self.quote = quote

characters = [
    Character(
        id="gojo-satoru",
        name="Gojo Satoru",
        anime="Jujutsu Kaisen",
        power="Infinity & Six Eyes",
        tier="S+",
        description="The strongest modern sorcerer, wielding the Limitless cursed technique and the Six Eyes. His Infinity creates an impenetrable barrier, while Domain Expansion: Unlimited Void overwhelms opponents with infinite information.",
        abilities=["Infinity", "Hollow Purple", "Unlimited Void", "Reversed Cursed Technique", "Six Eyes"],
        stats={"strength": 95, "speed": 98, "intelligence": 97, "stamina": 90, "technique": 100},
        image="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=500&fit=crop",
        quote="Throughout Heaven and Earth, I alone am the honored one."
    ),
    Character(
        id="guts",
        name="Guts",
        anime="Berserk",
        power="Berserker Armor",
        tier="S",
        description="The Black Swordsman, a lone mercenary wielding the massive Dragon Slayer. Branded by the God Hand, he fights demons while the Berserker Armor pushes his body beyond human limits at the cost of his sanity.",
        abilities=["Dragon Slayer", "Berserker Armor", "Cannon Arm", "Superhuman Endurance", "Beast of Darkness"],
        stats={"strength": 100, "speed": 80, "intelligence": 75, "stamina": 95, "technique": 85},
        image="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=500&fit=crop",
        quote="If you're always worried about crushing the ants beneath you, you won't be able to walk."
    ),
    # Add more characters here...
]

tier_order = ["S+", "S", "A", "B+", "B", "C"]

tier_colors = {
    "S+": "bg-primary text-primary-foreground",
    "S": "bg-crimson text-primary-foreground",
    "A": "bg-ember text-accent-foreground",
    "B+": "bg-steel text-foreground",
    "B": "bg-muted text-muted-foreground",
    "C": "bg-secondary text-secondary-foreground",
}

tier_border_colors = {
    "S+": "border-primary",
    "S": "border-crimson",
    "A": "border-ember",
    "B+": "border-steel",
    "B": "border-muted",
    "C": "border-secondary",
}