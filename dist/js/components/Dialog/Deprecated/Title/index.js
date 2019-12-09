"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = function Title(props) {
  return _react["default"].createElement("div", {
    className: "push-quad--bottom"
  }, _react["default"].createElement("div", {
    className: "beta push--bottom"
  }, props.children), props.subtitle && _react["default"].createElement("div", {
    className: "push--bottom"
  }, props.subtitle));
};

Title.propTypes = {
  children: _propTypes["default"].node.isRequired,
  subtitle: _propTypes["default"].node
};
var _default = Title;
exports["default"] = _default;