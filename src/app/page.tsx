import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { GuestbookSection } from "@/components/sections/GuestbookSection";
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
