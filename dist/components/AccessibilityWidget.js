"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccessibilityWidget;

var _react = _interopRequireDefault(require("react"));

var _Widget = _interopRequireDefault(require("./Widget"));

var _Store = require("./Context/Store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AccessibilityWidget() {
  return /*#__PURE__*/_react.default.createElement(_Store.ContextProvider, null, /*#__PURE__*/_react.default.createElement(_Widget.default, null));
}