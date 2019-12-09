"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Input', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Input with knobs', function () {
  return _react["default"].createElement(_index["default"], {
    defaultValue: (0, _addonKnobs.text)('defaultValue', 'some default value'),
    displayError: (0, _addonKnobs["boolean"])('displayError', false),
    id: "input-01",
    isFilter: (0, _addonKnobs["boolean"])('isFilter', false),
    isDropdown: (0, _addonKnobs["boolean"])('isDropdown', true),
    isOptional: (0, _addonKnobs["boolean"])('isOptional', false),
    label: (0, _addonKnobs.text)('Label', ''),
    max: (0, _addonKnobs.number)('max', 50),
    maxLength: (0, _addonKnobs.number)('maxLength', 250),
    min: (0, _addonKnobs.number)('min', 10),
    onChange: (0, _addonActions.action)('on change'),
    onBlur: (0, _addonActions.action)('on blur'),
    onKeyDown: (0, _addonActions.action)('on key press'),
    placeholder: (0, _addonKnobs.text)('placeholder', 'just a placeholder'),
    isRequired: (0, _addonKnobs["boolean"])('isRequired', false),
    type: (0, _addonKnobs.select)('type', ['text', 'password', 'number', 'date'], 'text')
  });
}).add('Inputs', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-01",
    label: "Field label",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-02",
    label: "Label for required field",
    isRequired: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-03",
    label: "Field label",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-04",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-05",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-06",
    placeholder: "Has an error",
    type: "text",
    displayError: true
  })));
}).add('Error states', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-01",
    label: "Field label",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-02",
    label: "Field label",
    displayError: true,
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-03",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), _react["default"].createElement("fieldset", null, _react["default"].createElement(_index["default"], {
    id: "input-04",
    displayError: true,
    placeholder: "Just a placeholder",
    type: "text"
  })));
});