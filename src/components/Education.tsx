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
                <span className="font-mono text-primary text-sm mb-4 block tracking-widest">
                    05. Education
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                    My <span className="gradient-text">Academic Journey</span>
                </h2>
                <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Engineering */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-8 relative overflow-hidden group"
                    style={{ borderLeft: "3px solid #64ffda" }}
                >
                    {/* Top glow bar */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#64ffda] via-[#64ffda]/50 to-transparent" />
                    {/* Background accent */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[#64ffda]" />

                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-slate-100">
                            Bachelor of Engineering
                        </h3>
                        <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                            2023 – 2027
                        </span>
                    </div>
                    <p className="text-[#64ffda] font-medium mb-3">
                        Electronics &amp; Computer Science
                    </p>
                    <p className="text-slate-400 text-sm mb-5">
                        Shree L.R. Tiwari College of Engineering
                    </p>
                    <div className="border-t border-slate-700/40 pt-4">
                        <p className="text-slate-400 text-sm">
                            <strong className="text-slate-300">Relevant Courses: </strong>
                            Data Structures, OOPs, Embedded Systems, Computer Networks, DBMS.
                        </p>
                    </div>
                </motion.div>

                {/* HSC / SSC */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-8 relative overflow-hidden group"
                    style={{ borderLeft: "3px solid #00b4d8" }}
                >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00b4d8] via-[#00b4d8]/50 to-transparent" />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[#00b4d8]" />

                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                        Secondary &amp; Higher Secondary
                    </h3>
                    <p className="text-[#00b4d8] font-medium mb-5">Maharashtra Board</p>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-700/40 pb-3">
                            <div>
                                <p className="text-slate-200 font-medium">HSC / 12th Grade</p>
                                <p className="text-slate-500 text-xs">Science Stream</p>
                            </div>
                            <span className="font-mono text-sm text-[#00b4d8] bg-[#00b4d8]/10 border border-[#00b4d8]/20 px-3 py-1 rounded-full">
                                Feb 2023
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-slate-200 font-medium">SSC / 10th Grade</p>
                                <p className="text-slate-500 text-xs">Maharashtra Board</p>
                            </div>
                            <span className="font-mono text-sm text-[#00b4d8] bg-[#00b4d8]/10 border border-[#00b4d8]/20 px-3 py-1 rounded-full">
                                Mar 2021
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
