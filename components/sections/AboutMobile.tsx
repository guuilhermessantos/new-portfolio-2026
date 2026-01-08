"use client";

import { Heart, Zap, Target, Code2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Paixão",
    description: "Amor por criar soluções elegantes",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Experiências rápidas e otimizadas",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Atenção a cada detalhe",
  },
];

export default function AboutMobile() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div>
        <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>

        <div className="space-y-6">
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-linear-to-br from-accent-500/20 to-accent-700/20 rounded-2xl flex items-center justify-center border border-accent-500/30 shadow-xl shadow-accent-500/10">
            <Code2 size={80} className="text-accent-500" />
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Olá! Sou um desenvolvedor full-stack apaixonado com mais de 8 anos de experiência criando
              aplicações web que os usuários adoram.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Especializado em React, Next.js, TypeScript e Node.js, sempre me mantendo atualizado com
              as tecnologias e melhores práticas mais recentes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Quando não estou programando, você me encontrará contribuindo para projetos open-source, escrevendo
              artigos técnicos ou explorando novos frameworks.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold mb-4">O Que Me Move</h3>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex items-start gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

