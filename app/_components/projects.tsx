import {
  docjuri,
  profile,
  projects,
  studies,
  type Project,
} from "@/lib/profile";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Highlight = {
  name: string;
  kind: string;
  stack: string[];
  description: string;
  image?: string;
  href?: string;
  badge?: string;
};

const highlights: Highlight[] = [
  {
    name: docjuri.name,
    kind: "SaaS jurídico · cliente ativo",
    stack: docjuri.stack,
    description: docjuri.summary,
    image: "/docjuri-login.png",
    href: docjuri.url,
    badge: "Em produção",
  },
  ...projects
    .filter((p) => p.featured)
    .map((p) => ({
      name: p.name,
      kind: p.kind,
      stack: p.stack,
      description: p.description,
      image: p.image,
      href: p.demo ?? p.repo,
      badge: p.status,
    })),
];

function HighlightCard({ item }: { item: Highlight }) {
  const content = (
    <>
      <div className="bg-card relative aspect-[4/3] overflow-hidden rounded-2xl">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Bloco gráfico até o projeto ter um print
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,oklch(0.76_0.16_55/35%),transparent_60%),radial-gradient(circle_at_75%_80%,oklch(0.55_0.2_300/30%),transparent_55%)]">
            <span className="font-display text-foreground/90 text-4xl md:text-5xl">
              {item.name}
            </span>
          </div>
        )}
        {item.badge && (
          <span className="bg-background/80 absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] tracking-wider uppercase backdrop-blur">
            {item.badge}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <h3 className="text-lg">{item.name}</h3>
        <span className="bg-primary h-px w-10" />
        {item.href && (
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary ml-auto h-4 w-4 transition-colors" />
        )}
      </div>
      <dl className="mt-3 grid grid-cols-[64px_1fr] gap-y-1 text-xs">
        <dt className="text-muted-foreground">Projeto</dt>
        <dd>{item.kind}</dd>
        {item.stack.length > 0 && (
          <>
            <dt className="text-muted-foreground">Stack</dt>
            <dd>{item.stack.join(" · ")}</dd>
          </>
        )}
      </dl>
      <p className="text-muted-foreground mt-3 max-w-md text-sm">
        {item.description}
      </p>
    </>
  );

  return item.href ? (
    <Link href={item.href} target="_blank" className="group block">
      {content}
    </Link>
  ) : (
    <div className="group">{content}</div>
  );
}

function ListRow({
  name,
  kind,
  href,
}: {
  name: string;
  kind: string;
  href?: string;
}) {
  return (
    <li>
      <Link
        href={href ?? "#"}
        target="_blank"
        className="group border-border hover:border-primary/60 flex items-center justify-between gap-4 border-b py-4 transition-colors"
      >
        <span className="font-display text-sm">{name}</span>
        <span className="text-muted-foreground flex items-center gap-3 text-right text-xs">
          {kind}
          <ArrowUpRight className="group-hover:text-primary h-4 w-4 shrink-0 transition-colors" />
        </span>
      </Link>
    </li>
  );
}

const Projects = () => {
  const others = projects.filter((p: Project) => !p.featured);

  return (
    <section id="projects" className="container mx-auto px-5 py-24">
      <div className="glow mb-16 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl md:text-4xl">Projetos em destaque</h2>
        <Link
          href={profile.github}
          target="_blank"
          className="border-primary/70 hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs tracking-widest uppercase transition-colors"
        >
          Ver no GitHub <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grade desencontrada: a coluna da direita desce */}
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-x-12">
        {highlights.map((item, i) => (
          <div key={item.name} className={i % 2 === 1 ? "md:mt-24" : ""}>
            <HighlightCard item={item} />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-28 grid max-w-5xl gap-16 md:grid-cols-2 md:gap-x-12">
        <div>
          <h3 className="text-muted-foreground mb-2 font-sans text-xs tracking-widest uppercase">
            Mais projetos full stack
          </h3>
          <ul>
            {others.map((p) => (
              <ListRow
                key={p.name}
                name={p.name}
                kind={p.kind}
                href={p.demo ?? p.repo}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-muted-foreground mb-2 font-sans text-xs tracking-widest uppercase">
            Estudos de interface
          </h3>
          <ul>
            {studies.map((s) => (
              <ListRow key={s.name} name={s.name} kind={s.kind} href={s.link} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
