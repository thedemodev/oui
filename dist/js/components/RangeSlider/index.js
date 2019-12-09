"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_FILL_COLOR_NAME = 'default';

var RangeSlider = function RangeSlider(props) {
  var fillColorName = props.fillColorName,
      value = props.value,
      onChange = props.onChange,
      isDisabled = props.isDisabled;
  var rangeClasses = (0, _classnames["default"])({
    'oui-rangeslider': true,
    'oui-rangeslider--disabled': isDisabled
  }); // ensure valid fillColor name (in the case that propType errors are ignored)

  var validFillColorName = Object.keys(_constants.FILL_COLOR_MAP).includes(fillColorName) ? fillColorName : DEFAULT_FILL_COLOR_NAME;
  var fillColor = _constants.FILL_COLOR_MAP[validFillColorName];
  return _react["default"].createElement("div", {
    className: rangeClasses,
    "data-test-section": props.testSection
  }, _react["default"].createElement("div", {
    className: "oui-grid"
  }, _react["default"].createElement("div", {
    className: "oui-grid__cell position--relative"
  }, _react["default"].createElement("div", {
    className: "range-labels flex"
  }, _react["default"].createElement("label", {
    className: "oui-label muted flush flex--1"
  }, props.useOffForLabel ? 'Off' : '0%'), _react["default"].createElement("label", {
    className: "oui-label muted flush"
  }, "100%")), _react["default"].createElement("div", {
    className: "range-display"
  }, _react["default"].createElement("svg", {
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: "256",
    height: "256",
    viewBox: "0 0 256 256"
  }, _react["default"].createElement("path", {
    fill: fillColor,
    d: "M0 256h256V0z"
  })), _react["default"].createElement("div", {
    className: "range-display range-display-overlay",
    style: {
      left: value + '%'
    }
  })), _react["default"].createElement("div", {
    className: "range-grid"
  }, _react["default"].createElement("div", {
    className: "gridline grid-1"
  }), _react["default"].createElement("div", {
    className: "gridline grid-2"
  }), _react["default"].createElement("div", {
    className: "gridline grid-3"
  }), _react["default"].createElement("div", {
    className: "gridline grid-4"
  }), _react["default"].createElement("div", {
    className: "gridline grid-5"
  }), _react["default"].createElement("div", {
    className: "gridline gridline-half grid-h1"
  }), _react["default"].createElement("div", {
    className: "gridline gridline-half grid-h2"
  }), _react["default"].createElement("div", {
    className: "gridline gridline-half grid-h3"
  }), _react["default"].createElement("div", {
    className: "gridline gridline-half grid-h4"
  })), _react["default"].createElement("input", {
    className: "hard position--relative width--1-1",
    "data-traffic-group": "1",
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: value,
    onChange: onChange,
    disabled: isDisabled
  }))));
};

RangeSlider.propTypes = {
  /** Custom color for slider **/
  fillColorName: _propTypes["default"].oneOf(Object.keys(_constants.FILL_COLOR_MAP)),

  /** Whether it is disabled, will render as greyscale if so **/
  isDisabled: _propTypes["default"].bool,

  /** onChange function */
  onChange: _propTypes["default"].func,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** When true, uses 'Off' instead of '0%' */
  useOffForLabel: _propTypes["default"].bool,

  /** The value */
  value: _propTypes["default"].number
};
RangeSlider.defaultProps = {
  fillColorName: DEFAULT_FILL_COLOR_NAME,
  isDisabled: false,
  onChange: undefined,
  testSection: undefined,
  useOffForLabel: false,
  value: undefined
};
var _default = RangeSlider;
exports["default"] = _default;