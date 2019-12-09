"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _OverlayWrapper = _interopRequireDefault(require("../../OverlayWrapper/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var _default = [{
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    title: "Lorem ipsum dolor sit amet"
  }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_OverlayWrapper["default"], {
    overlay: _react["default"].createElement(_index["default"], {
      title: "This is a working Popover!"
    }, _react["default"].createElement("p", null, "See `OverlayWrapper` for more examples."))
  }, _react["default"].createElement(_Button["default"], null, "Open Popover")))]
}];
exports["default"] = _default;