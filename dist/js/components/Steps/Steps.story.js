"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react2.storiesOf)('Steps', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
var items = [{
  label: 'Cat',
  value: 'cat'
}, {
  label: 'Dog',
  value: 'dog'
}, {
  label: 'Bear',
  value: 'bear'
}, {
  label: 'Squirrel',
  value: 'squirrel'
}];
stories.add('Default', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    currentStep: 'bear',
    onClick: (0, _addonActions.action)('Stage clicked')
  }));
}).add('User cannot edit', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    items: items,
    currentStep: 'bear',
    onClick: (0, _addonActions.action)('Stage clicked'),
    userCanEdit: false
  }));
});

var Container = _styledComponents["default"].div(_templateObject());