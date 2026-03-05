import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SkillsGlobe } from "./three/SkillsGlobe";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C", "C++", "SQL", "JavaScript", "HTML/CSS"],
    color: "#64ffda",
  },
  {
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Matplotlib", "Machine Learning", "Excel", "Data Visualization"],
    color: "#00b4d8",
  },
  {
    title: "Embedded Systems",
    skills: ["Arduino", "Raspberry Pi", "Circuit Simulation", "IoT", "Microcontrollers"],
    color: "#64ffda",
  },
  {
    title: "Soft Skills",
    skills: ["Logical Reasoning", "Problem Solving", "Team Leadership", "Communication", "Mentoring"],
    color: "#00b4d8",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block tracking-widest">
            02. Skills &amp; Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* 3D Globe + Categories Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* 3D Skills Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full h-[420px] relative"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#64ffda]/10 bg-[#0a192f]/40 backdrop-blur-sm">
              <Canvas
                camera={{ position: [0, 0, 7], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.5]}
              >
                <Suspense fallback={null}>
                  <SkillsGlobe />
                </Suspense>
              </Canvas>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="font-mono text-[#64ffda]/50 text-xs">
                Interactive Skills Globe
              </span>
            </div>
          </motion.div>

          {/* Skill category badges */}
          <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-5">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.12 }}
                className="glass-card p-5 group hover:border-primary/30 transition-all duration-300"
                style={{ borderColor: `${category.color}15` }}
              >
                <h3
                  className="text-base font-semibold mb-3 flex items-center gap-2"
                  style={{ color: category.color }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: category.color }}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.04,
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="skill-badge text-xs px-3 py-1 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
