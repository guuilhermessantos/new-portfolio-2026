"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Target, Code2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Paixão",
    description: "Amor por criar soluções elegantes que fazem a diferença",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Construindo experiências rápidas e otimizadas que encantam usuários",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Atenção meticulosa a cada detalhe e interação do usuário",
  },
];

export default function AboutDesktop() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-12">Sobre Mim</h2>

        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-accent-500/20 to-accent-700/20 rounded-3xl flex items-center justify-center border border-white/10 relative overflow-hidden">
              <Code2 size={120} className="text-accent-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Olá! Sou um desenvolvedor full-stack apaixonado com mais de 8 anos de experiência criando
                aplicações web que os usuários adoram.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Especializado em React, Next.js, TypeScript e Node.js, sempre me mantendo atualizado com
                as tecnologias e melhores práticas mais recentes.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Quando não estou programando, você me encontrará contribuindo para projetos open-source, escrevendo
                artigos técnicos ou explorando novos frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">O Que Me Move</h3>
          <div className="grid grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-accent-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent-500" />
                  </div>
                  <h4 className="font-semibold text-xl mb-2">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

