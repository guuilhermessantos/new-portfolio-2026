"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "guuilhermessantos@gmail.com" },
  { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/guuilhermessantos" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/guilherme-santos-652b49174/" },
];

export default function ContactDesktop() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-400 text-lg">Vamos trabalhar juntos no seu próximo projeto</p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-accent-500/50 hover:bg-slate-700/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="font-medium text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Conecte-se comigo</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 flex items-center justify-center bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-accent-500/20 hover:border-accent-500/50 transition-all"
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50 focus:outline-none transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50 focus:outline-none transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50 focus:outline-none transition-all"
                placeholder="Consulta sobre projeto"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50 focus:outline-none transition-all resize-none"
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-shadow"
            >
              Enviar Mensagem
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

