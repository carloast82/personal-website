import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Courier_Prime } from "next/font/google"; // Importiamo i tuoi 3 font
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTop";

// 1. Configurazione di Inter (Sans-Serif per il Body)
const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

// 2. Configurazione di Playfair Display (Serif per i Titoli)
const fontSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

// 3. Configurazione di Courier Prime (Monospazio per Tag/Codice/Label)
// Nota: Essendo un font non-variabile, specifichiamo i pesi (Regular e Bold)
const fontMono = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Carlo Astolfi | Full-Stack Web Developer & Graphic Designer",
  description:
    "Sviluppo soluzioni web performanti (React, Next.js, PHP) e curo la UI/UX design. Scopri il portfolio di Carlo Astolfi, tra codice e creatività.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
