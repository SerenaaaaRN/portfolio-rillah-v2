"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/types";

interface TechCardProps {
  skill: Skill;
  index: number;
}

export const TechCard = ({ skill, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 shrink-0 group-hover:scale-110 transition-transform">
          <Image src={skill.logoSrc} alt={skill.name} fill className="object-contain" />
        </div>
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{skill.name}</span>
      </div>
    </motion.div>
  );
};
