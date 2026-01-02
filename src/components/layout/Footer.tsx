"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type SocialLink } from "@/types";
import { socialLinks } from "@/data/socials";

const BrandIdentity = ({ currentYear, scrollToTop }: { currentYear: number; scrollToTop: () => void }) => (
  <div className="text-center md:text-left">
    <motion.a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className="text-xl font-display font-bold text-gradient inline-block mb-2"
      whileHover={{ scale: 1.05 }}
    >
      Portfolio
    </motion.a>
    <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
      Made by Rillah
    </p>
    <p className="text-xs text-muted-foreground mt-1">© {currentYear} All rights reserved.</p>
  </div>
);

const SocialButton = ({ social }: { social: SocialLink }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
  >
    <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
    <span className="sr-only">{social.label}</span>
  </motion.a>
);

const ScrollToTopButton = ({ onClick }: { onClick: () => void }) => (
  <Button
    variant="outline"
    size="icon"
    onClick={onClick}
    className="rounded-full border-border hover:border-primary hover:bg-primary/10 transition-all"
  >
    <ArrowUp className="h-4 w-4" />
    <span className="sr-only">Back to top</span>
  </Button>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border bg-card/50">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 w-96 h-48 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <BrandIdentity currentYear={currentYear} scrollToTop={scrollToTop} />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <SocialButton key={social.label} social={social} />
            ))}
          </div>

          {/* Back to Top */}
          <ScrollToTopButton onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};
