"use client";

import { motion, Variants } from "framer-motion";

export default function Experiences() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="esperienze"
      className="bg-bianco p-6 lg:p-16 border-t border-grigio-chiaro"
    >
      <div className="container-site max-w-5xl">
        {/* INTESTAZIONE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-full text-center mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            Il mio viaggio
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Esperienza Professionale
          </h2>
        </motion.div>

        {/* CONTENITORE GRIGLIA ESPERIENZE */}
        <div className="flex flex-col">
          {/* BLOCCO 1: ATTUALE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
            variants={blockVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Prima Colonna (Stretta): Periodo in anni */}
            <div className="md:col-span-3 pb-4 md:pb-16 md:pr-12 md:text-right flex items-start justify-start md:justify-end border-l-2 border-navy md:border-l-0 pl-8 md:pl-0">
              <span className="font-mono text-sm font-bold text-navy bg-navy/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none whitespace-nowrap">
                2012 — 2025
              </span>
            </div>

            {/* Seconda Colonna (Larga): Dettaglio con Border Left & Puntino Assoluto */}
            <div className="md:col-span-9 border-l-2 border-navy pl-8 pb-16 relative">
              {/* Il puntino centrato perfettamente sul bordo grazie a -left-[9px] */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-navy border-4 border-bianco ring-1 ring-navy"></div>

              <motion.h2
                variants={fadeInUp}
                className="font-sans font-bold text-lg text-grigio-medio mb-1"
              >
                Sviluppatore web e grafico
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-mono text-xs text-navy uppercase tracking-wider mb-4"
              >
                PAGUS MEDIA S.R.L. UNIPERSONALE – Vicenza (VI) agenzia di
                consulenza, web marketing e analisi / Lavoro Ibrido e Remoto
              </motion.p>
              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-navy bg-grigio-chiaro p-5 my-8 italic text-sm font-sans text-grigio-scuro leading-relaxed"
              >
                <strong>
                  Consulenza Principale presso Iris Ceramica Group (MO):
                </strong>{" "}
                Sviluppo e manutenzione dell'ecosistema di siti web aziendali,
                ottimizzazione SEO a livello di codice e contenuti,
                coordinamento per il rilascio di nuovi progetti digitali.
              </motion.blockquote>

              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-navy bg-grigio-chiaro p-5 my-8 italic text-sm font-sans text-grigio-scuro leading-relaxed"
              >
                <strong>
                  Consulenza per Ferrari Maranello (08/2012 - 07/2013):
                </strong>{" "}
                Ideazione e impaginazione grafica di newsletter, banner per
                portali ufficiali e asset visivi per campagne social e
                advertising digitali.
              </motion.blockquote>
              <motion.ul
                variants={fadeInUp}
                className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10"
              >
                <li>
                  Realizzazioni grafiche layout e asset digitali per siti web,
                  portali e campagne pubblicitarie
                </li>
                <li>
                  Programmazione di siti web custom in PHP/MySQL e sviluppo di
                  temi e plugin per WordPress
                </li>
                <li>Manutenzione e aggiornamento siti Wordpress</li>
                <li>Gestione clienti</li>
                <li>Grafica per ADV social e digitali</li>
              </motion.ul>
            </div>
          </motion.div>

          {/* BLOCCO 2: INTERMEDIO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
            variants={blockVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Prima Colonna (Stretta): Periodo in anni */}
            <div className="md:col-span-3 pb-4 md:pb-16 md:pr-12 md:text-right flex items-start justify-start md:justify-end border-l-2 border-navy md:border-l-0 pl-8 md:pl-0">
              <span className="font-mono text-sm font-bold text-navy bg-navy/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none whitespace-nowrap">
                2008 — 2011
              </span>
            </div>

            {/* Seconda Colonna (Larga): Dettaglio con Border Left & Puntino Assoluto */}
            <div className="md:col-span-9 border-l-2 border-navy pl-8 pb-16 relative">
              {/* Il puntino centrato perfettamente sul bordo grazie a -left-[9px] */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-navy border-4 border-bianco ring-1 ring-navy"></div>

              <motion.h2
                variants={fadeInUp}
                className="font-sans font-bold text-lg text-grigio-medio mb-1"
              >
                Sviluppatore web e grafico
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-mono text-xs text-navy uppercase tracking-wider mb-4"
              >
                BKEY CONSULTING S.R.L. - Vicenza (VI) agenzia di consulenza e
                web marketing / Lavoro Ibrido
              </motion.p>
              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-navy bg-grigio-chiaro p-5 my-8 italic text-sm font-sans text-grigio-scuro leading-relaxed"
              >
                <strong>
                  Consulenza Principale presso Iris Ceramica Group (MO):
                </strong>{" "}
                Sviluppo siti web; collaborazione nella realizzazione e
                l'aggiornamento dei progetti web; ottimizzazione SEO dei siti
                web
              </motion.blockquote>

              <motion.ul
                variants={fadeInUp}
                className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10"
              >
                <li>
                  Realizzazioni grafiche layout e asset digitali per siti web,
                  portali e campagne pubblicitarie
                </li>
                <li>
                  Programmazione di siti web custom in PHP/MySQL e sviluppo di
                  temi e plugin per WordPress
                </li>
                <li>Manutenzione e aggiornamento siti Wordpress</li>
                <li>Gestione clienti</li>
                <li>Grafica per ADV social e digitali</li>
              </motion.ul>
            </div>
          </motion.div>

          {/* BLOCCO 3: STORICO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
            variants={blockVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Prima Colonna (Stretta): Periodo in anni */}
            <div className="md:col-span-3 pb-4 md:pb-16 md:pr-12 md:text-right flex items-start justify-start md:justify-end border-l-2 border-navy md:border-l-0 pl-8 md:pl-0">
              <span className="font-mono text-sm font-bold text-navy bg-navy/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none whitespace-nowrap">
                2007 — 2018
              </span>
            </div>

            {/* Seconda Colonna (Larga): Dettaglio con Border Left & Puntino Assoluto */}
            <div className="md:col-span-9 border-l-2 border-navy pl-8 pb-16 relative">
              {/* Il puntino centrato perfettamente sul bordo grazie a -left-[9px] */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-navy border-4 border-bianco ring-1 ring-navy"></div>

              <motion.h2
                variants={fadeInUp}
                className="font-sans font-bold text-lg text-grigio-medio mb-1"
              >
                Sviluppatore web e grafico
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-mono text-xs text-navy uppercase tracking-wider mb-4"
              >
                DSM Lab - Casalecchio (BO) agenzia di comunicazione multimediale
                / Lavoro in Sede
              </motion.p>

              <motion.ul
                variants={fadeInUp}
                className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10"
              >
                <li>Realizzazione grafiche per web desktop e mobile</li>
                <li>Sviluppo siti web desktop tablet e mobile</li>
              </motion.ul>
            </div>
          </motion.div>

          {/* BLOCCO 4: STORICO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.1 }}
            variants={blockVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Prima Colonna (Stretta): Periodo in anni */}
            <div className="md:col-span-3 pb-4 md:pb-16 md:pr-12 md:text-right flex items-start justify-start md:justify-end border-l-2 border-navy md:border-l-0 pl-8 md:pl-0">
              <span className="font-mono text-sm font-bold text-navy bg-navy/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none whitespace-nowrap">
                2004 — 2006
              </span>
            </div>

            {/* Seconda Colonna (Larga): Dettaglio con Border Left & Puntino Assoluto */}
            <div className="md:col-span-9 border-l-2 border-navy pl-8 pb-16 relative">
              {/* Il puntino centrato perfettamente sul bordo grazie a -left-[9px] */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-navy border-4 border-bianco ring-1 ring-navy"></div>

              <motion.h2
                variants={fadeInUp}
                className="font-sans font-bold text-lg text-grigio-medio mb-1"
              >
                Sviluppatore web e grafico
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-mono text-xs text-navy uppercase tracking-wider mb-4"
              >
                ComunicÓ Advertising – Bologna (BO) studio grafico / Lavoro in
                Sede
              </motion.p>

              <motion.ul
                variants={fadeInUp}
                className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10"
              >
                <li>Realizzazioni grafiche web e per stampa in quadricromia</li>
                <li>Impaginazione di cataloghi e e flyer</li>
                <li>
                  Creazione siti Web in HTML/CSS e Flash (ActionScript 2.0)
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
