"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Textarea', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Textarea with knobs', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    defaultValue: "Delete this default value and see the placeholder",
    maxLength: (0, _addonKnobs.number)('maxLength', 250),
    numRows: (0, _addonKnobs.number)('numRows', 25),
    placeholder: (0, _addonKnobs.text)('placeHolder', 'Enter a comment'),
    onBlur: (0, _addonActions.action)('Textarea: onBlur'),
    onChange: (0, _addonActions.action)('Textarea: onChange'),
    onFocus: (0, _addonActions.action)('Textarea: onFocus'),
    onInput: (0, _addonActions.action)('Textarea: onInput'),
    onKeyDown: (0, _addonActions.action)('Textarea: onKeyDown')
  }));
}).add('With label and note', function () {
  return _react["default"].createElement(_index["default"], {
    label: "Field label",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
}).add('Error state', function () {
  return _react["default"].createElement(_index["default"], {
    label: "Field label",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
}).add('Textarea with auto focus', function () {
  return _react["default"].createElement(_index["default"], {
    label: "Field label",
    focus: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
});