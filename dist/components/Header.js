"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Header() {
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement("h3", null, "Accessibility Settings"));
}

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: purple;\n  h3 {\n    color: white;\n    padding: 20px 30px;\n    margin: 0rem 0rem 0.25rem;\n    text-align: center;\n  }\n"])));