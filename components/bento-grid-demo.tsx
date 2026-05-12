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
      "Projeto de estudo inspirado na identidade visual da Microsoft.",
    header: (
      <Image
        src="/microsoft.png"
        alt="Microsoft"
        width={500}
        height={300}
        className="h-full w-full rounded-xl object-cover"
      />
    ),
    image: "/microsoft.png",
    link: "https://marcovaladaress.github.io/Microsoft-DevClub/",
  },
  {
    title: "WebAI",
    description:
      "Projeto de estudo focado em uma interface moderna, minimalista e responsiva.",
    header: (
      <Image
        src="/WebAI.png"
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
      "Projeto de estudo focado em uma interface moderna, minimalista e responsiva.",
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
      "Projeto de estudo focado em uma interface moderna, minimalista e responsiva.",
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
      "Projeto de estudo focado em uma interface moderna, minimalista e responsiva.",
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
