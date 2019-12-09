"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ProgressBar', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Progress with knobs', function () {
  return _react["default"].createElement(_ProgressBar["default"], {
    displayError: (0, _addonKnobs["boolean"])('displayError', false),
    max: (0, _addonKnobs.number)('max', 100),
    min: (0, _addonKnobs.number)('min', 0),
    progress: (0, _addonKnobs.number)('progress', 60),
    topLabel: (0, _addonKnobs.text)('topLabel', 'hola esto es un label'),
    leftLabel: (0, _addonKnobs.text)('leftLabel', 'Allocated traffic'),
    rightLabel: (0, _addonKnobs.text)('rightLabel', 'Available traffic')
  });
}).add('Progress bad news', function () {
  return _react["default"].createElement(_ProgressBar["default"], {
    max: (0, _addonKnobs.number)('max', 100),
    min: (0, _addonKnobs.number)('min', 0),
    displayError: true,
    progress: (0, _addonKnobs.number)('progress', 60),
    topLabel: (0, _addonKnobs.text)('topLabel', 'hola esto es un label'),
    leftLabel: (0, _addonKnobs.text)('leftLabel', 'Allocated traffic'),
    rightLabel: (0, _addonKnobs.text)('rightLabel', 'Available traffic')
  });
});