"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer(props) {
  return _react["default"].createElement("div", {
    className: "oui-dialog__footer"
  }, props.children);
};

Footer.propTypes = {
  children: _propTypes["default"].element.isRequired
};
var _default = Footer;
exports["default"] = _default;