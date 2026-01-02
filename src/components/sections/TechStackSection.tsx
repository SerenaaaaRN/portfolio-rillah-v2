"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, FC } from "react";
import { Code2, Award, X } from "lucide-react";
import Image from "next/image";
import { skillGroups, certificates } from "@/data/skills";
import { SectionHeader } from "../shared/SectionHeader";
import { TabSwitcher } from "../shared/TabSwitcher";
import { TechCard } from "../cards/TechCard";
import { CertificateCard } from "../cards/CertificateCard";

type TabType = "tech" | "certificates";

const tabOptions = [
  { id: "tech", label: "Tech Stack", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
];

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
        <SectionHeader subtitle="Technologies I use" title="Skills &" highlight="Certificates" className="mb-12" />

        {/* Tab Switcher */}
        <TabSwitcher tabs={tabOptions} activeTab={activeTab} onTabChange={setActiveTab} className="mb-12" />

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
                      <TechCard key={skill.name} skill={skill} index={index} />
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
