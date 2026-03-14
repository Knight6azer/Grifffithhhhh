import { Sword } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sword className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold tracking-wider text-foreground">
              SPIRIT BLOSSOM HUB
            </span>
          </div>
          <div className="flex gap-6 font-body text-sm text-muted-foreground">
            {["About", "Terms", "Privacy", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Spirit Blossom Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
