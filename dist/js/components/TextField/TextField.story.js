"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('TextField (deprecated)', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, _react["default"].createElement("div", {
    className: "attention attention--bad-news oui-text--center push-double--bottom"
  }, "TextField component is deprecated. Please use Input instead for the same features."), story());
});
stories.add('TextField with knobs', function () {
  return _react["default"].createElement(_index["default"], {
    defaultValue: (0, _addonKnobs.text)('defaultValue', 'some default value'),
    displayError: (0, _addonKnobs["boolean"])('displayError', false),
    isFilter: (0, _addonKnobs["boolean"])('isFilter', false),
    isOptional: (0, _addonKnobs["boolean"])('isOptional', false),
    isRequired: (0, _addonKnobs["boolean"])('isRequired', false),
    label: (0, _addonKnobs.text)('Label', 'Use Input Component instead'),
    max: (0, _addonKnobs.number)('max', 50),
    min: (0, _addonKnobs.number)('min', 10),
    note: (0, _addonKnobs.text)('note', ''),
    onChange: (0, _addonActions.action)('on change'),
    onBlur: (0, _addonActions.action)('on blur'),
    onKeyDown: (0, _addonActions.action)('on key press'),
    placeholder: (0, _addonKnobs.text)('placeholder', 'just a placeholder'),
    type: (0, _addonKnobs.select)('type', ['text', 'password', 'number', 'date', 'percent'], 'text')
  });
}).add('TextField', function () {
  return _react["default"].createElement(_index["default"], {
    label: "Use Input Component instead",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
}).add('Percent', function () {
  return _react["default"].createElement(_index["default"], {
    label: "Total Traffic Allocated:",
    placeholder: "100",
    defaultValue: (0, _addonKnobs.text)('defaultValue', '0'),
    type: "percent",
    max: (0, _addonKnobs.number)('max', 100),
    min: (0, _addonKnobs.number)('min', 0)
  });
}).add('Error state', function () {
  return _react["default"].createElement(_index["default"], {
    label: "Use Input Component instead",
    displayError: true,
    note: "Form error note.",
    placeholder: "Just a placeholder",
    type: "text"
  });
});