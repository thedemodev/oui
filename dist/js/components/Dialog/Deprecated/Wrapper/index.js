"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = function Wrapper(props) {
  return _react["default"].createElement("div", {
    "data-oui-component": true,
    className: "overflow-y--auto flex--1",
    "data-test-section": props.testSection
  }, _react["default"].createElement("div", {
    className: "reading-column"
  }, _react["default"].createElement("div", {
    className: "push-quad--bottom"
  }, props.children)));
};

Wrapper.propTypes = {
  children: _propTypes["default"].node.isRequired,
  testSection: _propTypes["default"].string
};
var _default = Wrapper;
exports["default"] = _default;