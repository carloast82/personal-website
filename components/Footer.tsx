"use client";

import Link from "next/link";

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

export default function Footer() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="bg-transparent w-full"
    >
      <div className="max-w-max-width mx-auto bg-[#111622] text-white p-8 lg:p-16 pb-12">
        {/* GRIGLIA PRINCIPALE DEL FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12">
          {/* COLONNA 1: LOGO E FILOSOFIA (4 Colonne su Desktop) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            {/* Logo integrato con testo ed elemento geometrico */}
            <div className="flex items-center gap-3">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                // Cambiato w-50 (che non esiste) in un valore esplicito w-[200px]
                // Aggiunto relative per il corretto funzionamento di 'fill'
                className="relative w-50 h-20 m-auto md:ml-0"
              >
                <Image
                  src="/images/logo-carloastolfi-white.webp"
                  alt="Logo Carlo Astolfi"
                  className="object-contain" // Rimosso w-50 h-auto perché gestiti dal padre
                  fill
                />
              </motion.div>
            </div>

            {/* Descrizione Professionale */}
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm pt-2 text-center md:text-left">
              <strong className="text-white/80 font-semibold">
                Sviluppatore Web & Graphic Designer
              </strong>
              <br /> con oltre 20 anni di esperienza nella progettazione e
              programmazione di piattaforme digitali.
            </p>
          </div>

          {/* COLONNA 2: NAVIGAZIONE INTERNA (4 Colonne su Desktop, divisa in 2 sub-colonne) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4  text-center md:text-left">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Esplora il sito
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2">
              <div className="space-y-3">
                <a
                  href="#chi-sono"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Chi Sono
                </a>
                <a
                  href="#esperienze"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Esperienze
                </a>
                <a
                  href="#portfolio"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Portfolio
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#come-lavoro"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Come Lavoro
                </a>
                <a
                  href="#competenze"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Competenze
                </a>

                <a
                  href="#contatti"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Contatti
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA 3: LINK ESTERNI / DOWNLOAD (3 Colonne su Desktop) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Risorse esterne
            </h4>

            <div className="flex flex-col items-center md:items-start gap-4 pt-2">
              {/* Download CV */}
              <a
                href="/CV-Carlo-Astolfi-07-2026.pdf"
                download
                className="group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-none flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
                  <Image
                    src="/images/download.webp"
                    alt="Download CV"
                    className="w-4 h-4 object-contain"
                    width={16}
                    height={16}
                  />
                </div>
                <span>Curriculum Vitae PDF</span>
              </a>

              {/* Profilo LinkedIn */}
              <a
                href="https://www.linkedin.com/in/carloastolfi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-none flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
                  <Image
                    src="/images/Vector.webp"
                    alt="LinkedIn"
                    className="w-4 h-4 object-contain"
                    width={16}
                    height={16}
                  />
                </div>
                <span>Il mio profilo LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* LINEA DI SEPARAZIONE E COPYRIGHT BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-white/30 tracking-wide text-center sm:text-left">
            © 2026 Carlo Astolfi. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 font-mono text-[10px] text-white/30">
            <Link
              href="/privacy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
