import { Separator } from "@/components/ui/separator";
import Header from "./_components/header";
import Hero from "./_components/hero";

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
      </main>
    </>
  );
}
