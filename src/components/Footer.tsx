import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/60">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64ffda]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-mono text-[#64ffda] font-bold text-lg tracking-tight"
            >
              {"<UT />"}
            </a>
            <p className="text-slate-500 text-xs mt-1 font-mono">
              Data Scientist · Electronics Engineer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/Knight6azer", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ujjwal-tiwari-6a55122a7/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tiwari.ujjwal10c27@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 text-slate-500 hover:text-[#64ffda] transition-colors duration-300 hover:scale-110 transform"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5">
            © {currentYear} Ujjwal Tiwari · Built with{" "}
            <Heart className="w-3 h-3 text-[#64ffda]" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
