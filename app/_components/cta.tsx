import { profile } from "@/lib/profile";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="contact" className="bg-black/25">
      <div className="container mx-auto flex flex-col items-center px-5 pt-28 pb-20 text-center">
        <p className="text-primary text-xs tracking-widest uppercase">
          Vamos conversar
        </p>
        <Link
          href={`mailto:${profile.email}`}
          className="font-display decoration-foreground/30 hover:decoration-primary mt-6 text-xl break-all underline decoration-1 underline-offset-[12px] transition-colors sm:text-3xl md:text-5xl"
        >
          {profile.email}
        </Link>
        <p className="text-muted-foreground mt-10 max-w-md text-sm">
          Aberto a vagas CLT/PJ (remotas, híbridas ou presenciais em São Luís) e
          a projetos freelance. Respondo em até 24h.
        </p>
      </div>
    </section>
  );
};

export default CTA;
