"use strict";
exports.__esModule = true;
var Hero_1 = require("@/components/Hero");
var Philosophy_1 = require("@/components/Philosophy");
var Experiences_1 = require("@/components/Experiences");
var Skills_1 = require("@/components/Skills");
var Portfolio_1 = require("@/components/Portfolio");
var Contact_1 = require("@/components/Contact");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "max-w-max-width mx-auto px-0 overflow-x-hidden w-full" },
            React.createElement(Hero_1["default"], null),
            React.createElement(Philosophy_1["default"], null),
            React.createElement(Experiences_1["default"], null),
            React.createElement(Skills_1["default"], null),
            React.createElement(Portfolio_1["default"], null),
            React.createElement(Contact_1["default"], null))));
}
exports["default"] = Home;
