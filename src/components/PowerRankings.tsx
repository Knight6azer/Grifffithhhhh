import { motion } from "framer-motion";
import { Flame, Sword, Shield, Zap, Wind, Eye, Star, Crown } from "lucide-react";

const powerSystems = [
  {
    title: "Haki",
    anime: "One Piece",
    icon: Shield,
    description: "Willpower manifested as armor, foresight, and king's dominance over the weak.",
    tier: "S",
  },
  {
    title: "Bankai",
    anime: "Bleach",
    icon: Sword,
    description: "The ultimate release of a Zanpakutō, amplifying a Shinigami's power tenfold.",
    tier: "S",
  },
  {
    title: "Domain Expansion",
    anime: "Jujutsu Kaisen",
    icon: Eye,
    description: "A barrier technique that traps opponents in a lethal cursed environment.",
    tier: "S+",
  },
  {
    title: "Titan Shifting",
    anime: "Attack on Titan",
    icon: Flame,
    description: "Transform into colossal beings of destruction with unique inherited powers.",
    tier: "A",
  },
  {
    title: "Nen",
    anime: "Hunter x Hunter",
    icon: Zap,
    description: "Life energy manipulation with six categories defining combat potential.",
    tier: "S",
  },
  {
    title: "Breathing Styles",
    anime: "Demon Slayer",
    icon: Wind,
    description: "Swordsmanship enhanced by elemental breathing techniques against demons.",
    tier: "A",
  },
  {
    title: "Quirks",
    anime: "My Hero Academia",
    icon: Star,
    description: "Genetic superpowers unique to each individual, from fire control to gravity.",
    tier: "B+",
  },
  {
    title: "Ultra Instinct",
    anime: "Dragon Ball",
    icon: Crown,
    description: "The body moves independently of thought — the technique of the gods.",
    tier: "S+",
  },
];

const tierColors: Record<string, string> = {
  "S+": "text-ember",
  S: "text-primary",
  "A": "text-crimson-glow",
  "B+": "text-steel",
};

const PowerRankings = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 anime-grid-bg opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-glow-crimson">
            POWER SYSTEMS
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            The greatest power systems across anime, ranked by depth, versatility, and raw devastation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {powerSystems.map((power, i) => (
            <motion.div
              key={power.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="card-dark rounded-sm p-5 border-glow group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <power.icon className="w-6 h-6 text-primary group-hover:text-ember transition-colors" />
                <span className={`font-display text-sm font-bold ${tierColors[power.tier]}`}>
                  {power.tier}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {power.title}
              </h3>
              <p className="text-xs text-primary font-body uppercase tracking-wider mb-2">
                {power.anime}
              </p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {power.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerRankings;
