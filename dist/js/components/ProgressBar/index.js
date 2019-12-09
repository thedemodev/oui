"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Label = _interopRequireDefault(require("../Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Generates an `ProgressBar` element
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var ProgressBar = function ProgressBar(_ref) {
  var _ref$displayError = _ref.displayError,
      displayError = _ref$displayError === void 0 ? false : _ref$displayError,
      leftLabel = _ref.leftLabel,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      progress = _ref.progress,
      rightLabel = _ref.rightLabel,
      topLabel = _ref.topLabel;
  var ouiProgress = (0, _classnames["default"])('oui-progress', {
    'oui-progress--bad-news': displayError
  });
  var range = max - min;
  var allocated = Math.round(progress / range * 100);
  var available = Math.round(100 - allocated);
  return _react["default"].createElement("div", {
    "data-oui-component": true
  }, topLabel && _react["default"].createElement(_Label["default"], null, topLabel), _react["default"].createElement("div", {
    className: ouiProgress
  }, _react["default"].createElement("div", {
    className: "oui-progress__bar",
    style: {
      'width': "".concat(allocated, "%")
    },
    "aria-valuenow": "".concat(allocated),
    "aria-valuemin": min,
    "aria-valuemax": max
  }, !leftLabel && "".concat(allocated, "%"))), leftLabel && rightLabel && _react["default"].createElement("div", {
    className: "flex flex--1 push-half--top"
  }, _react["default"].createElement("div", {
    className: "flex flex--1 muted milli"
  }, "".concat(leftLabel, ": ").concat(allocated, "%")), _react["default"].createElement("div", {
    className: "flex flex--1 muted milli flex-justified--end"
  }, "".concat(rightLabel, ": ").concat(available, "%"))))
  /* eslint-enable */
  ;
};

ProgressBar.propTypes = {
  /** badNews will change the progress bar color to red */
  displayError: _propTypes["default"].bool,

  /** left label */
  leftLabel: _propTypes["default"].string,

  /** max */
  max: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /** min */
  min: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /** string data for progress */
  progress: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /** right label */
  rightLabel: _propTypes["default"].string,

  /** top label*/
  topLabel: _propTypes["default"].string
};
var _default = ProgressBar;
exports["default"] = _default;