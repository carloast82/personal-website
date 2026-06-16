"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var portfolioData_1 = require("@/data/portfolioData");
var animations_1 = require("@/components/utils/animations");
// ⚡ MAPPE STATICHE PER LE CLASSI INTERE (Infallibili per la produzione)
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
function Portfolio() {
    var gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";
    var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
        ? animations_1.mobileViewport
        : animations_1.desktopViewport;
    var animationVariants = {
        revealVertical: animations_1.revealVertical,
        revealLeftToRight: animations_1.revealLeftToRight,
        revealRightToLeft: animations_1.revealRightToLeft
    };
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
                    // ⚡ MODIFICA QUI: Recuperiamo le classi intere dalle mappe statiche
                    var spanClasses = [
                        "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm row-span-3",
                        item.smColSpan ? smColMap[item.smColSpan] : "",
                        mdColMap[item.mdColSpan] || "md:col-span-1",
                        mdRowMap[item.mdRowSpan] || "md:row-span-1",
                    ]
                        .filter(Boolean)
                        .join(" ");
                    var selectedVariant = animationVariants[item.variant];
                    return (React.createElement(framer_motion_1.motion.a, { key: item.id, href: "/portfolio/" + item.slug, variants: selectedVariant, className: spanClasses },
                        React.createElement(image_1["default"], { src: item.path, alt: item.progetto, fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs" }),
                        React.createElement("div", { className: "absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" },
                            React.createElement("span", { className: "text-white font-mono text-xs uppercase tracking-wider" },
                                "Progetto: ",
                                item.progetto))));
                })));
            })))));
}
exports["default"] = Portfolio;
