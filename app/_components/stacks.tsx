import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IoDesktop } from "react-icons/io5";
import { CgDatabase } from "react-icons/cg";
import { FaCloud, FaDatabase } from "react-icons/fa";

const metadata = [
  {
    title: "Front-end",
    subtitleone: "Nextjs | React",
    descriptionone:
      "Aplicações performáticas, SEO otimizado e estrutura moderna",
    subtitletwo: "TypeScript ",
    descriptiontwo: "Código robusto, escalável e com menos erros",
    subtitletree: "Tailwind CSS",
    descriptiontree: "Estilos rápidos, responsivos e personalizados",
    icon: IoDesktop,
  },
  {
    title: "Back-end",
    subtitleone: "Nodejs",
    descriptionone: "APIs rápidas, escaláveis e eficientes",
    subtitletwo: "Banco de Dados",
    descriptiontwo: "Modelagem e consultas otimizadas para desempenho",
    subtitletree: "Autenticação e Segurança",
    descriptiontree: "Proteção de dados e controle de acesso",
    icon: CgDatabase,
  },
  {
    title: "Banco de Dados",
    subtitleone: "PostgreSQL & NeonDB",
    descriptionone: "Modelagem de dados, integridade e otimização de queries",
    subtitletwo: "MongoDB",
    descriptiontwo: "Dados não estruturados e flexibilidade de schema",
    subtitletree: "Administração e Backup",
    descriptiontree: "Gerenciamento eficiente e segurança dos dados",
    icon: FaDatabase,
  },
  {
    title: "Infraestrutura",
    subtitleone: "AWS S3",
    descriptionone: "Armazenamento seguro de arquivos sensíveis e backups",
    subtitletwo: "Docker",
    descriptiontwo: "Ambientes isolados, consistentes e portáteis",
    subtitletree: "Git & GitHub",
    descriptiontree: "Versionamento semântico e fluxo de trabalho profissional",
    icon: FaCloud,
  },
];
const Stacks = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="pt-10 text-center md:pt-25">
        <h1 className="text-2xl">Habilidades Técnicas Reais</h1>
        <p className="text-muted-foreground text-sm">
          O que eu faço com cada tecnologia
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-5 px-5 md:grid md:grid-cols-2">
        {metadata.map((item, index) => (
          <div key={index}>
            <Card className="bg-primary/4">
              <CardTitle className="flex flex-row items-center gap-2 px-3">
                <item.icon size={20} className="text-primary" />
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </CardTitle>
              <CardContent className="flex flex-col gap-4">
                <div className="border-primary/70 border-l-2 p-2">
                  <h3>{item.subtitleone}</h3>
                  <p className="mt-1 text-sm">{item.descriptionone}</p>
                </div>
                <div className="border-primary/70 border-l-2 p-2">
                  <h3>{item.subtitletwo}</h3>
                  <p className="mt-1 text-sm">{item.descriptiontwo}</p>
                </div>
                <div className="border-primary/70 border-l-2 p-2">
                  <h3>{item.subtitletree}</h3>
                  <p className="mt-1 text-sm">{item.descriptiontree}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
