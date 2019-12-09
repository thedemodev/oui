"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Link', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: (0, _addonKnobs.text)('href', 'http://google.com'),
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    style: (0, _addonKnobs.select)('style', {
      "default": 'default',
      dark: 'dark',
      muted: 'muted',
      'bad-news': 'bad-news',
      reverse: 'reverse'
    }, 'default')
  }, (0, _addonKnobs.text)('children', 'Link'))));
}).add('New window', function () {
  return _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: (0, _addonKnobs.text)('href', 'http://google.com'),
    newWindow: (0, _addonKnobs["boolean"])('newWindow', true),
    style: (0, _addonKnobs.select)('style', {
      "default": 'default',
      dark: 'dark',
      muted: 'muted',
      'bad-news': 'bad-news',
      reverse: 'reverse'
    }, 'default')
  }, (0, _addonKnobs.text)('children', 'Link'))));
}).add('All links', function () {
  return _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    onClick: (0, _addonActions.action)('click blocklist item home')
  }, (0, _addonKnobs.text)('default', 'Link'))), _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    style: "dark"
  }, (0, _addonKnobs.text)('dark', 'Link Dark'))), _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    style: "muted"
  }, (0, _addonKnobs.text)('muted', 'Link Muted'))), _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    style: "bad-news"
  }, (0, _addonKnobs.text)('bad-news', 'Link Bad News'))), _react["default"].createElement("li", {
    className: "background--brand"
  }, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    style: "reverse"
  }, (0, _addonKnobs.text)('reverse', 'Link Reverse'))));
}).add('All disabled', function () {
  return _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: true
  }, "Link")), _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: true,
    style: "dark"
  }, "Link Dark")), _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: true,
    style: "muted"
  }, "Link Muted")), _react["default"].createElement("li", null, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: true,
    style: "bad-news"
  }, "Link Bad News")), _react["default"].createElement("li", {
    className: "background--brand"
  }, _react["default"].createElement(_index["default"], {
    href: "http://google.com",
    isDisabled: true,
    style: "reverse"
  }, "Link Reverse")));
}).add('Link that looks like a Button', function () {
  return _react["default"].createElement(_index["default"], {
    newWindow: true,
    href: (0, _addonKnobs.text)('href', 'http://google.com')
  }, _react["default"].createElement(_Button["default"], {
    onClick: null
  }, "Go To Google"));
});
(0, _react2.storiesOf)('Link (Fake)', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
}).add('Enabled', function () {
  return _react["default"].createElement(_index["default"], null, "Faux Link");
}).add('Disabled', function () {
  return _react["default"].createElement(_index["default"], {
    isDisabled: true
  }, "Faux Link");
});