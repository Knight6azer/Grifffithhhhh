import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-primary text-sm px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient-hero">Hi, I'm </span>
          <span className="gradient-text">Ujjwal Tiwari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          An aspiring{" "}
          <span className="text-foreground font-medium">Data Scientist</span>{" "}
          with expertise in Python, Machine Learning, and Embedded Systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="/Resume_UT.pdf"
            download="Ujjwal_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 glow-primary"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/20 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/Knight6azer", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-tiwari-6a55122a7/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ujjwaltiwari@email.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card-hover"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
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
