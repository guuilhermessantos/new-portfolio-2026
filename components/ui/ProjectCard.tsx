"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

import { type LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: LucideIcon | string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  gradient,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-[400px] min-w-[400px] max-w-[400px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-accent-500/50 hover:shadow-2xl hover:shadow-accent-500/20 transition-all flex-shrink-0 backdrop-blur-sm"
      style={{ marginRight: '3rem' }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:via-transparent group-hover:to-accent-500/5 transition-all duration-500" />
      
      {/* Sparkle indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className="p-2 bg-slate-900/60 backdrop-blur-sm rounded-full border border-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles size={14} className="text-accent-400" />
        </div>
      </div>

      {/* Project Image/Icon */}
      <div className="relative overflow-hidden">
        <div
          className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center text-7xl relative`}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {typeof image === 'string' ? (
              image
            ) : (
              (() => {
                const Icon = image;
                return <Icon size={80} className="text-white" />;
              })()
            )}
          </motion.div>
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        </div>
      </div>

      {/* Project Content */}
      <div className="relative p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t, index) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-lg text-xs text-accent-400 font-medium hover:bg-accent-500/20 transition-colors"
            >
              {t}
            </motion.span>
          ))}
          {tech.length > 3 && (
            <span className="px-3 py-1.5 bg-slate-700/30 border border-slate-600/50 rounded-lg text-xs text-gray-400 font-medium">
              +{tech.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all"
            >
              <ExternalLink size={16} />
              Ver Online
            </motion.button>
          )}
          {githubUrl && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 hover:border-accent-500/50 transition-all"
            >
              <Github size={18} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

