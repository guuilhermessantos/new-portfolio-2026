import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Santos | Desenvolvedor Full Stack",
  description: "Portfólio profissional moderno apresentando projetos e habilidades em desenvolvimento web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
