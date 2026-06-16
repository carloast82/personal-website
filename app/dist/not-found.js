"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
function NotFound() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "max-w-max-width mx-auto px-0 overflow-x-hidden w-full" },
            React.createElement("div", { className: "w-full flex flex-col items-center pb-20 bg-white" },
                React.createElement("div", { className: "relative w-full max-w-4xl aspect-video mb-10 overflow-hidden" },
                    React.createElement(image_1["default"], { src: "/images/404-2.webp", alt: "Pagina o progetto non trovato", fill: true, className: "object-contain", priority: true })),
                React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-navy block mb-" }, "Errore 404"),
                React.createElement("h1", { className: "font-serif font-semibold text-grigio-scuro text-3xl md:text-4xl mb-4" }, "Ops! Questa pagina non esiste"),
                React.createElement("p", { className: "text-grigio-medio max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed text-center" }, "Il progetto o la pagina che stai cercando potrebbe essere stata spostata, eliminata o forse lo slug nell'URL non \u00E8 corretto."),
                React.createElement(link_1["default"], { href: "/", className: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white bg-navy hover:bg-navy/90 px-6 py-3 rounded-full transition-colors cursor-pointer" },
                    "Torna alla Home",
                    " ",
                    React.createElement("span", { className: "transition-transform group-hover:translate-x-1" }, "\u2192"))))));
}
exports["default"] = NotFound;
