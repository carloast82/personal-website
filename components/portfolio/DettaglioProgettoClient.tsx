"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  bounceIn,
  mobileViewport,
  desktopViewport,
} from "@/components/utils/animations";

// Importiamo il nostro nuovo componente gallery locale
import GalleryProgetto from "./GalleryProgetto";
import DescrizioneProgetto from "./DescrizioneProgetto";
// Immagina di importare qui anche gli altri blocchi (es: IntestazioneProgetto, InfoProgetto)

export default function DettaglioProgettoClient({
  progetto,
}: {
  progetto: any;
}) {
  const router = useRouter();

  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  return (
    <>
      <div className="w-full px-0 mx-0 mt-10">
        {/* ... Qui ci sarà l'intestazione e la griglia con le InfoProgetto ... */}

        {/* DESCRIZIONE DEL PROGETTO */}
        <DescrizioneProgetto progetto={progetto} />

        {/* 🚀 LA COMPLESSITÀ DELLA GALLERIA ADESSO È RACCHIUSA IN QUESTA RIGA: */}
        <GalleryProgetto progetto={progetto} viewportConfig={viewportConfig} />

        {/* Bottone finale per tornare indietro */}
        <motion.div
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="w-full text-center mb-16"
        >
          <button
            onClick={() => router.push("/#portfolio")}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grigio-scuro hover:text-navy transition-colors mt-10 cursor-pointer"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>{" "}
            Torna al Portfolio
          </button>
        </motion.div>
      </div>
    </>
  );
}
