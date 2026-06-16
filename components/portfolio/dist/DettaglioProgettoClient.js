"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var framer_motion_1 = require("framer-motion");
var animations_1 = require("@/components/utils/animations");
// Importiamo il nostro nuovo componente gallery locale
var GalleryProgetto_1 = require("./GalleryProgetto");
var DescrizioneProgetto_1 = require("./DescrizioneProgetto");
// Immagina di importare qui anche gli altri blocchi (es: IntestazioneProgetto, InfoProgetto)
function DettaglioProgettoClient(_a) {
    var progetto = _a.progetto;
    var router = navigation_1.useRouter();
    var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
        ? animations_1.mobileViewport
        : animations_1.desktopViewport;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "w-full px-0 mx-0 mt-10" },
            React.createElement(DescrizioneProgetto_1["default"], { progetto: progetto }),
            React.createElement(GalleryProgetto_1["default"], { progetto: progetto, viewportConfig: viewportConfig }),
            React.createElement(framer_motion_1.motion.div, { variants: animations_1.bounceIn, initial: "hidden", whileInView: "visible", viewport: viewportConfig, className: "w-full text-center mb-16" },
                React.createElement("button", { onClick: function () { return router.push("/#portfolio"); }, className: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-grigio-scuro hover:text-navy transition-colors mt-10 cursor-pointer" },
                    React.createElement("span", { className: "transition-transform group-hover:-translate-x-1" }, "\u2190"),
                    " ",
                    "Torna al Portfolio")))));
}
exports["default"] = DettaglioProgettoClient;
