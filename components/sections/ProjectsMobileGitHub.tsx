"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import ProjectCardCompact from "@/components/ui/ProjectCardCompact";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "@/lib/github";
import {
  getFeaturedRepos,
  getLanguageGradient,
  formatDescription,
  getRepoTechnologies,
} from "@/lib/github";

export default function ProjectsMobileGitHub() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await getFeaturedRepos(6);
        setRepos(data);
      } catch (err) {
        setError('Erro ao carregar projetos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  if (error || repos.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-gray-400 text-center">{error || 'Nenhum projeto encontrado'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 px-6">
          <h2 className="text-3xl font-bold mb-2">Estudos mais recentes</h2>
          <p className="text-gray-400">Meus repositórios do GitHub</p>
        </div>

        {/* Marquee de Projetos */}
        <Marquee pauseOnHover className="[--duration:25s] [--gap:3rem]">
          {repos.map((repo) => (
            <ProjectCardCompact
              key={repo.id}
              title={repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
              description={formatDescription(repo.description)}
              tech={getRepoTechnologies(repo)}
              language={repo.language}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              gradient={getLanguageGradient(repo.language)}
              liveUrl={repo.homepage || undefined}
              githubUrl={repo.html_url}
            />
          ))}
        </Marquee>

        {/* CTA Section */}
        <div className="mt-12 px-6">
          <div className="p-6 bg-gradient-to-br from-accent-500/10 to-accent-700/10 border border-accent-500/20 rounded-2xl text-center">
            <p className="text-lg mb-4">Gostou do que viu?</p>
            <motion.a
              href="https://github.com/guuilhermessantos"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-accent-500 text-white font-medium py-3 px-6 rounded-xl"
            >
              Ver Todos no GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

