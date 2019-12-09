"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _HelpPopover = _interopRequireDefault(require("../HelpPopover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Fieldset = function Fieldset(props) {
  return _react["default"].createElement("fieldset", {
    "data-test-section": props.testSection
  }, props.title && _react["default"].createElement("div", {
    className: "gamma push--bottom"
  }, props.title, props.isOptional && _react["default"].createElement("span", {
    className: "oui-label__optional"
  }, "(Optional)"), props.helpIcon && _react["default"].createElement(_HelpPopover["default"], {
    popoverTitle: props.popoverTitle,
    horizontalAttachment: "left",
    verticalAttachment: "middle"
  }, _react["default"].createElement("p", null, props.popoverText))), props.description && _react["default"].createElement("div", {
    className: "push--bottom"
  }, props.description), props.children);
};

Fieldset.propTypes = {
  children: _propTypes["default"].node.isRequired,
  description: _propTypes["default"].node,
  helpIcon: _propTypes["default"].bool,
  isOptional: _propTypes["default"].bool,
  popoverText: _propTypes["default"].string,
  popoverTitle: _propTypes["default"].string,
  testSection: _propTypes["default"].string,
  title: _propTypes["default"].string
};
var _default = Fieldset;
exports["default"] = _default;