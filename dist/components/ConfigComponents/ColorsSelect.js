"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColorsSelect;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ColorsSelect(_ref) {
  let {
    value,
    onChange,
    colors
  } = _ref;
  const defaultColors = ['red', 'blue', 'green', 'yellow', 'brown', 'grey', 'black', 'white'];
  const selectedColors = colors ? colors : defaultColors;

  const renderColors = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedColors.map(color => {
      const activeStyles = value === color ? {
        borderColor: 'purple'
      } : {};
      return /*#__PURE__*/_react.default.createElement(ColorContainer, {
        style: _objectSpread({
          backgroundColor: color
        }, activeStyles),
        onClick: () => onChange(color)
      });
    }));
  };

  return /*#__PURE__*/_react.default.createElement(ColorsContainer, null, renderColors());
}

const ColorsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"])));

const ColorContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 100px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  margin: 6px;\n  ::before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border: solid 2px;\n    border-color: inherit;\n    height: 23px;\n    width: 23px;\n    border-radius: 100px;\n  }\n  :hover {\n    opacity: 0.7;\n  }\n"])));