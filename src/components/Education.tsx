import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="font-mono text-primary text-sm mb-4 block">
                    05. Education
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                    My <span className="gradient-text">Academic Journey</span>
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Engineering */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 border-l-4 border-l-primary"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-100">Bachelor of Engineering</h3>
                        <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">2023 - 2027</span>
                    </div>
                    <p className="text-primary font-medium mb-4">Electronics & Computer Science</p>
                    <p className="text-slate-400 text-sm mb-4">Shree L.R. Tiwari College of Engineering</p>
                    <p className="text-slate-400 text-sm">
                        <strong className="text-slate-300">Relevant Courses:</strong> Data Structures, OOPs, Embedded System, Computer Networks.
                    </p>
                </motion.div>

                {/* HSC/SSC */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-8 border-l-4 border-l-accent"
                >
                    <h3 className="text-xl font-bold text-slate-100 mb-4">Secondary & Higher Secondary</h3>
                    <p className="text-slate-400 text-sm mb-6">Maharashtra Board</p>

                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-slate-700/50 pb-2">
                            <span className="text-slate-300">HSC / 12th</span>
                            <span className="font-mono text-primary text-sm">Feb 2023</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-700/50 pb-2">
                            <span className="text-slate-300">SSC / 10th</span>
                            <span className="font-mono text-primary text-sm">Mar 2021</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
