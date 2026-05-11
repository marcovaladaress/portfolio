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
