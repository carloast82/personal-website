"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import {
  containerVariants,
  revealVertical,
  revealLeftToRight,
  revealRightToLeft,
  desktopViewport,
  mobileViewport,
} from "@/components/utils/animations";

export default function Portfolio() {
  const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";

  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  // Mappa di associazione tra i tipi di stringa nel file dati e le varianti importate
  const animationVariants = {
    revealVertical,
    revealLeftToRight,
    revealRightToLeft,
  };

  // Raggruppiamo dinamicamente gli elementi per blocco (da 1 a 4) ordinandoli per sequenza
  const blocchiArray = Array.from({ length: 4 }, (_, i) => {
    const bloccoNumero = i + 1;
    return portfolioItems
      .filter((item) => item.blocco === bloccoNumero)
      .sort((a, b) => a.sequenza - b.sequenza);
  });

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
          {/* Cicliamo i 4 blocchi della griglia asimmetrica */}
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
                {/* Cicliamo i progetti appartenenti al blocco corrente */}
                {itemsInBlocco.map((item: PortfolioItem) => {
                  // Calcoliamo le classi dinamiche di span per il responsive
                  const spanClasses = [
                    "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm",
                    item.smColSpan ? `sm:col-span-${item.smColSpan}` : "",
                    `md:col-span-${item.mdColSpan}`,
                    `md:row-span-${item.mdRowSpan}`,
                  ]
                    .filter(Boolean)
                    .join(" ");

                  // Selezioniamo la variante corretta di animazione
                  const selectedVariant = animationVariants[item.variant];

                  return (
                    <motion.a
                      key={item.id}
                      href={`/portfolio/${item.slug}`}
                      variants={selectedVariant}
                      className={spanClasses}
                    >
                      <Image
                        src={`/images/portfolio/${item.path}`}
                        alt={item.progetto}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-mono text-xs uppercase tracking-wider">
                          Progetto: {item.progetto}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
