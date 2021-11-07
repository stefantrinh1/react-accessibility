"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextCase;

var _react = _interopRequireWildcard(require("react"));

var _reactDropdown = _interopRequireDefault(require("react-dropdown"));

require("react-dropdown/style.css");

var _Store = require("../Context/Store");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SettingsBox = _interopRequireDefault(require("./SettingsBox"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function TextCase() {
  const {
    globalState,
    dispatch
  } = (0, _react.useContext)(_Store.store);
  const options = ['uppercase', 'lowercase', 'capitalize', 'initial'];
  return /*#__PURE__*/_react.default.createElement(_SettingsBox.default, {
    title: 'Text Case'
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_reactDropdown.default, {
    options: options,
    onChange: e => dispatch({
      type: 'SET_TEXT_CASE',
      data: e.value
    }),
    value: globalState.textCase,
    placeholder: "Select an option"
  })));
}

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .Dropdown-control {\n    background-color: transparent;\n    border-color: purple;\n    color: white;\n    width: fit-content;\n    font-size: 14px;\n\n    .Dropdown-placeholder {\n      text-transform: capitalize !important;\n    }\n  }\n  .Dropdown-option {\n    text-transform: capitalize !important;\n  }\n"])));