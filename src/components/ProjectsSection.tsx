"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration. Built with Next.js and Supabase.",
    image: "🛒",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "✅",
    tags: ["React", "TypeScript", "Firebase", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills with beautiful animations.",
    image: "💼",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard with location-based forecasts and interactive charts.",
    image: "🌤️",
    tags: ["React", "Chart.js", "OpenWeather API"],
    github: "https://github.com",
    demo: null,
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A markdown-based blog platform with SEO optimization and dark mode support.",
    image: "📝",
    tags: ["Next.js", "MDX", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with private messaging and group chat features.",
    image: "💬",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: null,
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">What I&apos;ve built</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with care
            and attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                {/* Project Icon/Image */}
                <div className="relative h-40 rounded-xl bg-linear-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center mb-6 overflow-hidden group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-primary/10 transition-all duration-300">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/20 border border-primary/30">
                      <span className="text-xs font-medium text-primary">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Folder className="h-5 w-5 text-muted-foreground shrink-0" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
