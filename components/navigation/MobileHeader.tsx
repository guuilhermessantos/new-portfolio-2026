"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50"
    >
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center overflow-hidden relative">
            <Image 
              src="/avatar.svg" 
              alt="Guilherme Santos" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Guilherme Santos</p>
            <p className="text-xs text-gray-400">Desenvolvedor Full Stack</p>
          </div>
        </div>
        
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Disponível" />
      </div>
    </motion.header>
  );
}

