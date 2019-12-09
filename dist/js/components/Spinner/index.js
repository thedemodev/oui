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
 * Generates an `spinner` element with/without overlay and optinaly
 * using props for sizes small or tiny for smaller sizes.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Spinner = function Spinner(_ref) {
  var size = _ref.size,
      hasOverlay = _ref.hasOverlay,
      testSection = _ref.testSection;
  var classes = (0, _classnames["default"])('oui-spinner', _defineProperty({}, "oui-spinner--".concat(size), size));

  if (hasOverlay) {
    return _react["default"].createElement("div", {
      "data-oui-component": true,
      "data-test-section": testSection,
      className: "oui-overlay"
    }, _react["default"].createElement("div", {
      className: classes
    }));
  }

  return _react["default"].createElement("div", {
    "data-test-section": testSection,
    className: classes
  });
};

Spinner.propTypes = {
  /** boolean class for establish overlay */
  hasOverlay: _propTypes["default"].bool,

  /** various sizes */
  size: _propTypes["default"].oneOf(['small', 'tiny']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Spinner.displayName = 'Spinner';
var _default = Spinner;
exports["default"] = _default;