"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Wraps text or HTML in a `label` element. Often used to label inputs.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Label = function Label(_ref) {
  var isOptional = _ref.isOptional,
      isRequired = _ref.isRequired,
      children = _ref.children,
      testSection = _ref.testSection,
      inputId = _ref.inputId;
  var classes = null;
  var fieldLabel = null;

  if (isRequired) {
    fieldLabel = _react["default"].createElement("span", {
      className: "oui-label--required"
    });
  } else if (isOptional) {
    fieldLabel = _react["default"].createElement("span", {
      className: "oui-label__optional"
    }, "(Optional)");
  }

  if (typeof children === 'string') {
    classes = 'oui-label';
  }

  return _react["default"].createElement("label", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": testSection,
    htmlFor: inputId
  }, children, fieldLabel);
};

Label.propTypes = {
  /** What the label describes */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].node.isRequired]),

  /** Id of the input to properly associate with this label */
  inputId: _propTypes["default"].string,

  /** Includes optional label if true */
  isOptional: _propTypes["default"].bool,

  /** Includes required asterisk label if true */
  isRequired: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = Label;
exports["default"] = _default;