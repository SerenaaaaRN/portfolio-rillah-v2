import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { JourneySection } from "@/components/JourneySection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <TechStackSection />
        <ProjectsSection />
        <GuestbookSection />
      </main>
      <Footer />
    </div>
  );
}
