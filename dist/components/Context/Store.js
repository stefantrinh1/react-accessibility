"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.ContextProvider = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _initialState = _interopRequireDefault(require("./initialState"));

var _createStyles = _interopRequireDefault(require("../helpers/createStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// store.js
const store = /*#__PURE__*/(0, _react.createContext)(_initialState.default);
exports.store = store;
const {
  Provider
} = store;

const ContextProvider = _ref => {
  let {
    children
  } = _ref;
  // all states are here and have their own reducer which allows multiple functions
  const [globalState, dispatch] = (0, _react.useReducer)(_reducer.default, _initialState.default);
  (0, _react.useEffect)(() => {
    document.head.insertAdjacentHTML('beforeend', "<style id=\"react-accessibility-styles\"></style>");
  }, []);
  (0, _react.useEffect)(() => {
    console.log(globalState);
    document.getElementById('react-accessibility-styles').innerHTML = (0, _createStyles.default)(globalState);
    return () => {};
  }, [globalState]);
  return /*#__PURE__*/_react.default.createElement(Provider, {
    value: {
      globalState,
      dispatch
    }
  }, children);
};

exports.ContextProvider = ContextProvider;