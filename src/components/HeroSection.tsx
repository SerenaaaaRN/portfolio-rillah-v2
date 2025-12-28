"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const photoGrid = [
  { id: 1, height: "h-48 sm:h-64", delay: 0.2 },
  { id: 2, height: "h-32 sm:h-40", delay: 0.3 },
  { id: 3, height: "h-36 sm:h-48", delay: 0.4 },
  { id: 4, height: "h-40 sm:h-52", delay: 0.5 },
  { id: 5, height: "h-48 sm:h-60", delay: 0.6 },
];

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="mesh-gradient mesh-gradient-2" />
        <div className="mesh-gradient mesh-gradient-3" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Bandung, Indonesia</span>
              <span className="text-primary font-medium text-sm">• Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              <span className="text-primary">Informatics</span>
              <br />
              <span className="text-primary">Student</span>
              <br />
              <span className="text-foreground">& AI Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
            >
              Passionate about software engineering, data science, and machine learning. 
              Currently pursuing BS in Computer Science with a focus on building scalable 
              applications and AI solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border hover:bg-secondary transition-all duration-300"
                onClick={() =>
                  document
                    .querySelector("#guestbook")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-10"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:email@example.com", label: "Email" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo Grid - Bento Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-lg lg:max-w-xl"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photoGrid[0].delay }}
                  className={`${photoGrid[0].height} rounded-2xl bg-linear-to-br from-primary/20 via-accent/20 to-primary/20 border border-border overflow-hidden`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-4xl">📸</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photoGrid[2].delay }}
                  className={`${photoGrid[2].height} rounded-2xl bg-linear-to-br from-accent/20 via-primary/20 to-accent/20 border border-border overflow-hidden`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-4xl">🎓</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photoGrid[4].delay }}
                  className={`${photoGrid[4].height} rounded-2xl bg-linear-to-br from-primary/30 via-accent/20 to-primary/20 border border-border overflow-hidden`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-4xl">🏛️</span>
                  </div>
                </motion.div>
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-3 sm:gap-4 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photoGrid[1].delay }}
                  className={`${photoGrid[1].height} rounded-2xl bg-linear-to-br from-aurora-rose/20 via-primary/20 to-aurora-rose/20 border border-border overflow-hidden`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-4xl">🏆</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photoGrid[3].delay }}
                  className={`${photoGrid[3].height} rounded-2xl bg-linear-to-br from-primary/20 via-aurora-rose/20 to-accent/20 border border-border overflow-hidden`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <span className="text-4xl">🎉</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
