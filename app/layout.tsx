import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcovsfernandes.com"),
  title: "Marco Valadares — Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack Júnior (Next.js, React, TypeScript, Node.js, PostgreSQL) em São Luís – MA. Criador do DocJuri, SaaS de gestão de contratos jurídicos em produção.",
  openGraph: {
    title: "Marco Valadares — Desenvolvedor Full Stack",
    description:
      "Criador do DocJuri, SaaS jurídico em produção. Next.js, TypeScript, Node.js e PostgreSQL.",
    url: "/",
    siteName: "Marco Valadares",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/docjuri-login.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
