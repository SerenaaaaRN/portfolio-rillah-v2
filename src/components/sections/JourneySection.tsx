"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { type JourneyItem } from "@/types";
import { educationItems, experienceItems } from "@/data/journey";
import { SectionHeader } from "../shared/SectionHeader";
import { TabSwitcher } from "../shared/TabSwitcher";

type TabType = "academic" | "experience";

const tabs = [
  { id: "academic" as TabType, label: "Academic", icon: GraduationCap },
  { id: "experience" as TabType, label: "Experience", icon: Briefcase },
];

const TimelineNode = ({ activeTab }: { activeTab: TabType }) => (
  <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center md:-translate-x-1/2 shadow-lg shadow-primary/20 z-10">
    {activeTab === "academic" ? (
      <GraduationCap className="h-5 w-5 text-primary" />
    ) : (
      <Briefcase className="h-5 w-5 text-primary" />
    )}
  </div>
);

const TimelineCard = ({ item, index }: { item: JourneyItem; index: number }) => (
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

interface TimelineRowProp {
  item: JourneyItem;
  index: number;
  activeTab: TabType;
  isInView: boolean;
}
const TimelineRow = ({ item, index, activeTab, isInView }: TimelineRowProp) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
    className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
  >
    {/* Content Side */}
    <div className="flex-1 ml-8 md:ml-0">
      <TimelineCard item={item} index={index} />
    </div>

    {/* Center Node */}
    <TimelineNode activeTab={activeTab} />

    {/* Empty Spacer Side (for layout balance) */}
    <div className="hidden md:block flex-1" />
  </motion.div>
);

// --- Main Component ---
export const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabType>("academic");

  const currentItems = activeTab === "academic" ? educationItems : experienceItems;

  return (
    <section id="journey" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-6 relative" ref={ref}>
        {/* Header */}
        <SectionHeader
          subtitle="My path so far"
          title="My"
          highlight="Journey"
          description="A timeline of my academic and professional milestones"
        />

        {/* Tab Switcher */}
        <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="mb-12" />

        {/* Timeline Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* List Items */}
            {currentItems.map((item, index) => (
              <TimelineRow
                key={`${activeTab}-${index}`}
                item={item}
                index={index}
                activeTab={activeTab}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
