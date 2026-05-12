# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reformular completamente o portfólio para transmitir "criador de produto SaaS" com navbar sticky, Hero reescrito, DocJuri em destaque, Stacks simplificado, e novas seções Sobre, CTA e Footer.

**Architecture:** Single-page Next.js com componentes em `app/_components/`. Navbar usa `"use client"` para detectar scroll. ShineBorder mantido apenas no card do DocJuri. Seções conectadas por âncoras (`#about`, `#projects`, `#stack`, `#contact`).

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind CSS v4, shadcn/ui, react-icons, lucide-react

---

## Mapa de arquivos

| Arquivo | Ação |
|---------|------|
| `app/layout.tsx` | Modificar — metadata, lang, font |
| `app/globals.css` | Modificar — remover vars Geist, remover .bg |
| `app/page.tsx` | Modificar — nova ordem de seções |
| `app/_components/navbar.tsx` | Criar (substituir header.tsx) |
| `app/_components/header.tsx` | Deletar |
| `app/_components/hero.tsx` | Refatorar |
| `app/_components/about.tsx` | Criar |
| `app/_components/projects.tsx` | Refatorar (absorver ShineBorder.tsx) |
| `app/_components/ShineBorder.tsx` | Deletar |
| `app/_components/stacks.tsx` | Refatorar |
| `app/_components/cta.tsx` | Criar |
| `app/_components/footer.tsx` | Criar |

---

## Task 1: Correções globais (layout.tsx + globals.css)

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Atualizar layout.tsx**

Substituir o conteúdo de `app/layout.tsx` por:

```tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Marco Valadares — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack focado em SaaS com Next.js, TypeScript e Node.js. Criador do DocJuri, plataforma jurídica em produção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Limpar globals.css**

Remover as variáveis `--font-geist-sans` e `--font-geist-mono` do bloco `@theme inline` e remover a classe `.bg` do final do arquivo.

Bloco `@theme inline` deve ficar:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
  --animate-marquee: marquee var(--duration) infinite linear;
  --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-100% - var(--gap))); }
  }
  @keyframes marquee-vertical {
    from { transform: translateY(0); }
    to { transform: translateY(calc(-100% - var(--gap))); }
  }
  --animate-shine: shine var(--duration) infinite linear;
  @keyframes shine {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    to { background-position: 0% 0%; }
  }
}
```

Remover do final do arquivo o bloco:
```css
.bg {
  background: linear-gradient(
    to right,
    rgba(124, 58, 237, 0.1),
    rgba(15, 23, 42, 0.3)
  );
}
```

- [ ] **Step 3: Verificar compilação**

```bash
npm run build
```

Expected: sem erros de TypeScript. Se houver warning de fonte, ignorar por enquanto.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "fix: atualizar metadata, lang=pt-BR e remover .bg global"
```

---

## Task 2: Instalar Sheet do shadcn/ui

**Files:**
- Create: `components/ui/sheet.tsx`

- [ ] **Step 1: Instalar componente**

```bash
npx shadcn@latest add sheet
```

Expected: arquivo `components/ui/sheet.tsx` criado.

- [ ] **Step 2: Verificar instalação**

```bash
ls components/ui/sheet.tsx
```

Expected: arquivo existe.

- [ ] **Step 3: Commit**

```bash
git add components/ui/sheet.tsx
git commit -m "feat: adicionar componente Sheet do shadcn/ui"
```

---

## Task 3: Criar Navbar (substituir Header)

**Files:**
- Create: `app/_components/navbar.tsx`
- Delete: `app/_components/header.tsx`

- [ ] **Step 1: Criar navbar.tsx**

Criar `app/_components/navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Stack", href: "#stack" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary flex h-7 w-7 items-center justify-center rounded text-primary-foreground">
              <span className="text-xs font-bold">MV</span>
            </div>
            <span className="text-sm font-medium">Marco Valadares</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="#contact">Falar comigo</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4">
                    <Link href="#contact">Falar comigo</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

- [ ] **Step 2: Deletar header.tsx**

```bash
git rm app/_components/header.tsx
```

- [ ] **Step 3: Verificar compilação**

```bash
npm run build
```

Expected: sem erros (a importação de `Header` em `page.tsx` vai quebrar — será corrigida na Task 9).

- [ ] **Step 4: Commit**

```bash
git add app/_components/navbar.tsx
git commit -m "feat: criar Navbar sticky com blur e mobile sheet"
```

---

## Task 4: Refatorar Hero

**Files:**
- Modify: `app/_components/hero.tsx`

- [ ] **Step 1: Substituir hero.tsx**

```tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ShieldBan, Waypoints } from "lucide-react";
import Link from "next/link";
import { SiDatabricks } from "react-icons/si";

const features = [
  {
    title: "+6 Projetos Reais",
    subtitle: "Sistemas em produção",
    icon: SiDatabricks,
  },
  {
    title: "Segurança & LGPD",
    subtitle: "Dados sensíveis protegidos",
    icon: ShieldBan,
  },
  {
    title: "Arquitetura Moderna",
    subtitle: "MVC, Clean Code, Design Patterns",
    icon: Waypoints,
  },
];

const heroStats = [
  { value: "1", label: "SaaS em produção" },
  { value: "2", label: "sistemas entregues" },
  { value: "100%", label: "LGPD compliant" },
];

const Hero = () => {
  return (
    <section className="container mx-auto px-5 pt-20 pb-16">
      <div className="grid md:grid-cols-[1fr_360px] gap-16 items-center">
        <div className="space-y-6">
          <Badge className="flex w-fit items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-1">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Disponível para projetos
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Construo produtos SaaS que saem do papel e chegam ao mercado
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Full Stack com Next.js · TypeScript · Node.js — já coloquei um
            produto jurídico em produção com cliente pagante.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button asChild>
              <Link href="#projects">Ver o DocJuri</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Falar comigo</Link>
            </Button>
          </div>

          <div className="flex gap-8 pt-4 border-t border-border">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-primary/5 border border-primary/10 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="p-4 flex items-center gap-3">
                <feature.icon className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <CardTitle className="text-sm">{feature.title}</CardTitle>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Verificar compilação**

```bash
npm run build
```

Expected: sem erros no hero.tsx.

- [ ] **Step 3: Commit**

```bash
git add app/_components/hero.tsx
git commit -m "feat: refatorar Hero com novo posicionamento e badge de disponibilidade"
```

---

## Task 5: Criar seção Sobre

**Files:**
- Create: `app/_components/about.tsx`

- [ ] **Step 1: Criar about.tsx**

```tsx
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const aboutStats = [
  { value: "1", label: "SaaS em produção" },
  { value: "2", label: "sistemas entregues" },
  { value: "100%", label: "LGPD compliant" },
];

const About = () => {
  return (
    <section id="about" className="container mx-auto px-5 py-20">
      <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Sobre mim
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Desenvolvedor Full Stack Jr focado em produtos SaaS modernos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Trabalho com Next.js, React, TypeScript e Node.js para construir
            aplicações do zero — do banco de dados à interface. Meu foco é
            transformar problemas reais em produtos funcionais e escaláveis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O DocJuri é meu caso mais concreto: sistema jurídico multi-tenant em
            produção real, com cliente ativo, upload seguro de documentos via
            AWS S3 e conformidade total com a LGPD.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="mailto:marcovf99@gmail.com"
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              E-mail <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              href="https://linkedin.com/in/[seu-perfil]"
              target="_blank"
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              LinkedIn <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-border bg-card"
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
```

**Nota:** Substituir `https://linkedin.com/in/[seu-perfil]` pela URL real do LinkedIn antes do deploy.

- [ ] **Step 2: Verificar compilação**

```bash
npm run build
```

Expected: sem erros.

- [ ] **Step 3: Commit**

```bash
git add app/_components/about.tsx
git commit -m "feat: adicionar seção Sobre com stats e links"
```

---

## Task 6: Refatorar Projects (absorver ShineBorder.tsx)

**Files:**
- Modify: `app/_components/projects.tsx`
- Delete: `app/_components/ShineBorder.tsx`

- [ ] **Step 1: Substituir projects.tsx**

```tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDrizzle } from "react-icons/si";

const docjuriStack = [
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: BiLogoTypescript, name: "TypeScript" },
  { icon: RiTailwindCssFill, name: "Tailwind" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: SiDrizzle, name: "Drizzle" },
  { icon: FaAws, name: "AWS S3" },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-5 py-20">
      <div className="space-y-3 mb-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Projetos
        </p>
        <h2 className="text-3xl font-bold tracking-tight">
          Produtos que resolvem problemas reais
        </h2>
      </div>

      {/* DocJuri — Featured */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Projeto em destaque
        </p>
        <Card className="relative overflow-hidden">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#A07CFE"]} />
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/docjuri.png"
                  alt="DocJuri — plataforma jurídica SaaS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold">DocJuri</h2>
                  <Badge className="bg-green-500/10 text-green-400 border border-green-500/20">
                    Em produção · Cliente ativo
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Plataforma multi-tenant para gestão de contratos jurídicos com
                  rastreamento de alterações, upload seguro de documentos e
                  controle granular de permissões — em produção com cliente
                  ativo.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <span className="font-medium">−60% tempo de busca</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-medium">+40% produtividade</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-medium">LGPD compliant</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {docjuriStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card text-xs"
                    >
                      <tech.icon className="h-3 w-3" />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link
                    href="https://doc-juri.vercel.app/authentication"
                    target="_blank"
                  >
                    Visitar projeto <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Outros projetos */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Outros projetos
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/clincontrol.png"
                alt="ClinControl — sistema de gestão clínica"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">ClinControl</h3>
                <Badge variant="secondary">Em desenvolvimento</Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistema completo de gestão clínica com prontuário eletrônico,
                agendamento online e dashboard analítico para gestores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

- [ ] **Step 2: Deletar ShineBorder.tsx**

```bash
git rm app/_components/ShineBorder.tsx
```

- [ ] **Step 3: Verificar compilação**

```bash
npm run build
```

Expected: sem erros. ShineBorder ainda importado de `@/components/ui/shine-border` — correto.

- [ ] **Step 4: Commit**

```bash
git add app/_components/projects.tsx
git commit -m "feat: refatorar Projects com DocJuri em destaque e hierarquia visual"
```

---

## Task 7: Refatorar Stacks

**Files:**
- Modify: `app/_components/stacks.tsx`

- [ ] **Step 1: Substituir stacks.tsx**

```tsx
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiDrizzle, SiPrisma } from "react-icons/si";
import { FaAws, FaDocker, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const stack = [
  {
    category: "Frontend",
    items: [
      { icon: RiNextjsFill, name: "Next.js" },
      { icon: BiLogoReact, name: "React" },
      { icon: BiLogoTypescript, name: "TypeScript" },
      { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiDrizzle, name: "Drizzle ORM" },
      { icon: SiPrisma, name: "Prisma" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { icon: BiLogoPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    category: "Infraestrutura",
    items: [
      { icon: FaAws, name: "AWS S3" },
      { icon: FaDocker, name: "Docker" },
      { icon: FaGitAlt, name: "Git" },
    ],
  },
];

const Stacks = () => {
  return (
    <section id="stack" className="container mx-auto px-5 py-20">
      <div className="space-y-3 mb-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Stack
        </p>
        <h2 className="text-3xl font-bold tracking-tight">
          Tecnologias que uso em produção
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stack.map((group) => (
          <div key={group.category} className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-sm"
                >
                  <tech.icon className="h-4 w-4" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
```

- [ ] **Step 2: Verificar compilação**

```bash
npm run build
```

Expected: sem erros. Se `SiMongodb` não existir, substituir por `FaDatabase` de `react-icons/fa`.

- [ ] **Step 3: Commit**

```bash
git add app/_components/stacks.tsx
git commit -m "feat: simplificar Stacks para icon grid por categoria"
```

---

## Task 8: Criar CTA

**Files:**
- Create: `app/_components/cta.tsx`

- [ ] **Step 1: Criar cta.tsx**

```tsx
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="contact" className="container mx-auto px-5 py-24">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Contato
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Tem um problema que precisa virar produto?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Estou disponível para projetos freelance, posições CLT/PJ e
          colaborações. Respondo em até 24h.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link
              href="https://linkedin.com/in/[seu-perfil]"
              target="_blank"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Falar no LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:marcovf99@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              marcovf99@gmail.com
            </Link>
          </Button>
        </div>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="https://github.com/[seu-usuario]"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/[seu-perfil]"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:marcovf99@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
```

**Nota:** Substituir `[seu-perfil]` e `[seu-usuario]` pelas URLs reais do LinkedIn e GitHub.

- [ ] **Step 2: Verificar compilação**

```bash
npm run build
```

Expected: sem erros.

- [ ] **Step 3: Commit**

```bash
git add app/_components/cta.tsx
git commit -m "feat: adicionar seção CTA com contato e links sociais"
```

---

## Task 9: Criar Footer

**Files:**
- Create: `app/_components/footer.tsx`

- [ ] **Step 1: Criar footer.tsx**

```tsx
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Marco Valadares · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/[seu-usuario]"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/[seu-perfil]"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:marcovf99@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Verificar compilação**

```bash
npm run build
```

Expected: sem erros.

- [ ] **Step 3: Commit**

```bash
git add app/_components/footer.tsx
git commit -m "feat: adicionar Footer com links sociais"
```

---

## Task 10: Atualizar page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Substituir page.tsx**

```tsx
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import Projects from "./_components/projects";
import Stacks from "./_components/stacks";
import CTA from "./_components/cta";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stacks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Build final completo**

```bash
npm run build
```

Expected: build sem erros, sem warnings críticos.

- [ ] **Step 3: Testar visualmente no dev server**

```bash
npm run dev
```

Verificar:
- Navbar sticky com blur ao scrollar
- Hero com badge verde pulsante
- Cards do hero sobem no hover
- DocJuri tem ShineBorder e badge verde
- ClinControl sem ShineBorder e com badge secundário
- Stack em icon grid 4 colunas
- Seção Sobre visível
- CTA com dois botões
- Footer mínimo

- [ ] **Step 4: Commit final**

```bash
git add app/page.tsx
git commit -m "feat: atualizar page.tsx com nova ordem de seções e componentes"
```

---

## Pós-implementação — ajustes manuais obrigatórios

Antes do deploy, substituir os seguintes placeholders:

| Placeholder | Onde | Substituir por |
|-------------|------|----------------|
| `https://linkedin.com/in/[seu-perfil]` | about.tsx, cta.tsx, footer.tsx | URL real do LinkedIn |
| `https://github.com/[seu-usuario]` | cta.tsx, footer.tsx | URL real do GitHub |
| Link de currículo em about.tsx | about.tsx | URL do PDF ou remover |
