"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var THead = function THead(_ref) {
  var children = _ref.children,
      testSection = _ref.testSection;
  return _react["default"].createElement("thead", {
    "data-test-section": testSection
  }, children);
};

THead.propTypes = {
  /** Should be a `Table.TR` component */
  children: _propTypes["default"].node,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
THead.displayName = 'Table.THead';
var _default = THead;
exports["default"] = _default;