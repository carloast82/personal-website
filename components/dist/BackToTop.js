"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var BackToTopButton = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var toggleVisibility = function () {
        setIsVisible(window.scrollY > 500);
    };
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    react_1.useEffect(function () {
        window.addEventListener("scroll", toggleVisibility);
        return function () { return window.removeEventListener("scroll", toggleVisibility); };
    }, []);
    var jumpAnimation = {
        y: [0, -10, 0, -10, 0],
        transition: {
            y: {
                duration: 0.7,
                ease: framer_motion_1.easeOut,
                repeat: 1
            }
        }
    };
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }, transition: { duration: 0.4 }, className: "fixed bottom-16 right-5 z-50 cursor-pointer" }, isVisible && (React.createElement(framer_motion_1.motion.button, { whileHover: jumpAnimation, onClick: scrollToTop, "aria-label": "Back to top" },
        React.createElement(lucide_react_1.ChevronUpCircleIcon, { size: 40, absoluteStrokeWidth: true, strokeWidth: 1.5 })))));
};
exports["default"] = BackToTopButton;
