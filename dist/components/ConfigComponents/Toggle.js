"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Toggle;

var _react = _interopRequireDefault(require("react"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

const _excluded = ["onChange", "checked"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Toggle(_ref) {
  let {
    onChange,
    checked
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_reactSwitch.default, _extends({
    onChange: onChange,
    checked: checked,
    height: 25,
    width: 45
  }, rest));
}