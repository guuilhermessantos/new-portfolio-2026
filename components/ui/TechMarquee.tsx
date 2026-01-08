"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface Tech {
  name: string;
  icon?: LucideIcon;
  color: string;
}

interface TechMarqueeProps {
  techs: Tech[];
  speed?: number;
}

export default function TechMarquee({ techs, speed = 25 }: TechMarqueeProps) {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Scrolling container */}
      <div className="flex whitespace-nowrap">
        {/* First set */}
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            x: [0, -100 + "%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`first-${index}`}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} backdrop-blur-sm border border-white/10 mr-6`}
              >
                {Icon && <Icon size={20} className="text-white" />}
                <span className="font-semibold text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
        
        {/* Second set (duplicate for seamless loop) */}
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            x: [0, -100 + "%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`second-${index}`}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} backdrop-blur-sm border border-white/10 mr-6`}
              >
                {Icon && <Icon size={20} className="text-white" />}
                <span className="font-semibold text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
