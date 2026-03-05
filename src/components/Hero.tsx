import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { ParticleField } from "./three/ParticleField";
import { FloatingGeometry } from "./three/FloatingGeometry";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a192f] text-slate-300">
      {/* Full-screen 3D Canvas background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 12], fov: 60 }}
          gl={{ antialias: true, alpha: false }}
          style={{ background: "transparent" }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <ParticleField count={1800} />
            <FloatingGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Deep radial background behind canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#112240_0%,_#0a192f_70%)] z-0 opacity-90" />

      {/* Content overlay */}
      <div className="section-container text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-[#64ffda] text-sm px-4 py-2 rounded-full border border-[#64ffda]/30 bg-[#64ffda]/5 backdrop-blur-sm">
            Open to Data Science Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-slate-100"
        >
          <span className="block">Ujjwal Suneel</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] via-[#00e5d4] to-[#00b4d8]">
            Tiwari
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-8 font-light"
        >
          Aspiring{" "}
          <span className="text-[#64ffda] font-semibold">Data Scientist</span>{" "}
          &amp; Electronics Engineer
          <br />
          <span className="text-lg mt-2 block opacity-70 font-mono text-sm">
            Python · Machine Learning · Embedded Systems
          </span>
        </motion.p>

        {/* Animated tech line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px w-48 mx-auto mb-8 bg-gradient-to-r from-transparent via-[#64ffda] to-transparent"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="/Resume_UT.pdf"
            download="Ujjwal_Tiwari_Resume.pdf"
            className="group inline-flex items-center gap-2 bg-[#64ffda] text-[#0a192f] px-7 py-3.5 rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-[#64ffda]/25 hover:shadow-[#64ffda]/50"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border border-[#64ffda] text-[#64ffda] px-7 py-3.5 rounded-lg font-medium hover:bg-[#64ffda]/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-6 mb-14"
        >
          {[
            { icon: Github, href: "https://github.com/Knight6azer", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-tiwari-6a55122a7/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:tiwari.ujjwal10c27@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-[#112240]/80 rounded-full border border-slate-700 hover:border-[#64ffda] text-slate-400 hover:text-[#64ffda] transition-all backdrop-blur-sm shadow-lg"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-[#64ffda] transition-colors group"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
