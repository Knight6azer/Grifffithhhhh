import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation",
    type: "Certificate of Completion",
    link: "/certificates/green-skills-ai-edunet.pdf",
  },
  {
    name: "Pyverse - Application Creation Using Python",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/pyverse-application.pdf",
  },
  {
    name: "Software Engineering",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/software-engineering-infosys.pdf",
  },
  {
    name: "Open Source Models with Hugging Face",
    issuer: "Simplilearn",
    type: "Certificate of Completion",
    link: "/certificates/huggingface-simplilearn.pdf",
  },
  {
    name: "Edith - AI Agent Buildathon",
    issuer: "Technium (SLRTCE)",
    type: "Certificate of Participation",
    link: "/certificates/edith-ai-buildathon.jpeg",
  },
  {
    name: "Programming in Python Beginner",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/python-beginner-infosys.pdf",
  },
  {
    name: "Dictionaries in Python Programming",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/dictionaries-python-infosys.pdf",
  },
  {
    name: "Python Program 101",
    issuer: "Infosys Springboard",
    type: "Certificate of Completion",
    link: "/certificates/python-101-infosys.pdf",
  },
  {
    name: "Python for Beginners: Variables and Strings",
    issuer: "Coursera",
    type: "Certificate of Completion",
    link: "/certificates/python-variables-coursera.pdf",
  },
  {
    name: "Python for Beginners: Data Structures",
    issuer: "Coursera",
    type: "Certificate of Completion",
    link: "/certificates/python-datastructures-coursera.pdf",
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
          <span className="inline-block font-mono text-primary text-sm mb-4">
            {"// Credentials"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card-hover p-5 group cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-primary/70 mt-1">
                    {cert.type}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
