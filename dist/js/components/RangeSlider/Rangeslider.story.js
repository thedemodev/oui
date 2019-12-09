"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// build fillColorName options for a select/dropdown knob
var fillColorOptions = {
  None: ''
};
Object.keys(_constants.FILL_COLOR_MAP).forEach(function (color) {
  fillColorOptions[color] = color;
});
var stories = (0, _react2.storiesOf)('RangeSlider', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    value: (0, _addonKnobs.number)('value', 50)
  });
}).add('Disabled', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "oui-text-input push-double--bottom"
  }), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    value: (0, _addonKnobs.number)('value', 50)
  }), _react["default"].createElement("input", {
    type: "text",
    className: "oui-text-input"
  }));
}).add('Custom Fill Color', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    fillColorName: (0, _addonKnobs.select)('fillColorName', fillColorOptions, 'red'),
    value: (0, _addonKnobs.number)('value', 50)
  }));
}).add('Use Off instead of 0%', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    value: (0, _addonKnobs.number)('value', 50),
    useOffForLabel: (0, _addonKnobs["boolean"])('useOffForLabel', true)
  }));
});