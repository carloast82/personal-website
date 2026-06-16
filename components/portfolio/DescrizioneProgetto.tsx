"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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

const viewportConfig =
  typeof window !== "undefined" && window.innerWidth < 768
    ? mobileViewport
    : desktopViewport;

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

export default function DescrizioneProgetto({ progetto }: { progetto: any }) {
  const router = useRouter();

  return (
    <>
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
            {progetto.categoria.map((cat: string, index: number, arr: any) => (
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
              {progetto.tecnologie.map((tech: string, index: number) => (
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
                src={progetto.path}
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
    </>
  );
}
