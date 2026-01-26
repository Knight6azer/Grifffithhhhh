import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Python for Data Science",
    issuer: "IBM",
    year: "2024",
    link: "#",
  },
  {
    name: "Machine Learning Fundamentals",
    issuer: "Coursera",
    year: "2024",
    link: "#",
  },
  {
    name: "Data Analysis with Pandas",
    issuer: "DataCamp",
    year: "2024",
    link: "#",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2023",
    link: "#",
  },
  {
    name: "Arduino & IoT Fundamentals",
    issuer: "Arduino",
    year: "2023",
    link: "#",
  },
  {
    name: "Embedded Systems Design",
    issuer: "Udemy",
    year: "2023",
    link: "#",
  },
  {
    name: "SQL for Data Science",
    issuer: "Coursera",
    year: "2023",
    link: "#",
  },
  {
    name: "NumPy & Scientific Computing",
    issuer: "DataCamp",
    year: "2023",
    link: "#",
  },
  {
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2022",
    link: "#",
  },
  {
    name: "Git & Version Control",
    issuer: "Atlassian",
    year: "2022",
    link: "#",
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
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card-hover p-5 group cursor-pointer"
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
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
