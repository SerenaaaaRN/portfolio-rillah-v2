"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const educationItems = [
  {
    year: "2025 - Sekarang",
    title: "S1 Teknik Informatika",
    organization: "Universitas Sriwijaya",
    location: "Indralaya, Sumatra Selatan",
    description: "Mahasiswa tingkat pertama dengan minat kuat pada Software Engineering dan Artificial Intelligence. Saat ini aktif membangun fondasi dalam algoritma pemrograman dan matematika komputasi.",
    tags: ["Algoritma Struktur Data", "Kalkulus", "Matriks dan Vektor"],
  },
  {
    year: "2022 - 2025",
    title: "MAN 1 Palembang",
    organization: "",
    location: "Palembang, Sumatra Selatan",
    description: "Lulusan jurusan IPA (Ilmu Pengetahuan Alam). Memiliki ketertarikan pada Matematika",
    tags: ["Matematika", "Informatika"],
  },
];

const experienceItems = [
  {
    year: "2025",
    title: "Volunteer Software Engineer",
    organization: "HMIF",
    location: "Universitas Sriwijaya",
    description:
      "Berkontribusi dalam menyempurnakan desain antarmuka (UI) di Figma, khususnya dalam integrasi aset visual dan penambahan komponen fitur pada prototipe aplikasi.",
    tags: ["Figma"],
  },
];

type TabType = "academic" | "experience";

export const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabType>("academic");

  const tabs = [
    { id: "academic" as TabType, label: "Academic", icon: GraduationCap },
    { id: "experience" as TabType, label: "Experience", icon: Briefcase },
  ];

  const currentItems = activeTab === "academic" ? educationItems : experienceItems;

  return (
    <section id="journey" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">My path so far</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A timeline of my academic and professional milestones
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-full bg-muted/50 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {currentItems.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 ml-8 md:ml-0">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Header */}
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

                    <h3 className="text-xl font-display font-semibold mb-1">
                      {item.title}
                    </h3>
                    {item.organization && (
                      <p className="text-primary font-medium text-sm mb-3">
                        {item.organization}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>

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
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center md:-translate-x-1/2 shadow-lg shadow-primary/20">
                  {activeTab === "academic" ? (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  ) : (
                    <Briefcase className="h-5 w-5 text-primary" />
                  )}
                </div>

                {/* Empty Space for layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
