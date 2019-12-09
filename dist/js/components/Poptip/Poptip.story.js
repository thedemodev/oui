"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Poptip', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, _react["default"].createElement("div", {
    className: "flexboxCenter"
  }, story()));
});
stories.add('Basic poptip', function () {
  return _react["default"].createElement(_index["default"], {
    trigger: "click",
    content: "This is a sample poptip.",
    position: "right"
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Default Poptip"));
}).add('Poptip with children inline', function () {
  return _react["default"].createElement("div", {
    className: "flex flex-align--center line--1"
  }, _react["default"].createElement("input", {
    className: "text-input width--300 push-half--right",
    type: "text"
  }), _react["default"].createElement(_index["default"], {
    content: "Block Origin",
    position: "right",
    isInline: true
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "ban"
  })));
}).add('Poptip to the right', function () {
  return _react["default"].createElement(_index["default"], {
    trigger: "mouseenter",
    content: "This is a sample poptip.",
    position: "right"
  }, _react["default"].createElement(_Button["default"], {
    style: "unstyled",
    width: "default"
  }, _react["default"].createElement("a", null, "Poptip on the right")));
}).add('Poptip light theme', function () {
  return _react["default"].createElement(_index["default"], {
    trigger: "click",
    content: "This is a sample poptip.",
    theme: "light"
  }, _react["default"].createElement(_Button["default"], {
    style: "unstyled",
    width: "default"
  }, _react["default"].createElement("a", null, "Click Poptip, light theme")));
}).add('Poptip light theme on the right', function () {
  return _react["default"].createElement(_index["default"], {
    trigger: "click",
    content: "This is a sample poptip.",
    theme: "light",
    position: "right"
  }, _react["default"].createElement(_Button["default"], {
    style: "unstyled",
    width: "default"
  }, _react["default"].createElement("a", null, "Click Poptip, light theme, on the right")));
}).add('Customizable with knobs', function () {
  return _react["default"].createElement(_index["default"], {
    content: 'This is a sample poptip.',
    disable: (0, _addonKnobs["boolean"])('disable', false),
    isAnimated: (0, _addonKnobs["boolean"])('isAnimated', true),
    position: (0, _addonKnobs.select)('position', ['top', 'right', 'bottom', 'left'], 'top'),
    theme: (0, _addonKnobs.select)('theme', ['dark', 'light', 'transparent'], 'dark'),
    trigger: (0, _addonKnobs.select)('trigger', ['mouseenter', 'focus', 'click', 'manual'], 'mouseenter')
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Customizable Poptip"));
}).add('Basic poptip with delay', function () {
  return _react["default"].createElement(_index["default"], {
    trigger: "mouseenter",
    delay: 1000,
    hideDelay: 5000,
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
  }, _react["default"].createElement(_Button["default"], {
    width: "default"
  }, "Default Poptip"));
});