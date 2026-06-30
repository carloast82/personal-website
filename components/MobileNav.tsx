"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Blocca lo scroll della pagina quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

      // Aggiorna l'URL del browser con l'ancora (es: #filosofia) senza far saltare la pagina
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const navLinks = [
    { name: "Chi Sono", href: "#chi-sono", scrollto: "chi-sono" },
    { name: "Come Lavoro", href: "#come-lavoro", scrollto: "come-lavoro" },
    { name: "Esperienze", href: "#esperienze", scrollto: "esperienze" },
    { name: "Competenze", href: "#competenze", scrollto: "competenze" },
    { name: "Portfolio Progetti", href: "#portfolio", scrollto: "portfolio" },
    { name: "Contatti", href: "#contatti", scrollto: "contatti" },
  ];

  return (
    <div className="md:hidden">
      {/* Bottone Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 mr-5 flex flex-col gap-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-white" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-white" : ""}`}
        ></span>
      </button>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-30 px-10 gap-4 bg-grigio-scuro/98  backdrop-blur-md overscroll-contain"
            id="mobilenav_container"
          >
            {navLinks.map((link) => {
              // Calcoliamo l'URL corretto: se siamo in una pagina interna e il link è un'ancora,
              // lo facciamo puntare alla Home (es: /#chi-sono)
              const isAnchor = link.href.startsWith("#");
              const computedHref =
                isAnchor && pathname !== "/" ? `/${link.href}` : link.href;

              return (
                <a
                  key={link.name}
                  href={computedHref} // 👈 Usa l'URL ricalcolato
                  onClick={(e) => {
                    // 1. Chiude sempre il menu mobile
                    setIsOpen(false);

                    // 2. Gestisce lo scroll fluido SOLO se siamo effettivamente in Home Page
                    if (isAnchor) {
                      if (pathname === "/") {
                        e.preventDefault(); // Blocca il salto istantaneo solo se siamo in Home
                        const targetId = link.href.replace("#", "");
                        const element = document.getElementById(targetId);

                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          window.history.pushState(null, "", link.href);
                        }
                      }
                      // Se pathname !== "/", NON blocchiamo il comportamento (e.preventDefault non scatta):
                      // il browser cambierà pagina tornando alla Home Page all'ancora corretta.
                    }
                  }}
                  className="w-full text-center font-serif text-2xl font-medium text-white hover:text-grigio-chiaro transition-colors py-2"
                >
                  {link.name}
                </a>
              );
            })}

            <div className="flex flex-col items-center md:items-start border-t border-bianco pt-8 mt-8 gap-4 w-full">
              {/* Download CV */}
              <a
                href="/CV-Carlo-Astolfi-07-2026.pdf"
                download
                className="group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-none flex items-center justify-center group-hover:text-white transition-all shrink-0">
                  <Image
                    src="/images/download.webp"
                    alt="Download CV"
                    className="w-6 h-6 object-contain"
                    width={24}
                    height={24}
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
                    className="w-6 h-6 object-contain"
                    width={24}
                    height={24}
                  />
                </div>
                <span>Il mio profilo LinkedIn</span>
              </a>
            </div>

            <div className="border-t border-white pt-8 mt-8 flex flex-col w-full">
              <p className="font-mono text-[12px] text-white tracking-wide text-center">
                © 2026 Carlo Astolfi. Tutti i diritti riservati.
                <br />
                <Link
                  href="/privacy"
                  className="hover:text-white/60 transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
