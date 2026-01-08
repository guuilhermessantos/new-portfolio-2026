import { ShoppingCart, ClipboardList, Share2, Sparkles } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Plataforma de E-Commerce",
    description:
      "Loja online completa com integração de pagamento, painel administrativo e gerenciamento de estoque em tempo real.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    icon: ShoppingCart,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "App de Gerenciamento de Tarefas",
    description:
      "Ferramenta colaborativa de gestão de projetos com atualizações em tempo real, colaboração em equipe e análises avançadas.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    icon: ClipboardList,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Dashboard de Redes Sociais",
    description:
      "Plataforma de análises para gerenciar múltiplas contas de redes sociais com postagem automatizada e insights.",
    tech: ["Next.js", "Tailwind", "PostgreSQL", "Redis"],
    icon: Share2,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Gerador de Conteúdo com IA",
    description:
      "Ferramenta alimentada por IA para gerar conteúdo de marketing, posts de blog e legendas para redes sociais.",
    tech: ["React", "OpenAI", "FastAPI", "Docker"],
    icon: Sparkles,
    gradient: "from-green-500 to-emerald-500",
  },
];



