"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Rimosso delay fisso da qui
    },
  };

  const itemScale: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Gestione impeccabile dei tempi della Hero
  const heroContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1, // Aspetta un istante iniziale prima del titolo
        staggerChildren: 0.12, // Scala temporale perfetta tra gli elementi discendenti
      },
    },
  };

  return (
    <section className="bg-bianco text-nero overflow-hidden border-b border-grigio-chiaro">
      <motion.div
        className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center md:min-h-225"
        id="hero"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        {/* COLONNA SINISTRA: TESTI & INFO */}
        <div className="flex flex-col justify-center order-2 lg:order-1 pb-12 px-6 md:px-0">
          <motion.h1 variants={fadeInUp} className="tracking-tight text-nero">
            Carlo Astolfi
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="tracking-widest text-navy mt-2 mb-6"
          >
            Web Developer & Graphic Designer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
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
            {/* Animiamo i blocchetti interni in sincrono con la comparsa della griglia */}
            <div className="flex items-center gap-3">
              <span className="text-navy font-bold">
                <img
                  src="/images/icon-location.svg"
                  alt="Location"
                  width="24"
                  height="24"
                />
              </span>
              <span>Ferrara, Italia (Automunito)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-navy font-bold">
                <img
                  src="/images/icon-design-2.svg"
                  alt="Design Tools"
                  width="24"
                  height="24"
                />
              </span>
              <span>Adobe Creative Suite & Figma</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-navy font-bold">
                <img
                  src="/images/icon-code.svg"
                  alt="Coding"
                  width="24"
                  height="24"
                />
              </span>
              <span>PHP, JS, HTML5, CSS/SCSS</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-navy font-bold">
                <img
                  src="/images/icon-mobile.svg"
                  alt="Telefono"
                  width="24"
                  height="24"
                />
              </span>
              <span>Mobile: +39 329.86.51.737</span>
            </div>
          </motion.div>

          {/* BOTTONI DI CHIAMATA ALL'AZIONE */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="font-serif text-xl font-bold bg-navy hover:bg-azzurro text-bianco hover:text-navy px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40"
            >
              Guarda il mio Portfolio
            </a>
            <a
              href="#contatti"
              className="font-serif text-xl font-bold bg-senape hover:bg-azzurro text-nero hover:text-navy px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40"
            >
              Contattami
            </a>
          </motion.div>
        </div>

        {/* COLONNA DESTRA: FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Entra armonicamente mentre i testi finiscono
          className="visible md:invisible relative w-full aspect-4/5 lg:aspect-3/4 max-w-xl mx-auto lg:max-w-none order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/carlo-hero.webp"
              alt="Carlo Astolfi - Web Developer & Graphic Designer"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-w: 768px) 90vw, (max-w: 1200px) 45vw, 600px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
