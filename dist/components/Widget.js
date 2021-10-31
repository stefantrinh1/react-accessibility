"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Widget;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("./button.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Widget() {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "accessibility-widget"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "accessibility-widget-button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _button.default,
    alt: "open accessibility widget"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Accessibility Settings"), /*#__PURE__*/_react.default.createElement("div", null, "settings will go here")));
}