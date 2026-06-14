import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Il resto del sito (Contenuto finto per testare lo scroll sticky) */}
      <main className="max-w-max-width mx-auto px-0 overflow-x-hidden w-full">
        <Hero />
        <Philosophy />
        <Experiences />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
