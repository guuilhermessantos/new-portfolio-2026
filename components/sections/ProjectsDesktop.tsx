"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";

export default function ProjectsDesktop() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Estudos mais recentes</h2>
          <p className="text-gray-400 text-lg">
            Alguns dos meus trabalhos recentes dos quais me orgulho
          </p>
        </div>

        {/* Primeira linha - scroll normal */}
        <div className="mb-8">
          <Marquee pauseOnHover className="[--duration:40s] [--gap:3rem]">
            {projects.map((project) => (
              <ProjectCard
                key={`row1-${project.id}`}
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
        </div>

        {/* Segunda linha - scroll reverso */}
        <div className="mb-12">
          <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:3rem]">
            {projects.map((project) => (
              <ProjectCard
                key={`row2-${project.id}`}
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
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-br from-accent-500/10 to-accent-700/10 border border-accent-500/20 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Quer ver mais projetos?
              </h3>
              <p className="text-gray-300">
                Confira meu GitHub para ver todos os meus repositórios e contribuições open-source.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 text-white font-medium py-3 px-8 rounded-xl flex items-center gap-2 hover:bg-accent-600 transition-colors whitespace-nowrap"
            >
              Ver GitHub
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
