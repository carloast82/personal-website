"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var animations_1 = require("@/components/utils/animations");
function Hero() {
    // Questa funzione intercetta il click e forza lo scroll fluido via software
    var handleScroll = function (e, targetId) {
        e.preventDefault(); // Blocca il "teletrasporto" di Next.js
        var element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            // Aggiorna l'URL del browser con l'ancora senza far saltare la pagina
            window.history.pushState(null, "", "#" + targetId);
        }
    };
    return (React.createElement("section", { className: "bg-bianco text-nero overflow-hidden border-b border-grigio-chiaro", id: "chi-sono" },
        React.createElement(framer_motion_1.motion.div, { className: "container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center md:min-h-225", id: "hero", variants: animations_1.containerVariants, initial: "hidden", animate: "visible" },
            React.createElement("div", { className: "flex flex-col justify-center order-2 lg:order-1 pb-12 px-6 md:px-0" },
                React.createElement("div", { className: "overflow-hidden py-1" },
                    React.createElement(framer_motion_1.motion.h1, { variants: animations_1.fadeInLeft, className: "tracking-tight text-nero origin-bottom" }, "Carlo Astolfi")),
                React.createElement(framer_motion_1.motion.h2, { variants: animations_1.fadeInRight, className: "tracking-widest text-navy mt-2 mb-6" }, "Web Developer / Graphic Designer"),
                React.createElement(framer_motion_1.motion.p, { variants: animations_1.fadeInLeft, className: "text-lg text-grigio-medio max-w-xl leading-relaxed mb-8 lg:max-w-125" }, "Sviluppo soluzioni web performanti e curo l'estetica visiva dei brand. Con oltre 15 anni di esperienza, unisco una solida programmazione tecnica a una forte sensibilit\u00E0 per il design e la comunicazione."),
                React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg font-sans text-sm text-grigio-medio" },
                    React.createElement("div", { className: "flex items-start gap-3" },
                        React.createElement("span", { className: "text-navy font-bold" },
                            React.createElement(image_1["default"], { src: "/images/icon-location.svg", alt: "Location", width: "24", height: "24", preload: true })),
                        React.createElement("span", null, "Ferrara, Italia")),
                    React.createElement("div", { className: "flex items-start gap-3" },
                        React.createElement("span", { className: "text-navy font-bold" },
                            React.createElement(image_1["default"], { src: "/images/icon-design-2.svg", alt: "Design Tools", width: "24", height: "24", preload: true })),
                        React.createElement("span", null, "Adobe Creative Suite & Figma")),
                    React.createElement("div", { className: "flex items-start gap-3" },
                        React.createElement("span", { className: "text-navy font-bold" },
                            React.createElement(image_1["default"], { src: "/images/icon-code.svg", alt: "Coding", width: "24", height: "24", preload: true })),
                        React.createElement("span", null,
                            "PHP, JS, HTML5, CSS/SCSS",
                            React.createElement("br", null),
                            "REACT, NEXT.JS, NODE.JS")),
                    React.createElement("div", { className: "flex items-start gap-3" },
                        React.createElement("span", { className: "text-navy font-bold" },
                            React.createElement(image_1["default"], { src: "/images/icon-mobile.svg", alt: "Telefono", width: "24", height: "24", preload: true })),
                        React.createElement("span", null, "Mobile: +39 329.86.51.737"))),
                React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "flex flex-wrap gap-4" },
                    React.createElement("a", { href: "#portfolio", onClick: function (e) { return handleScroll(e, "portfolio"); }, className: "font-serif text-xl font-bold bg-navy hover:bg-bianco text-bianco hover:text-navy border-navy border-2 px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40" }, "Guarda il mio Portfolio"),
                    React.createElement("a", { href: "#contatti", onClick: function (e) { return handleScroll(e, "contatti"); }, className: "font-serif text-xl font-bold bg-senape border-senape border-2 hover:bg-bianco text-nero hover:text-senape px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40" }, "Contattami"))),
            React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "visible md:invisible relative w-full aspect-4/5 lg:aspect-3/4 max-w-xl mx-auto lg:max-w-none order-1 lg:order-2 flex justify-center items-center" },
                React.createElement("div", { className: "relative w-full h-full overflow-hidden" },
                    React.createElement(image_1["default"], { src: "/images/carlo-hero.webp", alt: "Carlo Astolfi - Web Developer & Graphic Designer", fill: true, preload: true, className: "object-cover object-top", sizes: "(max-w: 768px) 90vw, (max-w: 1200px) 45vw, 600px" }))))));
}
exports["default"] = Hero;
