"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Radio', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    testSection: (0, _addonKnobs.text)('testSection', 'test-radio'),
    name: (0, _addonKnobs.text)('name', 'this is a radio'),
    label: (0, _addonKnobs.text)('label', 'this is a radio')
  });
}).add('With html label', function () {
  return _react["default"].createElement(_index["default"], {
    testSection: (0, _addonKnobs.text)('testSection', 'test-radio'),
    name: (0, _addonKnobs.text)('name', 'this is a radio'),
    label: _react["default"].createElement("div", null, _react["default"].createElement("strong", null, "Label"), _react["default"].createElement("br", null), _react["default"].createElement("span", null, "Description text"))
  });
}).add('With labelWeight prop', function () {
  return _react["default"].createElement(_index["default"], {
    testSection: (0, _addonKnobs.text)('testSection', 'test-radio'),
    name: (0, _addonKnobs.text)('name', 'this is a radio'),
    label: (0, _addonKnobs.text)('label', 'this is a radio'),
    labelWeight: (0, _addonKnobs.select)('labelWeight', ['light', 'normal', 'bold'], 'bold')
  });
});