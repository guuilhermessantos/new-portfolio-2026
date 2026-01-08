"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects-data";

export default function ProjectsMobile() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 px-6">
          <h2 className="text-3xl font-bold mb-2">Estudos mais recentes</h2>
          <p className="text-gray-400">Alguns dos meus trabalhos recentes</p>
        </div>

        {/* Marquee de Projetos */}
        <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
                image={project.icon}
              gradient={project.gradient}
              liveUrl="#"
              githubUrl="#"
            />
          ))}
        </Marquee>

        {/* CTA Section */}
        <div className="mt-12 px-6">
          <div className="p-6 bg-gradient-to-br from-accent-500/10 to-accent-700/10 border border-accent-500/20 rounded-2xl text-center">
            <p className="text-lg mb-4">Gostou do que viu?</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent-500 text-white font-medium py-3 px-6 rounded-xl"
            >
              Ver Todos os Projetos
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
