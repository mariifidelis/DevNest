/*Ana Carolina - 10771387         |Mariana Fidelis - 10721308*/


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/home.css";
import "../styles/sobre.css";
import "../styles/projetos.css";
import "../styles/proposta.css";
import "../styles/contrato.css";
import "../styles/login-cadastro.css";
import "../styles/perfil.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevNest",
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behaivior=" ">
      <body>{children}</body>
    </html>
  );
}
