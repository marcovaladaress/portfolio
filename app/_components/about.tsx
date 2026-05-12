import {
  Globe,
  LayoutTemplate,
  ShoppingBag,
  FileText,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Plataformas SaaS",
    description: "Multi-tenant, autenticação, permissões e integrações",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description: "Alta conversão, performance e design premium",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Catálogo, carrinho, pagamentos e painel admin",
  },
  {
    icon: FileText,
    title: "Blogs & CMS",
    description: "Conteúdo dinâmico, SEO e painel editorial",
  },
];

const About = () => {
  return (
    <section id="about" className="border-border border-t">
      <div className="container mx-auto px-5 py-20">
        <div className="grid items-start gap-16 md:grid-cols-[1fr_340px]">
          {/* Narrativa */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              Sobre mim
            </p>

            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight">
                Construo produtos digitais do zero — da arquitetura à interface
              </h2>

              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Sou desenvolvedor Full Stack Jr com foco em transformar ideias
                em produtos reais. Não me limito a um único tipo de produto — já
                entreguei plataformas SaaS, landing pages.
              </p>

              <blockquote className="border-primary text-muted-foreground border-l-2 pl-4 text-[15px] italic">
                &quot;Meu produto mais concreto até hoje é o DocJuri —
                plataforma multi-tenant para escritórios jurídicos, em produção
                com cliente ativo.&quot;
              </blockquote>

              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Trabalho com Next.js, TypeScript e Node.js, e me preocupo tanto
                com a experiência do usuário quanto com a arquitetura por baixo.
                Cada projeto começa com o problema real, não com a tecnologia.
              </p>
            </div>
          </div>

          {/* O que construo */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              O que construo
            </p>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border-border bg-card flex items-start gap-3 rounded-xl border p-4"
                >
                  <div className="bg-primary/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    <service.icon className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{service.title}</p>
                    <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
