import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a192f] text-slate-300">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#112240] via-[#0a192f] to-[#0a192f]" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(#64ffda 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />

      {/* Floating orbs / Data points */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#64ffda]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#112240]/50 rounded-full blur-3xl"
      />

      <div className="section-container text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-[#64ffda] text-sm px-4 py-2 rounded-full border border-[#64ffda]/30 bg-[#64ffda]/10">
            Open to Data Science Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-slate-100"
        >
          <span className="block">Ujjwal Suneel</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00b4d8]">Tiwari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-8 font-light"
        >
          Aspiring <span className="text-[#64ffda] font-medium">Data Scientist</span> & Electronics Engineer
          <br className="dark:hidden" />
          <span className="text-lg mt-2 block opacity-80">Python | Machine Learning | Embedded Systems</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="/Resume_UT.pdf" // TODO: Ensure this file exists or update path
            download="Ujjwal_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded-lg font-bold hover:bg-[#64ffda]/90 transition-all duration-300 shadow-lg shadow-[#64ffda]/20"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-lg font-medium hover:bg-[#64ffda]/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/Knight6azer", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-tiwari-6a55122a7/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ujjwaltiwari@email.com", label: "Email" }, // Placeholder email
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-[#112240] rounded-full border border-slate-700 hover:border-[#64ffda] text-slate-400 hover:text-[#64ffda] transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-[#64ffda] transition-colors"
        >
          <span className="text-sm font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
