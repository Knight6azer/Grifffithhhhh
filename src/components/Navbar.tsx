import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" }, // Added Experience
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0a192f]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-[#64ffda] font-bold text-xl tracking-tight"
        >
          {"<UT />"}
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-sm text-slate-300 hover:text-[#64ffda] transition-colors duration-300"
            >
              <span className="text-[#64ffda] mr-1">0{navItems.indexOf(item) + 1}.</span>
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="/Resume_UT.pdf"
          target="_blank"
          className="font-mono border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-md text-sm hover:bg-[#64ffda]/10 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
