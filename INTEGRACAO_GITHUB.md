# 🔗 Integração com GitHub API

Este portfólio está integrado com a API do GitHub para buscar informações automaticamente do seu perfil.

## 📊 Dados Buscados

### Perfil do Usuário
- Nome e bio
- Localização e empresa
- Número de repositórios públicos
- Seguidores e seguindo
- Link do blog/site

### Repositórios
- **8 projetos em destaque** (ordenados por stars e data de atualização)
- Nome e descrição
- Linguagem principal e tecnologias (topics)
- Links para repositório e demo
- Número de stars e forks

## 🎯 Onde São Usados

### Desktop
- **Hero**: Métricas com dados reais (repositórios, linguagens, stars, seguidores)
- **Sobre**: Informações do perfil, stats e localização
- **Projetos**: Cards dos repositórios com scroll infinito

### Mobile
- **Projetos**: Marquee com repositórios em destaque
- **Métricas**: Stats do GitHub (em desenvolvimento)

## ⚡ Performance

### Cache
- **Revalidação**: 1 hora (3600 segundos)
- Next.js faz cache automático das requisições
- Dados só são atualizados após 1 hora

### Fallback
- Indicador de loading enquanto busca dados
- Mensagens de erro amigáveis
- Descrições padrão caso não existam

## 🎨 Customização

### Mapeamento de Linguagens

O arquivo `lib/github.ts` mapeia linguagens para:
- **Emojis**: Visual nos cards
- **Gradientes**: Cores de fundo

```typescript
TypeScript → 📘 (azul)
JavaScript → 📙 (amarelo)
Python → 🐍 (verde/azul)
// ... e mais
```

### Filtros

Repositórios são:
1. Filtrados (remove o README do perfil)
2. Ordenados (por stars, depois por data)
3. Limitados (6-8 projetos)

## 🔧 Configuração

Para usar em outro perfil:

```typescript
// lib/github.ts
const GITHUB_USERNAME = 'seu-username';
```

## 📝 Endpoints Usados

```
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos
```

## 🚀 Melhorias Futuras

- [ ] Buscar contribuições
- [ ] Mostrar activity timeline
- [ ] Adicionar mais filtros de projetos
- [ ] Integrar com GitHub GraphQL API
- [ ] Adicionar token para aumentar rate limit

## ⚠️ Rate Limit

GitHub API tem limite de:
- **60 requisições/hora** (sem autenticação)
- **5000 requisições/hora** (com token)

Com cache de 1 hora, isso não é um problema para portfolios.

## 🔐 Segurança

- Nenhum token é necessário para dados públicos
- Apenas repositórios públicos são visíveis
- Sem acesso a dados privados

---

**Agora seu portfólio está sempre atualizado com seus últimos projetos!** 🎉

