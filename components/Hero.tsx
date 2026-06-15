"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  bounceIn,
  containerVariants,
  revealVertical,
  fadeInUp,
  fadeInRight,
  fadeInLeft,
} from "@/components/utils/animations";

export default function Hero() {
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

  return (
    <section
      className="bg-bianco text-nero overflow-hidden border-b border-grigio-chiaro"
      id="chi-sono"
    >
      {/* Trasformiamo il div principale in un motion.div per attivare le varianti */}
      <motion.div
        className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center md:min-h-225"
        id="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* COLONNA SINISTRA: TESTI & INFO */}
        <div className="flex flex-col justify-center order-2 lg:order-1 pb-12 px-6 md:px-0">
          {/* TITOLO: Mascherato con overflow-hidden per farlo salire dal basso */}
          <div className="overflow-hidden py-1">
            <motion.h1
              variants={fadeInLeft}
              className="tracking-tight text-nero origin-bottom"
            >
              Carlo Astolfi
            </motion.h1>
          </div>

          <motion.h2
            variants={fadeInRight}
            className="tracking-widest text-navy mt-2 mb-6"
          >
            Web Developer / Graphic Designer
          </motion.h2>

          <motion.p
            variants={fadeInLeft}
            className="text-lg text-grigio-scuro max-w-xl leading-relaxed mb-8 lg:max-w-125"
          >
            Sviluppo soluzioni web performanti e curo l'estetica visiva dei
            brand. Con oltre 15 anni di esperienza, unisco una solida
            programmazione tecnica a una forte sensibilità per il design e la
            comunicazione.
          </motion.p>

          {/* GRIGLIA CONTATTI RAPIDI */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg font-sans text-sm text-grigio-scuro"
          >
            <div className="flex items-start gap-3">
              <span className="text-navy font-bold">
                <Image
                  src="/images/icon-location.svg"
                  alt="Location"
                  width="24"
                  height="24"
                  preload
                />
              </span>
              <span>Ferrara, Italia</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-navy font-bold">
                <Image
                  src="/images/icon-design-2.svg"
                  alt="Design Tools"
                  width="24"
                  height="24"
                  preload
                />
              </span>
              <span>Adobe Creative Suite & Figma</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-navy font-bold">
                <Image
                  src="/images/icon-code.svg"
                  alt="Coding"
                  width="24"
                  height="24"
                  preload
                />
              </span>
              <span>
                PHP, JS, HTML5, CSS/SCSS
                <br />
                REACT, NEXT.JS, NODE.JS
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-navy font-bold">
                <Image
                  src="/images/icon-mobile.svg"
                  alt="Telefono"
                  width="24"
                  height="24"
                  preload
                />
              </span>
              <span>Mobile: +39 329.86.51.737</span>
            </div>
          </motion.div>

          {/* BOTTONI DI CHIAMATA ALL'AZIONE */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              onClick={(e) => handleScroll(e, "portfolio")}
              className="font-serif text-xl font-bold bg-navy hover:bg-bianco text-bianco hover:text-navy border-navy border-2 px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40"
            >
              Guarda il mio Portfolio
            </a>
            <a
              href="#contatti"
              onClick={(e) => handleScroll(e, "contatti")}
              className="font-serif text-xl font-bold bg-senape border-senape border-2 hover:bg-bianco text-nero hover:text-senape px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40"
            >
              Contattami
            </a>
          </motion.div>
        </div>

        {/* COLONNA DESTRA: FOTO */}
        <motion.div
          variants={fadeInUp}
          className="visible md:invisible relative w-full aspect-4/5 lg:aspect-3/4 max-w-xl mx-auto lg:max-w-none order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/carlo-hero.webp"
              alt="Carlo Astolfi - Web Developer & Graphic Designer"
              fill
              preload
              className="object-cover object-top"
              sizes="(max-w: 768px) 90vw, (max-w: 1200px) 45vw, 600px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
