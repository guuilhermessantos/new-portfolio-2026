# 🎯 Como Personalizar Seu Portfólio

## Passo 1: Editar Suas Informações

Abra o arquivo `config/portfolio.config.ts` e preencha com suas informações reais.

### Informações Obrigatórias

```typescript
personal: {
  name: "Seu Nome Completo",
  role: "Seu Cargo",
  email: "seu@email.com",
  location: "Sua Cidade, Estado",
}
```

### Redes Sociais

```typescript
social: {
  github: "https://github.com/seuperfil",
  linkedin: "https://www.linkedin.com/in/guilherme-santos-652b49174/", // Já preenchido
  twitter: "https://twitter.com/seuperfil",
}
```

### Projetos

Para cada projeto, preencha:
- **title**: Nome do projeto
- **description**: Descrição curta (1-2 linhas)
- **tech**: Array de tecnologias usadas
- **liveUrl**: Link do projeto online
- **githubUrl**: Link do repositório

## Passo 2: Atualizar Habilidades

No mesmo arquivo, atualize suas skills com níveis de 0-100:

```typescript
skills: {
  frontend: [
    { name: "React", level: 95 },
    // Adicione mais...
  ],
}
```

## Passo 3: Adicionar Suas Métricas

```typescript
metrics: [
  { value: "X+", label: "Projetos Completados" },
  { value: "Y+", label: "Anos de Experiência" },
]
```

## Passo 4: Rodar o Projeto

```bash
npm run dev
```

Abra http://localhost:3000 e veja suas informações!

## 📸 Adicionar Foto/Avatar

1. Coloque sua foto em `public/avatar.jpg`
2. Ou use um serviço como Gravatar
3. Atualize os componentes para usar a imagem

## 🎨 Mudar Cor Principal

No arquivo `tailwind.config.ts`, altere:

```typescript
accent: {
  500: "#0ea5e9", // Sua cor aqui
}
```

## 🚀 Deploy Rápido

### Vercel
1. Conecte seu repositório GitHub
2. Deploy automático!

### Netlify
```bash
npm run build
```
Faça upload da pasta `.next`

## ✅ Checklist Final

- [ ] Nome e cargo atualizados
- [ ] Email e localização corretos
- [ ] Links de redes sociais funcionando
- [ ] Pelo menos 3 projetos adicionados
- [ ] Skills atualizadas com níveis reais
- [ ] Bio personalizada (3 parágrafos)
- [ ] Métricas refletem sua experiência
- [ ] Testado em mobile e desktop
- [ ] Sem erros no console
- [ ] Deploy feito

## 💡 Dicas

1. **Seja honesto** com os níveis de skill
2. **Use métricas reais** sempre que possível
3. **Adicione projetos reais** com links funcionando
4. **Mantenha a bio concisa** e profissional
5. **Atualize regularmente** conforme novos projetos

## 🆘 Precisa de Ajuda?

Se tiver dúvidas, verifique:
- `README.md` - Documentação completa
- `DESIGN_GUIDE.md` - Guia de design
- `FEATURES.md` - Lista de funcionalidades

---

**Pronto para impressionar?** 🚀

Depois de personalizar, seu portfólio estará pronto para compartilhar com recrutadores e clientes!



