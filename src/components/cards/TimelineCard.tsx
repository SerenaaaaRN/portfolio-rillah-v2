"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { JourneyItem } from "@/types";

interface TimelineCardProps {
  item: JourneyItem;
  index: number;
}

export const TimelineCard = ({ item, index }: TimelineCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
      }`}
    >
      {/* Header Info */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex items-center gap-1.5 text-sm text-primary">
          <Calendar className="h-4 w-4" />
          <span className="font-medium">{item.year}</span>
        </div>
        {item.location && (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{item.location}</span>
          </div>
        )}
      </div>

      {/* Title & Desc */}
      <h3 className="text-xl font-display font-semibold mb-1">{item.title}</h3>
      {item.organization && <p className="text-primary font-medium text-sm mb-3">{item.organization}</p>}
      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
