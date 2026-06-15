"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function Contact() {
    return (React.createElement("section", { id: "contatti", className: "bg-grigio-light p-0 pb-12 lg:pb-0 lg:pt-16 pt-8 border-b border-grigio-chiaro" },
        React.createElement("div", { className: "container-site w-full p-0" },
            React.createElement("div", { className: "col-span-full text-center mb-12" },
                React.createElement("span", { className: "font-mono text-xs uppercase tracking-widest text-navy" }, "Parliamo del tuo progetto"),
                React.createElement("h2", { className: "font-semibold text-grigio-scuro title-line" }, "Contattami")),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:pr-16" },
                React.createElement("div", { className: "lg:col-span-5 flex justify-center lg:justify-start" },
                    React.createElement("div", { className: "relative w-full max-w-[400px] aspect-[3/4] lg:max-w-full" },
                        React.createElement(image_1["default"], { src: "/images/carlo-contact.webp" // Ricordati di caricare la tua foto qui!
                            , alt: "Carlo Astolfi", fill: true, className: "object-cover", priority: true, sizes: "(max-w: 1024px) 100vw, 40vw" }))),
                React.createElement("div", { className: "lg:col-span-7 space-y-8 px-6 lg:px-0" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "text-grigio-scuro mb-4" }, "Mettiamoci in contatto"),
                        React.createElement("p", { className: "font-sans text-sm lg:text-base text-grigio-medio leading-relaxed max-w-2xl" }, "Hai un'idea da sviluppare, un sito web da ottimizzare o hai bisogno di una consulenza grafica d'impatto? Sono sempre aperto a valutare nuove collaborazioni, progetti a lungo termine o singole consulenze specialistiche.")),
                    React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                        React.createElement("div", { className: "bg-bianco border border-grigio-chiaro/60 rounded-2xl p-6 shadow-sm flex flex-col gap-4" },
                            React.createElement("div", { className: "w-12 h-12 rounded-xl bg-azzurro/40 flex items-center justify-center text-navy" },
                                React.createElement("img", { src: "/images/icon-email-navy.webp", alt: "Icona Email", className: "w-12 h-12 rounded-xl" })),
                            React.createElement("div", null,
                                React.createElement("span", { className: "font-mono text-[12px] font-bold uppercase tracking-wider text-navy block" }, "Scrivimi via email"),
                                React.createElement("a", { href: "mailto:carloast82@gmail.com", className: "font-serif text-lg text-navy hover:underline block mt-1 break-all" }, "carloast82@gmail.com"))),
                        React.createElement("div", { className: "bg-bianco border border-grigio-chiaro/60 rounded-2xl p-6 shadow-sm flex flex-col gap-4" },
                            React.createElement("div", { className: "w-10 h-10 rounded-xl bg-azzurro/40 flex items-center justify-center text-navy" },
                                React.createElement("img", { src: "/images/icon-phone-navy.webp", alt: "Icona Telefono", className: "w-10 h-10 rounded-xl" })),
                            React.createElement("div", null,
                                React.createElement("span", { className: "font-mono text-[12px] font-bold uppercase tracking-wider text-navy block" }, "Chiamami o whatsapp"),
                                React.createElement("a", { href: "https://wa.me/393298651737", target: "_blank", rel: "noopener noreferrer", className: "font-serif text-lg text-navy hover:underline block mt-1" }, "+39 329.86.51.737"))),
                        React.createElement("div", { className: "sm:col-span-2 bg-bianco border border-grigio-chiaro/60 rounded-2xl p-6 shadow-sm flex flex-col gap-4" },
                            React.createElement("div", { className: "flex items-center gap-4" },
                                React.createElement("div", { className: "w-10 h-10 rounded-xl bg-azzurro/40 flex items-center justify-center text-navy shrink-0" },
                                    React.createElement("img", { src: "/images/icon-map-navy.webp", alt: "Icona Mappa", className: "w-10 h-10 rounded-xl" })),
                                React.createElement("div", null,
                                    React.createElement("span", { className: "font-mono text-[12px] font-bold uppercase tracking-wider text-navy block" }, "Area di attivit\u00E0 principale"),
                                    React.createElement("h4", { className: "font-serif text-lg text-navy font-normal mt-0.5" }, "Ferrara, Bologna, Modena e Vicenza"))),
                            React.createElement("div", { className: "border-t border-grigio-chiaro/40 pt-4" },
                                React.createElement("p", { className: "font-sans text-xs lg:text-sm text-grigio-medio leading-relaxed" }, "Opero principalmente tra le province di Ferrara e Bologna per incontri di persona, ma ho sempre lavorato stabilmente come consulente anche nelle zone di Modena e Vicenza. Sono pienamente disponibile per trasferte e attivit\u00E0 operative dirette in queste aree (Automunito).")))))))));
}
exports["default"] = Contact;
