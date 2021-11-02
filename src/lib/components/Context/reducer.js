import initialState from './initialState';

export default (state, action) => {
  switch (action.type) {
    // ? === widget ===

    case 'OPEN_WIDGET':
      return {
        ...state,
        widgetOpen: true,
      };
    case 'CLOSE_WIDGET':
      return {
        ...state,
        widgetOpen: false,
      };

    // ? === font color ===

    case 'SET_FONT_COLOR':
      return {
        ...state,
        fontColor: action.data,
      };

    // ? === font size ===
    case 'ADD_FONT_SIZE':
      return {
        ...state,
        fontSizeAdjustment: state.fontSizeAdjustment + 10,
      };

    case 'MINUS_FONT_SIZE':
      return {
        ...state,
        fontSizeAdjustment: state.fontSizeAdjustment - 10,
      };

    // ? === Line Height ===

    case 'ADD_LINE_HEIGHT':
      return {
        ...state,
        lineHeight: state.lineHeight + 5,
      };

    case 'MINUS_LINE_HEIGHT':
      return {
        ...state,
        lineHeight: state.lineHeight - 5,
      };

    // ? === Letter spacing ===

    case 'ADD_LETTER_SPACING':
      return {
        ...state,
        letterSpacing: state.letterSpacing + 10,
      };

    case 'MINUS_LETTER_SPACING':
      return {
        ...state,
        letterSpacing: state.letterSpacing - 10,
      };

    // ? === BOLD Text ===

    case 'SET_TEXT_BOLD':
      return {
        ...state,
        textBold: true,
      };

    case 'UNSET_TEXT_BOLD':
      return {
        ...state,
        textBold: false,
      };

    // ? === Uppercase  ===

    case 'SET_TEXT_CASE':
      return {
        ...state,
        textCase: action.data,
      };

    // ? === Title Settings ===

    case 'SET_TITLE_COLOR':
      return {
        ...state,
        titleColor: action.data,
      };

    case 'SET_TITLE_BACKGROUND_COLOR':
      return {
        ...state,
        titleBackgroundColor: action.data,
      };

    case 'SET_HIGHLIGHT_TITLES':
      return {
        ...state,
        highlightTitles: true,
      };

    case 'UNSET_HIGHLIGHT_TITLES':
      return {
        ...state,
        highlightTitles: false,
      };

    // ? === HIGHLIGHT LINKS ===

    case 'SET_HIGHLIGHT_LINKS':
      return {
        ...state,
        highlightLinks: true,
      };

    case 'UNSET_HIGHLIGHT_LINKS':
      return {
        ...state,
        highlightLinks: false,
      };

    // ? === images ===

    case 'HIDE_IMAGES':
      return {
        ...state,
        hideImages: true,
      };

    case 'UNHIDE_IMAGES':
      return {
        ...state,
        hideImages: false,
      };

    // ? === Monochrome LINKS ===

    case 'SET_MONOCHROME':
      return {
        ...state,
        monochrome: true,
      };

    case 'UNSET_MONOCHROME':
      return {
        ...state,
        monochrome: false,
      };

    // ? === global settings ===

    case 'RESET_SETTINGS':
      return {
        ...initialState,
        widgetOpen: true,
      };

    default:
      alert('Error - No Action Could Be Found');
      throw new Error();
  }
};
