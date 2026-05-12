# Portfolio Redesign — Design Spec

**Data:** 2026-05-11  
**Status:** Aprovado  
**Objetivo:** Reformulação completa do portfólio para transmitir "criador de produto SaaS" ao invés de "estudante iniciante"

---

## Identidade e Posicionamento

**Persona alvo:** Recrutadores técnicos e clientes que buscam dev Full Stack com experiência real em SaaS  
**Diferencial principal:** DocJuri — SaaS jurídico em produção com cliente ativo  
**Referências visuais:** Linear, Stripe, Vercel, Raycast, Supabase, Notion  
**Paleta:** Dark mode, primário roxo (`oklch(0.606 0.25 292.717)`), minimalista  
**Fonte:** Manter Poppins — remover referências a Geist do globals.css  

---

## Layout Global

- `lang="pt-BR"` no html
- `metadata.title`: "Marco Valadares — Full Stack Developer"
- `metadata.description`: "Desenvolvedor Full Stack focado em SaaS com Next.js, TypeScript e Node.js. Criador do DocJuri, plataforma jurídica em produção."
- Remover classe `.bg` de todas as sections — cada seção define seu próprio fundo
- Fundo global: `bg-background` limpo
- Subtle radial gradient no hero apenas (não repetir em todas seções)

---

## Componente: Navbar

**Comportamento:**
- `sticky top-0 z-50`
- Inicial: `bg-transparent border-transparent`
- Após scroll: `bg-background/80 backdrop-blur-md border-b border-border` com transição suave
- Usar `useEffect` + `useState` para detectar scroll (`scrollY > 10`)

**Conteúdo desktop:**
- Esquerda: logo com iniciais "MV" em box com `bg-primary` + texto "Marco Valadares"
- Centro: links âncora `Sobre`, `Projetos`, `Stack`
- Direita: `Button` "Falar comigo" com `href="#contact"`

**Mobile:**
- Hamburguer abre `Sheet` (shadcn/ui) pela direita
- Sheet contém links de navegação + botão de contato
- Sheet fecha ao clicar em qualquer link

**Arquivo:** `app/_components/navbar.tsx` (renomear header.tsx)

---

## Componente: Hero

**Layout desktop:** `grid grid-cols-[1fr_400px] gap-16 items-center`  
**Layout mobile:** coluna única, foto antes do texto

**Conteúdo (ordem):**
1. Badge pulsante: `● Disponível para projetos` — dot verde com `animate-pulse`, fundo `bg-green-500/10 text-green-400 border border-green-500/20`
2. `h1`: "Construo produtos SaaS que saem do papel e chegam ao mercado"
   - `text-4xl md:text-6xl font-bold tracking-tight leading-tight`
3. Parágrafo: "Full Stack com Next.js · TypeScript · Node.js — já coloquei um produto jurídico em produção com cliente pagante."
   - `text-muted-foreground text-lg leading-relaxed`
4. CTAs: `flex gap-3 flex-wrap`
   - Primário: `Button` "Ver o DocJuri" — link âncora `#projects`
   - Secundário: `Button variant="outline"` "Falar comigo" — link âncora `#contact`
5. Stats row: `flex gap-8 pt-4 border-t border-border mt-4`
   - "1 SaaS em produção" · "2 sistemas entregues" · "LGPD compliant"
   - `text-sm text-muted-foreground` com valor em `font-semibold text-foreground`

**Cards de features (desktop apenas):**
- 3 cards em `grid-cols-3`
- Hover: `hover:-translate-y-1 transition-transform` (para CIMA)
- Background: `bg-primary/5 border border-primary/10`
- Remover cores hardcoded — usar tokens

**Foto/Avatar (lado direito):**
- Container: `relative rounded-2xl overflow-hidden aspect-square`
- `next/image` com `fill` e `object-cover`
- Borda sutil: `ring-1 ring-border`
- Fallback: placeholder com iniciais se não houver foto

**Arquivo:** `app/_components/hero.tsx` (refatorar existente)

---

## Componente: Sobre

**Novo componente** — `app/_components/about.tsx`

**Layout:** `grid md:grid-cols-[1fr_300px] gap-12 items-start`

**Conteúdo:**
- Label de seção: `text-xs uppercase tracking-widest text-muted-foreground`
- `h2`: "Sobre mim"
- Parágrafo 1: "Desenvolvedor Full Stack Jr com foco em produtos SaaS modernos. Trabalho com Next.js, React, TypeScript e Node.js para construir do banco de dados à interface."
- Parágrafo 2: "O DocJuri é meu caso mais concreto: sistema jurídico multi-tenant em produção real, com cliente ativo, upload seguro de documentos via AWS S3 e conformidade LGPD."
- Link: `[Baixar currículo →]` e `[LinkedIn →]`

**Stats (lado direito):**
- 3 métricas em cards verticais: `1 SaaS em produção`, `2 sistemas entregues`, `100% LGPD`

---

## Componente: Projects

**Arquivo:** `app/_components/projects.tsx` (refatorar + remover ShineBorder.tsx)

### DocJuri — Featured Card

**Layout:** `grid md:grid-cols-2 gap-8` full-width  
**Container:** `rounded-2xl border border-border overflow-hidden`

- Badge: `Em produção · Cliente ativo` — verde, estilo mesmo do hero badge
- `h2`: "DocJuri"
- Descrição: "Plataforma multi-tenant para gestão de contratos jurídicos com rastreamento de alterações, upload seguro de documentos e controle granular de permissões — em produção com cliente ativo."
- Métricas: `−60% tempo de busca · +40% produtividade · LGPD compliant`
- Stack chips: ícone + nome, sem descrição
- Botão: "Visitar projeto →" com link correto para `https://doc-juri.vercel.app`
- `ShineBorder` mantido APENAS neste card
- Imagem: `aspect-video next/image object-cover` (não altura fixa)

### ClinControl — Card Secundário

- Card compacto: `rounded-xl border border-border p-6`
- Sem ShineBorder
- Screenshot: `aspect-video` com `next/image`
- Descrição mais curta (2 frases)
- Badge: `Em desenvolvimento`
- Botão desativado ou removido (URL estava errada)

---

## Componente: Stack

**Arquivo:** `app/_components/stacks.tsx` (refatorar)

**Substituir cards verbosos por icon grid:**

```
Categorias: Frontend | Backend | Banco de Dados | Infra
```

Por categoria:
- Label: `text-xs uppercase tracking-widest text-muted-foreground mb-3`
- Grid de chips: `flex flex-wrap gap-2`
- Chip: `flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-sm`
- Ícone 16px + nome da tecnologia
- Máximo 16 tecnologias total

**Título da seção:** "Stack" (simples, sem adjetivos)

---

## Componente: CTA Final

**Novo componente** — `app/_components/cta.tsx`  
**ID:** `id="contact"`

**Conteúdo:**
- `h2`: "Tem um problema que precisa virar produto?"
- Parágrafo: "Estou disponível para projetos freelance, posições CLT/PJ e colaborações. Respondo em até 24h."
- Botão primário: "Falar no LinkedIn" — `href` externo
- E-mail clicável: `marcovf99@gmail.com`
- Links: GitHub, LinkedIn como ícones

---

## Componente: Footer

**Novo componente** — `app/_components/footer.tsx`

```
Marco Valadares · 2026          [GitHub] [LinkedIn] [E-mail]
```

- `py-8 border-t border-border`
- `text-sm text-muted-foreground`

---

## Correções Técnicas Obrigatórias

| Problema | Correção |
|----------|----------|
| `lang="en"` | `lang="pt-BR"` |
| `title: "Create Next App"` | `title: "Marco Valadares — Full Stack Developer"` |
| `hover:translate-y-2` (para baixo) | `hover:-translate-y-1` (para cima) |
| Cores hardcoded `#8B5CF6` / `#291948` | Tokens: `text-primary` / `bg-primary/10` |
| `gap-15` inválido | `gap-6` ou valor válido |
| Link ClinControl errado | Corrigir ou desativar |
| `<h1>` múltiplos | Um único `h1` no Hero; demais viram `h2` |
| Font mismatch Poppins/Geist | Remover vars Geist do globals.css |
| `.bg` em todo lugar | Remover — fundo limpo por seção |
| `subtitletree` typo | Refatorar estrutura de dados |
| Metadata `deliver.tsx` deletado no git | Confirmar que não é importado |

---

## Ordem das Seções na Página

```
<Navbar />         ← sticky, blur on scroll
<Hero />           ← badge + headline + stats + foto
<About />          ← novo
<Projects />       ← DocJuri featured + ClinControl secundário
<Stacks />         ← icon grid
<CTA />            ← novo, id="contact"
<Footer />         ← novo
```

---

## O que NÃO fazer

- Sem barras de progresso de habilidades
- Sem gradientes em toda seção
- Sem animações de entrada pesadas
- Sem aparência "gamer" (sem neon excessivo)
- Sem mais de 2 fontes
- Sem cards com descrição de cada tecnologia
