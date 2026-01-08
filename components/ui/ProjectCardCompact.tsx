"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useState } from "react";

interface ProjectCardCompactProps {
  title: string;
  description: string;
  tech: string[];
  language?: string | null;
  stars?: number;
  forks?: number;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCardCompact({
  title,
  description,
  tech,
  language,
  stars,
  forks,
  gradient,
  liveUrl,
  githubUrl,
}: ProjectCardCompactProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative w-[340px] min-w-[340px] max-w-[340px] h-[240px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/20 transition-all flex-shrink-0 backdrop-blur-sm"
      style={{ marginRight: '3rem' }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative h-full p-5 flex flex-col">
        {/* Header with language badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 capitalize">
              {title}
            </h3>
            {language && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-accent-500/10 border border-accent-500/20 rounded-full text-xs text-accent-400">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                {language}
              </div>
            )}
          </div>
          
          {/* Stats */}
          {(stars !== undefined || forks !== undefined) && (
            <div className="flex gap-3 text-xs text-gray-400 ml-2">
              {stars !== undefined && (
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500" />
                  {stars}
                </div>
              )}
              {forks !== undefined && (
                <div className="flex items-center gap-1">
                  <GitFork size={12} className="text-blue-500" />
                  {forks}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tech.slice(0, 4).map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-slate-700/30 text-xs text-gray-300 rounded border border-slate-600/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                liveUrl
                  ? 'border border-slate-600/50 text-gray-300 hover:text-white hover:bg-slate-700/50'
                  : 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg shadow-accent-500/20'
              }`}
            >
              <Github size={16} />
              Código
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-accent-500/20"
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      {isHovered && (
        <motion.div
          layoutId="compact-card-glow"
          className="absolute -inset-1 bg-gradient-to-r from-accent-500/20 to-purple-500/20 rounded-xl blur-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}

