import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Code2, Brain, Cpu, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Data Science",
    description: "Python, NumPy, Pandas, ML",
    color: "#64ffda",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Logical reasoning & analysis",
    color: "#00b4d8",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Arduino, Raspberry Pi, IoT",
    color: "#64ffda",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "R&D Cell Co-Head",
    color: "#00b4d8",
  },
];

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
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
          <span className="font-mono text-primary text-sm mb-4 block tracking-widest">
            01. About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Building the <span className="gradient-text">Future</span>
          </h2>
          <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard className="glass-card p-8 h-full">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-[#64ffda] to-[#00b4d8]" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                I'm an{" "}
                <span className="text-[#64ffda] font-medium">
                  Electronics &amp; Computer Science Engineering
                </span>{" "}
                student with hands-on experience in Data Analysis, Python, and
                Embedded Systems. Passionate about solving complex problems
                through data-driven solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                As the{" "}
                <span className="text-[#64ffda] font-medium">
                  Co-Head of the R&amp;D Cell
                </span>{" "}
                at Shree L.R. Tiwari College of Engineering, I lead innovative
                tech initiatives and participate in hackathons. My journey
                includes internships in Data Analysis, Embedded Systems, and
                Python development.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I aspire to become a{" "}
                <span className="text-[#00b4d8] font-medium">Data Scientist</span>{" "}
                with a focus on AI and ML applications — building impactful
                solutions that make a difference.
              </p>
            </TiltCard>
          </motion.div>

          {/* Highlight Cards Grid */}
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
                transition={{ duration: 0.4, delay: 0.4 + index * 0.12 }}
              >
                <TiltCard className="h-full">
                  <div
                    className="glass-card-hover p-6 text-center h-full relative overflow-hidden group"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    {/* corner glow */}
                    <div
                      className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: item.color }}
                    />
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <h3
                      className="font-semibold text-foreground mb-1 text-sm"
                      style={{}}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
