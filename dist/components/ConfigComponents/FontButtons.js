"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FontColor;

var _react = _interopRequireWildcard(require("react"));

var _Store = require("../Context/Store");

var _SettingsBox = _interopRequireDefault(require("./SettingsBox"));

var _ColorsSelect = _interopRequireDefault(require("./ColorsSelect"));

var _BoldIcon = _interopRequireDefault(require("../assets/BoldIcon"));

var _TextAlignLeftIcon = _interopRequireDefault(require("../assets/TextAlignLeftIcon"));

var _TextAlignCenterIcon = _interopRequireDefault(require("../assets/TextAlignCenterIcon"));

var _TextAlignRightIcon = _interopRequireDefault(require("../assets/TextAlignRightIcon"));

var _ItalicIcon = _interopRequireDefault(require("../assets/ItalicIcon"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function FontColor() {
  const {
    globalState,
    dispatch
  } = (0, _react.useContext)(_Store.store);
  return /*#__PURE__*/_react.default.createElement(_SettingsBox.default, {
    title: 'Font Styles'
  }, /*#__PURE__*/_react.default.createElement(Row, null, /*#__PURE__*/_react.default.createElement(Button, {
    active: globalState.textBold,
    onClick: () => dispatch({
      type: 'TOGGLE_BOLD'
    })
  }, /*#__PURE__*/_react.default.createElement(_BoldIcon.default, null)), /*#__PURE__*/_react.default.createElement(Button, {
    active: globalState.textItalic,
    onClick: () => dispatch({
      type: 'TOGGLE_ITALIC'
    })
  }, /*#__PURE__*/_react.default.createElement(_ItalicIcon.default, null)), /*#__PURE__*/_react.default.createElement(Button, {
    active: globalState.textAlignment === 'left',
    onClick: () => dispatch({
      type: 'SET_TEXT_ALIGNMENT',
      data: 'left'
    })
  }, /*#__PURE__*/_react.default.createElement(_TextAlignLeftIcon.default, null)), /*#__PURE__*/_react.default.createElement(Button, {
    active: globalState.textAlignment === 'center',
    onClick: () => dispatch({
      type: 'SET_TEXT_ALIGNMENT',
      data: 'center'
    })
  }, /*#__PURE__*/_react.default.createElement(_TextAlignCenterIcon.default, null)), /*#__PURE__*/_react.default.createElement(Button, {
    active: globalState.textAlignment === 'right',
    onClick: () => dispatch({
      type: 'SET_TEXT_ALIGNMENT',
      data: 'right'
    })
  }, /*#__PURE__*/_react.default.createElement(_TextAlignRightIcon.default, null))));
}

const Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: none;\n  box-shadow: none;\n  border: none;\n  color: white;\n  font-size: 22px;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.25rem 0.25rem 0.25rem;\n"])), props => props.active ? 'grey' : 'transparent');

const Row = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));