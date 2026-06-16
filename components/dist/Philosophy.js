"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var animations_1 = require("@/components/utils/animations");
function Philosophy() {
    var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
        ? animations_1.mobileViewport
        : animations_1.desktopViewport;
    return (React.createElement("section", { id: "come-lavoro", className: "bg-grigio-light p-6 lg:p-16 overflow-hidden" },
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start max-w-max-width mx-auto" },
            React.createElement(framer_motion_1.motion.div, { className: "col-span-full text-center mb-12", variants: animations_1.bounceIn, initial: "hidden", whileInView: "visible", viewport: viewportConfig },
                React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-navy block mb-2" }, "Il Mio Approccio"),
                React.createElement("h2", { className: "font-semibold text-grigio-scuro title-line" }, "Come Lavoro")),
            React.createElement(framer_motion_1.motion.div, { className: "col-span-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full", variants: animations_1.containerVariants, initial: "hidden", whileInView: "visible", viewport: viewportConfig },
                React.createElement(framer_motion_1.motion.div, { className: "lg:col-span-5 w-full h-full aspect-3/4 max-w-md mx-auto lg:max-w-none order-2 lg:order-1", variants: animations_1.revealVertical },
                    React.createElement("div", { className: "relative w-full h-full rounded-2xl overflow-hidden" },
                        React.createElement(image_1["default"], { src: "/images/carlo-philosophy.webp", alt: "Carlo Astolfi - Ritratto Professionale", fill: true, className: "object-cover", sizes: "(max-width: 768px) 100vw, 33vw", priority: true }))),
                React.createElement("div", { className: "lg:col-span-7 flex flex-col justify-center order-1 lg:order-2" },
                    React.createElement("div", { className: "space-y-4 font-sans text-base text-grigio-medio leading-relaxed mb-10" },
                        React.createElement(framer_motion_1.motion.p, { variants: animations_1.fadeInRight },
                            "Unisco le mie competenze di ",
                            React.createElement("strong", null, "Graphic Designer"),
                            " a quelle di ",
                            React.createElement("strong", null, "Web Developer"),
                            ". Questo mi permette di coprire l'intera filiera digitale: progetto e disegno la componente visiva e l'esperienza utente (UI/UX) su strumenti come ",
                            React.createElement("strong", null, "Figma, Photoshop o Adobe XD"),
                            ", per poi tradurre autonomamente i layout in un codice frontend solido e responsive basato su ",
                            React.createElement("strong", null, "HTML5, CSS3 (SCSS/LESS)"),
                            " e",
                            " ",
                            React.createElement("strong", null, "JavaScript"),
                            "."),
                        React.createElement(framer_motion_1.motion.p, { variants: animations_1.fadeInRight },
                            "Recentemente ho ampliato il mio ecosistema di sviluppo integrando framework moderni come ",
                            React.createElement("strong", null, "React"),
                            " e",
                            " ",
                            React.createElement("strong", null, "Next.js"),
                            ", tecnologie all'avanguardia con cui ho pensato e realizzato proprio questo sito web."),
                        React.createElement(framer_motion_1.motion.p, { variants: animations_1.fadeInRight },
                            "Laddove il progetto richiede architetture dinamiche o integrazioni complesse, mi occupo dello sviluppo backend scrivendo codice in ",
                            React.createElement("strong", null, "PHP"),
                            " e strutturando in modo sicuro ed efficiente i database di riferimento (",
                            React.createElement("strong", null, "MySQL"),
                            ", ",
                            React.createElement("strong", null, "Oracle SQL"),
                            " o",
                            " ",
                            React.createElement("strong", null, "PostgreSQL"),
                            "). Gestisco ogni fase assicurando la coerenza visiva totale tra il mockup iniziale e l'applicativo online."),
                        React.createElement(framer_motion_1.motion.blockquote, { variants: animations_1.fadeInUp, className: "border-l-4 border-navy pl-5 my-8 italic text-grigio-medio leading-relaxed" },
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
                    React.createElement(framer_motion_1.motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6", variants: animations_1.bounceIn }, [
                        {
                            src: "/images/icon-code.svg",
                            alt: "Coding",
                            title: "Sviluppo su Misura",
                            text: "Siti dinamici in PHP, WordPress, WooCommerce e soluzioni custom ottimizzate SEO. In costante evoluzione ed espansione verso le moderne architetture in React e Next.js."
                        },
                        {
                            src: "/images/icon-design.svg",
                            alt: "Design",
                            title: "Graphic & ADV",
                            text: "Progettazione di layout web, campagne Social ADV e materiale cartaceo, dai cataloghi per la stampa alla grafica editoriale coordinata."
                        },
                        {
                            src: "/images/icon-ai.svg",
                            alt: "AI",
                            title: "AI & LLM Integration",
                            text: "Studio, sperimentazione e integrazione di modelli generativi per ottimizzare la scrittura del codice, velocizzare i processi di design e sviluppare soluzioni web intelligenti e automatizzate."
                        },
                    ].map(function (card, idx) { return (React.createElement("div", { key: idx, className: "bg-bianco border border-grigio-chiaro/70 rounded-2xl p-8 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-grigio-medio/30 transition-all duration-300" },
                        React.createElement("div", { className: "flex justify-center items-center mb-6" },
                            React.createElement(image_1["default"], { src: card.src, alt: card.alt, width: 40, height: 40 })),
                        React.createElement("p", { className: "font-sans text-xs text-grigio-medio leading-relaxed max-w-xs" },
                            React.createElement("strong", { className: "text-sm" }, card.title),
                            React.createElement("br", null),
                            card.text))); })))))));
}
exports["default"] = Philosophy;
