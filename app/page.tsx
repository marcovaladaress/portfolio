import { Separator } from "@/components/ui/separator";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Deliver from "./_components/deliver";
import Stacks from "./_components/stacks";
import { ShineBorderDemo } from "./_components/ShineBorder";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <>
      <header className="bg">
        <Header />
      </header>
      <Separator />
      <main>
        <section className="bg">
          <Hero />
        </section>
        <section className="bg">
          <Deliver />
        </section>
        <section className="bg">
          <Stacks />
        </section>
        <section className="bg pt-10">
          <Projects />
        </section>
      </main>
    </>
  );
}
