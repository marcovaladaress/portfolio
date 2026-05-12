import { Marquee } from "@/components/ui/marquee";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiDrizzle, SiPrisma, SiMongodb } from "react-icons/si";
import { FaAws, FaDocker, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type TechItem = {
  icon: IconType | LucideIcon;
  name: string;
};

const rowOne: TechItem[] = [
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: BiLogoReact, name: "React" },
  { icon: BiLogoTypescript, name: "TypeScript" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiDrizzle, name: "Drizzle ORM" },
  { icon: SiPrisma, name: "Prisma" },
];

const rowTwo: TechItem[] = [
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: FaAws, name: "AWS S3" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaGitAlt, name: "Git" },
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: BiLogoReact, name: "React" },
];

function TechChip({ icon: Icon, name }: TechItem) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm mx-2 shrink-0">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="font-medium">{name}</span>
    </div>
  );
}

const Stacks = () => {
  return (
    <section id="stack" className="  py-10 overflow-hidden">


      <div className="relative">
        {/* Fade lateral esquerdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        {/* Fade lateral direito */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex flex-col gap-4">
          <Marquee pauseOnHover className="[--duration:30s]">
            {rowOne.map((tech) => (
              <TechChip key={tech.name} {...tech} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {rowTwo.map((tech) => (
              <TechChip key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
