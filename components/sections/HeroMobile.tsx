"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroMobile() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-6 py-12 relative">
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
          <Sparkles size={14} className="text-accent-500" />
          <span className="text-xs text-accent-500 font-medium">Disponível para oportunidades</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Criando experiências
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-400 to-accent-600">
            digitais
          </span>
          <br />
          que importam
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Desenvolvedor full-stack especializado em criar aplicações web modernas, performáticas e centradas no usuário.
        </p>

        {/* CTA Button */}
        <button className="w-full bg-linear-to-r from-accent-500 to-accent-600 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25 active:shadow-accent-500/40 active:scale-95 transition-all">
          Ver Meu Trabalho
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Decorative Element - Simplified */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent-500/5 rounded-full -z-10 pointer-events-none" />
    </div>
  );
}

