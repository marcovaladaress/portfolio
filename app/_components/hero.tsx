import { Badge } from "@/components/ui/badge";

import { CodeXml, ShieldBan, Waypoints } from "lucide-react";
import { SiDatabricks } from "react-icons/si";
import { Button } from "@/components/ui/button";

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
    <div className="px-5 pt-11">
      <div>
        <Badge className="flex items-center gap-1 border border-[#8B5CF6/2] bg-[#291948] px-5 py-1 text-[#8B5CF6]">
          <CodeXml />
          Desenvolvedor Full Stack
        </Badge>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl leading-11 font-medium">
          Desenvolvedor Full Stack focado em {""}
          <span className="text-[#8B5CF6]">sistemas escaláveis</span> , seguros
          e orientados a negócio
        </h1>
        <p className="text-muted-foreground mt-6 text-[17px] leading-7">
          Especializado em SaaS, arquitetura MVC e boas práticas. Experiência
          real com sistemas jurídicos e clínicos que exigem segurança,
          conformidade LGPD e escalabilidade.
        </p>
      </div>
      <div className="mt-5 space-y-3">
        {metadata.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div>
              <Button className="bg-[#281745]">
                <item.icon className="text-primary" />
              </Button>
            </div>
            <div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
