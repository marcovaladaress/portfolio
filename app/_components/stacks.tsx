import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiDrizzle, SiPrisma, SiMongodb } from "react-icons/si";
import { FaAws, FaDocker, FaNodeJs, FaGitAlt } from "react-icons/fa";

const stack = [
  {
    category: "Frontend",
    items: [
      { icon: RiNextjsFill, name: "Next.js" },
      { icon: BiLogoReact, name: "React" },
      { icon: BiLogoTypescript, name: "TypeScript" },
      { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiDrizzle, name: "Drizzle ORM" },
      { icon: SiPrisma, name: "Prisma" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { icon: BiLogoPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    category: "Infraestrutura",
    items: [
      { icon: FaAws, name: "AWS S3" },
      { icon: FaDocker, name: "Docker" },
      { icon: FaGitAlt, name: "Git" },
    ],
  },
];

const Stacks = () => {
  return (
    <section id="stack" className="container mx-auto px-5 py-20">
      <div className="space-y-3 mb-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Stack
        </p>
        <h2 className="text-3xl font-bold tracking-tight">
          Tecnologias que uso em produção
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stack.map((group) => (
          <div key={group.category} className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-sm"
                >
                  <tech.icon className="h-4 w-4" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
