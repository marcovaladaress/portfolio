import { Badge } from "@/components/ui/badge";

import { CodeXml, ShieldBan, Waypoints } from "lucide-react";
import { SiDatabricks } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

const metadata = [
  {
    subtitle: "Sistemas em produção",
    title: "+15 Projetos Reais",
    icon: SiDatabricks,
  },

  {
    subtitle: "Dados sensíveis protegidos",
    title: "Segurança & LGPD",
    icon: ShieldBan,
  },
  {
    subtitle: "MVC, Clean Code, Design Patterns",
    title: "Arquitetura Moderna",
    icon: Waypoints,
  },
];

const Hero = () => {
  return (
    <>
      <div className="px-5 pt-11 md:container md:mx-auto md:px-0 md:pt-6">
        <div className="md:mt-12 px-5 md:flex md:flex-col md:gap-15">
          <div className="space-y-5">
            <div>
              <Badge className="flex items-center gap-1 border border-[#8B5CF6/2] bg-[#291948] px-5 py-1 text-[#8B5CF6]">
                <CodeXml />
                Desenvolvedor Full Stack
              </Badge>
            </div>
            <h1 className="text-3xl leading-11 font-medium md:max-w-5xl md:text-start md:text-5xl md:leading-18">
              Desenvolvedor Full Stack focado em {""}
              <span className="text-[#8B5CF6]">sistemas escaláveis</span> ,
              seguros e orientados a negócio
            </h1>
            <p className="text-muted-foreground mt-6 text-[17px] leading-7 md:max-w-3xl md:leading-10">
              Especializado em construir aplicações reais que resolvem problemas
              complexos. Experiência com sistemas jurídicos e clínicos,
              arquitetura MVC, práticas de segurança e conformidade LGPD.
            </p>
          </div>
          <div className="mt-5 space-y-3 md:hidden">
            {metadata.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div>
                  <Button className="bg-[#281745]">
                    <item.icon className="text-primary" />
                  </Button>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <div className="grid gap-6 md:grid-cols-3">
              {metadata.map((item, index) => (
                <Card
                  key={index}
                  className="bg-primary/10 border-[#8B5CF6/2] hover:translate-y-2 hover:transition-transform hover:delay-100 hover:duration-300"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <item.icon className="text-primary h-8 w-8" />
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground ml-10 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-5 md:mt-2 md:flex-row">
            <Button className="w-full md:w-auto">
              <span>Ver Competências</span>
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              <span>Entre em contato</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
