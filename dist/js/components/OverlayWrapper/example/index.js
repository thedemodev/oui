"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _Popover = _interopRequireDefault(require("../../Popover/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var _default = [{
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"))
  }, _react["default"].createElement(_Button["default"], null, "Open Popover")))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    horizontalAttachment: "left",
    horizontalTargetAttachment: "right",
    verticalAttachment: "middle",
    verticalTargetAttachment: "middle",
    isConstrainedToScreen: true
  }, _react["default"].createElement(_Button["default"], null, "Open Pinned Popover")))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    overlay: _react["default"].createElement(_Popover["default"], null, _react["default"].createElement("p", null, "The close button works because `OverlayWrapper` exposes a `hideOverlay` method using `context` in React."), _react["default"].createElement("p", null, "See the source for `OverlayWrapper` to learn more."))
  }, _react["default"].createElement(_Button["default"], null, "Popover With A Close Button")))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, _react["default"].createElement(_Button["default"], null, "Open Popover")))]
}, {
  examples: [_react["default"].createElement("div", {
    className: "position--relative height--100"
  }, _react["default"].createElement(_index["default"], {
    overlay: _react["default"].createElement(_Popover["default"], {
      title: "Lorem ipsum dolor sit amet"
    }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    shouldHideOnClick: false
  }, _react["default"].createElement(_Button["default"], null, "Don't Close On Click Outside Popover")))]
}];
exports["default"] = _default;