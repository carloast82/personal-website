import { Variants } from "framer-motion";

export const desktopViewport = { once: true, amount: 0.2 };
export const mobileViewport = { once: true, margin: "-300px 0px 0px 0px" };

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i?: number) => ({
    // Il punto di domanda rende "i" opzionale
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 6,
      // Se "i" esiste (è un numero), applica il delay. Altrimenti (undefined) non mettere nulla.
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -80 }, // Parte da 100px sopra
  visible: (i?: number) => ({
    opacity: 1,
    y: 0, // Arriva alla posizione originale
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i?: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: (i?: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};

export const revealVertical: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: (i?: number) => ({
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1] as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};
export const revealLeftToRight: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0% 100% 0% 0%)", // Taglia totalmente partendo dal bordo destro
  },
  visible: (i?: number) => ({
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)", // Si apre verso destra
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1] as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};
export const revealRightToLeft: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0% 0% 0% 100%)", // Taglia totalmente partendo dal bordo sinistro
  },
  visible: (i?: number) => ({
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)", // Si apre verso sinistra
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1] as const,
      ...(typeof i === "number" && { delay: i * 0.2 }),
    },
  }),
};
