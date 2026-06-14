"use client";

import Image from "next/image";
import MobileNav from "./MobileNav";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  bounceIn,
  fadeInLeft,
  mobileViewport,
  desktopViewport,
  fadeInDown,
  fadeInUp,
  containerVariants,
  fadeInRight,
} from "@/components/utils/animations";

export default function Navbar() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  const navLinks = [
    { name: "Chi Sono", href: "#chi-sono" },
    { name: "Come Lavoro", href: "#come-lavoro" },
    { name: "Esperienze", href: "#esperienze" },
    { name: "Competenze", href: "#competenze" },
    { name: "Portfolio Progetti", href: "#progetti" },
    { name: "Contatti", href: "#contatti" },
  ];

  const MotionLink = motion.create(Link);

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={viewportConfig}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-none transition-all"
    >
      <div className="container-site h-30 flex items-center justify-between">
        {/* LOGO (Ispirato al tuo monogramma su Desktop.jpg) */}

        <MotionLink
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={1}
          viewport={viewportConfig}
          href="/"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/images/logo-carloastolfi.webp"
            alt="Logo Carlo Astolfi"
            width={192}
            height={89}
            preload
          />
        </MotionLink>

        {/* MENU DI NAVIGAZIONE (Centrale/Destra) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-gray-600 hover:text-blue transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTTONE CALL TO ACTION (Scrica il mio CV) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          custom={2}
          viewport={viewportConfig}
          className="hidden md:block"
        >
          <Link
            href="/cv_Astolfi_Carlo.pdf" // Metterai il file dentro la cartella /public
            download
            className="font-sans text-xs font-semibold tracking-wider uppercase bg-navy hover:bg-senape/90 text-white hover:text-nero px-5 py-2.5 rounded-lg transition-all duration-300 block text-center"
          >
            Il mio curriculum in PDF
          </Link>
        </motion.div>

        <MobileNav />
      </div>
    </motion.header>
  );
}
