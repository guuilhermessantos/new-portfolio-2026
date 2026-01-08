"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-accent-500/30 border-t-accent-500 rounded-full"
        />
        <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center">
          <Code2 size={24} className="text-white" />
        </div>
        <p className="text-gray-400 text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}



