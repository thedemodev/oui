"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Disclose', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    title: "default title"
  }, _react["default"].createElement("h3", null, "Some Title"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."));
});
stories.add('Multiple stacked', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    headerStyle: "header-bordered",
    title: "Some Title",
    childrenStyle: "border"
  }, _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("h3", null, "Some Title"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))), _react["default"].createElement(_index["default"], {
    headerStyle: "header-bordered",
    title: "Some Title"
  }, _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("h3", null, "Some Title"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))));
});
stories.add('Header style', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    headerStyle: "header",
    title: "Browsers"
  }, _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("a", null, "Safari")), _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("a", null, "Chrome")), _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("a", null, "Opera")), _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("a", null, "IE"))), _react["default"].createElement(_index["default"], {
    headerStyle: "header",
    title: "Some Title",
    childrenStyle: "border"
  }, _react["default"].createElement("div", {
    className: "soft--left"
  }, _react["default"].createElement("h3", null, "Some Title"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))));
});
stories.add('With divider', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    childrenStyle: "divider",
    title: "Some Title"
  }, _react["default"].createElement("h3", null, "Some Title"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")), _react["default"].createElement(_index["default"], {
    childrenStyle: "divider",
    title: "Some Title"
  }, _react["default"].createElement("h3", null, "Some Title"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")));
});
stories.add('With ul', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    childrenStyle: "divider",
    title: "Some Title"
  }, _react["default"].createElement("ul", {
    className: "push-half oui-input-list"
  }, _react["default"].createElement("li", null, _react["default"].createElement(_Checkbox["default"], {
    label: "When triggered, deactivate if conditions are not met",
    testSection: "configure-view-smart-deactivation_enabled"
  })), _react["default"].createElement("li", {
    className: "push-double--left"
  }, _react["default"].createElement(_Checkbox["default"], {
    label: "Undo changes when page activates",
    testSection: "configure-view-smart-undo_on_deactivation"
  }), _react["default"].createElement("div", {
    className: "push-triple--left muted"
  }, "Undoing changes during page activation allows your single page app to dynamically apply and remove changes. Learn more about when to use this, and why this might be useful.")))));
});