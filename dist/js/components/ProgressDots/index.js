"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Generates an `ProgressDots`
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var ProgressDots = function ProgressDots(_ref) {
  var testSection = _ref.testSection;
  return _react["default"].createElement("ul", {
    "data-oui-component": true,
    "data-test-section": testSection,
    className: "oui-progress-dots"
  }, _react["default"].createElement("li", null), _react["default"].createElement("li", null), _react["default"].createElement("li", null));
};

ProgressDots.propTypes = {
  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
ProgressDots.displayName = 'ProgressDots';
var _default = ProgressDots;
exports["default"] = _default;