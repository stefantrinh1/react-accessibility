"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StyleSettings;

var _react = _interopRequireDefault(require("react"));

var _HideImages = _interopRequireDefault(require("./ConfigComponents/HideImages"));

var _FontColor = _interopRequireDefault(require("./ConfigComponents/FontColor"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SectionTitle = _interopRequireDefault(require("./TextContent/SectionTitle"));

var _FontSize = _interopRequireDefault(require("./ConfigComponents/FontSize"));

var _LineHeight = _interopRequireDefault(require("./ConfigComponents/LineHeight"));

var _LetterSpacing = _interopRequireDefault(require("./ConfigComponents/LetterSpacing"));

var _HighlightLinks = _interopRequireDefault(require("./ConfigComponents/HighlightLinks"));

var _TitleBackgroundColor = _interopRequireDefault(require("./ConfigComponents/TitleBackgroundColor"));

var _Monochrome = _interopRequireDefault(require("./ConfigComponents/Monochrome"));

var _HighlightTitles = _interopRequireDefault(require("./ConfigComponents/HighlightTitles"));

var _TextCase = _interopRequireDefault(require("./ConfigComponents/TextCase"));

var _TitleColor = _interopRequireDefault(require("./ConfigComponents/TitleColor"));

var _FontButtons = _interopRequireDefault(require("./ConfigComponents/FontButtons"));

var _HighContrast = _interopRequireDefault(require("./ConfigComponents/HighContrast"));

var _LowContrast = _interopRequireDefault(require("./ConfigComponents/LowContrast"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function StyleSettings() {
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_SectionTitle.default, null, "General Text Styles"), /*#__PURE__*/_react.default.createElement(_FontColor.default, null), /*#__PURE__*/_react.default.createElement(InlineSection, null, /*#__PURE__*/_react.default.createElement(_FontSize.default, null), /*#__PURE__*/_react.default.createElement(_LineHeight.default, null), /*#__PURE__*/_react.default.createElement(_LetterSpacing.default, null), /*#__PURE__*/_react.default.createElement(_TextCase.default, null), /*#__PURE__*/_react.default.createElement(_FontButtons.default, null)), /*#__PURE__*/_react.default.createElement(_SectionTitle.default, null, "Title Styles"), /*#__PURE__*/_react.default.createElement(InlineSection, null, /*#__PURE__*/_react.default.createElement(_TitleColor.default, null), /*#__PURE__*/_react.default.createElement(_TitleBackgroundColor.default, null), /*#__PURE__*/_react.default.createElement(_HighlightTitles.default, null)), /*#__PURE__*/_react.default.createElement(_SectionTitle.default, null, "Extra Setting"), /*#__PURE__*/_react.default.createElement(InlineSection, null, /*#__PURE__*/_react.default.createElement(_HighlightLinks.default, null), /*#__PURE__*/_react.default.createElement(_HideImages.default, null), /*#__PURE__*/_react.default.createElement(_Monochrome.default, null), /*#__PURE__*/_react.default.createElement(_HighContrast.default, null), /*#__PURE__*/_react.default.createElement(_LowContrast.default, null)));
}

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 20px 60px;\n"])));

const InlineSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));