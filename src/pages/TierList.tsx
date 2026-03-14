import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { characters, Character, tierOrder } from "@/lib/characters";
import Navbar from "@/components/Navbar";

const tierLabels: Record<string, { label: string; bg: string; border: string }> = {
  "S+": { label: "S+", bg: "bg-primary/20", border: "border-primary" },
  S: { label: "S", bg: "bg-crimson/20", border: "border-crimson" },
  A: { label: "A", bg: "bg-ember/20", border: "border-ember" },
  "B+": { label: "B+", bg: "bg-steel/20", border: "border-steel" },
  B: { label: "B", bg: "bg-muted", border: "border-muted-foreground/30" },
  C: { label: "C", bg: "bg-secondary", border: "border-secondary" },
};

const TierList = () => {
  const [tiers, setTiers] = useState<Record<string, Character[]>>(() => {
    const initial: Record<string, Character[]> = {};
    tierOrder.forEach((t) => (initial[t] = []));
    return initial;
  });
  const [unplaced, setUnplaced] = useState<Character[]>([...characters]);
  const [draggedChar, setDraggedChar] = useState<Character | null>(null);
  const [dragSource, setDragSource] = useState<string | null>(null);

  const handleDragStart = (char: Character, source: string) => {
    setDraggedChar(char);
    setDragSource(source);
  };

  const handleDrop = useCallback(
    (targetTier: string) => {
      if (!draggedChar) return;

      // Remove from source
      if (dragSource === "unplaced") {
        setUnplaced((prev) => prev.filter((c) => c.id !== draggedChar.id));
      } else if (dragSource) {
        setTiers((prev) => ({
          ...prev,
          [dragSource]: prev[dragSource].filter((c) => c.id !== draggedChar.id),
        }));
      }

      // Add to target
      if (targetTier === "unplaced") {
        setUnplaced((prev) => [...prev, draggedChar]);
      } else {
        setTiers((prev) => ({
          ...prev,
          [targetTier]: [...prev[targetTier], draggedChar],
        }));
      }

      setDraggedChar(null);
      setDragSource(null);
    },
    [draggedChar, dragSource]
  );

  const handleClickPlace = (char: Character, source: string, targetTier: string) => {
    if (source === "unplaced") {
      setUnplaced((prev) => prev.filter((c) => c.id !== char.id));
    } else {
      setTiers((prev) => ({
        ...prev,
        [source]: prev[source].filter((c) => c.id !== char.id),
      }));
    }

    if (targetTier === "unplaced") {
      setUnplaced((prev) => [...prev, char]);
    } else {
      setTiers((prev) => ({
        ...prev,
        [targetTier]: [...prev[targetTier], char],
      }));
    }
  };

  const resetAll = () => {
    setUnplaced([...characters]);
    const fresh: Record<string, Character[]> = {};
    tierOrder.forEach((t) => (fresh[t] = []));
    setTiers(fresh);
  };

  const autoSort = () => {
    const sorted: Record<string, Character[]> = {};
    tierOrder.forEach((t) => (sorted[t] = []));
    characters.forEach((c) => {
      if (sorted[c.tier]) sorted[c.tier].push(c);
      else sorted["B"].push(c);
    });
    setTiers(sorted);
    setUnplaced([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-glow-crimson">
                TIER LIST CREATOR
              </h1>
              <p className="font-body text-muted-foreground mt-2">
                Drag characters into tiers, or click to cycle. Build your ultimate ranking.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={autoSort}
                className="px-4 py-2 card-dark border border-border rounded-sm font-body text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                Auto-Sort
              </button>
              <button
                onClick={resetAll}
                className="px-4 py-2 card-dark border border-border rounded-sm font-body text-sm text-foreground hover:border-destructive/50 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tier Rows */}
        <div className="space-y-2 mb-8">
          {tierOrder.map((tier) => {
            const style = tierLabels[tier];
            return (
              <div
                key={tier}
                className={`flex border ${style.border} rounded-sm overflow-hidden min-h-[72px]`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(tier)}
              >
                <div
                  className={`w-16 md:w-20 flex-shrink-0 flex items-center justify-center font-display text-xl font-bold ${style.bg} border-r ${style.border}`}
                >
                  {style.label}
                </div>
                <div className="flex-1 flex flex-wrap gap-2 p-2 items-center">
                  <AnimatePresence>
                    {tiers[tier].map((char) => (
                      <motion.div
                        key={char.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        draggable
                        onDragStart={() => handleDragStart(char, tier)}
                        onClick={() => {
                          const idx = tierOrder.indexOf(tier);
                          const nextTier = idx < tierOrder.length - 1 ? tierOrder[idx + 1] : "unplaced";
                          handleClickPlace(char, tier, nextTier);
                        }}
                        className="w-14 h-14 rounded-sm overflow-hidden cursor-grab active:cursor-grabbing relative group"
                        title={`${char.name} — click to move down`}
                      >
                        <img
                          src={char.image}
                          alt={char.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[8px] font-body text-foreground text-center leading-tight px-0.5">
                            {char.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {tiers[tier].length === 0 && (
                    <span className="text-xs text-muted-foreground font-body italic">
                      Drop characters here
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Unplaced Pool */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="card-dark rounded-sm border border-border p-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("unplaced")}
        >
          <h3 className="font-display text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
            Unranked Characters ({unplaced.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {unplaced.map((char) => (
                <motion.div
                  key={char.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  draggable
                  onDragStart={() => handleDragStart(char, "unplaced")}
                  onClick={() => handleClickPlace(char, "unplaced", "S+")}
                  className="w-14 h-14 rounded-sm overflow-hidden cursor-grab active:cursor-grabbing relative group"
                  title={`${char.name} — click to place in S+`}
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[8px] font-body text-foreground text-center leading-tight px-0.5">
                      {char.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {unplaced.length === 0 && (
              <span className="text-xs text-muted-foreground font-body italic">
                All characters ranked!
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TierList;
