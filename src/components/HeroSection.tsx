import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Sword, Flame, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 anime-grid-bg opacity-20" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-3 mb-6">
            {[Sword, Flame, Shield, Zap].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center"
              >
                <Icon className="w-5 h-5 text-primary" />
              </motion.div>
            ))}
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-glow-crimson text-foreground mb-4">
            ANIME NEXUS
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 tracking-wide">
            The ultimate battleground for anime knowledge, power rankings, and community. 
            All genres. All powers. One nexus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-body font-semibold tracking-wider uppercase text-primary-foreground rounded-sm"
              style={{ background: "var(--gradient-crimson)" }}
            >
              Explore Powers
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-body font-semibold tracking-wider uppercase border border-primary/50 text-foreground rounded-sm hover:bg-primary/10 transition-colors"
            >
              Join Community
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
