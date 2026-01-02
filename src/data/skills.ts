import { SkillGroup, Certificate } from "@/types";
import { Brain, Code2, Laptop } from "lucide-react";

export const skillGroups: SkillGroup[] = [
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
      { name: "Java", logoSrc: "logo/java.svg" },
      { name: "Javascript", logoSrc: "logo/javascript.svg" },
      { name: "Typescript", logoSrc: "logo/typescript.svg" },
      { name: "Tailwind CSS", logoSrc: "logo/tailwindcss.svg" },
      { name: "React JS", logoSrc: "logo/reactjs.svg" },
      { name: "Next JS", logoSrc: "logo/nextjs.svg" },
      { name: "Dart", logoSrc: "logo/dart.svg" },
      { name: "C++", logoSrc: "logo/c++.svg" },
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

export const certificates: Certificate[] = [
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
