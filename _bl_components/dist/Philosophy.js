"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
function Philosophy() {
    // 1. Configurazione per i singoli testi (ascoltano lo stagger del padre)
    var fadeInUp = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    // 2. Configurazione per le singole card
    var cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    // 3. Il contenitore dei testi gestisce il ritmo della cascata (stagger)
    var containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.15
            }
        }
    };
    // 4. Il contenitore delle card gestisce la cascata finale dei tre blocchi
    var cardContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.12
            }
        }
    };
    return (React.createElement("section", { id: "filosofia", className: "bg-grigio-light p-6 lg:p-16 border-b border-grigio-chiaro overflow-hidden" },
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start max-w-max-width mx-auto" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -20% 0px", amount: 0.1 }, transition: { duration: 0.6, delay: 0.1 }, className: "col-span-full text-center mb-12" },
                React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-navy" }, "Dietro le quinte"),
                React.createElement("h2", { className: "font-semibold text-grigio-scuro title-line" }, "La Mia Filosofia")),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "0px 0px -20% 0px", amount: 0.1 }, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }, className: "lg:col-span-5 w-full h-full aspect-3/4 max-w-md mx-auto lg:max-w-none order-2 lg:order-1" },
                React.createElement("div", { className: "relative w-full h-full rounded-2xl overflow-hidden shadow-sm" },
                    React.createElement(image_1["default"], { src: "/images/carlo-philosophy.webp", alt: "Carlo Astolfi - Ritratto Professionale", fill: true, className: "object-cover", sizes: "(max-w: 768px) 100vw, 33vw", priority: true }))),
            React.createElement("div", { className: "lg:col-span-7 flex flex-col justify-center order-1 lg:order-2" },
                React.createElement(framer_motion_1.motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "0px 0px -20% 0px", amount: 0.1 }, variants: containerVariants, className: "space-y-4 font-sans text-base text-grigio-scuro leading-relaxed mb-10" },
                    React.createElement(framer_motion_1.motion.p, { variants: fadeInUp },
                        "Unisco le mie competenze di ",
                        React.createElement("strong", null, "Graphic Designer"),
                        " a quelle di ",
                        React.createElement("strong", null, "Web Developer"),
                        ". Questo mi permette di coprire l'intera filiera digitale: progetto e disegno la componente visiva e l'esperienza utente (UI/UX) su strumenti come",
                        " ",
                        React.createElement("strong", null, "Figma"),
                        ", ",
                        React.createElement("strong", null, "Photoshop"),
                        " o",
                        " ",
                        React.createElement("strong", null, "Adobe XD"),
                        ", per poi tradurre autonomamente i layout in un codice frontend solido e responsive basato su",
                        " ",
                        React.createElement("strong", null, "HTML5"),
                        ", ",
                        React.createElement("strong", null, "CSS3"),
                        " (",
                        React.createElement("strong", null, "SCSS/LESS"),
                        ") e ",
                        React.createElement("strong", null, "JavaScript"),
                        "."),
                    React.createElement(framer_motion_1.motion.p, { variants: fadeInUp },
                        "Laddove il progetto richiede architetture dinamiche o integrazioni complesse, mi occupo dello sviluppo backend scrivendo codice in",
                        " ",
                        React.createElement("strong", null, "PHP"),
                        " e strutturando in modo sicuro ed efficiente i database di riferimento (",
                        React.createElement("strong", null, "MySQL"),
                        ",",
                        " ",
                        React.createElement("strong", null, "Oracle SQL"),
                        " o ",
                        React.createElement("strong", null, "PostgreSQL"),
                        ").",
                        " ",
                        "Gestisco ogni fase assicurando la coerenza visiva totale tra il mockup iniziale e l'applicativo online."),
                    React.createElement(framer_motion_1.motion.blockquote, { variants: fadeInUp, className: "border-l-4 border-navy pl-5 my-8 italic text-grigio-scuro leading-relaxed" },
                        "In oltre vent'anni di attivit\u00E0 ho lavorato stabilmente come consulente di riferimento sia per dinamiche piccole e medie imprese locali, sia per leader di mercato e multinazionali di prestigio globale come ",
                        React.createElement("strong", null, "Ferrari"),
                        ",",
                        " ",
                        React.createElement("strong", null, "Maserati"),
                        ", ",
                        React.createElement("strong", null, "Iris Ceramica Group"),
                        ",",
                        " ",
                        React.createElement("strong", null, "Riello"),
                        " e ",
                        React.createElement("strong", null, "Conad"),
                        ". Questo percorso mi ha insegnato a declinare flussi di lavoro agili, sicuri e calibrati su misura in base alla scala e alle ambizioni del cliente.")),
                React.createElement(framer_motion_1.motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "0px 0px -10% 0px", amount: 0.1 }, variants: cardContainerVariants, className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
                    React.createElement(framer_motion_1.motion.div, { variants: cardVariants, whileHover: { y: -6, transition: { duration: 0.2 } }, className: "bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-shadow duration-300" },
                        React.createElement("div", { className: "flex justify-center items-center" },
                            React.createElement("img", { src: "/images/icon-code.svg", alt: "Coding", width: "39", height: "30", className: "text-navy mb-6" })),
                        React.createElement("p", { className: "font-sans text-xs text-grigio-medio leading-relaxed max-w-xs" },
                            React.createElement("strong", null, "Sviluppo su Misura"),
                            React.createElement("br", null),
                            "Siti dinamici in PHP, WordPress, WooCommerce e soluzioni custom ottimizzate SEO.")),
                    React.createElement(framer_motion_1.motion.div, { variants: cardVariants, whileHover: { y: -6, transition: { duration: 0.2 } }, className: "bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-shadow duration-300" },
                        React.createElement("div", { className: "flex justify-center items-center" },
                            React.createElement("img", { src: "/images/icon-design.svg", alt: "Coding", width: "31", height: "30", className: "text-navy mb-6" })),
                        React.createElement("p", { className: "font-sans text-xs text-grigio-medio leading-relaxed max-w-xs" },
                            React.createElement("strong", null, "Graphic & ADV"),
                            React.createElement("br", null),
                            "Campagne pubblicitarie, cataloghi per la stampa e grafica editoriale coordinata.")),
                    React.createElement(framer_motion_1.motion.div, { variants: cardVariants, whileHover: { y: -6, transition: { duration: 0.2 } }, className: "bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-shadow duration-300" },
                        React.createElement("div", { className: "flex justify-center items-center" },
                            React.createElement("img", { src: "/images/icon-ai.svg", alt: "Coding", width: "30", height: "30", className: "text-navy mb-6" })),
                        React.createElement("p", { className: "font-sans text-xs text-grigio-medio leading-relaxed max-w-xs" },
                            React.createElement("strong", null, "AI & LLM Integration"),
                            React.createElement("br", null),
                            "Studio e sperimentazione attiva nell'uso dei modelli generativi per ottimizzare codice e design.")))))));
}
exports["default"] = Philosophy;
