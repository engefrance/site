# ENGEFRANCE — Site Institucional

Website corporativo premium da **ENGEFRANCE Engenharia Industrial e Construção
Civil**, desenvolvido em Next.js 16 + TypeScript + Tailwind CSS 4 + Framer Motion.

> Empresa: F E Tavares Engefrance Administracao de Obras, Ecommercer Ltda
> CNPJ: 21.211.907/0001-70 · Recife – Pernambuco – Brasil
> Site: www.engefrance.com.br

## ✨ Stack

- **Framework**: Next.js 16 (App Router) + TypeScript 5
- **Estilo**: Tailwind CSS 4 + shadcn/ui (New York)
- **Animações**: Framer Motion
- **Ícones**: lucide-react
- **State**: Zustand

## 🎨 Identidade Visual

- **Paleta**: Azul Royal `#1028B9`, Azul Elétrico `#1BA9FF`, Prata `#C4C9D4`,
  Cinza Escuro `#2F3445`, Preto Profundo `#050505`, Azul Noturno `#0B1020`
- **Tipografia**: Sora + Space Grotesk (títulos), Inter (corpo)
- **Estilo**: Glassmorphism, gradientes, glows azuis, scroll cinematográfico,
  parallax, microinterações

## 📄 Páginas

O site é uma SPA (single-page) com 5 páginas internas navegáveis via Zustand:

1. **Início** — Hero em tela cheia, números, serviços, sobre, diferenciais,
   portfólio, processo, CTA
2. **Empresa** — Hero, história, missão/visão, valores, estrutura, diferenciais, CTA
3. **Serviços** — 6 serviços completos com imagem, descrição, benefícios e diferenciais
4. **Portfólio** — Filtros por categoria + 9 projetos com modal de detalhe
   (banner, galeria, escopo, serviços, resultados, CTA)
5. **Contato** — Formulário, informações corporativas, mapa, redes sociais

## 🚀 Como rodar localmente

```bash
# Instalar dependências
bun install   # ou: npm install / pnpm install

# Rodar em modo desenvolvimento (porta 3000)
bun run dev   # ou: npm run dev

# Build de produção
bun run build

# Rodar produção
bun run start
```

Acesse: http://localhost:3000

## 📁 Estrutura

```
src/
├── app/
│   ├── globals.css        # Tailwind + tema ENGEFRANCE
│   ├── layout.tsx         # Layout raiz (fontes, metadata SEO)
│   └── page.tsx           # Página única com roteamento por estado
├── components/
│   ├── sections/          # Páginas: home, empresa, servicos, portfolio, contato
│   └── site/              # Componentes globais: header, footer, modal, etc.
└── lib/
    ├── site-store.ts      # Estado global (Zustand) + constantes de contato
    └── site-data.ts       # Dados de serviços, projetos, diferenciais, processo
public/
└── uploads/               # Logo, hero image e vídeo de obra
```

## 🔧 SEO

- Title e description otimizados para Engenharia em Recife, Construção Civil
  em Pernambuco, Infraestrutura Industrial, etc.
- OpenGraph + Twitter Cards em português
- `lang="pt-BR"` no HTML

## 📱 Responsividade

Totalmente responsivo: desktop, tablet e smartphone. Menu mobile em tela cheia
com animações Framer Motion.

## 📝 Licença

Propriedade da ENGEFRANCE Engenharia Industrial e Construção Civil.
