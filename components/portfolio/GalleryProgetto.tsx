"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import {
  containerVariants,
  revealVertical,
  revealLeftToRight,
  revealRightToLeft,
} from "@/components/utils/animations";

// ⚡ MAPPE STATICHE PER LE CLASSI INTERE (Infallibili per la produzione)
const smColMap: Record<number, string> = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
};

const mdColMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const mdRowMap: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
  4: "md:row-span-4",
};

interface GalleryProgettoProps {
  progetto: any;
  viewportConfig: any;
}

export default function GalleryProgetto({
  progetto,
  viewportConfig,
}: GalleryProgettoProps) {
  // Lo stato della Lightbox lo gestiamo qui dentro, isolato dal resto del mondo!
  const [index, setIndex] = useState(-1);

  const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";

  // Raggruppiamo dinamicamente gli elementi per blocco (da 1 a 4) ordinandoli per sequenza
  const blocchiArray = Array.from({ length: 4 }, (_, i) => {
    const bloccoNumero = i + 1;
    if (!progetto.immaginiDettaglio) return [];
    return progetto.immaginiDettaglio
      .filter((img: any) => img.blocco === bloccoNumero)
      .sort((a: any, b: any) => a.sequenza - b.sequenza);
  });

  // Generazione array piatto per la Lightbox
  const tutteLeImmagini = blocchiArray
    .flatMap((blocco: any) => blocco)
    .map((item: any) => ({
      src: item.path,
      alt: item.alt,
    }));

  const effettiDisponibili = [
    "revealLeftToRight",
    "revealVertical",
    "revealRightToLeft",
  ];

  return (
    <>
      <div className="flex flex-col gap-6 px-6 md:px-10" id="gallery">
        {blocchiArray.map((itemsInBlocco, bIndex) => {
          const numeroBlocco = bIndex + 1;
          return (
            <motion.div
              key={`blocco-${numeroBlocco}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={gridClass}
            >
              {itemsInBlocco.map((item: any, indexImg: number) => {
                const spanClasses = [
                  "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro cursor-pointer",
                  item.smColSpan ? smColMap[item.smColSpan] : "row-span-2",
                  mdColMap[item.mdColSpan] || "md:col-span-1",
                  mdRowMap[item.mdRowSpan] || "md:row-span-1",
                ]
                  .filter(Boolean)
                  .join(" ");

                const posizioneGlobale = tutteLeImmagini.findIndex(
                  (img: any) => img.src === item.path,
                );

                const effetto =
                  effettiDisponibili[
                    posizioneGlobale % effettiDisponibili.length
                  ];
                const selectedVariant =
                  effetto === "revealLeftToRight"
                    ? revealLeftToRight
                    : effetto === "revealRightToLeft"
                      ? revealRightToLeft
                      : revealVertical;

                return (
                  <motion.div
                    key={indexImg}
                    onClick={() => setIndex(posizioneGlobale)}
                    className={`${spanClasses} transform-gpu isolate`} // 👈 1. FORZA il motore grafico dello smartphone a non nascondere il contenuto
                    variants={selectedVariant}
                  >
                    <Image
                      src={item.path}
                      alt={item.alt || "Immagine"}
                      fill
                      // 👈 2. Spostati gli effetti hover solo su schermi medi/grandi (md:), aggiunto z-0
                      className="object-cover z-0 transition-transform duration-500 md:group-hover:scale-105 md:group-hover:blur-xs"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                      <span className="text-white font-mono text-xs uppercase tracking-wider">
                        Progetto: {item.alt}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          );
        })}
      </div>

      {/* LIGHTBOX OVERLAY IMMAGINI */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={tutteLeImmagini}
      />
    </>
  );
}
