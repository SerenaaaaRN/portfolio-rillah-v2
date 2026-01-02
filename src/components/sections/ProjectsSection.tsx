"use client";

import { useRef } from "react";
import { projects } from "@/data/projects";
import { SectionHeader } from "../shared/SectionHeader";
import { ProjectCard } from "../cards/ProjectCard";

// --- Main Component ---
export const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-6 relative" ref={ref}>
        <SectionHeader subtitle="What I've built" title="Featured" highlight="Project" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
