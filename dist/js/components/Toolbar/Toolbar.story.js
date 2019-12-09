"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Toolbar', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].Left, null, _react["default"].createElement(_index["default"].Link, {
    href: 'www.google.com',
    label: "Link"
  })), _react["default"].createElement(_index["default"].Right, null, _react["default"].createElement(_index["default"].Link, {
    isDisabled: true,
    href: 'www.google.com',
    label: "Disabled Link"
  }), _react["default"].createElement(_index["default"].Link, {
    href: 'www.google.com',
    label: "Enabled Link"
  }), _react["default"].createElement(_index["default"].Button, {
    onClick: (0, _addonActions.action)('Saying hi!'),
    label: "Button"
  }))));
});