"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize, Award } from "lucide-react";
import { Certificate } from "@/types";

interface CertificateCardProp {
    cert: Certificate;
    onCardClick: () => void;
}

export const CertificateCard = ({ cert, onCardClick }: CertificateCardProp) => {
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
