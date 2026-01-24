import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="floating-nav flex items-center gap-8">
        <a
          href="#"
          className="font-mono text-primary font-semibold text-lg"
        >
          {"<Dev />"}
        </a>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
