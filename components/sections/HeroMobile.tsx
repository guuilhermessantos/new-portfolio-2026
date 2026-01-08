"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroMobile() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6"
        >
          <Sparkles size={14} className="text-accent-500" />
          <span className="text-xs text-accent-500 font-medium">Disponível para oportunidades</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4 leading-tight"
        >
          Criando experiências
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
            digitais
          </span>
          <br />
          que importam
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-base leading-relaxed mb-8"
        >
          Desenvolvedor full-stack especializado em criar aplicações web modernas, performáticas e centradas no usuário.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25 active:shadow-accent-500/40 transition-shadow"
        >
          Ver Meu Trabalho
          <ArrowRight size={18} />
        </motion.button>

        {/* Decorative Element */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-accent-600/5 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  );
}

