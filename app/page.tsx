import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container-shell flex flex-col gap-24 pb-16 pt-28">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
