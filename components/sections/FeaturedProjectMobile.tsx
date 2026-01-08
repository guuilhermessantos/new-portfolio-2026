"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Zap, ShoppingCart, Calendar, Users, Shield } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Gestão de Vendas" },
  { icon: Calendar, title: "Agendamentos" },
  { icon: Users, title: "Clientes" },
  { icon: Shield, title: "Segurança" },
];

const technologies = [
  "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "JWT"
];

export default function FeaturedProjectMobile() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Projeto em Destaque</h2>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-accent-500/30 rounded-2xl overflow-hidden p-6 space-y-6 shadow-xl shadow-accent-500/10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/20 border border-accent-500/30 rounded-full">
            <Zap size={16} className="text-accent-400" />
            <span className="text-xs font-semibold text-accent-400">Projeto Atual</span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Gestsy
            </h3>
            <p className="text-lg text-accent-400 font-semibold mb-3">
              Sistema de Gestão Empresarial
            </p>
            <p className="text-gray-300 leading-relaxed">
              Plataforma SaaS completa para gestão de petshops, adegas e barbearias. 
              Dashboard inteligente, vendas, produtos, clientes e agendamentos integrados.
            </p>
          </div>

          {/* Preview Mockup */}
          <div className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-xl overflow-hidden">
            {/* Browser header */}
            <div className="bg-slate-800/60 border-b border-slate-700/50 px-3 py-2 flex items-center gap-1.5">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 ml-2 px-2 py-1 bg-slate-900/60 rounded text-xs text-gray-400 font-mono">
                gestsy.vercel.app
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">Dashboard</h4>
                  <p className="text-xs text-gray-400">Visão geral</p>
                </div>
                <div className="px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400">
                  ● Online
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Vendas", value: "R$ 2.4k" },
                  { label: "Clientes", value: "1.2k" },
                  { label: "Produtos", value: "456" },
                  { label: "Agenda", value: "12" },
                ].map((metric) => (
                  <div key={metric.label} className="p-2 bg-accent-500/10 border border-accent-500/20 rounded">
                    <p className="text-xs text-gray-400">{metric.label}</p>
                    <p className="text-sm font-bold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="p-3 bg-slate-800/40 border border-slate-700/50 rounded-lg text-center">
                  <Icon size={20} className="text-accent-500 mx-auto mb-1" />
                  <p className="text-xs font-semibold">{feature.title}</p>
                </div>
              );
            })}
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-accent-500/20 border border-accent-500/30 rounded-full text-xs text-accent-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <motion.a
              href="https://gestsy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-700 text-white font-bold rounded-xl shadow-lg shadow-accent-500/30"
            >
              <ExternalLink size={18} />
              Acessar Gestsy
            </motion.a>
            <motion.a
              href="https://github.com/guuilhermessantos" // Atualize com o repo específico
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-700/50 text-white font-bold rounded-xl active:bg-slate-800/50"
            >
              <Github size={18} />
              Ver Código
            </motion.a>
          </div>

          {/* Bottom highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

