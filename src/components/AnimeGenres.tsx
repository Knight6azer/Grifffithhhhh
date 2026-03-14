import { motion } from "framer-motion";

const genres = [
  { name: "Shonen", count: 342, description: "Action-packed battles and friendship-driven stories" },
  { name: "Seinen", count: 189, description: "Mature themes, psychological depth, and dark narratives" },
  { name: "Shojo", count: 156, description: "Romance, emotion, and beautiful character-driven tales" },
  { name: "Isekai", count: 234, description: "Transported to another world — infinite possibilities" },
  { name: "Mecha", count: 98, description: "Giant robots, space warfare, and humanity's survival" },
  { name: "Horror", count: 67, description: "Psychological terror and supernatural nightmares" },
  { name: "Slice of Life", count: 203, description: "The beauty in everyday moments and relationships" },
  { name: "Sports", count: 112, description: "Intense competition, teamwork, and the spirit to win" },
];

const AnimeGenres = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            EXPLORE EVERY NICHE
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            From the bloodiest battles to the gentlest romances — every corner of anime lives here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {genres.map((genre, i) => (
            <motion.div
              key={genre.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="card-dark rounded-sm p-5 cursor-pointer group border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {genre.name}
                </h3>
                <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-0.5 rounded-sm">
                  {genre.count} titles
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                {genre.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGenres;
