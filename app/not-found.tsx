"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <main className="max-w-max-width mx-auto px-0 overflow-x-hidden w-full">
        <div className="w-full flex flex-col items-center pb-20 bg-white">
          {/* La tua bellissima immagine 404 */}
          <div className="relative w-full max-w-4xl aspect-video mb-10 overflow-hidden">
            <Image
              src="/images/404-2.webp"
              alt="Pagina o progetto non trovato"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Testi di avviso */}
          <span className="font-mono text-xs uppercase tracking-widest text-navy block mb-">
            Errore 404
          </span>
          <h1 className="font-serif font-semibold text-grigio-scuro text-3xl md:text-4xl mb-4">
            Ops! Questa pagina non esiste
          </h1>
          <p className="text-grigio-medio max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed text-center">
            Il progetto o la pagina che stai cercando potrebbe essere stata
            spostata, eliminata o forse lo slug nell'URL non è corretto.
          </p>

          {/* Bottone per tornare al sicuro in Home */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white bg-navy hover:bg-navy/90 px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            Torna alla Home{" "}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
