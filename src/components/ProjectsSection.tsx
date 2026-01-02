"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Kalkulator Penyelesaian Persamaan Diferensial Kalkulus",
    description:
      "Menggunakan algoritma Python untuk menampilkan langkah penyelesaian. Dibuat sebagai Final Project mata kuliah Kalkulus.",
    image: "/assets/Project1.png",
    tags: ["ReactJS", "TailwindCSS", "Python", "Sympy", "Numpy", "Matplotlib"],
    github: "https://github.com/SerenaaaaRN/kalkulus-project-1",
    demo: "https://kalkulusproject.vercel.app/",
    featured: true,
  },
  {
    title: "Soon",
    description: "",
    image: "",
    tags: [],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Soon",
    description: "",
    image: "", // Kosong akan menampilkan icon default
    tags: [],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

// --- Sub-Components ---
const SectionHeader = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    className="text-center mb-16"
  >
    <span className="text-primary font-medium">What I&apos;ve built</span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2">
      Featured <span className="text-gradient">Projects</span>
    </h2>
  </motion.div>
);

const ProjectImage = ({ title, image, featured }: { title: string; image: string; featured: boolean }) => {
  const isImagePath = image.startsWith("/") || image.startsWith("http");

  return (
    <div className="relative h-48 rounded-xl bg-muted flex items-center justify-center mb-6 overflow-hidden border border-border/50">
      {image ? (
        isImagePath ? (
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-6xl transition-transform duration-300 group-hover:scale-110">{image}</span>
        )
      ) : (
        <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
      )}

      {featured && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Featured</span>
        </div>
      )}
    </div>
  );
};

const ProjectLinks = ({ github, demo }: { github: string; demo: string }) => (
  <div className="flex items-center gap-3 pt-4 border-t border-border">
    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <Github className="h-4 w-4 mr-2" /> Code
      </a>
    </Button>
    {demo && (
      <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" /> Demo
        </a>
      </Button>
    )}
  </div>
);

const ProjectCard = ({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group"
  >
    <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
      {/* Image / Thumbnail Section */}
      <ProjectImage title={project.title} image={project.image} featured={project.featured} />

      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Folder className="h-5 w-5 text-muted-foreground shrink-0" />
        </div>

        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.description || "No description available yet."}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-medium rounded-md bg-secondary text-secondary-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Buttons */}
        <ProjectLinks github={project.github} demo={project.demo} />
      </div>
    </div>
  </motion.div>
);

// --- Main Component ---
export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-6 relative" ref={ref}>
        <SectionHeader isInView={isInView} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};
