"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Switch', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    onClick: (0, _addonActions.action)('clicked the switch')
  });
});
stories.add('Off', function () {
  return _react["default"].createElement(_index["default"], {
    checked: false,
    onClick: (0, _addonActions.action)('clicked the switch')
  });
});
stories.add('On', function () {
  return _react["default"].createElement(_index["default"], {
    checked: true,
    onClick: (0, _addonActions.action)('clicked the switch')
  });
});
stories.add('Disabled', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    checked: true,
    isDisabled: true,
    onClick: (0, _addonActions.action)('Checked')
  }), _react["default"].createElement(_index["default"], {
    checked: false,
    isDisabled: true,
    onClick: (0, _addonActions.action)('Not checked')
  }));
});