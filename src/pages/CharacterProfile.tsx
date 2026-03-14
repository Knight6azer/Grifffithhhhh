import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Swords, Zap, Brain, Heart, Target } from "lucide-react";
import { characters, tierColors } from "@/lib/characters";

const statIcons = {
  strength: Swords,
  speed: Zap,
  intelligence: Brain,
  stamina: Heart,
  technique: Target,
};

const CharacterProfile = () => {
  const { id } = useParams<{ id: string }>();
  const character = characters.find((c) => c.id === id);

  if (!character) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Character Not Found</h1>
          <Link to="/characters" className="text-primary hover:underline font-body">
            ← Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${character.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 anime-grid-bg opacity-10" />

        <div className="relative z-10 h-full flex flex-col justify-between p-6 pt-20">
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            All Characters
          </Link>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-2"
            >
              <span className={`px-3 py-1 text-xs font-display font-bold rounded-sm ${tierColors[character.tier]}`}>
                {character.tier}
              </span>
              <span className="text-primary font-body text-sm uppercase tracking-wider">
                {character.anime}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold text-foreground text-glow-crimson"
            >
              {character.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-ember text-lg mt-1"
            >
              {character.power}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Description & Quote */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">OVERVIEW</h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              {character.description}
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="border-l-2 border-primary pl-6 py-2"
          >
            <p className="font-body text-foreground italic text-xl">"{character.quote}"</p>
            <cite className="text-muted-foreground font-body text-sm mt-2 block">— {character.name}</cite>
          </motion.blockquote>

          {/* Abilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">ABILITIES</h2>
            <div className="flex flex-wrap gap-2">
              {character.abilities.map((ability, i) => (
                <motion.span
                  key={ability}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-4 py-2 card-dark border border-border rounded-sm font-body text-sm text-foreground"
                >
                  {ability}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card-dark rounded-sm p-6 border border-border h-fit"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6">COMBAT STATS</h3>
          <div className="space-y-5">
            {(Object.entries(character.stats) as [keyof typeof statIcons, number][]).map(
              ([stat, value]) => {
                const Icon = statIcons[stat];
                return (
                  <div key={stat}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="font-body text-sm uppercase tracking-wider text-foreground">
                          {stat}
                        </span>
                      </div>
                      <span className="font-display text-sm font-bold text-primary">{value}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-crimson)" }}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground uppercase">Overall</span>
              <span className="font-display text-2xl font-bold text-glow-crimson text-foreground">
                {Math.round(
                  Object.values(character.stats).reduce((a, b) => a + b, 0) /
                    Object.values(character.stats).length
                )}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterProfile;
