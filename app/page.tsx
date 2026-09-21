import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ResumeSection } from "@/components/ResumeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectGrid />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
