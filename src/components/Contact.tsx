import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission — open mailto with form values
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:tiwari.ujjwal10c27@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative" ref={ref}>
      {/* Background particles (CSS only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#64ffda] opacity-5 animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block tracking-widest">
            06. What's Next?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 8652181562", href: "tel:+918652181562", accent: "#64ffda" },
              { icon: Mail, label: "Email", value: "tiwari.ujjwal10c27@gmail.com", href: "mailto:tiwari.ujjwal10c27@gmail.com", accent: "#00b4d8" },
              { icon: MapPin, label: "Location", value: "Mumbai, India", href: "#", accent: "#64ffda" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass-card p-4 group transition-all duration-300"
                style={{ borderColor: `${item.accent}20` }}
              >
                <div
                  className="p-2.5 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}30` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.accent }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-sm text-slate-200">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: Github, href: "https://github.com/Knight6azer", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-tiwari-6a55122a7/", label: "LinkedIn" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex-1 flex items-center justify-center gap-2 glass-card p-3 text-slate-400 hover:text-[#64ffda] hover:border-primary/40 transition-all text-sm font-mono"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#64ffda] via-[#00b4d8] to-transparent" />
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm input-glow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm input-glow"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none text-sm input-glow"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-primary text-[#0a192f] font-semibold flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
