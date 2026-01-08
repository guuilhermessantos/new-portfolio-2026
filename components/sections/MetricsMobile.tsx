"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Code, Award, Users, Rocket } from "lucide-react";

const metrics = [
  { icon: Code, value: "50+", label: "Projetos Concluídos", color: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "8+", label: "Anos de Experiência", color: "from-purple-500 to-pink-500" },
  { icon: Users, value: "30+", label: "Clientes Satisfeitos", color: "from-orange-500 to-red-500" },
  { icon: Rocket, value: "100%", label: "Taxa de Sucesso", color: "from-green-500 to-emerald-500" },
];

export default function MetricsMobile() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-8 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl font-bold mb-6"
      >
        Estatísticas Rápidas
      </motion.h2>

      {/* Horizontal Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] snap-center"
            >
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {metrics.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-white/20" />
        ))}
      </div>
    </div>
  );
}

