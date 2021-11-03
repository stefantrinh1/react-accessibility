"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SettingsBox;

var _react = _interopRequireDefault(require("react"));

var _SubSectionTitle = _interopRequireDefault(require("../TextContent/SubSectionTitle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SettingsBox(_ref) {
  let {
    title,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_SubSectionTitle.default, null, title), children);
}

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  background-color: black;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 0rem 0.5rem 0.5rem 0rem;\n  flex-grow: 1;\n"])));