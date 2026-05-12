import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import Link from "next/link";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaAws, FaRegSquare } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDrizzle, SiPrisma } from "react-icons/si";

export function ShineBorderDemo() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-5">
      <div>
        <h1 className="pt-5 text-center text-xl font-semibold ">
          Projetos que Resolvem Problemas
        </h1>
        <p className="text-muted-foreground mt-2 text-center text-sm">
          {" "}
          Cases reais com impacto mensurável
        </p>
      </div>
      <Card className="relative mt-4 w-full max-w-full overflow-hidden md:mt-12">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#A07CFE"]} />

        <CardContent>
          <div className="gap-8 md:grid md:grid-cols-2">
            <div className="relative h-[200px] w-full md:h-full">
              <Image
                src="/docjuri.png"
                alt="docjuri"
                className="md rounded-xl object-cover"
                fill
              />
            </div>
            <div>
              <div className="mt-5 flex items-center justify-between">
                <h1 className="text-xl font-medium">DocJuri</h1>
                <Badge className="border border-[#8B5CF6/2] bg-[#291948] px-5 py-1 text-[#8B5CF6]">
                  Sistema Jurídico
                </Badge>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">Contexto do Problema</h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  Escritórios jurídicos precisavam de um sistema centralizado
                  para gestão de processos, documentos sensíveis e prazos
                  críticos.
                </span>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">Solução Desenvolvida</h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  Plataforma multi-tenant com gestão completa de processos,
                  upload seguro de documentos (AWS S3), sistema de notificações
                  de prazos e controle granular de permissões.
                </span>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">
                  Tecnologias Utilizadas
                </h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge className="bg-primary/25">
                      <RiNextjsFill /> NextJs
                    </Badge>
                    <Badge className="bg-primary/25">
                      <BiLogoTypescript />
                      Typescript
                    </Badge>
                    <Badge className="bg-primary/25">
                      <RiTailwindCssFill /> TailwindCss
                    </Badge>
                    <Badge className="bg-primary/25">
                      <BiLogoPostgresql /> PostgreSQL
                    </Badge>
                    <Badge className="bg-primary/25">
                      <SiDrizzle /> Drizzle
                    </Badge>
                    <Badge className="bg-primary/25">
                      <FaRegSquare />
                      NeonDB
                    </Badge>
                    <Badge className="bg-primary/25">
                      <FaAws />
                      AWS S3{" "}
                    </Badge>
                    <Badge className="bg-primary/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill={"currentColor"}
                        viewBox={"0 0 24 24"}
                      >
                        <path d="M12.1 10.36H15.149999999999999V13.68H12.1z" />
                        <path d="m3,3v18h18V3H3Zm15.48,10.68v3h-6.38v-3h-3.48v3h-3.13V7.36h3.13v3h3.48v-3h6.38v6.32Z" />
                      </svg>{" "}
                      betterAuth
                    </Badge>
                  </div>
                </span>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">Resultado</h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  Redução de 60% no tempo de busca de documentos, 100% de
                  conformidade LGPD e aumento de 40% na produtividade da equipe
                  jurídica.
                </span>
              </div>
              <Button className="mt-6 w-full md:w-auto" variant="outline">
                <Link
                  href="https://doc-juri.vercel.app/authentication"
                  target="_blank"
                >
                  Visitar Projeto
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative w-full max-w-full overflow-hidden">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#A07CFE"]} />

        <CardContent>
          <div className="gap-8 md:grid md:grid-cols-2">
            <div className="relative h-[200px] w-full md:h-full">
              <Image
                src="/clincontrol.png"
                alt="docjuri"
                className="md rounded-xl object-cover"
                fill
              />
            </div>
            <div>
              <div className="mt-5 flex items-center justify-between">
                <h1 className="text-xl font-medium">ClinControl</h1>
                <Badge className="border border-[#8B5CF6/2] bg-[#291948] px-5 py-1 text-[#8B5CF6]">
                  Sistema Clínico
                </Badge>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">Contexto do Problema</h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  Clínicas médicas enfrentavam dificuldades com prontuários
                  físicos, agendamentos manuais e falta de histórico integrado
                  de pacientes.
                </span>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">Solução Desenvolvida</h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  Sistema completo de gestão clínica com prontuário eletrônico,
                  agendamento online, histórico médico integrado, prescrições
                  digitais e dashboard analítico para gestores.
                </span>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">
                  Tecnologias Utilizadas
                </h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge className="bg-primary/25">
                      <RiNextjsFill /> NextJs
                    </Badge>
                    <Badge className="bg-primary/25">
                      <BiLogoTypescript />
                      Typescript
                    </Badge>
                    <Badge className="bg-primary/25">
                      <RiTailwindCssFill /> TailwindCss
                    </Badge>
                    <Badge className="bg-primary/25">
                      <BiLogoPostgresql /> PostgreSQL
                    </Badge>
                    <Badge className="bg-primary/25">
                      <SiPrisma />
                      Prisma
                    </Badge>
                    <Badge className="bg-primary/25">
                      <FaRegSquare />
                      NeonDB
                    </Badge>
                    <Badge className="bg-primary/25">
                      <FaAws />
                      AWS S3{" "}
                    </Badge>
                    <Badge className="bg-primary/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill={"currentColor"}
                        viewBox={"0 0 24 24"}
                      >
                        <path d="M12.1 10.36H15.149999999999999V13.68H12.1z" />
                        <path d="m3,3v18h18V3H3Zm15.48,10.68v3h-6.38v-3h-3.48v3h-3.13V7.36h3.13v3h3.48v-3h6.38v6.32Z" />
                      </svg>{" "}
                      betterAuth
                    </Badge>
                  </div>
                </span>
              </div>
              <div>
                <h3 className="text-medium mt-4 mb-1">Resultado</h3>
                <span className="text-muted-foreground text-start text-[13px]">
                  Eliminação de prontuários físicos, redução de 50% em faltas de
                  consultas com sistema de lembretes e melhoria significativa no
                  atendimento ao paciente.
                </span>
              </div>
              <Button className="mt-6 w-full md:w-auto" variant="outline">
                <Link
                  href="https://doc-juri.vercel.app/authentication"
                  target="_blank"
                >
                  Visitar Projeto
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
