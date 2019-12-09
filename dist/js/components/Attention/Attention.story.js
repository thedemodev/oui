"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Attention = _interopRequireDefault(require("../Attention"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var typeOptions = {
  'bad-news': 'bad-news',
  'brand': 'brand',
  'good-news': 'good-news',
  'warning': 'warning'
};
var stories = (0, _react2.storiesOf)('Attention', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Attentions states', function () {
  return _react["default"].createElement(_Attention["default"], {
    alignment: (0, _addonKnobs.select)('alignment', {
      center: 'center',
      left: 'left'
    }, 'center'),
    isDismissible: (0, _addonKnobs["boolean"])('isDismissible', false),
    testSection: "attention-foo",
    type: (0, _addonKnobs.select)('type', typeOptions, 'warning')
  }, (0, _addonKnobs.text)('content', 'Hello! This is a short attention bar.'));
});