"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { NavLink } from "../NavLink";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Guestbook", href: "#guestbook" },
];

// --- Sub-Components ---
const NavLogo = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <NavLink href="/" className="text-2xl font-display font-bold text-gradient cursor-pointer" onClick={onClick}>
    Rillah
  </NavLink>
);

const DesktopMenu = ({
  onNavClick,
}: {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => (
  <div className="hidden md:flex items-center gap-1">
    {navItems.map((item) => (
      <NavLink
        key={item.name}
        href={item.href}
        onClick={(e) => onNavClick(e, item.href)}
        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-all duration-300"
        activeClassName="text-foreground bg-primary/10"
      >
        {item.name}
      </NavLink>
    ))}
    <div className="ml-4">
      <ThemeToggle />
    </div>
  </div>
);

const MobileToggle = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => (
  <div className="flex md:hidden items-center gap-2">
    <ThemeToggle />
    <Button variant="ghost" size="icon" onClick={onToggle} className="relative">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
          >
            <X className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  </div>
);

const MobileMenu = ({
  isOpen,
  onNavClick,
}: {
  isOpen: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-col items-center justify-center h-full gap-6"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- Main Component ---
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    } else if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLogo onClick={(e) => handleNavClick(e, "/")} />

            {/* Desktop Navigation */}
            <DesktopMenu onNavClick={handleNavClick} />

            {/* Mobile Menu Button */}
            <MobileToggle isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onNavClick={handleNavClick} />
    </>
  );
};
