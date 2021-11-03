"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubSectionTitle;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SubSectionTitle(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, null, children);
}

const Container = _styledComponents.default.h5(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: fit-content;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 10px;\n  color: lightgrey;\n  margin: 0px 5px 8px;\n  box-sizing: border-box;\n"])));