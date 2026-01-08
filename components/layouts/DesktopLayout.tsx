"use client";

import Sidebar from "@/components/navigation/Sidebar";
import HeroDesktop from "@/components/sections/HeroDesktop";
import AboutDesktopGitHub from "@/components/sections/AboutDesktopGitHub";
import FeaturedProjectDesktop from "@/components/sections/FeaturedProjectDesktop";
import ProjectsDesktopGitHub from "@/components/sections/ProjectsDesktopGitHub";
import SkillsDesktop from "@/components/sections/SkillsDesktop";
import MetricsDesktopGitHub from "@/components/sections/MetricsDesktopGitHub";
import ContactDesktop from "@/components/sections/ContactDesktop";

export default function DesktopLayout() {
  return (
    <div className="min-h-screen text-white flex">
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main 
        id="main-content" 
        className="flex-1 h-screen overflow-y-auto transition-all duration-300"
        style={{ marginLeft: 'var(--sidebar-width, 288px)' }}
      >
        <div className="max-w-6xl mx-auto px-8 py-12 space-y-32">
          <section id="home" data-section="home" className="min-h-[100vh] pt-20">
            <HeroDesktop />
            <MetricsDesktopGitHub />
          </section>
          
          <section id="about" data-section="about" className="min-h-[100vh] pt-20">
            <AboutDesktopGitHub />
          </section>
          
          <section id="projects" data-section="projects" className="min-h-[100vh] pt-20">
            <FeaturedProjectDesktop />
            <div className="mt-32">
              <ProjectsDesktopGitHub />
            </div>
          </section>
          
          <section id="skills" data-section="skills" className="min-h-[100vh] pt-20">
            <SkillsDesktop />
          </section>
          
          <section id="contact" data-section="contact" className="min-h-[100vh] pt-20">
            <ContactDesktop />
          </section>
        </div>
      </main>
    </div>
  );
}

