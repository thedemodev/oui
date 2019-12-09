"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Checkbox', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('With string label', function () {
  return _react["default"].createElement(_Checkbox["default"], {
    defaultChecked: true,
    label: (0, _addonKnobs.text)('label', 'checkbox component'),
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false)
  });
}).add('With html label', function () {
  return _react["default"].createElement(_Checkbox["default"], {
    defaultChecked: true,
    label: _react["default"].createElement("div", null, _react["default"].createElement("strong", null, "Label"), _react["default"].createElement("br", null), _react["default"].createElement("span", null, "Description text")),
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false)
  });
}).add('With labelWeight', function () {
  return _react["default"].createElement(_Checkbox["default"], {
    defaultChecked: true,
    label: (0, _addonKnobs.text)('label', 'checkbox component'),
    labelWeight: (0, _addonKnobs.select)('labelWeight', ['light', 'normal', 'bold'], 'bold'),
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false)
  });
});