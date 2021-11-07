"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Counter;

var _react = _interopRequireWildcard(require("react"));

var _Store = require("../Context/Store");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MinusIcon = _interopRequireDefault(require("../assets/MinusIcon"));

var _PlusIcon = _interopRequireDefault(require("../assets/PlusIcon"));

var _SettingsBox = _interopRequireDefault(require("./SettingsBox"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Counter(_ref) {
  let {
    onMinusChange,
    onAddChange,
    value,
    minValue,
    maxValue
  } = _ref;
  const buttonInActiveStyles = {
    opacity: '0.5',
    color: 'red'
  };
  return /*#__PURE__*/_react.default.createElement(CounterContainer, null, /*#__PURE__*/_react.default.createElement(MinusButton, {
    onClick: onMinusChange,
    style: value >= minValue ? {} : buttonInActiveStyles
  }, /*#__PURE__*/_react.default.createElement(_MinusIcon.default, null)), /*#__PURE__*/_react.default.createElement(SizeContainer, null, value, "%"), /*#__PURE__*/_react.default.createElement(PlusButton, {
    style: value <= maxValue ? {} : buttonInActiveStyles,
    onClick: onAddChange
  }, /*#__PURE__*/_react.default.createElement(_PlusIcon.default, null)));
}

const CounterContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  background: grey;\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 8px;\n"])));

const MinusButton = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  :hover {\n    color: purple;\n  }\n"])));

const PlusButton = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  :hover {\n    color: purple;\n  }\n"])));

const SizeContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 0.5rem;\n  background-color: purple;\n  border-radius: 100px;\n  box-shadow: 2px 2px 6px black;\n  margin: 0rem 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 12px;\n  width: 25px;\n"])));