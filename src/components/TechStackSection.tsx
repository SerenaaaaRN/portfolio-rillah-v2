"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Brain, Award } from "lucide-react";

const mlTechnologies = [
  { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
  { name: "NumPy", icon: "📊", color: "from-blue-500 to-blue-700" },
  { name: "Pandas", icon: "🐼", color: "from-purple-500 to-blue-600" },
  { name: "Matplotlib", icon: "📈", color: "from-blue-400 to-green-500" },
  { name: "Seaborn", icon: "🌊", color: "from-cyan-500 to-blue-600" },
  { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-yellow-500" },
  { name: "PyTorch", icon: "🔥", color: "from-red-500 to-orange-500" },
  { name: "Scikit-learn", icon: "🤖", color: "from-blue-500 to-orange-500" },
];

const softwareTechnologies = [
  { name: "JavaScript", icon: "📜", color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Node.js", icon: "💚", color: "from-green-500 to-green-700" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400 to-cyan-500" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-700" },
  { name: "Git", icon: "🔧", color: "from-orange-500 to-red-500" },
];

const toolsTechnologies = [
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
  { name: "Figma", icon: "🎯", color: "from-purple-500 to-pink-500" },
  { name: "VS Code", icon: "💻", color: "from-blue-500 to-blue-700" },
  { name: "Postman", icon: "📮", color: "from-orange-500 to-red-500" },
];

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford University",
    date: "2024",
    icon: "🎖️",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    icon: "🏅",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "☁️",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Dicoding Indonesia",
    date: "2023",
    icon: "🌐",
  },
];

type TabType = "tech" | "certificates";

export const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabType>("tech");

  const tabs = [
    { id: "tech" as TabType, label: "Tech Stack", icon: Code2 },
    { id: "certificates" as TabType, label: "Certificates", icon: Award },
  ];

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">Technologies I use</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2">
            Skills & <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my technical skills and professional certifications
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-full bg-muted/50 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Content */}
        {activeTab === "tech" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto space-y-12"
          >
            {/* ML & Data Science */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">
                  Machine Learning & Data Science
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Core expertise in ML and data analysis
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {mlTechnologies.map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>

            {/* Software Development */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Software Development</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Full-stack development capabilities
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {softwareTechnologies.map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={index + mlTechnologies.length}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Tools & Others</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Development tools and productivity
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {toolsTechnologies.map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={
                      index +
                      mlTechnologies.length +
                      softwareTechnologies.length
                    }
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Certificates Content */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-primary mt-2">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            ...and always learning new technologies to stay up-to-date! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface TechCardProps {
  tech: { name: string; icon: string; color: string };
  index: number;
  isInView: boolean;
}

const TechCard = ({ tech, index, isInView }: TechCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="group relative"
  >
    <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10">
      <div
        className={`absolute inset-0 rounded-xl bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      <div className="relative flex items-center gap-3">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {tech.icon}
        </span>
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {tech.name}
        </span>
      </div>
    </div>
  </motion.div>
);
