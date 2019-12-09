"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('HelpPopover', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    popoverTitle: "This is a popover title"
  }, "This is a popover description. \uD83E\uDD13");
}).add('Hover', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "position--relative height--100 text--center"
  }, _react["default"].createElement(_index["default"], {
    popoverTitle: "This is a popover title",
    behavior: "hover",
    horizontalAttachment: "left",
    verticalAttachment: "middle"
  }, "You hovered! \uD83E\uDD13")));
});