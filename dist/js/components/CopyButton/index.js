"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _Button = _interopRequireDefault(require("../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
var CopyButton = function CopyButton(_ref) {
  var style = _ref.style,
      testSection = _ref.testSection,
      textToCopy = _ref.textToCopy;
  return _react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: textToCopy
  }, _react["default"].createElement(_Button["default"], {
    style: style === 'none' ? null : style,
    ariaLabel: "Copy code snippet",
    testSection: testSection ? "".concat(testSection, "-copy-button") : null
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "clipboard"
  })));
};

CopyButton.propTypes = {
  /** Style option for the button */
  style: _propTypes["default"].oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'outline-reverse', 'plain', 'toggle', 'underline', 'unstyled', 'none']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** The text or code that will be copied */
  textToCopy: _propTypes["default"].string.isRequired
};
CopyButton.defaultProps = {
  style: 'plain'
};
var _default = CopyButton;
exports["default"] = _default;