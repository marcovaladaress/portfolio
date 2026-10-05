import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import Projects from "./_components/projects";
import Journey from "./_components/journey";
import Stacks from "./_components/stacks";
import CTA from "./_components/cta";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Stacks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
