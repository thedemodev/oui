"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Spinner', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    "data-test-section": "test-spinner"
  });
});
stories.add('Smaller sizes', function () {
  return _react["default"].createElement(_index["default"], {
    size: (0, _addonKnobs.select)('size', {
      small: 'small',
      tiny: 'tiny'
    }, 'small')
  });
});
stories.add('With overlay', function () {
  return _react["default"].createElement("div", {
    className: "position--relative"
  }, _react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum iusto repudiandae earum porro reprehenderit perspiciatis iste delectus ipsam, accusantium ad sunt, rem mollitia, omnis illum explicabo facere quibusdam qui."), _react["default"].createElement(_index["default"], {
    hasOverlay: true
  }));
});