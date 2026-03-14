export interface Character {
  id: string;
  name: string;
  anime: string;
  power: string;
  tier: string;
  description: string;
  abilities: string[];
  stats: {
    strength: number;
    speed: number;
    intelligence: number;
    stamina: number;
    technique: number;
  };
  image: string;
  quote: string;
}

export const characters: Character[] = [
  {
    id: "gojo-satoru",
    name: "Gojo Satoru",
    anime: "Jujutsu Kaisen",
    power: "Infinity & Six Eyes",
    tier: "S+",
    description: "The strongest modern sorcerer, wielding the Limitless cursed technique and the Six Eyes. His Infinity creates an impenetrable barrier, while Domain Expansion: Unlimited Void overwhelms opponents with infinite information.",
    abilities: ["Infinity", "Hollow Purple", "Unlimited Void", "Reversed Cursed Technique", "Six Eyes"],
    stats: { strength: 95, speed: 98, intelligence: 97, stamina: 90, technique: 100 },
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=500&fit=crop",
    quote: "Throughout Heaven and Earth, I alone am the honored one."
  },
  {
    id: "guts",
    name: "Guts",
    anime: "Berserk",
    power: "Berserker Armor",
    tier: "S",
    description: "The Black Swordsman, a lone mercenary wielding the massive Dragon Slayer. Branded by the God Hand, he fights demons while the Berserker Armor pushes his body beyond human limits at the cost of his sanity.",
    abilities: ["Dragon Slayer", "Berserker Armor", "Cannon Arm", "Superhuman Endurance", "Beast of Darkness"],
    stats: { strength: 100, speed: 80, intelligence: 75, stamina: 95, technique: 85 },
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=500&fit=crop",
    quote: "If you're always worried about crushing the ants beneath you, you won't be able to walk."
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    anime: "One Piece",
    power: "Gear 5 — Sun God Nika",
    tier: "S+",
    description: "Captain of the Straw Hat Pirates, Luffy's Gomu Gomu no Mi awakened into the mythical Hito Hito no Mi, Model: Nika. Gear 5 grants him reality-warping cartoon physics and the freedom to fight however he imagines.",
    abilities: ["Gear 5", "Conqueror's Haki", "Gomu Gomu Bajrang Gun", "Observation Haki", "Armament Haki"],
    stats: { strength: 97, speed: 92, intelligence: 60, stamina: 98, technique: 88 },
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=500&fit=crop",
    quote: "I'm gonna be King of the Pirates!"
  },
  {
    id: "eren-yeager",
    name: "Eren Yeager",
    anime: "Attack on Titan",
    power: "Founding Titan",
    tier: "S+",
    description: "Wielding the power of the Founding Titan combined with the Attack Titan and War Hammer Titan, Eren commands the Rumbling — millions of Colossal Titans capable of flattening the world.",
    abilities: ["Founding Titan", "Attack Titan", "War Hammer Titan", "The Rumbling", "Future Memory Manipulation"],
    stats: { strength: 99, speed: 70, intelligence: 88, stamina: 85, technique: 75 },
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=500&fit=crop",
    quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win."
  },
  {
    id: "itachi-uchiha",
    name: "Itachi Uchiha",
    anime: "Naruto",
    power: "Mangekyo Sharingan",
    tier: "S",
    description: "A prodigious ninja who massacred his own clan to prevent civil war. His Mangekyo Sharingan grants Tsukuyomi, Amaterasu, and the legendary Susanoo with the Yata Mirror and Totsuka Blade.",
    abilities: ["Tsukuyomi", "Amaterasu", "Susanoo", "Yata Mirror", "Totsuka Blade"],
    stats: { strength: 80, speed: 90, intelligence: 100, stamina: 55, technique: 98 },
    image: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=500&fit=crop",
    quote: "People live their lives bound by what they accept as correct and true."
  },
  {
    id: "saitama",
    name: "Saitama",
    anime: "One Punch Man",
    power: "Limitless Strength",
    tier: "S+",
    description: "A hero who trained so hard he lost his hair and gained immeasurable power. He defeats every opponent with a single punch, leaving him perpetually bored and searching for a worthy challenger.",
    abilities: ["One Punch", "Serious Series", "Immeasurable Speed", "Invulnerability", "Zero Killer Intent"],
    stats: { strength: 100, speed: 100, intelligence: 50, stamina: 100, technique: 30 },
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=500&fit=crop",
    quote: "I'm just a guy who's a hero for fun."
  },
  {
    id: "levi-ackerman",
    name: "Levi Ackerman",
    anime: "Attack on Titan",
    power: "Ackerman Bloodline",
    tier: "S",
    description: "Humanity's strongest soldier. His Ackerman bloodline grants him superhuman reflexes and combat instincts. With ODM gear, he moves faster than any other soldier, cutting down Titans with lethal precision.",
    abilities: ["ODM Mastery", "Ackerman Awakening", "Spinning Slash", "Superhuman Reflexes", "Thunder Spears"],
    stats: { strength: 88, speed: 100, intelligence: 90, stamina: 85, technique: 100 },
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=500&fit=crop",
    quote: "The only thing we're allowed to do is believe that we won't regret the choice we made."
  },
  {
    id: "griffith",
    name: "Griffith",
    anime: "Berserk",
    power: "Femto — God Hand",
    tier: "S+",
    description: "The former leader of the Band of the Hawk who sacrificed his comrades to ascend as Femto, the fifth member of the God Hand. His charisma is matched only by his absolute, terrifying power over causality.",
    abilities: ["Spatial Manipulation", "Causality Control", "Telekinesis", "Dimensional Travel", "Absolute Charisma"],
    stats: { strength: 70, speed: 95, intelligence: 100, stamina: 100, technique: 100 },
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=500&fit=crop",
    quote: "Is it a dream? No... it is nothing so vague as a dream."
  },
  {
    id: "gon-freecss",
    name: "Gon Freecss",
    anime: "Hunter x Hunter",
    power: "Nen — Enhancement",
    tier: "A",
    description: "A young Hunter with incredible potential. His Nen ability Jajanken channels his aura into devastating rock-paper-scissors attacks. His transformation against Pitou revealed a terrifying glimpse of his true power ceiling.",
    abilities: ["Jajanken: Rock", "Jajanken: Paper", "Jajanken: Scissors", "Adult Gon Transformation", "Enhanced Senses"],
    stats: { strength: 82, speed: 78, intelligence: 55, stamina: 80, technique: 70 },
    image: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=400&h=500&fit=crop",
    quote: "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want."
  },
  {
    id: "tanjiro",
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    power: "Sun Breathing",
    tier: "A",
    description: "A kind-hearted demon slayer who inherited the legendary Hinokami Kagura, the original Sun Breathing technique. Combined with his heightened sense of smell and transparent world, he battles Upper Moons to save his sister.",
    abilities: ["Sun Breathing", "Water Breathing", "Transparent World", "Demon Slayer Mark", "Selfless State"],
    stats: { strength: 78, speed: 85, intelligence: 72, stamina: 88, technique: 90 },
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&h=500&fit=crop",
    quote: "No matter how many people you may lose, you have no choice but to go on living."
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    anime: "One Piece",
    power: "Three-Sword Style — King of Hell",
    tier: "S",
    description: "The Straw Hat's first mate and master of Santoryu. Wielding Enma, Wado Ichimonji, and Sandai Kitetsu, Zoro coats his blades in Conqueror's Haki to unleash devastation worthy of the World's Greatest Swordsman.",
    abilities: ["King of Hell: Three-Dragon Blaze", "Conqueror's Haki Coating", "Asura", "En-O Zap", "Purgatory Onigiri"],
    stats: { strength: 95, speed: 85, intelligence: 55, stamina: 95, technique: 95 },
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=500&fit=crop",
    quote: "Nothing happened."
  },
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    power: "Six Paths Sage Mode + Kurama",
    tier: "S+",
    description: "The Seventh Hokage, Naruto wields the combined power of Six Paths Sage Mode and Kurama's chakra. His Baryon Mode represents the ultimate sacrifice — nuclear fusion of jinchuriki and Tailed Beast chakra.",
    abilities: ["Baryon Mode", "Six Paths Sage Mode", "Rasenshuriken", "Shadow Clone Jutsu", "Tailed Beast Bomb"],
    stats: { strength: 95, speed: 95, intelligence: 65, stamina: 100, technique: 85 },
    image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=500&fit=crop",
    quote: "I'm not gonna run away. I never go back on my word. That's my nindo!"
  },
];

export const tierOrder = ["S+", "S", "A", "B+", "B", "C"];

export const tierColors: Record<string, string> = {
  "S+": "bg-primary text-primary-foreground",
  "S": "bg-crimson text-primary-foreground",
  "A": "bg-ember text-accent-foreground",
  "B+": "bg-steel text-foreground",
  "B": "bg-muted text-muted-foreground",
  "C": "bg-secondary text-secondary-foreground",
};

export const tierBorderColors: Record<string, string> = {
  "S+": "border-primary",
  "S": "border-crimson",
  "A": "border-ember",
  "B+": "border-steel",
  "B": "border-muted",
  "C": "border-secondary",
};
