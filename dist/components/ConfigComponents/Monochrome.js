"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HideImages;

var _react = _interopRequireWildcard(require("react"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _Store = require("../Context/Store");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SettingsBox = _interopRequireDefault(require("./SettingsBox"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function HideImages() {
  const {
    globalState,
    dispatch
  } = (0, _react.useContext)(_Store.store);
  return /*#__PURE__*/_react.default.createElement(_SettingsBox.default, {
    title: 'Monochrome / Black and White'
  }, /*#__PURE__*/_react.default.createElement(_Toggle.default, {
    onChange: () => dispatch({
      type: globalState.monochrome ? 'UNSET_MONOCHROME' : 'SET_MONOCHROME'
    }),
    checked: globalState.monochrome
  }));
}

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  h5 {\n    margin-right: 0.5rem;\n    color: lightgrey;\n    font-size: 0.7rem;\n  }\n"])));