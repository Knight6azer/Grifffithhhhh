import { motion } from "framer-motion";
import { Users, MessageSquare, Trophy, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Community Members", value: "24.8K" },
  { icon: MessageSquare, label: "Active Discussions", value: "1,247" },
  { icon: Trophy, label: "Power Debates", value: "892" },
  { icon: TrendingUp, label: "Daily Posts", value: "3,500+" },
];

const topics = [
  { title: "Who wins: Gojo vs Madara?", replies: 847, hot: true },
  { title: "Top 10 Anime Betrayals — Definitive Ranking", replies: 623 },
  { title: "Best Villain Motivations in Anime History", replies: 412, hot: true },
  { title: "Underrated Anime That Deserve More Love", replies: 389 },
  { title: "One Piece vs Naruto: The Eternal Debate", replies: 1204, hot: true },
  { title: "Anime Openings That Hit Different", replies: 556 },
];

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 anime-grid-bg opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-glow-ember">
            THE COMMUNITY
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Where warriors, strategists, and otaku unite to debate, discuss, and celebrate anime.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-dark rounded-sm p-5 text-center border-glow"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trending Topics */}
        <div className="card-dark rounded-sm p-6 border-glow">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-ember" />
            Trending Discussions
          </h3>
          <div className="space-y-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between py-3 border-b border-border last:border-0 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  {topic.hot && (
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-ember bg-ember/10 px-2 py-0.5 rounded-sm">
                      Hot
                    </span>
                  )}
                  <span className="text-foreground font-body group-hover:text-primary transition-colors">
                    {topic.title}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-body shrink-0 ml-2">
                  {topic.replies} replies
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
