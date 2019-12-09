"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _OverlayWrapper = _interopRequireDefault(require("../OverlayWrapper"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Popover', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "position--relative height--100 text--center"
  }, _react["default"].createElement(_index["default"], {
    title: "Lorem ipsum dolor sit amet"
  }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"))));
}).add('Popover in action', function () {
  return _react["default"].createElement("div", {
    className: "position--relative height--100 text--center"
  }, _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: "click",
    horizontalAttachment: "center",
    overlay: _react["default"].createElement(_index["default"], {
      title: "This is a working Popover!"
    }, _react["default"].createElement("p", null, "See `OverlayWrapper` for more examples.")),
    shouldHideOnClick: true,
    verticalAttachment: "top"
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, " Open Popover ")));
});