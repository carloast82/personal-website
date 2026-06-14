"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

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
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-50 gap-8 bg-white/90 backdrop-blur-lg overscroll-contain"
            id="mobilenav_container"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  // 1. Chiude il menu mobile
                  setIsOpen(false);

                  // 2. Gestisce lo scroll fluido se è un'ancora interna
                  if (link.href.startsWith("#")) {
                    e.preventDefault(); // Blocca il salto istantaneo
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
                }}
                className="text-2xl font-bold text-navy hover:text-senape transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
