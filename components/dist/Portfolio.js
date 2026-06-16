"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var portfolioData_1 = require("@/data/portfolioData");
var animations_1 = require("@/components/utils/animations");
function Portfolio() {
    var gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";
    var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
        ? animations_1.mobileViewport
        : animations_1.desktopViewport;
    // Mappa di associazione tra i tipi di stringa nel file dati e le varianti importate
    var animationVariants = {
        revealVertical: animations_1.revealVertical,
        revealLeftToRight: animations_1.revealLeftToRight,
        revealRightToLeft: animations_1.revealRightToLeft
    };
    // Raggruppiamo dinamicamente gli elementi per blocco (da 1 a 4) ordinandoli per sequenza
    var blocchiArray = Array.from({ length: 4 }, function (_, i) {
        var bloccoNumero = i + 1;
        return portfolioData_1.portfolioItems
            .filter(function (item) { return item.blocco === bloccoNumero; })
            .sort(function (a, b) { return a.sequenza - b.sequenza; });
    });
    return (React.createElement("section", { id: "portfolio", className: "bg-bianco p-6 lg:p-16 border-t border-grigio-chiaro" },
        React.createElement("div", { className: "container-site" },
            React.createElement("div", { className: "col-span-full text-center mb-12" },
                React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-navy" }, "Galleria lavori"),
                React.createElement("h2", { className: "font-semibold text-grigio-scuro title-line" }, "Portfolio Progetti")),
            React.createElement("div", { className: "flex flex-col gap-6" }, blocchiArray.map(function (itemsInBlocco, index) {
                var numeroBlocco = index + 1;
                return (React.createElement(framer_motion_1.motion.div, { key: "blocco-" + numeroBlocco, variants: animations_1.containerVariants, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: gridClass }, itemsInBlocco.map(function (item) {
                    // Calcoliamo le classi dinamiche di span per il responsive
                    var spanClasses = [
                        "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm",
                        item.smColSpan ? "sm:col-span-" + item.smColSpan : "",
                        "md:col-span-" + item.mdColSpan,
                        "md:row-span-" + item.mdRowSpan,
                    ]
                        .filter(Boolean)
                        .join(" ");
                    // Selezioniamo la variante corretta di animazione
                    var selectedVariant = animationVariants[item.variant];
                    return (React.createElement(framer_motion_1.motion.a, { key: item.id, href: "/portfolio/" + item.slug, variants: selectedVariant, className: spanClasses },
                        React.createElement(image_1["default"], { src: "/images/portfolio/" + item.path, alt: item.progetto, fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs" }),
                        React.createElement("div", { className: "absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" },
                            React.createElement("span", { className: "text-white font-mono text-xs uppercase tracking-wider" },
                                "Progetto: ",
                                item.progetto))));
                })));
            })))));
}
exports["default"] = Portfolio;
