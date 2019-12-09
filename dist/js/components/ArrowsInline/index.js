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
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var ArrowsInline = function ArrowsInline(_ref) {
  var direction = _ref.direction,
      testSection = _ref.testSection;
  var classes = (0, _classnames["default"])(_defineProperty({}, "oui-arrow-inline--".concat(direction), direction));
  return _react["default"].createElement("span", {
    "data-oui-component": true,
    className: classes,
    "aria-hidden": "true",
    "data-test-section": testSection
  });
};

ArrowsInline.defaultProps = {
  direction: 'down'
};
ArrowsInline.propTypes = {
  /** Direction the arrow points */
  direction: _propTypes["default"].oneOf(['up', 'down', 'left', 'right']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = ArrowsInline;
exports["default"] = _default;