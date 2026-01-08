"use client";

import { Rocket } from "lucide-react";
import TechMarquee from "@/components/ui/TechMarquee";
import { frontendTechs, backendTechs, toolsTechs } from "@/lib/technologies";

export default function SkillsMobile() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Habilidades </h2>
          <p className="text-gray-400">Tecnologias que eu trabalho</p>
        </div>

        <div className="space-y-12">
          {/* Frontend Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4 px-4">Frontend</h3>
            <TechMarquee techs={frontendTechs} speed={20} />
          </div>

          {/* Backend Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4 px-4">Backend</h3>
            <TechMarquee techs={backendTechs} speed={18} />
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-xl font-semibold mb-4 px-4">Ferramentas & Outros</h3>
            <TechMarquee techs={toolsTechs} speed={22} />
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 p-6 bg-linear-to-br from-accent-500/10 to-accent-700/10 border border-accent-500/20 rounded-2xl">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent-500 to-accent-700 flex items-center justify-center shrink-0 shadow-lg shadow-accent-500/30">
              <Rocket size={24} className="text-white" />
            </div>
            <p className="text-gray-300 text-center">
              Sempre aprendendo e explorando novas tecnologias para criar as melhores soluções!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
