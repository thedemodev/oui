"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Label = _interopRequireDefault(require("../Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Generates a `input` element of type `radio` that is wrapped in a `Label`.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Radio = function Radio(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$testSection = _ref.testSection,
      testSection = _ref$testSection === void 0 ? null : _ref$testSection,
      name = _ref.name,
      defaultChecked = _ref.defaultChecked,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      labelWeight = _ref.labelWeight;
  var labelClassNames = (0, _classnames["default"])({
    'flush--bottom': true,
    'push--left': true,
    'weight--light': labelWeight === 'light',
    'weight--normal': labelWeight === 'normal',
    'weight--bold': labelWeight === 'bold',
    'cursor--pointer': true,
    'oui-label--disabled': isDisabled
  });
  var classes = (0, _classnames["default"])({
    'flex--none': true
  });
  return _react["default"].createElement(_Label["default"], {
    "data-test-section": "".concat(testSection, "-label")
  }, _react["default"].createElement("div", {
    className: "flex"
  }, _react["default"].createElement("input", {
    "data-oui-component": true,
    type: "radio",
    name: name,
    defaultChecked: defaultChecked,
    checked: checked,
    className: classes,
    disabled: isDisabled,
    onChange: onChange,
    "data-test-section": testSection,
    style: {
      'marginTop': '0.3em'
    }
  }), _react["default"].createElement("div", {
    className: labelClassNames
  }, label)));
};

Radio.propTypes = {
  /** Boolean to set radio input, for controlled component  */
  checked: _propTypes["default"].bool,

  /** Boolean for how radio input renders initially  */
  defaultChecked: _propTypes["default"].bool,

  /** Prevents radio input from being modified and appears disabled */
  isDisabled: _propTypes["default"].bool,

  /** Text that describes the radio input */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Font weight for the label text */
  labelWeight: _propTypes["default"].oneOf(['light', 'normal', 'bold']),

  /**
    String that can be used to identify a set of radio inputs so that only one
    in the set is checked at any given time.
  */
  name: _propTypes["default"].string.isRequired,

  /** Function that fires when the radio input is clicked */
  onChange: _propTypes["default"].func,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Radio.defaultProps = {
  labelWeight: 'normal'
};
var _default = Radio;
exports["default"] = _default;