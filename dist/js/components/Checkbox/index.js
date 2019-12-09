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
 * Generates a `checkbox` element wrapped in a Label
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      labelWeight = _ref.labelWeight,
      onChange = _ref.onChange,
      testSection = _ref.testSection;
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
    testSection: testSection && testSection + '-label'
  }, _react["default"].createElement("div", {
    className: "flex"
  }, _react["default"].createElement("input", {
    "data-oui-component": true,
    type: "checkbox",
    defaultChecked: defaultChecked,
    checked: checked,
    className: classes,
    disabled: isDisabled,
    onChange: onChange,
    "data-test-section": testSection,
    style: {
      'marginTop': '0.35em'
    }
  }), _react["default"].createElement("div", {
    className: labelClassNames
  }, label)));
};

Checkbox.propTypes = {
  /** Boolean to set checkbox, for controlled component  */
  checked: _propTypes["default"].bool,

  /** Boolean for how checkbox renders initially  */
  defaultChecked: _propTypes["default"].bool,

  /** Prevents checkbox from being modified and appears disabled */
  isDisabled: _propTypes["default"].bool,

  /** Label that describes the checkbox */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Font weight for the label text */
  labelWeight: _propTypes["default"].oneOf(['light', 'normal', 'bold']),

  /** Function that fires when the checkbox is clicked */
  onChange: _propTypes["default"].func,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Checkbox.defaultProps = {
  labelWeight: 'normal'
};
var _default = Checkbox;
exports["default"] = _default;