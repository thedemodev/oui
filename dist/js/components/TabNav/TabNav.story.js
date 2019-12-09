"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('TabNav', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Dashboard tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "second",
    style: ['dashboard']
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Basic tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "first"
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Closed tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "second",
    style: ['small']
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Centered tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "first",
    style: ['small', 'center']
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Plain tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "first",
    style: ['small', 'sub']
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Sub tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "first",
    style: ['sub']
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Header tabs', function () {
  return _react["default"].createElement(_index["default"], {
    activeTab: "first",
    style: ['header']
  }, _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    onClick: (0, _addonActions.action)('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
});