"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  bounceIn,
  containerVariants,
  revealVertical,
  fadeInRight,
  fadeInUp,
  mobileViewport,
  desktopViewport,
} from "@/components/utils/animations";

export default function Philosophy() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  return (
    <section
      id="come-lavoro"
      className="bg-grigio-light p-6 lg:p-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start max-w-max-width mx-auto">
        {/* INTESTAZIONE */}
        <motion.div
          className="col-span-full text-center mb-12"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-navy block mb-2">
            Il Mio Approccio
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Come Lavoro
          </h2>
        </motion.div>

        {/* CORPO DELLA SEZIONE */}
        <motion.div
          className="col-span-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* COLONNA SINISTRA: FOTO */}
          <motion.div
            className="lg:col-span-5 w-full h-full aspect-3/4 max-w-md mx-auto lg:max-w-none order-2 lg:order-1"
            variants={revealVertical}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/carlo-philosophy.webp"
                alt="Carlo Astolfi - Ritratto Professionale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </motion.div>

          {/* COLONNA DESTRA: TESTI & BLOCCHI */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="space-y-4 font-sans text-base text-grigio-scuro leading-relaxed mb-10">
              <motion.p variants={fadeInRight}>
                Unisco le mie competenze di <strong>Graphic Designer</strong> a
                quelle di <strong>Web Developer</strong>. Questo mi permette di
                coprire l'intera filiera digitale: progetto e disegno la
                componente visiva e l'esperienza utente (UI/UX) su strumenti
                come <strong>Figma, Photoshop o Adobe XD</strong>, per poi
                tradurre autonomamente i layout in un codice frontend solido e
                responsive basato su <strong>HTML5, CSS3 (SCSS/LESS)</strong> e{" "}
                <strong>JavaScript</strong>.
              </motion.p>
              <motion.p variants={fadeInRight}>
                Recentemente ho ampliato il mio ecosistema di sviluppo
                integrando framework moderni come <strong>React</strong> e{" "}
                <strong>Next.js</strong>, tecnologie all'avanguardia con cui ho
                pensato e realizzato proprio questo sito web.
              </motion.p>

              <motion.p variants={fadeInRight}>
                Laddove il progetto richiede architetture dinamiche o
                integrazioni complesse, mi occupo dello sviluppo backend
                scrivendo codice in <strong>PHP</strong> e strutturando in modo
                sicuro ed efficiente i database di riferimento (
                <strong>MySQL</strong>, <strong>Oracle SQL</strong> o{" "}
                <strong>PostgreSQL</strong>). Gestisco ogni fase assicurando la
                coerenza visiva totale tra il mockup iniziale e l'applicativo
                online.
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
                <strong>Riello</strong> e <strong>Conad</strong>. Questo
                percorso mi ha insegnato a declinare flussi di lavoro agili,
                sicuri e calibrati su misura in base alla scala e alle ambizioni
                del cliente.
              </motion.blockquote>
            </div>

            {/* GRIGLIA DEI SERVIZI INTERNI */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={bounceIn}
            >
              {[
                {
                  src: "/images/icon-code.svg",
                  alt: "Coding",
                  title: "Sviluppo su Misura",
                  text: "Siti dinamici in PHP, WordPress, WooCommerce e soluzioni custom ottimizzate SEO.",
                },
                {
                  src: "/images/icon-design.svg",
                  alt: "Design",
                  title: "Graphic & ADV",
                  text: "Campagne pubblicitarie, cataloghi per la stampa e grafica editoriale coordinata.",
                },
                {
                  src: "/images/icon-ai.svg",
                  alt: "AI",
                  title: "AI & LLM Integration",
                  text: "Studio e sperimentazione attiva nell'uso dei modelli generativi per ottimizzare codice e design.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-all duration-300"
                >
                  <div className="flex justify-center items-center mb-6">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="font-sans text-xs text-grigio-scuro leading-relaxed max-w-xs">
                    <strong>{card.title}</strong>
                    <br />
                    {card.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
