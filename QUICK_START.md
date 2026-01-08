# 🚀 Quick Start Guide

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o projeto
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## ✨ Como Personalizar

### 1. Informações Pessoais

Edite estes arquivos:

- `components/navigation/MobileHeader.tsx` - Linha 12-14
- `components/navigation/Sidebar.tsx` - Linha 31-34

```typescript
// Mude "Your Name" e "Full Stack Developer"
<h1>Seu Nome</h1>
<p>Sua Profissão</p>
```

### 2. Cor de Destaque (Accent Color)

Edite `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    500: "#0ea5e9", // Mude para sua cor
  }
}
```

### 3. Conteúdo das Seções

#### Hero (Introdução)
- `components/sections/HeroMobile.tsx`
- `components/sections/HeroDesktop.tsx`

#### Métricas
- `components/sections/MetricsMobile.tsx` - Linha 6-11
- `components/sections/MetricsDesktop.tsx` - Linha 6-11

```typescript
const metrics = [
  { icon: Code, value: "50+", label: "Projects Completed" },
  // Edite os valores aqui
];
```

#### Projetos
- `components/sections/ProjectsMobile.tsx` - Linha 6-33
- `components/sections/ProjectsDesktop.tsx` - Linha 6-33

```typescript
const projects = [
  {
    title: "Seu Projeto",
    description: "Descrição",
    tech: ["React", "Node.js"],
    // ...
  }
];
```

#### Skills
- `components/sections/SkillsMobile.tsx` - Linha 5-31
- `components/sections/SkillsDesktop.tsx` - Linha 5-31

```typescript
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      // Adicione suas skills
    ]
  }
];
```

#### Contato
- `components/sections/ContactMobile.tsx` - Linha 6-9
- `components/sections/ContactDesktop.tsx` - Linha 6-9

```typescript
const contactInfo = [
  { icon: Mail, label: "Email", value: "seu@email.com" },
  // Edite aqui
];
```

### 4. Redes Sociais

Edite os links em:
- `components/navigation/Sidebar.tsx` - Linha 14-18
- `components/sections/ContactMobile.tsx` - Linha 11-15
- `components/sections/ContactDesktop.tsx` - Linha 11-15

```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/seuperfil" },
  // Adicione seus links
];
```

## 📱 Testando Responsividade

### No Navegador
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo móvel
3. Teste em diferentes tamanhos:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

### Breakpoints
- Mobile: `< 1024px` (lg breakpoint)
- Desktop: `≥ 1024px`

## 🎨 Temas de Cor Sugeridos

Copie e cole no `tailwind.config.ts`:

### Azul (Padrão)
```typescript
500: "#0ea5e9"
```

### Verde
```typescript
500: "#10b981"
```

### Roxo
```typescript
500: "#8b5cf6"
```

### Laranja
```typescript
500: "#f97316"
```

### Rosa
```typescript
500: "#ec4899"
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Upload a pasta .next
```

## 📊 Estrutura de Navegação

### Mobile
- **Bottom Navigation**: 5 tabs (Home, About, Projects, Skills, Contact)
- **Tab-based**: Uma seção por vez
- **Swipe horizontal**: Métricas com scroll

### Desktop
- **Sidebar fixa**: Navegação e perfil
- **Scroll vertical**: Todas as seções na mesma página
- **Grid layout**: Métricas e projetos em grid

## 💡 Dicas

1. **Mobile primeiro**: Sempre teste mobile primeiro
2. **Imagens**: Substitua os emojis por imagens reais em produção
3. **Performance**: Otimize imagens com next/image
4. **SEO**: Adicione metadata em app/layout.tsx
5. **Analytics**: Integre Google Analytics se necessário

## 🐛 Problemas Comuns

### Porta já em uso
```bash
# Mude a porta
npm run dev -- -p 3001
```

### Erros de TypeScript
```bash
# Verifique tipos
npm run build
```

### Tailwind não funciona
```bash
# Limpe cache
rm -rf .next
npm run dev
```

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

---

**Pronto para produção?** Siga o README.md para mais detalhes!



