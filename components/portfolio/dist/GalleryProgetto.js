"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var yet_another_react_lightbox_1 = require("yet-another-react-lightbox");
require("yet-another-react-lightbox/styles.css");
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
// Micro-componente per la singola immagine animata
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
function GalleryProgetto(_a) {
    var progetto = _a.progetto, viewportConfig = _a.viewportConfig;
    // Lo stato della Lightbox lo gestiamo qui dentro, isolato dal resto del mondo!
    var _b = react_1.useState(-1), index = _b[0], setIndex = _b[1];
    var gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]";
    // Raggruppiamo dinamicamente gli elementi per blocco (da 1 a 4) ordinandoli per sequenza
    var blocchiArray = Array.from({ length: 4 }, function (_, i) {
        var bloccoNumero = i + 1;
        if (!progetto.immaginiDettaglio)
            return [];
        return progetto.immaginiDettaglio
            .filter(function (img) { return img.blocco === bloccoNumero; })
            .sort(function (a, b) { return a.sequenza - b.sequenza; });
    });
    // Generazione array piatto per la Lightbox
    var tutteLeImmagini = blocchiArray
        .flatMap(function (blocco) { return blocco; })
        .map(function (item) { return ({
        src: item.path,
        alt: item.alt
    }); });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col gap-6 px-6 md:px-10", id: "gallery" }, blocchiArray.map(function (itemsInBlocco, bIndex) {
            var numeroBlocco = bIndex + 1;
            return (React.createElement(framer_motion_1.motion.div, { key: "blocco-" + numeroBlocco, variants: animations_1.containerVariants, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: gridClass }, itemsInBlocco.map(function (item, indexImg) {
                var spanClasses = [
                    "group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm cursor-pointer",
                    item.smColSpan ? smColMap[item.smColSpan] : "row-span-3",
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
        React.createElement(yet_another_react_lightbox_1["default"], { index: index, open: index >= 0, close: function () { return setIndex(-1); }, slides: tutteLeImmagini })));
}
exports["default"] = GalleryProgetto;
