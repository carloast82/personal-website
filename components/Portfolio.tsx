"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

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

export default function Portfolio() {
  const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";

  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  const animationVariants = {
    revealVertical,
    revealLeftToRight,
    revealRightToLeft,
  };

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
                {itemsInBlocco.map((item: PortfolioItem) => {
                  // ⚡ MODIFICA QUI: Recuperiamo le classi intere dalle mappe statiche
                  const spanClasses = [
                    "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro  row-span-3",
                    item.smColSpan ? smColMap[item.smColSpan] : "",
                    mdColMap[item.mdColSpan] || "md:col-span-1",
                    mdRowMap[item.mdRowSpan] || "md:row-span-1",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  const selectedVariant = animationVariants[item.variant];

                  return (
                    <MotionLink
                      key={item.id}
                      href={`/portfolio/${item.slug}`}
                      variants={selectedVariant}
                      className={spanClasses}
                    >
                      <Image
                        src={item.path}
                        alt={item.progetto}
                        fill
                        className="object-cover transition-transform duration-500 md:group-hover:scale-105 md:group-hover:blur-xs"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-mono text-xs uppercase tracking-wider">
                          Progetto: {item.progetto}
                        </span>
                      </div>
                    </MotionLink>
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
