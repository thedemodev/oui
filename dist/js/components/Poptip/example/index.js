"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _Button = _interopRequireDefault(require("../../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var _default = [{
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
  }, _react["default"].createElement(_Button["default"], null, "Basic Poptip")))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, "Learn More\u2026\xA0", _react["default"].createElement(_index["default"], {
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "right",
    verticalAttachment: "middle",
    verticalTargetAttachment: "middle"
  }, _react["default"].createElement(_Button["default"], {
    style: "unstyled"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "help"
  }))))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, _react["default"].createElement(_Button["default"], null, "Poptip With Advanced Positioning")))]
}];
exports["default"] = _default;