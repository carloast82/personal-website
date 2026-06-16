"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioItem, portfolioItems } from "@/data/portfolioData";
import {
  bounceIn,
  containerVariants,
  revealVertical,
  revealLeftToRight,
  revealRightToLeft,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
  mobileViewport,
  desktopViewport,
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

// 1. Crea un micro-componente per la singola immagine di dettaglio
function ImmagineAnimata({
  item,
  indexImg,
  spanClasses,
}: {
  item: any;
  indexImg: number;
  spanClasses: string;
}) {
  // Stato per salvare l'effetto dopo il caricamento
  const [effettoCasuale, setEffettoCasuale] =
    useState<string>("revealVertical"); // default fisso per il server

  useEffect(() => {
    const effettiDisponibili = [
      "revealLeftToRight",
      "revealVertical",
      "revealRightToLeft",
    ];
    const indiceCasuale = Math.floor(Math.random() * effettiDisponibili.length);
    setEffettoCasuale(effettiDisponibili[indiceCasuale]);
  }, []); // Gira una volta sola sul client appena la pagina è pronta

  return (
    <motion.div
      key={indexImg}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={
        effettoCasuale === "revealLeftToRight"
          ? revealLeftToRight
          : effettoCasuale === "revealRightToLeft"
            ? revealRightToLeft
            : revealVertical
      }
      className={spanClasses}
    >
      <Image
        src={item.path}
        alt={item.alt || "Immagine"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </motion.div>
  );
}

export default function DettaglioProgetto() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  const params = useParams();
  const router = useRouter();
  // 1. Next.js estrae "slug" dal nome della cartella [slug]
  const { slug } = params;

  // 2. Cerchiamo usando il valore dello slug appena recuperato
  const progetto = portfolioItems.find((item) => item.slug === slug);

  // Questa funzione intercetta il click e forza lo scroll fluido via software
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault(); // Blocca il "teletrasporto" di Next.js

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Allinea la sezione in cima allo schermo
      });

      // Aggiorna l'URL del browser con l'ancora senza far saltare la pagina
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  if (!progetto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-bianco p-0">
        <Image
          src="/images/404.webp"
          alt="Progetto non trovato"
          width={1264}
          height={843}
          className="mb-10 max-w-4xl"
        />
        <h2 className="text-2xl font-semibold text-grigio-scuro mb-4">
          Progetto non trovato
        </h2>
        <button
          onClick={() => router.push("/#portfolio")}
          className="text-navy font-mono text-sm uppercase tracking-wider underline"
        >
          Torna al portfolio
        </button>
      </div>
    );
  }

  const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";

  // Raggruppiamo dinamicamente gli elementi per blocco (da 1 a 4) ordinandoli per sequenza
  const blocchiArray = Array.from({ length: 4 }, (_, i) => {
    const bloccoNumero = i + 1;
    // Se non ci sono immagini nel dettaglio, restituisce un array vuoto
    if (!progetto.immaginiDettaglio) return [];
    return progetto.immaginiDettaglio
      .filter((img) => img.blocco === bloccoNumero)
      .sort((a, b) => a.sequenza - b.sequenza);
  });

  return (
    <>
      <Navbar />
      <main className="max-w-max-width mx-auto px-0 overflow-x-hidden w-full">
        <div className="w-full px-0 mx-0 mt-10">
          {/* Intestazione fissa della pagina */}
          <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="w-full text-center mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-navy block mb-2">
              I miei progetti
            </span>
            <h1 className="font-serif font-semibold text-grigio-scuro text-4xl md:text-5xl">
              {progetto.progetto}
            </h1>
            <div className="w-12 h-0.5 bg-navy/20 mx-auto mt-4" />

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

          {/* Griglia Principale: Layout Bilanciato a 12 colonne */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start bg-white pb-16">
            {/* ================= COLONNA SINISTRA (STICKY INFO) ================= */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="lg:col-span-4 space-y-6 font-sans p-8 bg-grigio-light h-full order-2 md:order-1"
            >
              <div>
                {/* Categoria Badge */}
                {progetto.categoria.map((cat, index, arr) => (
                  <motion.span
                    key={index}
                    variants={fadeInLeft}
                    className="inline-block text-grigio-medio font-mono text-[12px] uppercase tracking-wider mb-4 mr-2"
                  >
                    {cat}
                    {index < arr.length - 1 ? " / " : ""}
                  </motion.span>
                ))}
                <motion.h2
                  variants={fadeInLeft}
                  className="text-3xl md:text-4xl font-serif font-bold text-navy leading-tight"
                >
                  Di cosa mi sono occupato in questo progetto
                </motion.h2>
              </div>

              {/* Lista Metadati Tecnici */}
              <div className="space-y-4 text-[13px] border-t border-grigio-chiaro pt-6">
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-[100px_1fr] items-start gap-2"
                >
                  <strong className="text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5">
                    Cliente:
                  </strong>
                  <span className="text-grigio-medio leading-normal">
                    {progetto.cliente}
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-[100px_1fr] items-start gap-2"
                >
                  <strong className="text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5">
                    Anno:
                  </strong>
                  <span className="text-grigio-medio leading-normal">
                    {progetto.anno}
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-[100px_1fr] items-start gap-2"
                >
                  <strong className="text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5">
                    Tipo:
                  </strong>
                  <span className="text-grigio-medio leading-normal">
                    {progetto.tipo.join(", ")}
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-[100px_1fr] items-start gap-2"
                >
                  <strong className="text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5">
                    Attività:
                  </strong>
                  <span className="text-grigio-medio leading-normal">
                    {progetto.attivita.join(", ")}
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="text-grigio-medio text-[14px] leading-relaxed space-y-4 whitespace-pre-line border-t border-grigio-chiaro pt-6 font-light"
              >
                {progetto.descrizione}
              </motion.div>

              <div className="border-t border-grigio-chiaro pt-6">
                <div className="flex flex-wrap gap-2">
                  {progetto.tecnologie.map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={revealLeftToRight}
                      className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  onClick={(e) => handleScroll(e, "gallery")}
                  className="font-serif text-xl font-bold bg-navy hover:bg-bianco text-bianco hover:text-navy border-navy border-2 px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40"
                >
                  Guarda le altre immagini
                </a>
              </motion.div>

              {progetto.notaCrediti && (
                <p className="text-[11px] font-sans italic text-grigio-medio leading-relaxed pt-6 border-t border-dashed border-grigio-chiaro">
                  {progetto.notaCrediti}
                </p>
              )}
            </motion.div>

            {/* ================= COLONNA DESTRA (GALLERY ASIMMETRICA) ================= */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-8 px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto order-1 md:order-2"
            >
              <motion.div
                className="md:col-span-12 w-full h-full aspect-3/4 max-w-md mx-auto lg:max-w-none order-2 lg:order-1"
                variants={revealVertical}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-grigio-chiaro">
                  <Image
                    src={`/images/portfolio/${progetto.path}`}
                    alt="Carlo Astolfi - Ritratto Professionale"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Gallery progetto */}
          <div className="flex flex-col gap-6" id="gallery">
            {blocchiArray.map((itemsInBlocco, index) => {
              const numeroBlocco = index + 1;
              return (
                <motion.div
                  key={`blocco-${numeroBlocco}`}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className={gridClass}
                >
                  {itemsInBlocco.map((item: any, indexImg) => {
                    // ⚡ MODIFICA QUI: Recuperiamo le classi intere mappate staticamente
                    const spanClasses = [
                      "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm",
                      item.smColSpan ? smColMap[item.smColSpan] : "",
                      mdColMap[item.mdColSpan] || "md:col-span-1",
                      mdRowMap[item.mdRowSpan] || "md:row-span-1",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <a
                        key={indexImg}
                        href={item.nomefile}
                        className={spanClasses}
                      >
                        <ImmagineAnimata
                          item={item}
                          indexImg={indexImg}
                          spanClasses="w-full h-full absolute inset-0"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                          <span className="text-white font-mono text-xs uppercase tracking-wider">
                            Progetto: {progetto.progetto}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>

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
      </main>

      <Footer />
    </>
  );
}
