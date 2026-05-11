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
