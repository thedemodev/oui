"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ArrowsInline = _interopRequireDefault(require("../ArrowsInline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ArrowsInline', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Select the arrow', function () {
  return _react["default"].createElement(_ArrowsInline["default"], {
    direction: (0, _addonKnobs.select)('direction', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right'
    }, 'down'),
    testSection: "arrow-test"
  });
});