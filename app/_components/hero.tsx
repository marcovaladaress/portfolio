import { profile } from "@/lib/profile";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-muted-foreground flex items-center gap-2 text-xs tracking-widest uppercase">
        <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
        Desenvolvedor Full Stack
      </p>

      <h1 className="glow mt-8 max-w-6xl text-8xl leading-[1.03] font-semibold text-balance sm:text-5xl md:text-8xl">
        Transformo processos manuais em software
      </h1>

      <p className="text-muted-foreground mt-8 max-w-xl text-pretty">
        Criei sozinho o DocJuri, um SaaS jurídico em produção com cliente real.
        Next.js · React · TypeScript · Node.js · PostgreSQL.
      </p>

      <Link
        href="#projects"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-10 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors"
      >
        Ver projetos
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
};

export default Hero;
