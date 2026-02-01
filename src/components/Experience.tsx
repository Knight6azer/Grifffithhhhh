import { motion } from "framer-motion";

const experiences = [
    {
        role: "Data Analysis Internship",
        company: "Internship",
        duration: "2024",
        description: [
            "Collected, cleaned, and visualized data using Python (Pandas, Matplotlib) and SQL.",
            "Explored machine learning basics to generate actionable insights."
        ]
    },
    {
        role: "Embedded Systems Internship - Circuit Wizard",
        company: "Internship",
        duration: "2024",
        description: [
            "Designed and simulated electronic circuits, microcontrollers, and IoT-based solutions.",
            "Debugged and optimized hardware-software integration using oscilloscopes and multimeters, reducing system error rates by 15% during prototype testing."
        ]
    },
    {
        role: "Python Internship",
        company: "Internship",
        duration: "2023",
        description: [
            "Developed core Python scripts and implemented in mini-projects to automate simple tasks."
        ]
    }
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
                    <span className="font-mono text-primary text-sm mb-4 block">
                        04. Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Where I've <span className="gradient-text">Worked</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-slate-700 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="glass-card p-6 md:p-8 hover:bg-[#112240] transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-slate-100">
                                        {exp.role}
                                    </h3>
                                    <span className="font-mono text-sm text-primary/80 whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>

                                <h4 className="text-lg text-primary mb-4">{exp.company}</h4>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                                            <span className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-primary/60" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
