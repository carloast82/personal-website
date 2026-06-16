"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
function MobileNav() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    // Blocca lo scroll della pagina quando il menu è aperto
    react_1.useEffect(function () {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "unset";
        }
        return function () {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);
    var handleScroll = function (e, targetId) {
        e.preventDefault(); // Blocca il "teletrasporto" di Next.js
        var element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            // Aggiorna l'URL del browser con l'ancora (es: #filosofia) senza far saltare la pagina
            window.history.pushState(null, "", "#" + targetId);
        }
    };
    var navLinks = [
        { name: "Chi Sono", href: "#chi-sono", scrollto: "chi-sono" },
        { name: "Come Lavoro", href: "#come-lavoro", scrollto: "come-lavoro" },
        { name: "Esperienze", href: "#esperienze", scrollto: "esperienze" },
        { name: "Competenze", href: "#competenze", scrollto: "competenze" },
        { name: "Portfolio Progetti", href: "#portfolio", scrollto: "portfolio" },
        { name: "Contatti", href: "#contatti", scrollto: "contatti" },
    ];
    return (React.createElement("div", { className: "md:hidden" },
        React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "relative z-50 p-2 mr-5 flex flex-col gap-1.5 focus:outline-none", "aria-label": "Toggle menu" },
            React.createElement("span", { className: "block w-6 h-0.5 bg-navy transition-all duration-300 " + (isOpen ? "rotate-45 translate-y-2 bg-white" : "") }),
            React.createElement("span", { className: "block w-6 h-0.5 bg-navy transition-all duration-300 " + (isOpen ? "opacity-0" : "") }),
            React.createElement("span", { className: "block w-6 h-0.5 bg-navy transition-all duration-300 " + (isOpen ? "-rotate-45 -translate-y-2 bg-white" : "") })),
        React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-40 flex flex-col items-center justify-start pt-30 px-10 gap-4 bg-grigio-scuro/98  backdrop-blur-md overscroll-contain", id: "mobilenav_container" },
            navLinks.map(function (link) { return (React.createElement("a", { key: link.name, href: link.href, onClick: function (e) {
                    // 1. Chiude il menu mobile
                    setIsOpen(false);
                    // 2. Gestisce lo scroll fluido se è un'ancora interna
                    if (link.href.startsWith("#")) {
                        e.preventDefault(); // Blocca il salto istantaneo
                        var targetId = link.href.replace("#", "");
                        var element = document.getElementById(targetId);
                        if (element) {
                            element.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                            window.history.pushState(null, "", link.href);
                        }
                    }
                }, className: "w-full text-center font-serif text-2xl font-medium text-white hover:text-grigio-chiaro transition-colors py-2" }, link.name)); }),
            React.createElement("div", { className: "flex flex-col items-center md:items-start border-t border-bianco pt-8 mt-8 gap-4 w-full" },
                React.createElement("a", { href: "/cv_Astolfi_Carlo.pdf", download: true, className: "group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors mb-4" },
                    React.createElement("div", { className: "w-8 h-8 rounded-lg bg-none flex items-center justify-center group-hover:text-white transition-all shrink-0" },
                        React.createElement(image_1["default"], { src: "/images/download.webp", alt: "Download CV", className: "w-6 h-6 object-contain", width: 24, height: 24 })),
                    React.createElement("span", null, "Curriculum Vitae PDF")),
                React.createElement("a", { href: "https://www.linkedin.com/in/carloastolfi/", target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors" },
                    React.createElement("div", { className: "w-8 h-8 rounded-lg bg-none flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0" },
                        React.createElement(image_1["default"], { src: "/images/Vector.webp", alt: "LinkedIn", className: "w-6 h-6 object-contain", width: 24, height: 24 })),
                    React.createElement("span", null, "Il mio profilo LinkedIn"))),
            React.createElement("div", { className: "border-t border-white pt-8 mt-8 flex flex-col w-full" },
                React.createElement("p", { className: "font-mono text-[12px] text-white tracking-wide text-center" },
                    "\u00A9 2026 Carlo Astolfi. Tutti i diritti riservati.",
                    React.createElement("br", null),
                    React.createElement(link_1["default"], { href: "/privacy", className: "hover:text-white/60 transition-colors" }, "Privacy Policy"))))))));
}
exports["default"] = MobileNav;
