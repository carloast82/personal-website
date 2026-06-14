"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import corretto
import {
  containerVariants,
  revealVertical,
  revealLeftToRight,
  revealRightToLeft,
  desktopViewport,
  mobileViewport, // Importiamo la nuova costante
} from "@/components/utils/animations";

export default function Portfolio() {
  const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;
  return (
    <section
      id="portfolio"
      className="bg-bianco p-6 lg:p-16 border-t border-grigio-chiaro"
    >
      <div className="container-site">
        <div className="col-span-full text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            Galleria lavori
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Portfolio Progetti
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* BLOCCO 1 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className={gridClass}
          >
            <motion.a
              href="#"
              variants={revealLeftToRight}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
            >
              <Image
                src="/images/portfolio/ariostea.webp"
                alt="Ariostea"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Ariostea
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealVertical}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-2 md:row-span-2"
            >
              <Image
                src="/images/portfolio/Iris_fmg.webp"
                alt="Iris FMG"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Iris FMG
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealRightToLeft}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
            >
              <Image
                src="/images/portfolio/fondazione_icg.webp"
                alt="Semi di Futuro"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Semi di Futuro
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* BLOCCO 2 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className={gridClass}
          >
            <motion.a
              href="#"
              variants={revealRightToLeft}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
            >
              <Image
                src="/images/portfolio/graphicom.webp"
                alt="Graphicom"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Graphicom
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealVertical}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-2 md:row-span-2"
            >
              <Image
                src="/images/portfolio/ferrari.webp"
                alt="Ferrari"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Ferrari S.p.A.
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealVertical}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-1"
            >
              <Image
                src="/images/portfolio/iris_ceramica.webp"
                alt="Bottega d'Arte"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Bottega d'Arte
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealLeftToRight}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-1 md:row-span-1"
            >
              <Image
                src="/images/portfolio/bkey_consulting.webp"
                alt="Bkey Consulting"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Bkey Consulting
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* BLOCCO 3 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className={gridClass}
          >
            <motion.a
              href="#"
              variants={revealLeftToRight}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
            >
              <Image
                src="/images/portfolio/enricocapra.webp"
                alt="Enrico Capra"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Enrico Capra
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealRightToLeft}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-2 md:row-span-2"
            >
              <Image
                src="/images/portfolio/iris_ceramica_group.webp"
                alt="ICG Showrooms"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: ICG Showrooms
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealVertical}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
            >
              <Image
                src="/images/portfolio/farmaciapianeriemauro.webp"
                alt="Farmacia Pianeri e Mauro"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Farmacia Pianeri e Mauro
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* BLOCCO 4 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className={gridClass}
          >
            <motion.a
              href="#"
              variants={revealVertical}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-2 md:row-span-2"
            >
              <Image
                src="/images/portfolio/pagusmedia.webp"
                alt="Pagus Media"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Pagus Media
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealRightToLeft}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-1 md:row-span-2"
            >
              <Image
                src="/images/portfolio/marchesenutrizionista.webp"
                alt="Marchese Nutrizionista"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Marchese Nutrizionista
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#"
              variants={revealLeftToRight}
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-1 md:row-span-1"
            >
              <Image
                src="/images/portfolio/gerber_rauth.webp"
                alt="Gerber Rauth"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-mono text-xs uppercase tracking-wider">
                  Progetto: Gerber Rauth
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
