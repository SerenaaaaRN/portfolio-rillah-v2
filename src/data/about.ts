import { Sigma, Cpu, MonitorSmartphone, Puzzle, LucideIcon } from "lucide-react";

export interface StatItem {
  label: string;
  value: string;
}

export interface HighlightItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Stats: StatItem[] = [
  { label: "Learning Hours", value: "500+" },
  { label: "Github Repos", value: "15+" },
  { label: "Academic Project", value: "2+" },
];

export const Highlights: HighlightItem[] = [
  {
    icon: Sigma,
    title: "Mathematical Foundations",
    description: "Applying Calculus and Linear Algebra into code.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Building predictive models and analyzing data patterns.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    description: "Crafting responsive and modern web interfaces.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Implementing efficient algorithms to solve complex tasks.",
  },
];
