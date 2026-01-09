"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import Image from "next/image";

export default function HeroDesktop() {
  return (
    <div className="min-h-[80vh] flex items-center relative">
      <div className="grid grid-cols-2 gap-12 items-center w-full">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >


          {/* Main Title */}
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Criando experiências
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              digitais
            </span>
            <br />
            que importam
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            Desenvolvedor full-stack especializado em criar aplicações web modernas, performáticas e centradas 
            no usuário com as tecnologias mais recentes.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium py-3 px-8 rounded-xl flex items-center gap-2 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-shadow"
            >
              Ver Meu Trabalho
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/curriculo.pdf';
                link.download = 'curriculo.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative bg-black text-white font-medium py-3 px-8 rounded-xl flex items-center gap-2 overflow-hidden group"
              style={{
                background: 'rgb(0, 0, 0)',
                border: '2px solid transparent',
              }}
            >
              {/* Animated gradient border */}
              <span 
                className="absolute inset-0 rounded-xl opacity-100 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `
                    conic-gradient(
                      from var(--border-angle),
                      transparent 25%,
                      rgb(129, 140, 248),
                      rgb(99, 102, 241),
                      rgb(79, 70, 229),
                      rgb(67, 56, 202),
                      transparent 75%,
                      transparent
                    )
                  `,
                  padding: '2px',
                  borderRadius: 'inherit',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  animation: 'border-rotate 4s linear infinite',
                }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Baixar CV
                <Download size={18} />
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Animated Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 border border-accent-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border border-accent-400/30 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full blur-2xl opacity-50"
            />
            <div className="absolute w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center overflow-hidden relative">
              <Image 
                src="/avatar.svg" 
                alt="Guilherme Santos" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-600/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}

