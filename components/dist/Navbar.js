"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var MobileNav_1 = require("./MobileNav");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var framer_motion_1 = require("framer-motion");
var animations_1 = require("@/components/utils/animations");
function Navbar() {
    // Questa funzione intercetta il click e forza lo scroll fluido via software
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
    var viewportConfig = typeof window !== "undefined" && window.innerWidth < 768
        ? animations_1.mobileViewport
        : animations_1.desktopViewport;
    var pathname = navigation_1.usePathname();
    // Capiamo se l'utente si trova attualmente nella Home Page
    var isHomePage = pathname === "/";
    var navLinks = [
        { name: "Chi Sono", href: "#chi-sono", scrollto: "chi-sono" },
        { name: "Come Lavoro", href: "#come-lavoro", scrollto: "come-lavoro" },
        { name: "Esperienze", href: "#esperienze", scrollto: "esperienze" },
        { name: "Competenze", href: "#competenze", scrollto: "competenze" },
        { name: "Portfolio Progetti", href: "#portfolio", scrollto: "portfolio" },
        { name: "Contatti", href: "#contatti", scrollto: "contatti" },
    ];
    var MotionLink = framer_motion_1.motion.create(link_1["default"]);
    return (React.createElement(framer_motion_1.motion.header, { variants: animations_1.containerVariants, initial: "hidden", animate: "visible", viewport: viewportConfig, className: "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-none transition-all" },
        React.createElement("div", { className: "container-site h-30 flex items-center justify-between" },
            React.createElement(MotionLink, { variants: animations_1.fadeInLeft, initial: "hidden", animate: "visible", custom: 1, viewport: viewportConfig, href: "/", className: "flex items-center gap-3 group pl-5 md:pl-0" },
                React.createElement(image_1["default"], { src: "/images/logo-carloastolfi.webp", alt: "Logo Carlo Astolfi", width: 192, height: 89, preload: true })),
            React.createElement("nav", { className: "hidden md:flex items-center gap-6 lg:gap-8" }, navLinks.map(function (link, index) {
                // CONDIZIONE MAGICA:
                // Se siamo nella Home, il link sarà "#portfolio".
                // Se siamo fuori dalla Home, il link diventerà "/#portfolio".
                var hrefValue = isHomePage ? link.href : "/" + link.href;
                return (React.createElement("a", { key: link.name, href: hrefValue, onClick: isHomePage ? function (e) { return handleScroll(e, link.scrollto); } : undefined, className: "text-sm font-medium text-gray-600 hover:text-blue transition-colors py-2" }, link.name));
            })),
            React.createElement(framer_motion_1.motion.div, { variants: animations_1.fadeInRight, initial: "hidden", animate: "visible", custom: 2, viewport: viewportConfig, className: "hidden md:block" },
                React.createElement(link_1["default"], { href: "/cv_Astolfi_Carlo.pdf" // Metterai il file dentro la cartella /public
                    , download: true, className: "font-sans text-xs font-semibold tracking-wider uppercase bg-navy hover:bg-senape/90 text-white hover:text-nero px-5 py-2.5 rounded-lg transition-all duration-300 block text-center" }, "Il mio curriculum in PDF")),
            React.createElement(MobileNav_1["default"], null))));
}
exports["default"] = Navbar;
