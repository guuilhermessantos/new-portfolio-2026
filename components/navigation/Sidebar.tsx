"use client";

import { Home, User, Briefcase, Code, Mail, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Início" },
  { id: "about", icon: User, label: "Sobre" },
  { id: "projects", icon: Briefcase, label: "Projetos" },
  { id: "skills", icon: Code, label: "Habilidades" },
  { id: "contact", icon: Mail, label: "Contato" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/guuilhermessantos", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/guilherme-santos-652b49174/", label: "LinkedIn" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const mainContainer = document.getElementById('main-content');
    if (!mainContainer) return;

    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: mainContainer.querySelector(`[data-section="${item.id}"]`) as HTMLElement
      }));

      const scrollPosition = mainContainer.scrollTop + 200; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    mainContainer.addEventListener('scroll', handleScroll);
    return () => mainContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const mainContainer = document.getElementById('main-content');
    if (!mainContainer) return;

    // Busca o elemento dentro do container desktop
    const element = mainContainer.querySelector(`[data-section="${id}"]`) as HTMLElement;
    if (!element) return;

    // Calcula a posição e faz o scroll
    const targetPosition = element.offsetTop - 80;
    
    mainContainer.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Atualiza a variável CSS para o DesktopLayout ajustar a margem
    document.documentElement.style.setProperty(
      '--sidebar-width',
      isCollapsed ? '80px' : '288px' // 80px = w-20, 288px = w-72
    );
  }, [isCollapsed]);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        width: isCollapsed ? '80px' : '288px'
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen bg-slate-900/50 backdrop-blur-xl border-r border-slate-700/50 flex flex-col shadow-2xl shadow-accent-500/5"
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center text-white shadow-lg z-50 transition-colors"
        aria-label={isCollapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Profile Section */}
      <div className={`border-b border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-transparent transition-all ${
        isCollapsed ? 'p-4' : 'p-5'
      }`}>
        <div className={`flex items-center transition-all ${
          isCollapsed ? 'justify-center' : 'gap-3'
        }`}>
          <div className={`bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/30 transition-all flex-shrink-0 overflow-hidden relative ${
            isCollapsed ? 'w-12 h-12' : 'w-12 h-12'
          }`}>
            <Image 
              src="/avatar.svg" 
              alt="Guilherme Santos" 
              fill
              className="object-cover"
            />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <h1 className="text-base font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent whitespace-nowrap">
                  Guilherme Santos
                </h1>
                <p className="text-gray-400 text-xs leading-tight">Desenvolvedor Full Stack</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center rounded-xl transition-all group relative overflow-hidden ${
                    isCollapsed ? 'justify-center px-3 py-3' : 'gap-3 px-4 py-3'
                  } ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-accent-500/20 via-accent-600/10 to-transparent shadow-lg shadow-accent-500/10" +
                        (isCollapsed ? "" : " border-l-2 border-accent-500")
                      : "text-gray-400 hover:text-white hover:bg-slate-800/40"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon 
                    size={20} 
                    className={`transition-colors relative z-10 ${
                      activeSection === item.id 
                        ? "text-accent-500" 
                        : "group-hover:text-accent-500"
                    }`} 
                  />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`font-medium relative z-10 whitespace-nowrap ${
                          activeSection === item.id ? "text-white" : ""
                        }`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Social Links */}
      <div className={`border-t border-slate-700/50 bg-gradient-to-t from-slate-800/30 to-transparent transition-all ${
        isCollapsed ? 'p-3' : 'p-6'
      }`}>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-gray-500 uppercase tracking-wider mb-3"
            >
              Conecte-se
            </motion.p>
          )}
        </AnimatePresence>
        <div className={`flex gap-2 ${isCollapsed ? 'flex-col items-center' : ''}`}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 hover:bg-accent-500/20 text-gray-400 hover:text-accent-500 transition-all border border-slate-700/50 hover:border-accent-500/50"
                aria-label={social.label}
                title={social.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}

