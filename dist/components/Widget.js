"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Widget;

var _react = _interopRequireWildcard(require("react"));

var _AccessibilityIcon = _interopRequireDefault(require("./assets/AccessibilityIcon.js"));

var _CloseIcon = _interopRequireDefault(require("./assets/CloseIcon"));

var _Header = _interopRequireDefault(require("./Header"));

var _StyleSettings = _interopRequireDefault(require("./StyleSettings.js"));

var _Footer = _interopRequireDefault(require("./Footer.js"));

require("./Widget.css");

var _Store = require("./Context/Store");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Widget() {
  const {
    globalState,
    dispatch
  } = (0, _react.useContext)(_Store.store);
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(InnerContainer, null, /*#__PURE__*/_react.default.createElement(Button, {
    onClick: () => dispatch({
      type: 'OPEN_WIDGET'
    })
  }, /*#__PURE__*/_react.default.createElement(_AccessibilityIcon.default, null)), globalState.widgetOpen && /*#__PURE__*/_react.default.createElement(WidgetContainer, null, /*#__PURE__*/_react.default.createElement(CloseButton, {
    onClick: () => dispatch({
      type: 'CLOSE_WIDGET'
    })
  }), /*#__PURE__*/_react.default.createElement(WidgetBox, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_StyleSettings.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null)))));
}

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n"])));

const InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n"])));

const Button = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #0e5eb1;\n  color: white;\n  padding: 10px;\n  border-radius: 500px;\n  border: solid 2px white;\n  z-index: 9998;\n  img {\n    max-width: 60px;\n  }\n"])));

const WidgetContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 9999;\n"])));

const CloseButton = (0, _styledComponents.default)(_CloseIcon.default)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  background-color: white;\n  color: purple;\n  border-radius: 100px;\n  height: 30px;\n  width: 30px;\n  transform: translate(-50%, -50%);\n"])));

const WidgetBox = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: #202020;\n  min-height: 300px;\n  min-width: 280px;\n  height: 400px;\n  max-height: 400px;\n  max-width: 380px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border-radius: 10px;\n  color: white;\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  ::-webkit-scrollbar-track {\n    background: #2b2a2a;\n    border-radius: 0px 10px 10px 0px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"])));