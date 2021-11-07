"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LetterSpacing;

var _react = _interopRequireWildcard(require("react"));

var _Store = require("../Context/Store");

var _SettingsBox = _interopRequireDefault(require("./SettingsBox"));

var _Counter = _interopRequireDefault(require("./Counter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LetterSpacing() {
  const {
    globalState,
    dispatch
  } = (0, _react.useContext)(_Store.store);
  return /*#__PURE__*/_react.default.createElement(_SettingsBox.default, {
    title: 'Letter Spacing'
  }, /*#__PURE__*/_react.default.createElement(_Counter.default, {
    onMinusChange: globalState.letterSpacing > -100 ? () => dispatch({
      type: 'MINUS_LETTER_SPACING'
    }) : () => {} // do nothing}
    ,
    onAddChange: globalState.letterSpacing < 100 ? () => dispatch({
      type: 'ADD_LETTER_SPACING'
    }) : () => {} // do nothing}
    ,
    value: globalState.letterSpacing,
    minValue: -100,
    maxValue: 100
  }));
}