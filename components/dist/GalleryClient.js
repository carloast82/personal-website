"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("@/components/Navbar");
var Footer_1 = require("@/components/Footer");
var navigation_1 = require("next/navigation");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var animations_1 = require("@/components/utils/animations");
// IMPORTA LA LIGHTBOX E I SUOI STILI
var yet_another_react_lightbox_1 = require("yet-another-react-lightbox");
require("yet-another-react-lightbox/styles.css");
// MAPPE STATICHE PER LE CLASSI INTERE
var smColMap = {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4"
};
var mdColMap = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4"
};
var mdRowMap = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
    4: "md:row-span-4"
};
// Micro-componente per la singola immagine di dettaglio animata
function ImmagineAnimata(_a) {
    var item = _a.item, indexImg = _a.indexImg, spanClasses = _a.spanClasses;
    var _b = react_1.useState("revealVertical"), effettoCasuale = _b[0], setEffettoCasuale = _b[1];
    react_1.useEffect(function () {
        var effettiDisponibili = [
            "revealLeftToRight",
            "revealVertical",
            "revealRightToLeft",
        ];
        var indiceCasuale = Math.floor(Math.random() * effettiDisponibili.length);
        setEffettoCasuale(effettiDisponibili[indiceCasuale]);
    }, []);
    return (React.createElement(framer_motion_1.motion.div, { key: indexImg, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: effettoCasuale === "revealLeftToRight"
            ? animations_1.revealLeftToRight
            : effettoCasuale === "revealRightToLeft"
                ? animations_1.revealRightToLeft
                : animations_1.revealVertical, className: spanClasses },
        React.createElement(image_1["default"], { src: item.path, alt: item.alt || "Immagine", fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs", sizes: "(max-width: 768px) 100vw, 800px" })));
}
// COMPONENTE INTERATTIVO PRINCIPALE
function GalleryClient(_a) {
    var progetto = _a.progetto;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(-1), index = _b[0], setIndex = _b[1];
    var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
        ? animations_1.mobileViewport
        : animations_1.desktopViewport;
    var handleScroll = function (e, targetId) {
        e.preventDefault();
        var element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            window.history.pushState(null, "", "#" + targetId);
        }
    };
    var gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";
    var blocchiArray = Array.from({ length: 4 }, function (_, i) {
        var bloccoNumero = i + 1;
        if (!progetto.immaginiDettaglio)
            return [];
        return progetto.immaginiDettaglio
            .filter(function (img) { return img.blocco === bloccoNumero; })
            .sort(function (a, b) { return a.sequenza - b.sequenza; });
    });
    var tutteLeImmagini = blocchiArray
        .flatMap(function (blocco) { return blocco; })
        .map(function (item) { return ({
        src: item.path,
        alt: item.alt
    }); });
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement("main", { className: "max-w-max-width mx-auto px-0 overflow-x-hidden w-full" },
            React.createElement("div", { className: "w-full px-0 mx-0 mt-10" },
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
                                React.createElement(image_1["default"], { src: progetto.path, alt: progetto.progetto, fill: true, className: "object-cover", sizes: "100vw", priority: true }))))),
                React.createElement("div", { className: "flex flex-col gap-6 px-6 md:px-10", id: "gallery" }, blocchiArray.map(function (itemsInBlocco, index) {
                    var numeroBlocco = index + 1;
                    return (React.createElement(framer_motion_1.motion.div, { key: "blocco-" + numeroBlocco, variants: animations_1.containerVariants, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: gridClass }, itemsInBlocco.map(function (item, indexImg) {
                        var spanClasses = [
                            "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm cursor-pointer",
                            item.smColSpan ? smColMap[item.smColSpan] : "",
                            mdColMap[item.mdColSpan] || "md:col-span-1",
                            mdRowMap[item.mdRowSpan] || "md:row-span-1",
                        ]
                            .filter(Boolean)
                            .join(" ");
                        var posizioneGlobale = tutteLeImmagini.findIndex(function (img) { return img.src === item.path; });
                        return (React.createElement("div", { key: indexImg, onClick: function () { return setIndex(posizioneGlobale); }, className: spanClasses },
                            React.createElement(ImmagineAnimata, { item: item, indexImg: indexImg, spanClasses: "w-full h-full absolute inset-0" }),
                            React.createElement("div", { className: "absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10" },
                                React.createElement("span", { className: "text-white font-mono text-xs uppercase tracking-wider" },
                                    "Progetto: ",
                                    progetto.progetto))));
                    })));
                })),
                React.createElement(framer_motion_1.motion.div, { variants: animations_1.bounceIn, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: "w-full text-center mb-16" },
                    React.createElement("button", { onClick: function () { return router.push("/#portfolio"); }, className: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grigio-scuro hover:text-navy transition-colors mt-10 cursor-pointer" },
                        React.createElement("span", { className: "transition-transform group-hover:-translate-x-1" }, "\u2190"),
                        " ",
                        "Torna al Portfolio")))),
        React.createElement(Footer_1["default"], null),
        React.createElement(yet_another_react_lightbox_1["default"], { index: index, open: index >= 0, close: function () { return setIndex(-1); }, slides: tutteLeImmagini })));
}
exports["default"] = GalleryClient;
