"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Badge', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('All badges', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    color: "default"
  }, "Default"), _react["default"].createElement(_index["default"], {
    color: "draft"
  }, "Draft"), _react["default"].createElement(_index["default"], {
    color: "live"
  }, "Live"), _react["default"].createElement(_index["default"], {
    color: "primary"
  }, "Primary"), _react["default"].createElement(_index["default"], {
    color: "plain"
  }, "Plain"), _react["default"].createElement(_index["default"], {
    color: "bad-news"
  }, "Bad News"));
}).add('With text', function () {
  return _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement(_index["default"], {
    color: "draft"
  }, "1"), (0, _addonKnobs.text)('text', 'Unpublished Change'));
}).add('With numbers', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    color: "draft"
  }, (0, _addonKnobs.number)('draft number', 9)), _react["default"].createElement(_index["default"], {
    color: "live"
  }, (0, _addonKnobs.number)('light number', 9)));
});