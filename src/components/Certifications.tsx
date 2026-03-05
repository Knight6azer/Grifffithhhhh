import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation",
    type: "Certificate of Completion",
    link: "/certificates/green-skills-ai-edunet.pdf",
    accent: "#64ffda",
  },
  {
    name: "Pyverse — Application Creation Using Python",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/pyverse-application.pdf",
    accent: "#00b4d8",
  },
  {
    name: "Software Engineering",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/software-engineering-infosys.pdf",
    accent: "#64ffda",
  },
  {
    name: "Open Source Models with Hugging Face",
    issuer: "Simplilearn",
    type: "Certificate of Completion",
    link: "/certificates/huggingface-simplilearn.pdf",
    accent: "#00b4d8",
  },
  {
    name: "Edith — AI Agent Buildathon",
    issuer: "Technium (SLRTCE)",
    type: "Certificate of Participation",
    link: "/certificates/edith-ai-buildathon.jpeg",
    accent: "#64ffda",
  },
  {
    name: "Programming in Python — Beginner",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/python-beginner-infosys.pdf",
    accent: "#00b4d8",
  },
  {
    name: "Dictionaries in Python Programming",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/dictionaries-python-infosys.pdf",
    accent: "#64ffda",
  },
  {
    name: "Python Program 101",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/python-101-infosys.pdf",
    accent: "#00b4d8",
  },
  {
    name: "Python for Beginners: Variables and Strings",
    issuer: "Coursera",
    type: "Certificate of Completion",
    link: "/certificates/python-variables-coursera.pdf",
    accent: "#64ffda",
  },
  {
    name: "Python for Beginners: Data Structures",
    issuer: "Coursera",
    type: "Certificate of Completion",
    link: "/certificates/python-datastructures-coursera.pdf",
    accent: "#00b4d8",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4 tracking-widest">
            // Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
          <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card-hover p-5 group cursor-pointer block relative overflow-hidden"
              style={{ borderColor: `${cert.accent}15` }}
            >
              {/* Hover glow */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: cert.accent }}
              />
              {/* Accent bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
              />

              <div className="flex items-start gap-4 relative">
                <div
                  className="p-2.5 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${cert.accent}12`,
                    border: `1px solid ${cert.accent}30`,
                  }}
                >
                  <Award className="w-5 h-5" style={{ color: cert.accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-foreground transition-colors line-clamp-2 mb-1 text-sm leading-snug"
                    style={{}}
                  >
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p
                    className="text-xs mt-1 font-mono"
                    style={{ color: `${cert.accent}90` }}
                  >
                    {cert.type}
                  </p>
                </div>
                <ExternalLink
                  className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  style={{ color: cert.accent }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
