import { profile } from "@/lib/profile";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: profile.github, label: "GitHub", icon: Github },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "E-mail", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="bg-black/25">
      <div className="container mx-auto px-5">
        <div className="border-border flex flex-col items-center justify-between gap-8 border-t py-12 sm:flex-row">
          <p className="font-display text-xl tracking-[0.2em] uppercase">
            Marc<span className="text-primary">o</span> Valadares
          </p>
          <p className="text-muted-foreground text-sm">
            {profile.location} · Brasil
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground pb-10 text-center text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
