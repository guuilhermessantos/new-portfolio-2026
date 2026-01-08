"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import ProjectCardCompact from "@/components/ui/ProjectCardCompact";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "@/lib/github";
import {
  getFeaturedRepos,
  getLanguageGradient,
  formatDescription,
  getRepoTechnologies,
} from "@/lib/github";

export default function ProjectsDesktopGitHub() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await getFeaturedRepos(8);
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
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  if (error || repos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">{error || 'Nenhum projeto encontrado'}</p>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Estudos mais recentes</h2>
          <p className="text-gray-400 text-lg">
            Meus repositórios mais recentes do GitHub
          </p>
        </div>

        {/* Primeira linha - scroll normal */}
        <div className="mb-8">
          <Marquee pauseOnHover className="[--duration:35s] [--gap:3rem]">
            {repos.map((repo) => (
              <ProjectCardCompact
                key={`row1-${repo.id}`}
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
        </div>

        {/* Segunda linha - scroll reverso */}
        <div className="mb-12">
          <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:3rem]">
            {repos.map((repo) => (
              <ProjectCardCompact
                key={`row2-${repo.id}`}
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
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-br from-accent-500/10 to-accent-700/10 border border-accent-500/20 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Quer ver mais projetos?
              </h3>
              <p className="text-gray-300">
                Confira meu GitHub para ver todos os meus repositórios e contribuições open-source.
              </p>
            </div>
            <motion.a
              href="https://github.com/guuilhermessantos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 text-white font-medium py-3 px-8 rounded-xl flex items-center gap-2 hover:bg-accent-600 transition-colors whitespace-nowrap"
            >
              Ver GitHub
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

