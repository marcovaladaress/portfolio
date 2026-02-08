import { FaNetworkWired } from "react-icons/fa";
import { BiSolidNetworkChart } from "react-icons/bi";
import { SiDatabricks } from "react-icons/si";
import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const metadata = [
  {
    title: "Arquitetura Bem Estruturada",
    subtitle:
      "Sistemas organizados com padrões MVC, separação de responsabilidades e preparados para crescer sem colapsar",
    icon: FaNetworkWired,
  },
  {
    title: "Código Limpo e Organizado",
    subtitle:
      "Clean Code, commits semânticos, documentação clara. Qualquer dev consegue dar manutenção.",
    icon: BiSolidNetworkChart,
  },
  {
    title: "Sistemas Reais em Produção",
    subtitle:
      "Experiência prática com projetos jurídicos e clínicos, entregando valor real para usuários finais.",
    icon: SiDatabricks,
  },
  {
    title: "Experiência com Regras de Negócio",
    subtitle:
      "Trabalho direto com gestão jurídica e clínica. Entendo fluxos complexos, não só executo tarefas.",
    icon: BriefcaseBusiness,
  },
];

const Deliver = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="p-11 px-5 md:pt-28 md:text-center">
        <h1 className="text-2xl font-semibold">Oque eu Entrego</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Além do código, você recebe soluções pensadas para o negócio
        </p>
      </div>
      <div className="flex flex-col gap-4 px-5 md:mt-6 md:grid md:grid-cols-2 md:gap-4">
        {metadata.map((item, index) => (
          <div key={index} className="">
            <Card className="bg-transparent">
              <CardTitle className="px-5">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-[8px]">
                  <item.icon className="text-primary h-5 w-5" />
                </div>
              </CardTitle>
              <CardContent>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {item.subtitle}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deliver;
