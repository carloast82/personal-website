"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var framer_motion_1 = require("framer-motion");
var animations_1 = require("@/components/utils/animations");
var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
    ? animations_1.mobileViewport
    : animations_1.desktopViewport;
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
function DescrizioneProgetto(_a) {
    var progetto = _a.progetto;
    var router = navigation_1.useRouter();
    return (React.createElement(React.Fragment, null,
        React.createElement(framer_motion_1.motion.div, { variants: animations_1.bounceIn, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: "w-full text-center mb-16" },
            React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-navy block mb-2" }, "I miei progetti"),
            React.createElement("h1", { className: "font-serif font-semibold text-grigio-scuro text-4xl md:text-5xl" }, progetto.progetto),
            React.createElement("div", { className: "w-12 h-0.5 bg-navy/20 mx-auto mt-4" }),
            React.createElement("button", { onClick: function () { return router.push("/#portfolio"); }, className: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grigio-scuro hover:text-navy transition-colors mt-10 cursor-pointer" },
                React.createElement("span", { className: "transition-transform group-hover:-translate-x-1" }, "\u2190"),
                " ",
                "Torna al Portfolio")),
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 items-start bg-white pb-16" },
            React.createElement(framer_motion_1.motion.div, { initial: "hidden", animate: "visible", variants: animations_1.containerVariants, className: "lg:col-span-4 space-y-6 font-sans p-8 bg-grigio-light h-full order-2 md:order-1" },
                React.createElement("div", null,
                    progetto.categoria.map(function (cat, index, arr) { return (React.createElement(framer_motion_1.motion.span, { key: index, variants: animations_1.fadeInLeft, className: "inline-block text-grigio-medio font-mono text-[12px] uppercase tracking-wider mb-4 mr-2" },
                        cat,
                        index < arr.length - 1 ? " / " : "")); }),
                    React.createElement(framer_motion_1.motion.h2, { variants: animations_1.fadeInLeft, className: "text-3xl md:text-4xl font-serif font-bold text-navy leading-tight" }, "Di cosa mi sono occupato in questo progetto")),
                React.createElement("div", { className: "space-y-4 text-[13px] border-t border-grigio-chiaro pt-6" },
                    React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "grid grid-cols-[100px_1fr] items-start gap-2" },
                        React.createElement("strong", { className: "text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5" }, "Cliente:"),
                        React.createElement("span", { className: "text-grigio-medio leading-normal" }, progetto.cliente)),
                    React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "grid grid-cols-[100px_1fr] items-start gap-2" },
                        React.createElement("strong", { className: "text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5" }, "Anno:"),
                        React.createElement("span", { className: "text-grigio-medio leading-normal" }, progetto.anno)),
                    React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "grid grid-cols-[100px_1fr] items-start gap-2" },
                        React.createElement("strong", { className: "text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5" }, "Tipo:"),
                        React.createElement("span", { className: "text-grigio-medio leading-normal" }, progetto.tipo.join(", "))),
                    React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "grid grid-cols-[100px_1fr] items-start gap-2" },
                        React.createElement("strong", { className: "text-grigio-medio font-mono text-xs uppercase tracking-wider pt-0.5" }, "Attivit\u00E0:"),
                        React.createElement("span", { className: "text-grigio-medio leading-normal" }, progetto.attivita.join(", ")))),
                React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "text-grigio-medio text-[14px] leading-relaxed space-y-4 whitespace-pre-line border-t border-grigio-chiaro pt-6 font-light" }, progetto.descrizione),
                React.createElement("div", { className: "border-t border-grigio-chiaro pt-6" },
                    React.createElement("div", { className: "flex flex-wrap gap-2" }, progetto.tecnologie.map(function (tech, index) { return (React.createElement(framer_motion_1.motion.span, { key: index, variants: animations_1.revealLeftToRight, className: "font-mono text-xs font-semibold text-navy bg-azzurro px-3 py-2 rounded-md" }, tech)); }))),
                React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInUp, className: "flex flex-wrap gap-4" },
                    React.createElement("a", { href: "#gallery", onClick: function (e) { return handleScroll(e, "gallery"); }, className: "font-serif text-xl font-bold bg-navy hover:bg-bianco text-bianco hover:text-navy border-navy border-2 px-8 py-3.5 rounded-lg transition-all duration-300 text-center min-w-40" }, "Guarda le altre immagini")),
                progetto.notaCrediti && (React.createElement("p", { className: "text-[11px] font-sans italic text-grigio-medio leading-relaxed pt-6 border-t border-dashed border-grigio-chiaro" }, progetto.notaCrediti))),
            React.createElement(framer_motion_1.motion.div, { variants: animations_1.containerVariants, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: "lg:col-span-8 px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto order-1 md:order-2" },
                React.createElement(framer_motion_1.motion.div, { className: "md:col-span-12 w-full h-full aspect-3/4 max-w-md mx-auto lg:max-w-none order-2 lg:order-1", variants: animations_1.revealVertical },
                    React.createElement("div", { className: "relative w-full h-full rounded-2xl overflow-hidden border border-grigio-chiaro" },
                        React.createElement(image_1["default"], { src: progetto.path, alt: "Carlo Astolfi - Ritratto Professionale", fill: true, className: "object-cover", sizes: "100vw", priority: true })))))));
}
exports["default"] = DescrizioneProgetto;
