"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Zap, Shield, ShoppingCart, Calendar, Users } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: ShoppingCart, title: "Gestão de Vendas", description: "Controle completo de vendas e produtos" },
  { icon: Calendar, title: "Agendamentos", description: "Sistema de agenda inteligente" },
  { icon: Users, title: "Gestão de Clientes", description: "Cadastro e histórico completo" },
  { icon: Shield, title: "Segurança", description: "Autenticação JWT e controle de acesso" },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "JWT",
];

export default function FeaturedProjectDesktop() {
  return (
    <section className="py-12 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div>
            <h2 className="text-5xl font-bold">Projeto em Destaque</h2>
            <p className="text-gray-400 text-lg mt-2">Meu projeto mais recente e ambicioso</p>
          </div>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-accent-500/30 rounded-3xl overflow-hidden group shadow-2xl shadow-accent-500/10"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-purple-500/10 to-pink-500/10 opacity-50 blur-3xl" />
          
          <div className="relative grid grid-cols-2 gap-12 p-12">
            {/* Left - Info */}
            <div className="space-y-6">
              {/* Logo/Title */}
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full mb-4">
                  <Zap size={20} className="text-accent-400" />
                  <span className="text-sm font-semibold text-accent-400">Projeto Atual</span>
                </div>
                <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Gestsy
                </h3>
                <p className="text-xl text-accent-400 font-semibold mb-4">
                  Sistema Completo de Gestão Empresarial
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Plataforma SaaS completa para gestão de petshops, adegas e barbearias. 
                  Sistema robusto com dashboard inteligente, gestão de vendas, produtos, 
                  clientes, agendamentos e loja virtual integrada.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-accent-500/50 hover:bg-slate-700/40 transition-all"
                    >
                      <Icon size={24} className="text-accent-500 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-accent-500/20 to-purple-500/20 border border-accent-500/30 rounded-full text-sm font-medium text-accent-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href="https://gestsy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent-500/30"
                >
                  <ExternalLink size={20} />
                  Acessar Gestsy
                </motion.a>
                <motion.a
                  href="https://github.com/guuilhermessantos" // Atualize com o repo específico
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-700/50 hover:border-accent-500/50 text-white font-bold rounded-xl transition-all hover:bg-slate-800/50"
                >
                  <Github size={20} />
                  Ver Código
                </motion.a>
              </div>
            </div>

            {/* Right - Preview */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative w-full h-[500px]"
              >
                {/* Browser mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Browser header */}
                  <div className="bg-slate-800/60 border-b border-slate-700/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 ml-4 px-3 py-1 bg-slate-900/60 rounded text-xs text-gray-400 font-mono">
                      gestsy.vercel.app
                    </div>
                  </div>
                  
                  {/* Content preview */}
                  <div className="p-6 space-y-4 overflow-hidden">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl font-bold">Dashboard</h4>
                        <p className="text-sm text-gray-400">Visão geral do seu negócio</p>
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400">
                        ● Sistema Online
                      </div>
                    </div>
                    
                    {/* Metrics cards */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Vendas Hoje", value: "R$ 2.450", change: "+15%" },
                        { label: "Clientes", value: "1,234", change: "+8%" },
                        { label: "Produtos", value: "456", change: "12 novos" },
                        { label: "Agendamentos", value: "12", change: "Hoje" },
                      ].map((metric, idx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className="p-4 bg-gradient-to-br from-accent-500/10 to-purple-500/10 border border-white/10 rounded-lg"
                        >
                          <p className="text-xs text-gray-400 mb-1">{metric.label}</p>
                          <p className="text-xl font-bold">{metric.value}</p>
                          <p className="text-xs text-accent-400">{metric.change}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Chart placeholder */}
                    <div className="h-32 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-lg flex items-end justify-around p-4 gap-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                          className="flex-1 bg-gradient-to-t from-accent-500 to-accent-700 rounded-t"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 opacity-50" />
              </motion.div>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-6 mt-8"
        >
          {[
            { label: "Aumento de Vendas", value: "40%", icon: Zap },
            { label: "Negócios Ativos", value: "100+", icon: Users },
            { label: "Uptime", value: "99.9%", icon: Shield },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-accent-500/50 transition-all"
              >
                <Icon size={32} className="text-accent-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

