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
        <div id="home" className={activeSection === "home" ? "block" : "hidden"}>
          <HeroMobile />
          <MetricsMobile />
        </div>
        
        <div id="about" className={activeSection === "about" ? "block" : "hidden"}>
          <AboutMobile />
        </div>
        
        <div id="projects" className={activeSection === "projects" ? "block" : "hidden"}>
          <FeaturedProjectMobile />
          <div className="mt-12">
            <ProjectsMobileGitHub />
          </div>
        </div>
        
        <div id="skills" className={activeSection === "skills" ? "block" : "hidden"}>
          <SkillsMobile />
        </div>
        
        <div id="contact" className={activeSection === "contact" ? "block" : "hidden"}>
          <ContactMobile />
        </div>
      </main>
      
      {/* Fixed Bottom Navigation */}
      <BottomNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}



