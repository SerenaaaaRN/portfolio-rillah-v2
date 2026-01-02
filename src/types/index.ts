import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  logoSrc: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export interface CertificateCardProp {
    cert: Certificate;
    onCardClick: () => void;
}
