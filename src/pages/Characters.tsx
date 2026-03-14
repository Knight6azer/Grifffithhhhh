import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { characters, tierColors } from "@/lib/characters";
import Navbar from "@/components/Navbar";

const Characters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground text-glow-crimson">
            CHARACTER PROFILES
          </h1>
          <p className="font-body text-muted-foreground text-lg mt-3 max-w-xl">
            Explore the legends. Click any character to see full stats, abilities, and lore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {characters.map((char, i) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link to={`/characters/${char.id}`} className="block group">
                <div className="card-dark rounded-sm overflow-hidden border-glow hover:border-primary/40 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <span
                      className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-display font-bold rounded-sm ${tierColors[char.tier]}`}
                    >
                      {char.tier}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-xs text-primary font-body uppercase tracking-wider">
                      {char.anime}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-2 line-clamp-2">
                      {char.power}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
