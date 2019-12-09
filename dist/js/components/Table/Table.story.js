"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Table', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    density: (0, _addonKnobs.select)('density', {
      'loose': 'loose',
      'tight': 'tight'
    }, 'tight'),
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, " Experiment "), _react["default"].createElement(_index["default"].TH, null, " Conversion Rate "), _react["default"].createElement(_index["default"].TH, null, " Status "))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Header CTA "), _react["default"].createElement(_index["default"].TD, {
    width: "20%"
  }, " 12% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Shorter Contact Form "), _react["default"].createElement(_index["default"].TD, null, " 4% "), _react["default"].createElement(_index["default"].TD, null, " Draft ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Larger search bar "), _react["default"].createElement(_index["default"].TD, null, " 6.7% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Center aligned headline "), _react["default"].createElement(_index["default"].TD, null, " 9.3% "), _react["default"].createElement(_index["default"].TD, null, " Running ")))));
}).add('Custom tr borders', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], null, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, " Experiment "), _react["default"].createElement(_index["default"].TH, null, " Conversion Rate "), _react["default"].createElement(_index["default"].TH, null, " Status "))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, {
    borderStyle: "ends",
    backgroundColor: "faint"
  }, _react["default"].createElement(_index["default"].TD, null, " Header CTA "), _react["default"].createElement(_index["default"].TD, null, " 12% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Shorter Contact Form "), _react["default"].createElement(_index["default"].TD, null, " 4% "), _react["default"].createElement(_index["default"].TD, null, " Draft ")))));
}).add('Loose & rule style', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    density: "loose",
    style: "rule",
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, " Experiment "), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true
  }, " Conversion Rate "), _react["default"].createElement(_index["default"].TH, null, " Status "))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Header CTA "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 12% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Shorter Contact Form "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 4% "), _react["default"].createElement(_index["default"].TD, null, " Draft ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Larger search bar "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 6.7% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Center aligned headline "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 9.3% "), _react["default"].createElement(_index["default"].TD, null, " Running ")))));
}).add('Tight & no bottom border', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    density: "tight",
    style: "rule-no-bottom-border",
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Experiment "), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true
  }, " Conversion Rate "), _react["default"].createElement(_index["default"].TH, null, " Status "))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Header CTA "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 12% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Shorter Contact Form "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 4% "), _react["default"].createElement(_index["default"].TD, null, " Draft ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Larger search bar "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 6.7% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Center aligned headline "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, " 9.3% "), _react["default"].createElement(_index["default"].TD, null, " Running ")))));
}).add('Dome', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    density: "tight",
    style: "wall",
    tableLayoutAlgorithm: "auto"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, " Experiment "), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true,
    width: "20%"
  }, "Conversion Rate "), _react["default"].createElement(_index["default"].TH, {
    isCollapsed: true
  }, " Status "))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, " Header CTA "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 12% "), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small",
    width: "default"
  }, " Start "))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, " Shorter Contact Form "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 4% "), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small",
    width: "default"
  }, " Start "))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, " Larger search bar "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 6.7% "), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small",
    width: "default"
  }, " Start "))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, " Center aligned headline "), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 9.3% "), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small",
    width: "default"
  }, " Start "))))));
});