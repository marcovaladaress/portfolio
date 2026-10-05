import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
export default function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto max-w-4xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        ></BentoGridItem>
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Microsoft",
    description:
      "Página inspirada na identidade visual da Microsoft, feita em HTML e CSS no DevClub.",
    header: (
      <Image
        src="/microsoft.png"
        alt="Microsoft"
        width={500}
        height={300}
        className="h-full w-full rounded-xl object-cover"
      />
    ),
    link: "https://marcovaladaress.github.io/Microsoft-DevClub/",
  },
  {
    title: "WebAI",
    description:
      "Interface em React com useState e useEffect, baseada em um template para estudo.",
    header: (
      <Image
        src="/Wb.png"
        alt="WebAI"
        width={500}
        height={300}
        className="h-full w-full rounded-xl object-cover"
      />
    ),
    link: "https://marcovaladaress.github.io/WebAi/",
  },
  {
    title: "NFT Project",
    description:
      "Landing page de coleção NFT em HTML e CSS, com animações e layout responsivo.",
    header: (
      <Image
        src="/NftProject.png"
        alt="NFT Project"
        width={500}
        height={300}
        className="h-full w-full rounded-xl object-cover"
      />
    ),
    link: "https://marcovaladaress.github.io/NFTLanding/",
  },
  {
    title: "Quantech",
    description:
      "Site institucional de uma empresa de TI, publicado na Vercel.",
    header: (
      <Image
        src="/quantech.png"
        alt="Quantech"
        width={500}
        height={300}
        className="h-full w-full rounded-xl object-cover"
      />
    ),
    link: "https://quantech-it.vercel.app/",
  },
  {
    title: "Agência Brn",
    description:
      "Site de agência em HTML e CSS, com foco em layout responsivo.",
    header: (
      <Image
        src="/brn.png"
        alt="Agência Brn"
        width={500}
        height={300}
        className="h-full w-full rounded-xl object-cover"
      />
    ),
    link: "https://marcovaladaress.github.io/agencia.brn/#",
  },
];
