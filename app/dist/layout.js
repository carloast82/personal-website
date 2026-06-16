"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var google_1 = require("next/font/google"); // Importiamo i tuoi 3 font
var Navbar_1 = require("@/components/Navbar");
var Footer_1 = require("@/components/Footer");
// 1. Configurazione di Inter (Sans-Serif per il Body)
var fontSans = google_1.Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-sans"
});
// 2. Configurazione di Playfair Display (Serif per i Titoli)
var fontSerif = google_1.Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-serif"
});
// 3. Configurazione di Courier Prime (Monospazio per Tag/Codice/Label)
// Nota: Essendo un font non-variabile, specifichiamo i pesi (Regular e Bold)
var fontMono = google_1.Courier_Prime({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-mono"
});
exports.metadata = {
    title: "Carlo Astolfi | Full-Stack Web Developer & Graphic Designer",
    description: "Sviluppo soluzioni web performanti (React, Next.js, PHP) e curo la UI/UX design. Scopri il portfolio di Carlo Astolfi, tra codice e creatività."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "it" },
        React.createElement("body", { className: fontSans.variable + " " + fontSerif.variable + " " + fontMono.variable + " antialiased" },
            React.createElement(Navbar_1["default"], null),
            children,
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
