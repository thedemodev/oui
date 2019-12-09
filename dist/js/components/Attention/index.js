"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../../utils/accessibility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderDismissButton = function renderDismissButton(testSection) {
  return _react["default"].createElement("div", {
    className: "oui-attention__close"
  }, _react["default"].createElement(_Button["default"], {
    style: "plain",
    size: "small",
    ariaLabel: "Close alert",
    testSection: "".concat(testSection, "-dismiss")
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "close",
    size: "small"
  })));
};
/**
 * Provide contextual feedback with a wide range of styles that can be used to
 * convey the message's importance.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var Attention = function Attention(_ref) {
  var _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'left' : _ref$alignment,
      children = _ref.children,
      isDismissible = _ref.isDismissible,
      testSection = _ref.testSection,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'brand' : _ref$type;
  var colorClassName = "oui-attention--".concat(type);
  var alignmentClassName = "oui-text--".concat(alignment);
  var attentionAriaLabel = (0, _accessibility.getAssistiveTextFromColorClass)(type);
  var alignClass = "oui-attention ".concat(colorClassName, " ").concat(alignmentClassName).trim();
  var classes = (0, _classnames["default"])(_defineProperty({}, "".concat(alignClass), true));
  var dismissBtn = isDismissible ? renderDismissButton(testSection) : null;
  return _react["default"].createElement("div", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": testSection,
    "aria-label": attentionAriaLabel,
    role: "alert"
  }, children, dismissBtn);
};

Attention.propTypes = {
  /** How the text is aligned */
  alignment: _propTypes["default"].oneOf(['left', 'center']),

  /** Text that appears within the component */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,

  /** Button allowing users to dismiss the component */
  isDismissible: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Various color schemes */
  type: _propTypes["default"].oneOf(['bad-news', 'brand', 'good-news', 'warning'])
};
var _default = Attention;
exports["default"] = _default;