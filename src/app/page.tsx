import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { JourneySection } from "@/components/JourneySection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { FullscreenToggle } from "@/components/ui/FullScreenToggle";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <TechStackSection />
        <ProjectsSection />
        <GuestbookSection />
      </div>
      <FullscreenToggle />
    </main>
  );
}
