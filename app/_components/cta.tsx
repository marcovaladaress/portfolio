import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="contact" className="container mx-auto px-5 py-24">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Contato
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Tem um problema que precisa virar produto?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Estou disponível para projetos freelance, posições CLT/PJ e
          colaborações. Respondo em até 24h.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link
              href="https://www.linkedin.com/in/marcoaureliovaladares/"
              target="_blank"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Falar no LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:marcovf99@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              marcovf99@gmail.com
            </Link>
          </Button>
        </div>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="https://github.com/marcovaladaress"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marcoaureliovaladares/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:marcovf99@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
