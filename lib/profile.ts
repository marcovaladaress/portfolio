// Dados do portfólio, sincronizados com o GitHub (github.com/marcovaladaress)
// e o LinkedIn (linkedin.com/in/marcoaureliovaladares). Edite aqui.

import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiBetterauth,
  SiDrizzle,
  SiFastify,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";

export const profile = {
  name: "Marco Valadares",
  role: "Desenvolvedor Full Stack Júnior",
  location: "São Luís – MA",
  availability: "Aberto a vagas remotas, híbridas ou presenciais em São Luís",
  email: "contato@marcovsfernandes.com",
  site: "https://www.marcovsfernandes.com",
  github: "https://github.com/marcovaladaress",
  linkedin: "https://www.linkedin.com/in/marcoaureliovaladares/",
  avatar: "https://avatars.githubusercontent.com/u/147932026?v=4",
};

export const techIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Node.js": SiNodedotjs,
  Fastify: SiFastify,
  Zod: SiZod,
  Swagger: SiSwagger,
  BetterAuth: SiBetterauth,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Drizzle: SiDrizzle,
  "AWS S3": FaAws,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
};

export const stackGroups = [
  {
    title: "Front-end",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Fastify", "Zod", "Swagger", "BetterAuth"],
  },
  {
    title: "Banco de dados",
    items: ["PostgreSQL", "Prisma", "Drizzle"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Vercel", "AWS S3"],
  },
];

export const docjuri = {
  name: "DocJuri",
  url: "https://www.docjuri.com.br/",
  showcase: "https://github.com/marcovaladaress/docjuri-showcase",
  summary:
    "SaaS multi-tenant de gestão de contratos jurídicos, construído sozinho de ponta a ponta e em produção com um cliente.",
  numbers: [
    { value: "11", label: "telas" },
    { value: "60", label: "Server Actions" },
    { value: "18", label: "tabelas" },
  ],
  highlights: [
    "Isolamento de dados por organização, BetterAuth e papéis member, admin e owner",
    "Versionamento de contratos e aditivos com histórico completo de alterações",
    "Alertas de vencimento em tempo real e relatórios gerenciais em PDF",
    "Upload e download seguro de documentos com URLs assinadas na AWS S3",
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Drizzle",
    "BetterAuth",
    "AWS S3",
  ],
};

export type Project = {
  name: string;
  kind: string;
  featured?: boolean;
  description: string;
  stack: string[];
  status?: string;
  image?: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Movit",
    kind: "API REST + front-end",
    featured: true,
    description:
      "API REST para gestão de treinos, organizada pelo Princípio da Responsabilidade Única, documentada com Swagger e consumida por um front-end em Next.js.",
    stack: ["Node.js", "Fastify", "Zod", "Swagger", "Next.js"],
    status: "Em desenvolvimento",
  },
  {
    name: "ClinControl",
    kind: "Sistema de gestão clínica",
    featured: true,
    description:
      "Sistema de gestão clínica com prontuário eletrônico, agendamento online e dashboard analítico para gestores.",
    stack: [],
    image: "/clincontrol.png",
  },
  {
    name: "Stockly",
    kind: "Estoque e vendas",
    featured: true,
    description:
      "Controle de estoque e vendas com Server Components, Server Actions e validação com Zod.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    demo: "https://stockly-7z3j.vercel.app",
    repo: "https://github.com/marcovaladaress/STOCKLY",
  },
  {
    name: "Bewear",
    kind: "E-commerce",
    description:
      "E-commerce de roupas com autenticação, catálogo e carrinho, desenvolvido no curso Full Stack Club.",
    stack: ["Next.js", "BetterAuth", "Drizzle", "PostgreSQL", "Zod"],
    repo: "https://github.com/marcovaladaress/Bewear",
  },
  {
    name: "BarberFsw",
    kind: "Agendamento",
    description:
      "Agendamento de horários para barbearias, desenvolvido no curso Full Stack Club.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/marcovaladaress/BarberFsw",
  },
  {
    name: "Desafio Union Developers",
    kind: "Landing page · desafio técnico",
    description:
      "Landing page institucional mobile first com formulário validado, header fixo e navegação ativa por seção.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    demo: "https://teste-union.vercel.app",
    repo: "https://github.com/marcovaladaress/teste-union",
  },
];

export const studies = [
  {
    name: "WebAI",
    kind: "React · useState e useEffect",
    link: "https://marcovaladaress.github.io/WebAi/",
  },
  {
    name: "Quantech",
    kind: "Site institucional de TI",
    link: "https://quantech-it.vercel.app/",
  },
  {
    name: "NFT Landing",
    kind: "HTML e CSS com animações",
    link: "https://marcovaladaress.github.io/NFTLanding/",
  },
  {
    name: "Microsoft DevClub",
    kind: "HTML e CSS",
    link: "https://marcovaladaress.github.io/Microsoft-DevClub/",
  },
  {
    name: "Agência Brn",
    kind: "HTML e CSS",
    link: "https://marcovaladaress.github.io/agencia.brn/",
  },
];

export const experience = [
  {
    role: "Desenvolvedor Full Stack",
    company: "DocJuri · Freelance",
    period: "mar. 2026 – atual",
    description:
      "Desenvolvimento de ponta a ponta do DocJuri, do banco de dados à interface, em produção com um cliente.",
  },
  {
    role: "Apontador de Mão de Obra",
    company: "Grupo Edeconsil",
    period: "mar. 2021 – jan. 2024",
    description:
      "Medições diárias de produção usadas no pagamento de empreiteiros, conferência de notas fiscais e controle de combustível de 40 equipamentos.",
  },
];

export const education = {
  course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  school: "Estácio",
  period: "2026",
};

export const certifications = [
  {
    name: "Server Actions & Forms",
    issuer: "Full Stack Club",
    date: "jun. 2025",
  },
  {
    name: "Data Fetching & Caching",
    issuer: "Full Stack Club",
    date: "jun. 2025",
  },
  { name: "CSR, SSR, SSG & ISR", issuer: "Full Stack Club", date: "jun. 2025" },
  {
    name: "Server & Client Components",
    issuer: "Full Stack Club",
    date: "jun. 2025",
  },
  {
    name: "Bootcamp de IA Generativa da AWS",
    issuer: "Estácio",
    date: "jul. 2024",
  },
];
