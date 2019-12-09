"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Switch = function Switch(props) {
  var onClick = props.onClick,
      _props$elementId = props.elementId,
      elementId = _props$elementId === void 0 ? 'switch1' : _props$elementId,
      checked = props.checked,
      isDisabled = props.isDisabled,
      testSection = props.testSection;
  var switchClasses = (0, _classnames["default"])({
    'oui-switch': true,
    'oui-switch--disabled': isDisabled
  });
  return _react["default"].createElement("div", {
    className: "position--relative",
    "data-oui-component": true,
    "data-test-section": testSection
  }, _react["default"].createElement("input", {
    type: "checkbox",
    id: elementId,
    className: switchClasses,
    checked: checked,
    onClick: onClick,
    disabled: isDisabled
  }), _react["default"].createElement("label", {
    htmlFor: elementId,
    "data-on-label": "On",
    "data-off-label": "Off"
  }));
};

Switch.propTypes = {
  // checked true means the switch is on; false is off
  checked: _propTypes["default"].bool,
  // string for label/input id pair, should be unique to the page
  elementId: _propTypes["default"].string,

  /** Whether it is disabled, will render greyscale if so **/
  isDisabled: _propTypes["default"].bool,
  // onClick function
  onClick: _propTypes["default"].func,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = Switch;
exports["default"] = _default;