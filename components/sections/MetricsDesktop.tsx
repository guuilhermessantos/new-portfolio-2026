"use client";

import { motion } from "framer-motion";
import { Code, Award, Users, Rocket } from "lucide-react";

const metrics = [
  { icon: Code, value: "50+", label: "Projetos Concluídos", color: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "8+", label: "Anos de Experiência", color: "from-purple-500 to-pink-500" },
  { icon: Users, value: "30+", label: "Clientes Satisfeitos", color: "from-orange-500 to-red-500" },
  { icon: Rocket, value: "100%", label: "Taxa de Sucesso", color: "from-green-500 to-emerald-500" },
];

export default function MetricsDesktop() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-16">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-accent-500/50 transition-all"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4`}>
              <Icon size={28} className="text-white" />
            </div>
            <div className="text-4xl font-bold mb-2">{metric.value}</div>
            <div className="text-gray-400">{metric.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

