"use client";

import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

export default function AbstractBackground() {
  // Generate random positions for floating dots
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated Dots Pattern */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-accent-500"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large Geometric Shapes - Circles */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-[500px] h-[500px] rounded-full bg-accent-600/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-700/3 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Additional Geometric Shapes - Squares & Rounded Rectangles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-3xl bg-purple-500/5 blur-2xl rotate-45"
        animate={{
          rotate: [45, 65, 45],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-2xl bg-blue-500/4 blur-3xl rotate-12"
        animate={{
          rotate: [12, -12, 12],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Triangle-like shapes (using clip-path) */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-400/4 blur-2xl"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
        animate={{
          rotate: [0, 120, 0],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Hexagon-like shape */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-indigo-500/5 blur-2xl"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, 60, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Small accent circles */}
      <motion.div
        className="absolute top-10 left-1/2 w-40 h-40 rounded-full bg-cyan-500/6 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-violet-500/5 blur-2xl"
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Wave Dividers - Positioned at different heights */}
      <div className="absolute top-[30vh] left-0 w-full">
        <WaveDivider position="bottom" color="rgba(255, 255, 255, 0.03)" opacity={0.8} />
      </div>
      
      <div className="absolute top-[60vh] left-0 w-full">
        <WaveDivider position="bottom" color="rgba(255, 255, 255, 0.02)" opacity={0.7} flip={true} />
      </div>

      <div className="absolute bottom-[20vh] left-0 w-full">
        <WaveDivider position="bottom" color="rgba(255, 255, 255, 0.025)" opacity={0.6} />
      </div>
    </div>
  );
}
