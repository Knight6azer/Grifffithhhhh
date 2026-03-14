import { motion } from "framer-motion";
import { Sword } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const navItems = [
    { label: "Powers", href: "/#powers" },
    { label: "Characters", href: "/characters" },
    { label: "Tier List", href: "/tier-list" },
    { label: "Genres", href: "/#genres" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sword className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            SPIRIT BLOSSOM HUB
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 font-body text-sm uppercase tracking-wider">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-xs font-body text-muted-foreground hidden sm:block">
              {user.user_metadata?.username || user.email?.split("@")[0]}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-body font-semibold uppercase tracking-wider border border-primary/50 text-foreground rounded-sm hover:bg-primary/10 transition-colors"
            >
              Logout
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/auth")}
            className="px-4 py-2 text-sm font-body font-semibold uppercase tracking-wider text-primary-foreground rounded-sm"
            style={{ background: "var(--gradient-crimson)" }}
          >
            Join
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
