"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stats, Highlights, StatItem, HighlightItem } from "@/data/about";
import { SectionHeader } from "../shared/SectionHeader";

// --- Sub-Components ---
interface StatCardProp {
  stat: StatItem;
  index: number;
  isInView: boolean;
}

const StatCard = ({ stat, index, isInView }: StatCardProp) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="text-center p-4 rounded-xl bg-card border border-border"
  >
    <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{stat.value}</div>
    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
  </motion.div>
);

interface HighlightCardProp {
  item: HighlightItem;
  index: number;
  isInView: boolean;
}

const HighlightCard = ({ item, index, isInView }: HighlightCardProp) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="aspect-square p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-center"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
      <item.icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="font-display font-semibold text-lg mb-2 leading-tight">{item.title}</h3>
    <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
  </motion.div>
);

const AboutBio = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="space-y-6"
  >
    <p className="text-lg text-muted-foreground leading-relaxed">
      I am a first-year Computer Science student at Sriwijaya University with an interest in Artificial Intelligence. My
      journey began with a curiosity about how Mathematics could be implemented, which led me to delve into machine
      learning.
    </p>
    <p className="text-lg text-muted-foreground leading-relaxed">
      Currently, I am focusing on building a strong foundation in Software Engineering and Artificial Intelligence. I
      believe that the best technology comes from a strong understanding of basic concepts.
    </p>
    <p className="text-lg text-muted-foreground leading-relaxed">
      Outside of class, I actively explore mathematics, programming algorithms, and basic machine learning algorithms.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
      {Stats.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
      ))}
    </div>
  </motion.div>
);

const HighlightsGrid = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="grid grid-cols-2 gap-4 "
  >
    {Highlights.map((item, index) => (
      <HighlightCard key={item.title} item={item} index={index} isInView={isInView} />
    ))}
  </motion.div>
);

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative" ref={ref}>
        <SectionHeader subtitle="Get to know me" title="About" highlight="Me" className="mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AboutBio isInView={isInView} />
          <HighlightsGrid isInView={isInView} />
        </div>
      </div>
    </section>
  );
};
