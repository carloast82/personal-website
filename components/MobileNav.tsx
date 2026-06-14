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

  const navLinks = [
    { name: "Chi Sono", href: "#chi-sono" },
    { name: "Come Lavoro", href: "#come-lavoro" },
    { name: "Esperienze", href: "#esperienze" },
    { name: "Competenze", href: "#competenze" },
    { name: "Portfolio", href: "#progetti" },
    { name: "Contatti", href: "#contatti" },
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-navy hover:text-senape transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
