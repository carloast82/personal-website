"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Philosophy() {
  // 1. Configurazione per i singoli testi (ascoltano lo stagger del padre)
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 2. Configurazione per le singole card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 3. Il contenitore dei testi gestisce il ritmo della cascata (stagger)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
      },
    },
  };

  // 4. Il contenitore delle card gestisce la cascata finale dei tre blocchi
  const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="filosofia"
      className="bg-grigio-light p-6 lg:p-16 border-b border-grigio-chiaro overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start max-w-max-width mx-auto">
        {/* INTESTAZIONE TITOLO (Innesco ritardato a -300px) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-full text-center mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            Dietro le quinte
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            La Mia Filosofia
          </h2>
        </motion.div>

        {/* COLONNA SINISTRA: FOTO RITRATTO (Innesco ritardato a -300px) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 w-full h-full aspect-3/4 max-w-md mx-auto lg:max-w-none order-2 lg:order-1"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/carlo-philosophy.webp"
              alt="Carlo Astolfi - Ritratto Professionale"
              fill
              className="object-cover"
              sizes="(max-w: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </motion.div>

        {/* COLONNA DESTRA: TESTI E PILASTRI (Innesco ritardato a -300px) */}
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
            variants={containerVariants}
            className="space-y-4 font-sans text-base text-grigio-scuro leading-relaxed mb-10"
          >
            <motion.p variants={fadeInUp}>
              Unisco le mie competenze di <strong>Graphic Designer</strong> a
              quelle di <strong>Web Developer</strong>. Questo mi permette di
              coprire l'intera filiera digitale: progetto e disegno la
              componente visiva e l'esperienza utente (UI/UX) su strumenti come{" "}
              <strong>Figma</strong>, <strong>Photoshop</strong> o{" "}
              <strong>Adobe XD</strong>, per poi tradurre autonomamente i layout
              in un codice frontend solido e responsive basato su{" "}
              <strong>HTML5</strong>, <strong>CSS3</strong> (
              <strong>SCSS/LESS</strong>) e <strong>JavaScript</strong>.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Laddove il progetto richiede architetture dinamiche o integrazioni
              complesse, mi occupo dello sviluppo backend scrivendo codice in{" "}
              <strong>PHP</strong> e strutturando in modo sicuro ed efficiente i
              database di riferimento (<strong>MySQL</strong>,{" "}
              <strong>Oracle SQL</strong> o <strong>PostgreSQL</strong>).{" "}
              Gestisco ogni fase assicurando la coerenza visiva totale tra il
              mockup iniziale e l'applicativo online.
            </motion.p>

            <motion.blockquote
              variants={fadeInUp}
              className="border-l-4 border-navy pl-5 my-8 italic text-grigio-scuro leading-relaxed"
            >
              In oltre vent'anni di attività ho lavorato stabilmente come
              consulente di riferimento sia per dinamiche piccole e medie
              imprese locali, sia per leader di mercato e multinazionali di
              prestigio globale come <strong>Ferrari</strong>,{" "}
              <strong>Maserati</strong>, <strong>Iris Ceramica Group</strong>,{" "}
              <strong>Riello</strong> e <strong>Conad</strong>. Questo percorso
              mi ha insegnato a declinare flussi di lavoro agili, sicuri e
              calibrati su misura in base alla scala e alle ambizioni del
              cliente.
            </motion.blockquote>
          </motion.div>

          {/* RIGA INFERIORE: LE 3 CARD (Innesco calibrato a -150px per la fine del blocco) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.1 }}
            variants={cardContainerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* CARD 1: SVILUPPO SU MISURA */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-shadow duration-300"
            >
              <div className="flex justify-center items-center">
                <img
                  src="/images/icon-code.svg"
                  alt="Coding"
                  width="39"
                  height="30"
                  className="text-navy mb-6"
                />
              </div>
              <p className="font-sans text-xs text-grigio-medio leading-relaxed max-w-xs">
                <strong>Sviluppo su Misura</strong>
                <br />
                Siti dinamici in PHP, WordPress, WooCommerce e soluzioni custom
                ottimizzate SEO.
              </p>
            </motion.div>

            {/* CARD 2: GRAPHIC & ADV */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-shadow duration-300"
            >
              <div className="flex justify-center items-center">
                <img
                  src="/images/icon-design.svg"
                  alt="Coding"
                  width="31"
                  height="30"
                  className="text-navy mb-6"
                />
              </div>
              <p className="font-sans text-xs text-grigio-medio leading-relaxed max-w-xs">
                <strong>Graphic & ADV</strong>
                <br />
                Campagne pubblicitarie, cataloghi per la stampa e grafica
                editoriale coordinata.
              </p>
            </motion.div>

            {/* CARD 3: AI & LLM INTEGRATION */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-shadow duration-300"
            >
              <div className="flex justify-center items-center">
                <img
                  src="/images/icon-ai.svg"
                  alt="Coding"
                  width="30"
                  height="30"
                  className="text-navy mb-6"
                />
              </div>
              <p className="font-sans text-xs text-grigio-medio leading-relaxed max-w-xs">
                <strong>AI & LLM Integration</strong>
                <br />
                Studio e sperimentazione attiva nell'uso dei modelli generativi
                per ottimizzare codice e design.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
