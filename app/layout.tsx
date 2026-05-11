import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Marco Valadares — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack focado em SaaS com Next.js, TypeScript e Node.js. Criador do DocJuri, plataforma jurídica em produção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
