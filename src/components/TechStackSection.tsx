"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, FC } from "react";
import { Code2, Brain, Award, Laptop, Maximize, X } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface Skill {
  name: string;
  logoSrc: string;
}

interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

type TabType = "tech" | "certificates";

const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning & Data Science",
    description: "Core expertise in ML and data analysis",
    icon: Brain,
    skills: [
      { name: "Python", logoSrc: "/logo/python.svg" },
      { name: "Numpy", logoSrc: "/logo/numpy.svg" },
      { name: "Pandas", logoSrc: "/logo/pandas.svg" },
      { name: "Matplotlib", logoSrc: "/logo/matplotlib.svg" },
      { name: "Seaborn", logoSrc: "/logo/seaborn.svg" },
      { name: "Sympy", logoSrc: "/logo/sympy.svg" },
    ],
  },
  {
    title: "Software Development",
    description: "Full-stack development capabilities",
    icon: Code2,
    skills: [
      { name: "Java", logoSrc: "/logo/java.svg" },
      { name: "Javascript", logoSrc: "/logo/javascript.svg" },
      { name: "Typescript", logoSrc: "/logo/typescript.svg" },
      { name: "React JS", logoSrc: "/logo/reactjs.svg" },
      { name: "Tailwind CSS", logoSrc: "/logo/tailwindcss.svg" },
      { name: "Dart", logoSrc: "/logo/dart.svg" },
      { name: "C++", logoSrc: "/logo/c++.svg" },
    ],
  },
  {
    title: "Tools & Others",
    description: "Development tools and productivity",
    icon: Laptop,
    skills: [
      { name: "GitHub", logoSrc: "/logo/github.svg" },
      { name: "Notion", logoSrc: "/logo/notion.svg" },
    ],
  },
];

const certificates: Certificate[] = [
  {
    title: "Pelatihan Pemrograman",
    issuer: "HMIF Unsri",
    date: "2024",
    imageUrl: "/assets/Sertifikat Peserta Pelatihan Pemrograman_DUHAIRILLAH.png",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "2024",
    imageUrl: "/assets/sertifikat_course_ai_dasar.png",
  },
  {
    title: "Soon",
    issuer: "",
    date: "",
    imageUrl: "",
  },
];

const SectionHeader = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    className="text-center mb-12"
  >
    <span className="text-primary font-medium">Technologies I use</span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2">
      Skills & <span className="text-gradient">Certificates</span>
    </h2>
  </motion.div>
);

const TabSwitcher = ({ activeTab, onTabChange }: { activeTab: TabType; onTabChange: (tab: TabType) => void }) => (
  <div className="flex justify-center mb-12">
    <div className="inline-flex p-1 rounded-full bg-muted/50 border border-border">
      {(["tech", "certificates"] as TabType[]).map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === tab
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab === "tech" ? <Code2 className="h-4 w-4" /> : <Award className="h-4 w-4" />}
          {tab === "tech" ? "Tech Stack" : "Certificates"}
        </button>
      ))}
    </div>
  </div>
);

const TechCard = ({ skill, index, isInView }: { skill: Skill; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
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

const CertificateCard = ({ cert, onCardClick }: { cert: Certificate; onCardClick: () => void }) => {
  const hasImage = cert.imageUrl && cert.imageUrl.trim() !== "";

  return (
    <motion.div
      whileHover={hasImage ? { y: -5 } : {}}
      className={`bg-card rounded-2xl border border-border overflow-hidden group flex flex-col ${
        hasImage ? "cursor-pointer" : "cursor-default opacity-80"
      }`}
      onClick={hasImage ? onCardClick : undefined}
    >
      <div className="aspect-video relative overflow-hidden bg-muted">
        {hasImage ? (
          <>
            <motion.div layoutId={cert.imageUrl} className="w-full h-full">
              <Image src={cert.imageUrl} alt={cert.title} fill className="object-cover p-2" />
            </motion.div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize size={32} className="text-white" />
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/30">
            <Award size={48} />
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-bold text-foreground leading-tight mb-1">{cert.title}</h4>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
      </div>
    </motion.div>
  );
};

const CertificateModal = ({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-100 p-4"
    onClick={onClose}
  >
    <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors">
      <X size={24} />
    </button>
    <motion.div
      layoutId={imageUrl}
      className="relative w-full max-w-5xl aspect-video"
      onClick={(e) => e.stopPropagation()}
    >
      <Image src={imageUrl} alt="Full View" fill className="object-contain" />
    </motion.div>
  </motion.div>
);

// --- Main Component ---

export const TechStackSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabType>("tech");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const openModal = (imageUrl: string): void => {
    if (imageUrl) setSelectedCert(imageUrl);
  };

  const closeModal = (): void => setSelectedCert(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "auto";
  }, [selectedCert]);

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="container px-6 relative" ref={ref}>
        {/* Header */}
        <SectionHeader isInView={isInView} />

        {/* Tab Switcher */}
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "tech" ? (
            <motion.div
              key="tech"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-5xl mx-auto space-y-12"
            >
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <group.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {group.skills.map((skill, index) => (
                      <TechCard key={skill.name} skill={skill} index={index} isInView={isInView} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                <CertificateCard
                  key={`${cert.title}-${index}`}
                  cert={cert}
                  onCardClick={() => openModal(cert.imageUrl)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && <CertificateModal imageUrl={selectedCert} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
};
