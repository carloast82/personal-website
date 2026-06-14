import type { Metadata } from "next";
import { Inter, Playfair_Display, Courier_Prime } from "next/font/google"; // Importiamo i tuoi 3 font
import "./globals.css";

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
  title: "Carlo Astolfi | Web Developer & Graphic Designer",
  description: "Portfolio professionale di Carlo Astolfi",
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
        {children}
      </body>
    </html>
  );
}
