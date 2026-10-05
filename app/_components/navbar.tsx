"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Trajetória", href: "#journey" },
  { label: "Stack", href: "#stack" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-border border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="#"
            className="font-display text-sm tracking-[0.2em] uppercase"
          >
            Marc<span className="text-primary">o</span> Valadares
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="border-foreground/60 hover:border-primary hover:text-primary rounded-full border px-5 py-2 text-xs tracking-widest uppercase transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="mt-12 flex flex-col gap-6 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="#contact"
                    className="bg-primary text-primary-foreground mt-4 rounded-full px-5 py-3 text-center text-xs font-semibold tracking-widest uppercase"
                  >
                    Contato
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
