import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-[#0a192f]/95 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-[#64ffda]/10"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-mono text-[#64ffda] font-bold text-xl tracking-tight relative group"
          >
            {"<UT />"}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#64ffda] group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-mono text-sm transition-colors duration-300 group ${isActive ? "text-[#64ffda]" : "text-slate-400 hover:text-[#64ffda]"
                    }`}
                >
                  <span className="text-[#64ffda]/60 mr-1 text-xs">
                    0{i + 1}.
                  </span>
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#64ffda] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="/Resume_UT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex font-mono border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-md text-sm hover:bg-[#64ffda]/10 transition-all duration-300"
            >
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-[#64ffda] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#0d2037]/95 backdrop-blur-2xl border-l border-[#64ffda]/10 shadow-2xl flex flex-col pt-24 px-8 gap-6"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-lg text-slate-300 hover:text-[#64ffda] transition-colors flex items-center gap-3"
              >
                <span className="text-[#64ffda]/60 text-sm">0{i + 1}.</span>
                {item.name}
              </motion.a>
            ))}
            <a
              href="/Resume_UT.pdf"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="mt-4 font-mono border border-[#64ffda] text-[#64ffda] px-4 py-3 rounded-md text-sm text-center hover:bg-[#64ffda]/10 transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
