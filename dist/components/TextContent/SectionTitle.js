"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTitle;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SectionTitle(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, null, children);
}

const Container = _styledComponents.default.h4(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n  padding: 5px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 13px;\n  color: lightgrey;\n  margin: 0px 0px 16px;\n"])));