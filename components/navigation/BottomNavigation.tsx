"use client";

import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface BottomNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Início" },
  { id: "about", icon: User, label: "Sobre" },
  { id: "projects", icon: Briefcase, label: "Projetos" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contato" },
];

export default function BottomNavigation({ activeSection, setActiveSection }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent-500/10 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <Icon
                size={20}
                className={`relative z-10 transition-colors ${
                  isActive ? "text-accent-500" : "text-gray-400"
                }`}
              />
              
              <span
                className={`relative z-10 text-xs transition-colors ${
                  isActive ? "text-accent-500 font-medium" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

