import { motion } from "framer-motion";

const experiences = [
    {
        role: "Data Analysis Internship",
        company: "Internship",
        duration: "2025",
        description: [
            "Collected, cleaned, and visualized data using Python (Pandas, Matplotlib) and SQL.",
            "Explored machine learning basics to generate actionable insights from complex datasets.",
        ],
        accent: "#64ffda",
    },
    {
        role: "Embedded Systems Internship — Circuit Wizard",
        company: "Internship",
        duration: "2024",
        description: [
            "Designed and simulated electronic circuits, microcontrollers, and IoT-based solutions.",
            "Debugged and optimized hardware-software integration using oscilloscopes and multimeters, reducing system error rates by 15% during prototype testing.",
        ],
        accent: "#00b4d8",
    },
    {
        role: "Python Internship",
        company: "Internship",
        duration: "2023",
        description: [
            "Developed core Python scripts and implemented mini-projects to automate practical tasks.",
        ],
        accent: "#64ffda",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section-container relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-primary text-sm mb-4 block tracking-widest">
                        04. Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Where I've <span className="gradient-text">Worked</span>
                    </h2>
                    <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </motion.div>

                <div className="relative ml-4 md:ml-0">
                    {/* Animated timeline line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute left-0 top-0 bottom-0 w-px origin-top"
                        style={{
                            background: "linear-gradient(to bottom, #64ffda, #00b4d8, transparent)",
                        }}
                    />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative pl-10 md:pl-14"
                            >
                                {/* Glowing timeline dot */}
                                <div
                                    className="absolute -left-[6px] top-3 h-3 w-3 rounded-full ring-4 ring-[#0a192f] z-10"
                                    style={{
                                        background: exp.accent,
                                        boxShadow: `0 0 12px ${exp.accent}80`,
                                    }}
                                />

                                <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="glass-card p-6 md:p-8 relative overflow-hidden group"
                                    style={{ borderColor: `${exp.accent}20` }}
                                >
                                    {/* Accent side bar */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                        style={{ background: exp.accent }}
                                    />
                                    {/* Background glow */}
                                    <div
                                        className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-8 transition-opacity duration-700"
                                        style={{ background: exp.accent }}
                                    />

                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                        <h3 className="text-lg md:text-xl font-bold text-slate-100">
                                            {exp.role}
                                        </h3>
                                        <span
                                            className="font-mono text-sm whitespace-nowrap px-3 py-1 rounded-full"
                                            style={{
                                                color: exp.accent,
                                                background: `${exp.accent}12`,
                                                border: `1px solid ${exp.accent}25`,
                                            }}
                                        >
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <p
                                        className="text-sm font-medium mb-4"
                                        style={{ color: exp.accent }}
                                    >
                                        {exp.company}
                                    </p>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-slate-400 text-sm md:text-base"
                                            >
                                                <span
                                                    className="mt-2 min-w-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0"
                                                    style={{ background: `${exp.accent}80` }}
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
