"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Sidebar', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", {
    className: "flex"
  }, _react["default"].createElement("div", {
    className: "flex--1 soft"
  }, _react["default"].createElement("h2", null, "Content"), _react["default"].createElement("p", null, (0, _addonKnobs.text)('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), _react["default"].createElement(_Sidebar["default"], {
    border: (0, _addonKnobs["boolean"])('border', true),
    isOpen: (0, _addonKnobs["boolean"])('isOpen', true),
    width: (0, _addonKnobs.number)('width', 200)
  }, _react["default"].createElement("div", {
    className: "soft"
  }, _react["default"].createElement("h2", null, "Sidebar"), _react["default"].createElement("div", null, "item 1"), _react["default"].createElement("div", null, "item 2"), _react["default"].createElement("div", null, "item 3"))));
}).add('Anchor left', function () {
  return _react["default"].createElement("div", {
    className: "flex"
  }, _react["default"].createElement("div", {
    className: "flex--1 soft"
  }, _react["default"].createElement("h2", null, "Content"), _react["default"].createElement("p", null, (0, _addonKnobs.text)('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), _react["default"].createElement(_Sidebar["default"], {
    anchor: (0, _addonKnobs.select)('anchor', {
      left: 'left',
      right: 'right'
    }, 'left'),
    border: (0, _addonKnobs["boolean"])('border', true),
    isOpen: (0, _addonKnobs["boolean"])('isOpen', true),
    width: (0, _addonKnobs.number)('width', 200)
  }, _react["default"].createElement("div", {
    className: "soft"
  }, _react["default"].createElement("h2", null, "Sidebar"), _react["default"].createElement("div", null, "item 1"), _react["default"].createElement("div", null, "item 2"), _react["default"].createElement("div", null, "item 3"))));
}).add('Docked', function () {
  return _react["default"].createElement("div", {
    className: "flex"
  }, _react["default"].createElement("div", {
    className: "flex--1 soft"
  }, _react["default"].createElement("h2", null, "Content"), _react["default"].createElement("p", null, (0, _addonKnobs.text)('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), _react["default"].createElement(_Sidebar["default"], {
    border: (0, _addonKnobs["boolean"])('border', true),
    docked: (0, _addonKnobs["boolean"])('docked', true),
    isOpen: (0, _addonKnobs["boolean"])('isOpen', true),
    width: (0, _addonKnobs.number)('width', 200)
  }, _react["default"].createElement("div", {
    className: "soft"
  }, _react["default"].createElement("h2", null, "Sidebar"), _react["default"].createElement("div", null, "item 1"), _react["default"].createElement("div", null, "item 2"), _react["default"].createElement("div", null, "item 3"))));
}).add('Docked with box shadow', function () {
  return _react["default"].createElement("div", {
    className: "flex"
  }, _react["default"].createElement("div", {
    className: "flex--1 soft"
  }, _react["default"].createElement("h2", null, "Content"), _react["default"].createElement("p", null, (0, _addonKnobs.text)('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), _react["default"].createElement(_Sidebar["default"], {
    boxShadow: (0, _addonKnobs["boolean"])('boxShadow', true),
    docked: (0, _addonKnobs["boolean"])('docked', true),
    isOpen: (0, _addonKnobs["boolean"])('isOpen', true),
    width: (0, _addonKnobs.number)('width', 200)
  }, _react["default"].createElement("div", {
    className: "soft"
  }, _react["default"].createElement("h2", null, "Sidebar"), _react["default"].createElement("div", null, "item 1"), _react["default"].createElement("div", null, "item 2"), _react["default"].createElement("div", null, "item 3"))));
});