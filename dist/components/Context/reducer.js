"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (state, action) => {
  switch (action.type) {
    // ? === widget ===
    case 'OPEN_WIDGET':
      return _objectSpread(_objectSpread({}, state), {}, {
        widgetOpen: true
      });

    case 'CLOSE_WIDGET':
      return _objectSpread(_objectSpread({}, state), {}, {
        widgetOpen: false
      });
    // ? === font color ===

    case 'SET_FONT_COLOR':
      return _objectSpread(_objectSpread({}, state), {}, {
        fontColor: action.data
      });
    // ? === font size ===

    case 'ADD_FONT_SIZE':
      return _objectSpread(_objectSpread({}, state), {}, {
        fontSizeAdjustment: state.fontSizeAdjustment + 10
      });

    case 'MINUS_FONT_SIZE':
      return _objectSpread(_objectSpread({}, state), {}, {
        fontSizeAdjustment: state.fontSizeAdjustment - 10
      });
    // ? === Line Height ===

    case 'ADD_LINE_HEIGHT':
      return _objectSpread(_objectSpread({}, state), {}, {
        lineHeight: state.lineHeight + 5
      });

    case 'MINUS_LINE_HEIGHT':
      return _objectSpread(_objectSpread({}, state), {}, {
        lineHeight: state.lineHeight - 5
      });
    // ? === Letter spacing ===

    case 'ADD_LETTER_SPACING':
      return _objectSpread(_objectSpread({}, state), {}, {
        letterSpacing: state.letterSpacing + 10
      });

    case 'MINUS_LETTER_SPACING':
      return _objectSpread(_objectSpread({}, state), {}, {
        letterSpacing: state.letterSpacing - 10
      });
    // ? === BOLD Text ===

    case 'TOGGLE_BOLD':
      return _objectSpread(_objectSpread({}, state), {}, {
        textBold: !state.textBold
      });
    // ? === Italic Text ===

    case 'TOGGLE_ITALIC':
      return _objectSpread(_objectSpread({}, state), {}, {
        textItalic: !state.textItalic
      });
    // ? === Uppercase  ===

    case 'SET_TEXT_CASE':
      return _objectSpread(_objectSpread({}, state), {}, {
        textCase: action.data
      });
    // ? === Alignment  ===

    case 'SET_TEXT_ALIGNMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        textAlignment: action.data
      });
    // ? === Title Settings ===

    case 'SET_TITLE_COLOR':
      return _objectSpread(_objectSpread({}, state), {}, {
        titleColor: action.data
      });

    case 'SET_TITLE_BACKGROUND_COLOR':
      return _objectSpread(_objectSpread({}, state), {}, {
        titleBackgroundColor: action.data
      });

    case 'SET_HIGHLIGHT_TITLES':
      return _objectSpread(_objectSpread({}, state), {}, {
        highlightTitles: true
      });

    case 'UNSET_HIGHLIGHT_TITLES':
      return _objectSpread(_objectSpread({}, state), {}, {
        highlightTitles: false
      });
    // ? === HIGHLIGHT LINKS ===

    case 'SET_HIGHLIGHT_LINKS':
      return _objectSpread(_objectSpread({}, state), {}, {
        highlightLinks: true
      });

    case 'UNSET_HIGHLIGHT_LINKS':
      return _objectSpread(_objectSpread({}, state), {}, {
        highlightLinks: false
      });
    // ? === images ===

    case 'HIDE_IMAGES':
      return _objectSpread(_objectSpread({}, state), {}, {
        hideImages: true
      });

    case 'UNHIDE_IMAGES':
      return _objectSpread(_objectSpread({}, state), {}, {
        hideImages: false
      });
    // ? === Monochrome LINKS ===

    case 'SET_MONOCHROME':
      return _objectSpread(_objectSpread({}, state), {}, {
        monochrome: true
      });

    case 'UNSET_MONOCHROME':
      return _objectSpread(_objectSpread({}, state), {}, {
        monochrome: false
      });
    // ? === High Contrast  ===

    case 'SET_HIGH_CONTRAST':
      return _objectSpread(_objectSpread({}, state), {}, {
        lowContrast: false,
        highContrast: true
      });

    case 'UNSET_HIGH_CONTRAST':
      return _objectSpread(_objectSpread({}, state), {}, {
        highContrast: false
      });
    // ? === Low Contrast  ===

    case 'SET_LOW_CONTRAST':
      return _objectSpread(_objectSpread({}, state), {}, {
        highContrast: false,
        lowContrast: true
      });

    case 'UNSET_LOW_CONTRAST':
      return _objectSpread(_objectSpread({}, state), {}, {
        lowContrast: false
      });
    // ? === global settings ===

    case 'RESET_SETTINGS':
      return _objectSpread(_objectSpread({}, _initialState.default), {}, {
        widgetOpen: true
      });

    default:
      alert('Error - No Action Could Be Found');
      throw new Error();
  }
};

exports.default = _default;