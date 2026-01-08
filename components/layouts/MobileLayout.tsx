"use client";

import { useState } from "react";
import MobileHeader from "@/components/navigation/MobileHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import HeroMobile from "@/components/sections/HeroMobile";
import AboutMobile from "@/components/sections/AboutMobile";
import FeaturedProjectMobile from "@/components/sections/FeaturedProjectMobile";
import ProjectsMobileGitHub from "@/components/sections/ProjectsMobileGitHub";
import SkillsMobile from "@/components/sections/SkillsMobile";
import MetricsMobile from "@/components/sections/MetricsMobile";
import ContactMobile from "@/components/sections/ContactMobile";

export default function MobileLayout() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen text-white">
      {/* Compact Header */}
      <MobileHeader />
      
      {/* Main Content - with padding for fixed elements */}
      <main className="pt-16 pb-20">
        {activeSection === "home" && (
          <div id="home">
            <HeroMobile />
            <MetricsMobile />
          </div>
        )}
        
        {activeSection === "about" && (
          <div id="about">
            <AboutMobile />
          </div>
        )}
        
        {activeSection === "projects" && (
          <div id="projects">
            <FeaturedProjectMobile />
            <div className="mt-12">
              <ProjectsMobileGitHub />
            </div>
          </div>
        )}
        
        {activeSection === "skills" && (
          <div id="skills">
            <SkillsMobile />
          </div>
        )}
        
        {activeSection === "contact" && (
          <div id="contact">
            <ContactMobile />
          </div>
        )}
      </main>
      
      {/* Fixed Bottom Navigation */}
      <BottomNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}



