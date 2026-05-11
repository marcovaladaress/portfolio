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
              href="https://linkedin.com/in/marco-valadares"
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
