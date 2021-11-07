"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = globalState => {
  const {
    widgetOpen,
    fontColor,
    fontSizeAdjustment,
    lineHeight,
    titleColor,
    textItalic,
    letterSpacing,
    textBold,
    textCase,
    titleBackgroundColor,
    highlightTitles,
    highlightLinks,
    hideImages,
    textAlignment,
    monochrome,
    highContrast,
    lowContrast
  } = globalState;
  return "\n    html {\n        ".concat(monochrome ? "filter:grayscale(1) !important;" : '', "\n    }\n\n    *{\n        ").concat(fontColor ? "color:".concat(fontColor, " !important;") : '', "\n        ").concat(textAlignment !== 'initial' ? "text-align:".concat(textAlignment, " !important;") : '', "\n\n        ").concat(textBold ? "font-weight:bold !important;" : '', "\n        \n        ").concat(textCase !== 'initial' ? "text-transform:".concat(textCase, " !important;") : '', "\n        ").concat(textItalic ? "font-style:italic !important;" : '', "\n\n    }\n    img {\n        ").concat(hideImages ? "display:none !important;" : '', "\n    }\n\n    a {\n        ").concat(highlightLinks ? "border:solid 2px black !important; background-color:white; color:white " : '', "\n    }\n\n    h1,h2,h3,h4,h5,h6 {\n        ").concat(highlightTitles ? "border:solid 2px black !important; background-color: ".concat(titleBackgroundColor ? titleBackgroundColor : 'white', " !important; color:").concat(fontColor ? fontColor : 'black', " !important;") : '', "\n  \n        ").concat(titleColor ? "color:".concat(titleColor, " !important;") : '', "\n\n        ").concat(titleBackgroundColor ? "background-color:".concat(titleBackgroundColor, " !important;") : '', "\n\n     \n        ").concat(fontSizeAdjustment ? "zoom:".concat(1 + fontSizeAdjustment / 101, " !important;") : '', "\n\n        ").concat(lineHeight ? "line-height:".concat(1 + lineHeight / 101, " !important;") : '', "\n\n        ").concat(letterSpacing ? "letter-spacing:".concat(letterSpacing / 10, "px !important;") : '', "\n        ").concat(highContrast ? "filter: contrast(2) !important;" : '', "\n        ").concat(lowContrast ? "filter: contrast(0.5) !important;" : '', "\n        \n    }\n\n    p, button, li, ol {\n        ").concat(fontSizeAdjustment ? "zoom:".concat(1 + fontSizeAdjustment / 101, " !important;") : '', "\n\n        ").concat(lineHeight ? "line-height:".concat(1 + lineHeight / 101, " !important;") : '', "\n        \n\n        ").concat(letterSpacing ? "letter-spacing:".concat(letterSpacing / 10, "px !important;") : '', "\n        ").concat(highContrast ? "filter: contrast(2) !important;" : '', "\n        ").concat(lowContrast ? "filter: contrast(0.5) !important;" : '', "\n\n    }\n    \n    \n    ");
};

exports.default = _default;