"use client";

import { motion } from "framer-motion";
import { Code2, GitBranch, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getGitHubUser, getGitHubRepos, type GitHubUser, type GitHubRepo } from "@/lib/github";

export default function MetricsDesktopGitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [userData, reposData] = await Promise.all([
          getGitHubUser(),
          getGitHubRepos()
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        console.error('Erro ao carregar métricas:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  const languages = [...new Set(repos.map(r => r.language).filter(Boolean))].length;

  const metrics = [
    {
      icon: Code2,
      label: "Repositórios",
      value: loading ? "..." : (user?.public_repos || 0),
      color: "from-accent-500 to-accent-700",
    },
    {
      icon: GitBranch,
      label: "Linguagens",
      value: loading ? "..." : languages,
      color: "from-green-500 to-emerald-700",
    },
    {
      icon: Star,
      label: "Stars",
      value: loading ? "..." : totalStars,
      color: "from-yellow-500 to-orange-700",
    },
    {
      icon: Users,
      label: "Seguidores",
      value: loading ? "..." : (user?.followers || 0),
      color: "from-purple-500 to-pink-700",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mt-16">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-accent-500/50 transition-all group overflow-hidden"
          >
            {/* Background gradient glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
            
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={24} className="text-white" />
              </div>
              <div className="text-4xl font-bold mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

