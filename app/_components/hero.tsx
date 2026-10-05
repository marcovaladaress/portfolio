import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stack = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"];

const Hero = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100svh-5rem)] flex-col items-start justify-center px-5 py-16 text-left md:min-h-[80vh] md:items-center md:py-24 md:text-center">
      <p className="text-muted-foreground flex items-center gap-2 text-xs tracking-widest uppercase">
        <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
        Desenvolvedor Full Stack
      </p>

      <h1 className="glow mt-6 max-w-6xl text-[2.75rem] leading-[1.05] font-semibold sm:text-6xl md:mt-8 md:text-8xl md:leading-[1.03]">
        Transformo processos manuais em{" "}
        <span className="text-primary">software</span>
      </h1>

      <p className="text-muted-foreground mt-6 max-w-xl text-pretty md:mt-8">
        Criei sozinho o DocJuri, um SaaS jurídico em produção com cliente real.
      </p>

      <ul className="text-muted-foreground mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs tracking-wide md:justify-center">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link
        href="#projects"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-xs font-semibold tracking-widest uppercase transition-colors sm:w-auto sm:py-3.5"
      >
        Ver projetos
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
};

export default Hero;
