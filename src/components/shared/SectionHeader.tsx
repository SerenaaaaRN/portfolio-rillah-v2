"use client";

import { motion } from "framer-motion";
import { SectionHeaderProps } from "@/types";

export const SectionHeader = ({ subtitle, title, highlight, description, className = "" }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 ${className}`}
    >
      <span className="text-primary font-medium">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  );
};
