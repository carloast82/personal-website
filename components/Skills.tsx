"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  bounceIn,
  fadeInLeft,
  mobileViewport,
  desktopViewport,
} from "@/components/utils/animations";

export default function Skills() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  return (
    <section
      id="competenze"
      className="bg-grigio-light p-6 lg:p-16 border-t border-grigio-chiaro"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
        {/* INTESTAZIONE */}
        <motion.div
          className="col-span-full text-center mb-12"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            I miei ferri del mestiere
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Competenze Tecniche
          </h2>
        </motion.div>

        {/* GRIGLIA MACRO-AREE (3 Colonne su Desktop) */}

        {/* CARD 1: SVILUPPO E MARKUP */}
        <motion.div
          variants={fadeInLeft}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="lg:col-span-4 w-full h-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1"
        >
          <div className="bg-bianco border border-grigio-chiaro/60 rounded-2xl p-8 shadow-sm flex flex-col h-full">
            <h3 className="font-semibold text-lg text-navy mb-4 flex items-center">
              <Image
                src="/images/icon-code.svg"
                alt="Sviluppo e Markup"
                className="w-8 h-8 mr-2"
                width={32}
                height={32}
              />
              Sviluppo e Markup
            </h3>
            <p className="font-sans text-xs text-grigio-medio leading-relaxed max-w-xs">
              Scrittura di codice solido, semantico ed efficiente per garantire
              elevate prestazioni delle piattaforme web.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                PHP
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                HTML5
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                CSS3
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                SCSS
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                JavaScript
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                React
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Next.js
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Tailwind CSS
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                jQuery
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                MySql
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Oracle SQL
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Postgres SQL
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                RegEx
              </span>
            </div>
            <div className="mt-auto">
              <div className="border-t border-grigio-chiaro/60 my-6"></div>
              <ul className="list-image-[url(/images/checked.svg)] list-inside font-sans text-xs text-grigio-scuro leading-relaxed mb-2">
                <li className="pb-2">
                  Strutturazione di database relazionali e ottimizzazione query
                  SQL
                </li>
                <li className="pb-2">
                  Integrazione di fogli di stile modulari con pre-processori
                  (Sass) per mantenere codice CSS scalabile e manutenibile
                </li>
                <li>
                  Sviluppo di interfacce responsive utilizzando framework CSS
                  come Tailwind e Bootstrap
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: DESIGN E UX */}
        <motion.div
          variants={fadeInLeft}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="lg:col-span-4 w-full h-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1"
        >
          <div className="bg-bianco border border-grigio-chiaro/60 rounded-2xl p-8 shadow-sm flex flex-col h-full">
            <h3 className="font-semibold text-lg text-navy mb-4 flex items-center">
              <Image
                src="/images/icon-design.svg"
                alt="Design e UX"
                className="w-8 h-8 mr-2"
                width={32}
                height={32}
              />
              Design e UX
            </h3>
            <p className="font-sans text-xs text-grigio-medio leading-relaxed max-w-xs">
              Cura del dettaglio visivo, equilibrio tipografico, layout web
              avanzati e content design per l'ADV Social.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Adobe Creative Suite
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Photoshop
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Illustrator
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Adobe XD
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                InDesign
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Figma
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                UI/UX Design
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Brand Identity
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Grafica Editoriale
              </span>
            </div>
            <div className="mt-auto">
              <div className="border-t border-grigio-chiaro/60 my-6"></div>
              <ul className="list-image-[url(/images/checked.svg)] list-inside font-sans text-xs text-grigio-scuro leading-relaxed mb-2">
                <li className="pb-2">
                  Fotoritocco avanzato e creazione di layout complessi per
                  cataloghi di prodotto digitali (Photoshop)
                </li>
                <li className="pb-2">
                  Prototipazione e progettazione di interfacce web responsive
                  (Figma)
                </li>
                <li>
                  Ideazione e sviluppo visivo di campagne grafiche per ADV
                  Social
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: CMS E MARKETING */}
        <motion.div
          variants={fadeInLeft}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="lg:col-span-4 w-full h-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1"
        >
          <div className="bg-bianco border border-grigio-chiaro/60 rounded-2xl p-8 shadow-sm flex flex-col h-full">
            <h3 className="font-semibold text-lg text-navy mb-4 flex items-center">
              <Image
                src="/images/icon-marketing.svg"
                alt="CMS e Marketing"
                className="w-8 h-8 mr-2"
                width={32}
                height={32}
              />
              CMS e Marketing
            </h3>
            <p className="font-sans text-xs text-grigio-medio leading-relaxed max-w-xs">
              Gestione CMS, ottimizzazione SEO e configurazione di strumenti
              analitici per campagne di marketing efficaci.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                WordPress
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                WooCommerce
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                PrestaShop
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Ottimizzazione SEO
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Google Analytics
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Tag Manager
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Elementor
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Divi
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Email Marketing
              </span>
              <span className="font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md">
                Newsletter Design
              </span>
            </div>
            <div className="mt-auto">
              <div className="border-t border-grigio-chiaro/60 my-6"></div>
              <ul className="list-image-[url(/images/checked.svg)] list-inside font-sans text-xs text-grigio-scuro leading-relaxed mb-2">
                <li className="pb-2">
                  Configurazione e personalizzazione completa di store
                  e-commerce con WordPress/WooCommerce e PrestaShop
                </li>
                <li className="pb-2">
                  Ottimizzazione SEO, tuning del codice di output per migliorare
                  il posizionamento sui motori di ricerca
                </li>
                <li>
                  Tracciamento eventi di conversione (GTM) e analisi traffico
                  utenti (Google Analytics)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
