"use client";

import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "guuilhermessantos@gmail.com" },
  { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/guilhermesantos" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/guilherme-santos-652b49174/" },
];

export default function ContactMobile() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Entre em Contato</h2>
          <p className="text-gray-400">Vamos trabalhar juntos</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <form className="space-y-4 mb-8">
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
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-accent-500 focus:ring-1 focus:ring-accent-500/50 focus:outline-none transition-all resize-none"
              placeholder="Sua mensagem..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-accent-500 to-accent-600 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25 active:shadow-accent-500/40 active:scale-95 transition-all"
          >
            Enviar Mensagem
            <Send size={18} />
          </button>
        </form>

        {/* Social Links */}
        <div>
          <p className="text-sm text-gray-400 mb-4">Ou conecte-se comigo em</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex-1 h-12 flex items-center justify-center bg-slate-800/50 border border-slate-700/50 rounded-xl active:bg-slate-700/50 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

