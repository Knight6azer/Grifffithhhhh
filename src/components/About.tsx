import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Data Science",
    description: "Python, NumPy, Pandas, ML",
  },
  {
    icon: Palette,
    title: "Problem Solving",
    description: "Logical reasoning & analysis",
  },
  {
    icon: Rocket,
    title: "Embedded Systems",
    description: "Arduino, Raspberry Pi, IoT",
  },
  {
    icon: Zap,
    title: "Team Leadership",
    description: "R&D Cell Co-Head",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            01. About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Building the <span className="gradient-text">Future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm an Electronics & Computer Science Engineering student with hands-on 
              experience in Data Analysis, Python, and Embedded Systems. I'm passionate 
              about solving complex problems through data-driven solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As the Co-Head of the R&D Cell at Shree L.R. Tiwari College of Engineering, 
              I lead innovative tech initiatives and participate in hackathons. My journey 
              includes internships in Data Analysis, Embedded Systems, and Python development.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I aspire to become a Data Scientist with a focus on AI and ML applications, 
              building impactful solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
