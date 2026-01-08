"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import TechMarquee from "@/components/ui/TechMarquee";
import { frontendTechs, backendTechs, toolsTechs } from "@/lib/technologies";

export default function SkillsDesktop() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Habilidades </h2>
          <p className="text-gray-400 text-lg">Tecnologias e ferramentas que uso diariamente</p>
        </div>

        <div className="space-y-16">
          {/* Frontend Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
            <TechMarquee techs={frontendTechs} speed={25} />
          </div>

          {/* Backend Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
            <TechMarquee techs={backendTechs} speed={20} />
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ferramentas & DevOps</h3>
            <TechMarquee techs={toolsTechs} speed={23} />
          </div>
        </div>

        {/* Additional info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-br from-accent-500/10 to-accent-700/10 border border-accent-500/20 rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center flex-shrink-0">
              <Rocket size={32} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Sempre Evoluindo</h4>
              <p className="text-gray-300">
                Constantemente aprendendo e explorando novas tecnologias para criar 
                as melhores soluções e entregar produtos de alta qualidade.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
