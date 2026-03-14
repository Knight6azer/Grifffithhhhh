import { motion } from "framer-motion";
import { Sword } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sword className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            ANIME NEXUS
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 font-body text-sm uppercase tracking-wider">
          {["Powers", "Genres", "Community", "Rankings"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-sm font-body font-semibold uppercase tracking-wider text-primary-foreground rounded-sm"
          style={{ background: "var(--gradient-crimson)" }}
        >
          Join
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
