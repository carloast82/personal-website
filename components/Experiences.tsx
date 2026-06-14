"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiencesData";
import {
  bounceIn,
  containerVariants,
  fadeInLeft,
  fadeInRight,
  mobileViewport,
  desktopViewport,
} from "@/components/utils/animations";

export default function Experiences() {
  const viewportConfig =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileViewport
      : desktopViewport;

  return (
    <section
      id="esperienze"
      className="bg-bianco p-6 lg:p-16 border-t border-grigio-chiaro"
    >
      <div className="container-site max-w-5xl">
        <motion.div
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            Il mio viaggio
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Esperienza Professionale
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-12 gap-0"
            >
              <motion.div
                variants={fadeInLeft}
                className="md:col-span-3 pb-4 md:pb-16 md:pr-12 md:text-right flex items-start justify-start md:justify-end border-l-2 border-navy md:border-l-0 pl-8 md:pl-0"
              >
                <span className="font-mono text-sm font-bold text-navy bg-navy/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none whitespace-nowrap">
                  {exp.year}
                </span>
              </motion.div>

              <div className="md:col-span-9 border-l-2 border-navy pl-8 pb-16 relative">
                <motion.div
                  variants={bounceIn}
                  className="absolute -left-2.25 top-1.5"
                >
                  <div className="w-4 h-4 rounded-full bg-navy border-4 border-bianco ring-1 ring-navy"></div>
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <h2 className="font-sans font-bold text-lg text-grigio-medio mb-1">
                    {exp.title}
                  </h2>
                  <p className="font-mono text-xs text-navy uppercase tracking-wider mb-4">
                    {exp.company}
                  </p>
                  {exp.content}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
