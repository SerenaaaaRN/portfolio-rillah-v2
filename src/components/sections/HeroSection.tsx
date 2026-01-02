"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Meteors } from "../ui/meteors";
import { socialLinks } from "@/data/socials";

const photoGridData = {
  left: [
    { src: "/assets/me_makrab.jpg", height: "h-[260px] md:h-[330px]" },
    { src: "/assets/me_almet.jpg", height: "h-[240px] md:h-[320px]" },
  ],
  right: [
    { src: "/assets/card_makrab1.jpg", height: "h-[180px] md:h-[220px]" },
    { src: "/assets/me_daribelakang.jpg", height: "h-[200px] md:h-[300px]" },
  ],
};

// --- Sub-Components ---
const HeroBackground = () => (
  <>
    {/* Animated Aurora Background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="mesh-gradient mesh-gradient-1 opacity-50 md:opacity-100" />
      <div className="mesh-gradient mesh-gradient-2 opacity-50 md:opacity-100" />
      <div className="mesh-gradient mesh-gradient-3 opacity-50 md:opacity-100" />

      <Meteors number={30} />
    </div>

    {/* Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-size-[40px_40px] md:bg-size-[60px_60px] pointer-events-none" />
  </>
);

const LocationBadge = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm"
  >
    <MapPin className="h-3.5 w-3.5 text-primary" />
    <span className="text-xs md:text-sm font-medium">Palembang, Indonesia</span>
    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
  </motion.div>
);

const SocialLinks = () => (
  <div className="flex items-center justify-center lg:justify-start gap-2 mt-10">
    {socialLinks.map((social, i) => (
      <motion.a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 + i * 0.1 }}
        className="p-3 rounded-full bg-secondary/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/20"
      >
        <social.icon className="h-5 w-5" />
        <span className="sr-only">{social.label}</span>
      </motion.a>
    ))}
  </div>
);

const ActionButtons = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
      <Button
        size="lg"
        className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300"
        onClick={() => scrollToSection("#projects")}
      >
        View My Work
        <ArrowDown className="ml-2 h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="w-full sm:w-auto rounded-full px-8 backdrop-blur-sm hover:bg-secondary transition-all duration-300"
        onClick={() => scrollToSection("#guestbook")}
      >
        <Mail className="mr-2 h-4 w-4" />
        Get In Touch
      </Button>
    </motion.div>
  );
};

const PhotoGrid = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex-1 w-full max-w-[320px] sm:max-w-md lg:max-w-xl order-1 lg:order-2"
  >
    <div className="grid grid-cols-2 gap-4 md:gap-5">
      {/* Left Column */}
      <div className="flex flex-col gap-4 md:gap-5">
        {photoGridData.left.map((item, i) => (
          <div key={i} className={`relative ${item.height} rounded-3xl overflow-hidden`}>
            <Image src={item.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 md:gap-5 mt-10">
        {photoGridData.right.map((item, i) => (
          <div key={i} className={`relative ${item.height} rounded-3xl overflow-hidden`}>
            <Image src={item.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ScrollIndicator = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      onClick={scrollToAbout}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
    >
      <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
      <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </motion.button>
  );
};

const HeroTextContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex-1 text-center lg:text-left order-2 lg:order-1"
  >
    <LocationBadge />

    <motion.h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6">
      <span className="text-primary">Informatics Student</span>
      <br />
      <span className="text-foreground">& AI Engineer</span>
    </motion.h1>

    <motion.p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
      Passionate about software engineering, data science, and machine learning. Focusing on building scalable
      applications and AI solutions.
    </motion.p>

    <ActionButtons />
    <SocialLinks />
  </motion.div>
);

// --- Main Component ---
export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-dvh items-center justify-center overflow-hidden py-10 md:py-20">
      <HeroBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <HeroTextContent />
          <PhotoGrid />
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};
