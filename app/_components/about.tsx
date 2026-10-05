import { docjuri, profile } from "@/lib/profile";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-5 py-24">
      <div className="grid items-center gap-16 md:grid-cols-[1fr_380px]">
        <div className="glow space-y-6">
          <h2 className="text-3xl leading-tight text-balance md:text-5xl">
            Oi, eu sou o Marco.{" "}
            <span className="text-muted-foreground">
              Desenvolvedor Full Stack.
            </span>
          </h2>

          <div className="text-muted-foreground max-w-xl space-y-4 text-[15px]">
            <p>
              Trabalho com Next.js, React, TypeScript e PostgreSQL. Construí
              três sistemas completos no ecossistema Next.js, entre eles o
              DocJuri, um SaaS jurídico multi-tenant de gestão de contratos.
              Hoje desenvolvo uma API REST em Node.js com Fastify, Zod e
              Swagger, consumida por um front-end Next.js.
            </p>
            <p>
              Antes da tecnologia, trabalhei 2 anos e 4 meses em obras de
              infraestrutura, com medição de produção e controle de materiais.
              Foi lá que aprendi como operações reais geram dados e regras de
              negócio, e é por elas que começo cada projeto.
            </p>
          </div>

          <dl className="grid max-w-sm grid-cols-3 gap-4 pt-2">
            {docjuri.numbers.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-muted-foreground text-xs">{stat.label}</dt>
                <dd className="font-display text-primary text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href={profile.linkedin}
            target="_blank"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            Ver perfil no LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] md:max-w-none">
          {/* contornos decorativos da referência */}
          <span className="border-primary/70 absolute -top-4 -right-6 h-6 w-20 rounded-full border" />
          <span className="border-primary/70 absolute bottom-10 -left-5 h-28 w-8 rounded-full border" />
          <Image
            src={profile.avatar}
            alt={`Foto de ${profile.name}`}
            width={460}
            height={460}
            className="aspect-[4/5] w-full rounded-3xl object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
