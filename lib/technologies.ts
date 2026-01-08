import {
  Code2,
  Palette,
  Database,
  Server,
  Cloud,
  GitBranch,
  Container,
  Figma as FigmaIcon,
  Code,
  Zap,
  Leaf,
  Box,
  Triangle,
} from "lucide-react";

export const frontendTechs = [
  { name: "React", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Next.js", icon: Triangle, color: "from-gray-800/20 to-gray-900/20" },
  { name: "TypeScript", icon: Code, color: "from-blue-600/20 to-blue-700/20" },
  { name: "Tailwind CSS", icon: Palette, color: "from-cyan-500/20 to-blue-500/20" },
  { name: "JavaScript", icon: Code2, color: "from-yellow-500/20 to-yellow-600/20" },
  { name: "HTML5", icon: Code, color: "from-orange-500/20 to-red-500/20" },
  { name: "CSS3", icon: Palette, color: "from-blue-500/20 to-purple-500/20" },
  { name: "Framer Motion", icon: Zap, color: "from-pink-500/20 to-purple-500/20" },
];

export const backendTechs = [
  { name: "Node.js", icon: Server, color: "from-green-600/20 to-green-700/20" },
  { name: "Express", icon: Zap, color: "from-gray-700/20 to-gray-800/20" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-700/20 to-indigo-700/20" },
  { name: "MongoDB", icon: Leaf, color: "from-green-500/20 to-emerald-600/20" },
  { name: "Prisma", icon: Box, color: "from-indigo-500/20 to-purple-500/20" },
  { name: "GraphQL", icon: Triangle, color: "from-pink-500/20 to-purple-600/20" },
];

export const toolsTechs = [
  { name: "Git", icon: GitBranch, color: "from-orange-600/20 to-red-600/20" },
  { name: "Docker", icon: Container, color: "from-blue-600/20 to-cyan-600/20" },
  { name: "AWS", icon: Cloud, color: "from-orange-500/20 to-yellow-600/20" },
  { name: "Vercel", icon: Triangle, color: "from-gray-900/20 to-black/20" },
  { name: "Figma", icon: FigmaIcon, color: "from-purple-500/20 to-pink-500/20" },
  { name: "VS Code", icon: Code2, color: "from-blue-600/20 to-blue-700/20" },
];

export const allTechs = [...frontendTechs, ...backendTechs, ...toolsTechs];
