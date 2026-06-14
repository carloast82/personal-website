"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  bounceIn,
  containerVariants,
  revealVertical,
  revealLeftToRight,
  revealRightToLeft,
  fadeInRight,
  fadeInUp,
  mobileViewport,
  desktopViewport,
  fadeInLeft,
} from "@/components/utils/animations";

export default function Contact() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  return (
    <section
      id="contatti"
      className="bg-grigio-light p-0 pb-12 lg:pb-0 lg:pt-16 pt-8 border-b border-grigio-chiaro"
    >
      <div className="container-site w-full p-0">
        {/* INTESTAZIONE */}
        <motion.div
          className="col-span-full text-center mb-12"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            Parliamo del tuo progetto
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Contattami
          </h2>
        </motion.div>

        {/* 2. GRIGLIA CONTENUTO (FOTO + CARTE INFO) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:pr-16"
        >
          {/* COLONNA SINISTRA: FOTO PORTRAIT (Senza sfondi per fondersi con la pagina) */}
          <motion.div
            variants={revealLeftToRight}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-100 aspect-3/4 lg:max-w-full">
              <Image
                src="/images/carlo-contact.webp" // Ricordati di caricare la tua foto qui!
                alt="Carlo Astolfi"
                fill
                className="object-cover"
                priority
                sizes="(max-w: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* COLONNA DESTRA: TESTI E CARTE DISPOSTE A GRIGLIA */}
          <div className="lg:col-span-7 space-y-8 px-6 lg:px-0">
            <motion.div variants={bounceIn}>
              <h2 className="text-grigio-scuro mb-4">Mettiamoci in contatto</h2>
              <p className="font-sans text-sm lg:text-base text-grigio-scuro leading-relaxed max-w-2xl">
                Hai un'idea da sviluppare, un sito web da ottimizzare o hai
                bisogno di una consulenza grafica d'impatto? Sono sempre aperto
                a valutare nuove collaborazioni, progetti a lungo termine o
                singole consulenze specialistiche.
              </p>
            </motion.div>

            {/* GRIGLIA DELLE CARTE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* CARD 1: EMAIL */}
              <motion.div
                variants={fadeInLeft}
                className="bg-bianco border border-grigio-chiaro/60 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
              >
                {/* Contenitore Icona azzurrato */}
                <div className="w-12 h-12 rounded-xl bg-azzurro/40 flex items-center justify-center text-navy">
                  <img
                    src="/images/icon-email-navy.webp"
                    alt="Icona Email"
                    className="w-12 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-navy block">
                    Scrivimi via email
                  </span>
                  <a
                    href="mailto:carloast82@gmail.com"
                    className="font-serif text-lg text-navy hover:underline block mt-1 break-all"
                  >
                    carloast82@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* CARD 2: TELEFONO */}
              <motion.div
                variants={fadeInRight}
                className="bg-bianco border border-grigio-chiaro/60 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-azzurro/40 flex items-center justify-center text-navy">
                  <img
                    src="/images/icon-phone-navy.webp"
                    alt="Icona Telefono"
                    className="w-10 h-10 rounded-xl"
                  />
                </div>
                <div>
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-navy block">
                    Chiamami o whatsapp
                  </span>
                  <a
                    href="https://wa.me/393298651737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-navy hover:underline block mt-1"
                  >
                    +39 329.86.51.737
                  </a>
                </div>
              </motion.div>

              {/* CARD 3: AREA ATTIVITÀ (Occupa tutte e 2 le colonne) */}
              <motion.div
                variants={fadeInUp}
                className="sm:col-span-2 bg-bianco border border-grigio-chiaro/60 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-azzurro/40 flex items-center justify-center text-navy shrink-0">
                    <img
                      src="/images/icon-map-navy.webp"
                      alt="Icona Mappa"
                      className="w-10 h-10 rounded-xl"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-navy block">
                      Area di attività principale
                    </span>
                    <h4 className="font-serif text-lg text-navy font-normal mt-0.5">
                      Ferrara, Bologna, Modena e Vicenza
                    </h4>
                  </div>
                </div>

                <div className="border-t border-grigio-chiaro/40 pt-4">
                  <p className="font-sans text-xs lg:text-sm text-grigio-scuro leading-relaxed">
                    Opero principalmente tra le province di Ferrara e Bologna
                    per incontri di persona, ma ho sempre lavorato stabilmente
                    come consulente anche nelle zone di Modena e Vicenza. Sono
                    pienamente disponibile per trasferte e attività operative
                    dirette in queste aree (Automunito).
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
