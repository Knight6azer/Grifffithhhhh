import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Emotional Wellbeing Recommender Model",
    description:
      "A machine learning model that analyzes emotional patterns and provides personalized wellbeing recommendations using NLP and sentiment analysis techniques.",
    tech: ["Python", "Machine Learning", "NLP", "Pandas"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Smart Home Security System",
    description:
      "Arduino-based IoT security device with motion sensors, camera integration, and real-time alerts for comprehensive home monitoring.",
    tech: ["Arduino", "IoT", "Sensors", "C++"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Acid Rain Analysis Model",
    description:
      "Data visualization and predictive modeling project analyzing acid rain patterns using machine learning basics and statistical methods.",
    tech: ["Python", "Matplotlib", "Pandas", "ML"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Vegetable Vendor App",
    description:
      "Python-based ordering and billing system for vegetable vendors with JSON storage for inventory and sales management.",
    tech: ["Python", "JSON", "CLI"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Business Analytical Website",
    description:
      "A web platform for business analytics with data visualization dashboards and reporting features.",
    tech: ["HTML", "CSS", "JavaScript", "Charts"],
    github: "#",
    live: "#",
    featured: false,
  },
];

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
          <span className="font-mono text-primary text-sm mb-4 block">
            03. Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card-hover p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-primary text-sm">
                      Featured Project
                    </span>
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Other Noteworthy Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card-hover p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
              <p className="text-muted-foreground text-sm flex-grow mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
