import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";

const projects = [
  // ─── Featured ───
  {
    title: "Emotional Wellbeing Recommender Model",
    description:
      "A machine learning model that analyzes emotional patterns and provides personalized wellbeing recommendations using NLP and sentiment analysis techniques.",
    tech: ["Python", "Machine Learning", "NLP", "Pandas"],
    github: "https://github.com/Knight6azer/Emotional-Wellbeing-Recommender",
    featured: true,
    accent: "#64ffda",
  },
  {
    title: "Vegetable Vendor App",
    description:
      "Python-based ordering and billing system for vegetable vendors with JSON storage for real-time inventory tracking and automated billing management.",
    tech: ["Python", "JSON", "CLI", "OOP"],
    github: "https://github.com/Knight6azer/Vegetable-Vendor-App",
    featured: true,
    accent: "#00b4d8",
  },
  // ─── Other ───
  {
    title: "Schedule Manager",
    description:
      "A full-stack schedule management web application with user authentication, task scheduling, and a Blue-Violet Neon UI deployed on Vercel.",
    tech: ["Python", "Flask", "SQLAlchemy", "Vercel"],
    github: "https://github.com/Knight6azer/Schedule-Manager",
    featured: false,
  },
  {
    title: "Acid Rain Analysis Model",
    description:
      "Data visualization and predictive modeling project analyzing acid rain patterns using machine learning and statistical methods.",
    tech: ["Python", "Matplotlib", "Pandas", "ML"],
    github: "https://github.com/Knight6azer/Acid-Rain-Analysis",
    featured: false,
  },
  {
    title: "Smart Home Security System",
    description:
      "Arduino-based IoT security device with motion sensors, camera integration, and real-time Telegram alerts for comprehensive home monitoring.",
    tech: ["Arduino", "IoT", "C++", "Telegram Bot"],
    github: "https://github.com/Knight6azer/Smart-Home-Security-System",
    featured: false,
  },
  {
    title: "Temperature & Humidity Analysis",
    description:
      "Sensor data collection and analysis system using embedded hardware to capture, log, and visualize temperature and humidity readings over time.",
    tech: ["Python", "Arduino", "Matplotlib", "CSV"],
    github: "https://github.com/Knight6azer/Temperature-Humidity-Analysis",
    featured: false,
  },
];

interface TiltProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltProjectCard = ({ children, className = "" }: TiltProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block tracking-widest">
            03. Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <TiltProjectCard>
                <div
                  className="relative overflow-hidden rounded-xl border p-8 group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(17,34,64,0.85), rgba(10,25,47,0.9))",
                    borderColor: `${project.accent}25`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Gradient accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-80"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                    }}
                  />
                  {/* Background glow */}
                  <div
                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    style={{ background: project.accent }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <span
                          className="font-mono text-xs tracking-widest mb-1 block"
                          style={{ color: project.accent }}
                        >
                          ★ Featured Project
                        </span>
                        <h3 className="text-2xl font-bold text-slate-100">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.12, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-lg transition-colors"
                          style={{
                            background: "rgba(100,255,218,0.08)",
                            border: "1px solid rgba(100,255,218,0.2)",
                          }}
                        >
                          <Github className="w-5 h-5 text-primary" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.12, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-lg transition-colors"
                          style={{
                            background: "rgba(100,255,218,0.08)",
                            border: "1px solid rgba(100,255,218,0.2)",
                          }}
                        >
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </motion.a>
                      </div>
                    </div>
                    <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1.5 rounded-full"
                          style={{
                            color: project.accent,
                            background: `${project.accent}12`,
                            border: `1px solid ${project.accent}25`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltProjectCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xl font-bold text-center mb-8 font-mono text-slate-400"
        >
          // Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <TiltProjectCard className="h-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-6 flex flex-col h-full group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-9 h-9 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                    <Github className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-semibold text-slate-100 text-base mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm flex-grow mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-primary/60 bg-primary/5 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </TiltProjectCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Knight6azer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-white border border-primary/30 hover:border-primary px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary/5 group"
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
