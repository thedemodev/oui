"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _lodash = _interopRequireDefault(require("lodash.noop"));

var _addonInfo = require("@storybook/addon-info");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('DockedFooter', module);
stories.addDecorator(function (story) {
  return _react["default"].createElement("div", {
    className: "soft-quad--sides"
  }, story());
});
stories.add('With Less Content', (0, _addonInfo.withInfo)()(function () {
  return _react["default"].createElement("div", {
    "data-test-section": "helloTesting",
    className: "overflow-y--hidden"
  }, _react["default"].createElement("h2", {
    className: "push-double--top"
  }, "Test"), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement(_index["default"], {
    testSection: 'docked-footer-less-content',
    parentTestSection: 'helloTesting',
    includesMargin: true
  }, [_react["default"].createElement(_Button["default"], {
    style: "plain",
    key: 0,
    onClick: _lodash["default"]
  }, "Cancel"), _react["default"].createElement(_Button["default"], {
    style: "highlight",
    key: 1,
    onClick: _lodash["default"]
  }, "Confirm")]));
})).add('With More Content', (0, _addonInfo.withInfo)()(function () {
  return _react["default"].createElement("div", {
    "data-test-section": "helloTestingLong",
    className: "height--300 overflow-y--auto"
  }, _react["default"].createElement("div", null, _react["default"].createElement("h2", {
    className: "push-double--top"
  }, "Test"), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content..."), _react["default"].createElement("p", null, "Test content...")), _react["default"].createElement(_index["default"], {
    testSection: 'docked-footer-more-content',
    parentTestSection: 'helloTestingLong'
  }, [_react["default"].createElement(_Button["default"], {
    style: "plain",
    key: 0,
    onClick: _lodash["default"]
  }, "Cancel"), _react["default"].createElement(_Button["default"], {
    style: "highlight",
    key: 1,
    onClick: _lodash["default"]
  }, "Confirm")]));
}));