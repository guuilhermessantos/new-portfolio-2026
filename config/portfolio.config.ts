/**
 * PORTFOLIO CONFIGURATION
 * 
 * Edite este arquivo para personalizar todo o conteúdo do seu portfólio.
 * Todas as mudanças aqui serão refletidas automaticamente em todo o site.
 */

export const portfolioConfig = {
  // ============================================
  // INFORMAÇÕES PESSOAIS
  // ============================================
  personal: {
    name: "Guilherme Santos",
    role: "Full Stack Developer",
    email: "guuilhermessantos@gmail.com", // Atualize com seu email real
    location: "São Paulo, Brasil", // Atualize com sua localização
    
    // Tagline que aparece no Hero
    tagline: "Crafting digital experiences that matter",
    
    // Bio completa (array de parágrafos)
    bio: [
      "Olá! Sou um desenvolvedor full-stack apaixonado por criar aplicações web modernas e escaláveis.",
      "Especializado em React, Next.js, TypeScript e Node.js, sempre em busca das melhores práticas e tecnologias mais recentes.",
      "Quando não estou programando, você me encontra contribuindo para projetos open-source ou estudando novas tecnologias.",
    ],
    
    // Status de disponibilidade
    available: true, // true = "Available for work", false = "Currently unavailable"
    availableText: "Available for opportunities",
  },

  // ============================================
  // REDES SOCIAIS
  // ============================================
  social: {
    github: "https://github.com/seuperfil", // Atualize
    linkedin: "https://www.linkedin.com/in/guilherme-santos-652b49174/",
    twitter: "https://twitter.com/seuperfil", // Atualize ou deixe vazio
    instagram: "", // Opcional
    behance: "", // Opcional
    dribbble: "", // Opcional
  },

  // ============================================
  // MÉTRICAS / ESTATÍSTICAS
  // ============================================
  metrics: [
    { value: "50+", label: "Projects Completed" },
    { value: "8+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "100%", label: "Success Rate" },
  ],

  // ============================================
  // VALORES / O QUE TE MOVE
  // ============================================
  values: [
    {
      title: "Passion",
      description: "Love for creating elegant solutions that make a difference",
    },
    {
      title: "Performance",
      description: "Building fast, optimized experiences that delight users",
    },
    {
      title: "Precision",
      description: "Meticulous attention to every detail and user interaction",
    },
  ],

  // ============================================
  // HABILIDADES
  // ============================================
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 90 },
    ],
  },

  // ============================================
  // PROJETOS
  // ============================================
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration, admin dashboard, and real-time inventory management.",
      longDescription: `
        Plataforma de e-commerce completa desenvolvida com Next.js e Stripe.
        Inclui painel administrativo, gestão de estoque em tempo real,
        sistema de pagamentos integrado e notificações por email.
      `,
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      image: "🛍️", // Substitua por URL de imagem real
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "https://exemplo.com", // URL do projeto
      githubUrl: "https://github.com/seuperfil/projeto", // URL do GitHub
      featured: true, // Projeto em destaque
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      longDescription: `
        Aplicativo de gestão de tarefas com colaboração em tempo real.
        Implementa WebSockets para updates instantâneos, sistema de notificações
        e dashboards analíticos para acompanhamento de produtividade.
      `,
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      image: "📋",
      gradient: "from-blue-500 to-cyan-500",
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/seuperfil/projeto",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics platform for managing multiple social media accounts with automated posting and insights.",
      longDescription: `
        Dashboard de analytics para redes sociais com agendamento automático.
        Integra APIs de múltiplas plataformas, gera relatórios detalhados
        e permite gerenciamento centralizado de conteúdo.
      `,
      tech: ["Next.js", "Tailwind", "PostgreSQL", "Redis", "REST APIs"],
      image: "📱",
      gradient: "from-orange-500 to-red-500",
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/seuperfil/projeto",
      featured: true,
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "AI-powered tool for generating marketing content, blog posts, and social media captions.",
      longDescription: `
        Ferramenta de geração de conteúdo usando IA (GPT-4).
        Cria textos para marketing, posts de blog e legendas para redes sociais.
        Interface intuitiva com suporte a múltiplos idiomas e estilos.
      `,
      tech: ["React", "OpenAI", "FastAPI", "Docker", "Python"],
      image: "🤖",
      gradient: "from-green-500 to-emerald-500",
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/seuperfil/projeto",
      featured: false,
    },
  ],

  // ============================================
  // EXPERIÊNCIA PROFISSIONAL (Opcional)
  // ============================================
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Startup XYZ",
      location: "São Paulo, SP",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team to create pixel-perfect UIs",
      ],
    },
  ],

  // ============================================
  // EDUCAÇÃO (Opcional)
  // ============================================
  education: [
    {
      degree: "Bachelor in Computer Science",
      institution: "Universidade de São Paulo",
      period: "2016 - 2020",
      description: "Focus on Software Engineering and Web Development",
    },
  ],

  // ============================================
  // CERTIFICAÇÕES (Opcional)
  // ============================================
  certifications: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://exemplo.com/certificado",
    },
  ],

  // ============================================
  // IDIOMAS (Opcional)
  // ============================================
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate" },
  ],
};

export default portfolioConfig;



