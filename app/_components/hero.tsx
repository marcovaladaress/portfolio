import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ShieldBan, Waypoints } from "lucide-react";
import Link from "next/link";
import { SiDatabricks } from "react-icons/si";
import Stacks from "./stacks";

const features = [
  {
    title: "+7 Projetos Reais",
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
      <div className="grid items-center gap-16 md:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <Badge className="flex w-fit items-center gap-2 border border-green-500/20 bg-green-500/10 px-4 py-1 text-green-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Disponível para projetos
          </Badge>

          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">
            Desenvolvedor Full Stack Jr transformando ideias em produtos digitais.
          </h1>

          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            Full Stack Jr com Next.js · TypeScript · Node.js — já coloquei um
            produto jurídico em produção com cliente pagante.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-primary/40">
              <Link target="_blank" href="https://www.docjuri.com.br/">
                Ver o DocJuri
              </Link>
            </Button>
          
          </div>
        </div>

        <div className="hidden flex-col gap-4 md:flex">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-primary/5 border-primary/10 border transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 p-4">
                <feature.icon className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <CardTitle className="text-sm">{feature.title}</CardTitle>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Stacks />
    </section>
  );
};

export default Hero;
