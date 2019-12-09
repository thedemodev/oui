"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Tiny inline component used to draw attention to an item's state or status.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Badge = function Badge(props) {
  var classes = (0, _classnames["default"])(_defineProperty({
    'oui-badge': true
  }, "oui-badge--".concat(props.color), props.color));
  return _react["default"].createElement("span", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": props.testSection
  }, props.children);
};

Badge.propTypes = {
  /** Text that appears within the component */
  children: _propTypes["default"].node.isRequired,

  /** Various color schemes */
  color: _propTypes["default"].oneOf(['default', 'draft', 'live', 'primary', 'plain', 'bad-news']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Badge.defaultProps = {
  color: 'default'
};
var _default = Badge;
exports["default"] = _default;