"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarNavButton = function CalendarNavButton(_ref) {
  var type = _ref.type;
  var title = type === 'previous' ? 'Previous Month' : 'Next Month';
  var style = type === 'previous' ? {
    left: '10px'
  } : {
    right: '10px'
  };
  var icon = type === 'previous' ? _react["default"].createElement(_reactOuiIcons["default"], {
    name: "arrow-left"
  }) : _react["default"].createElement(_reactOuiIcons["default"], {
    name: "arrow-right"
  });
  return _react["default"].createElement("button", {
    title: title,
    style: _objectSpread({
      backgroundColor: '#fff',
      color: '#484848',
      fontSize: 24,
      padding: '5px',
      position: 'absolute',
      top: '15px',
      border: 'none'
    }, style)
  }, icon);
};

CalendarNavButton.propTypes = {
  type: _propTypes["default"].oneOf(['previous', 'next'])
};
var _default = CalendarNavButton;
exports["default"] = _default;