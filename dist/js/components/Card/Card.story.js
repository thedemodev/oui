"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("../Button"));

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Card', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_Card["default"], {
    title: (0, _addonKnobs.text)('title', 'Card Title'),
    shadow: (0, _addonKnobs["boolean"])('shadow', false),
    onClose: (0, _addonActions.action)('close card'),
    testSection: "card"
  }, (0, _addonKnobs.text)('body', 'Hello! This is a short card example.'));
}).add('Custom Contents', function () {
  return _react["default"].createElement(_Card["default"], {
    title: (0, _addonKnobs.text)('title', 'Card Title'),
    shadow: (0, _addonKnobs["boolean"])('shadow', false),
    onClose: (0, _addonActions.action)('close card'),
    testSection: "card"
  }, _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement("div", null, "Complex Contents"), _react["default"].createElement("div", {
    className: "muted micro"
  }, "This is a description.")), _react["default"].createElement(_Button["default"], {
    size: "small",
    style: "outline"
  }, "Inner Button")));
});