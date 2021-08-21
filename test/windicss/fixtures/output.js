"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Common = _styledComponents["default"].div(["\n   & {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  height: 100vh;\n  margin: 0px;\n  overflow: hidden;\n  padding: 0px;\n  width: 100vw;\n}"]);

var UnFocusStyle = (0, _styledComponents.css)(["\n  color: ", ";\n"], function (props) {
  return props.theme === 'primary' ? 'white' : 'blue';
});
var FocusStyle = (0, _styledComponents.css)(["\n  color: red;\n"]);

var WithTemplateLiterals = _styledComponents["default"].button(["\n   & {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  border-style: none;\n  cursor: pointer;\n  text-align: center;\n}  ", ";\n  \n  padding: ", ";\n\n  height: ", ";\n\n  &:focus {\n     & {\n  border-style: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}    ", ";\n  }\n"], UnFocusStyle, function (props) {
  return props.size === 'lg' ? '4px 16px' : '2px 16px';
}, function (props) {
  return props.size === 'lg' ? '28px' : '20px';
}, function (props) {
  return props.focus ? UnFocusStyle : FocusStyle;
});

var Nested = _styledComponents["default"].div(["\n   &:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n& {\n  height: 100vh;\n  margin: 0px;\n  overflow: hidden;\n  padding: 0px;\n  width: 100vw;\n}  div {\n    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',\n    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n    'Helvetica Neue', 'sans-serif';\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    &:hover {\n      color: red;\n    }\n  }\n\n  &:hover {\n    color: white;\n  }\n"]);

var StyledDatePicker = _styledComponents["default"].div(["\n   & {\n  padding: 0.75rem;\n  width: 18rem;\n  color: var(--text-color-0);\n}  div.date-picker-weeks {\n     & {\n  font-weight: 700;\n}  }\n\n  div.date-picker-dates {\n     & {\n  display: none;\n  position: relative;\n}  }\n\n  div.date-picker-arrow {\n     & {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}    .date-picker-arrow-right {\n       & {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding: 0px;\n  aspect-ratio: 1 / 1;\n}    }\n  }\n\n  div.date-picker-rows {\n     & {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  grid-gap: 0.75rem;\n  gap: 0.75rem;\n}  }\n\n  div[data-role='date-picker-row'] {\n     & {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  grid-gap: 1rem;\n  gap: 1rem;\n  grid-template-columns: repeat(7, 1fr);\n}  }\n\n  div[data-role='date-picker-row']:first-child {\n     & {\n  padding: 0.25rem;\n}  }\n\n  div[data-role='date-picker-row']:last-child {\n     & {\n  bottom: 0.25rem;\n}  }\n\n  div[data-role='date-picker-operations'] {\n     & {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  grid-gap: 0.75rem;\n  gap: 0.75rem;\n}    .date-picker-btn {\n       & {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n}    }\n  }\n"]);

var StyleDay = _styledComponents["default"].div(["\n   & {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  text-align: center;\n}  span {\n     & {\n  border-radius: 0.25rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  line-height: 2;\n  margin: 0px;\n  width: 1.75rem;\n  aspect-ratio: 1 / 1;\n  line-height: 28px;\n}    color: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n  &.date-picker-day {\n    span {\n      &:hover {\n        border: ", ";\n        background-color: var(--primary);\n        color: var(--primary-text-color);\n      }\n    }\n  }\n"], function (props) {
  return props.selected ? 'var(--primary-text-color)' : 'var(--text-color-0)';
}, function (props) {
  return props.selected ? 'var(--primary)' : undefined;
}, function (props) {
  return props.selected ? shadow.lg : undefined;
}, shadow.primary);

var Group = _styledComponents["default"].div(["\n   &:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n& {\n  height: 100vh;\n  margin: 0px;\n  overflow: hidden;\n  padding: 0px;\n  width: 100vw;\n}"]);
