"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var mockFunction = function mockFunction() {};

var _default = [{
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    activeTab: 'first'
  }, _react["default"].createElement(_index["default"].Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    activeTab: 'second',
    style: ['small']
  }, _react["default"].createElement(_index["default"].Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    activeTab: 'first',
    style: ['small', 'center']
  }, _react["default"].createElement(_index["default"].Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    activeTab: 'first',
    style: ['small', 'sub']
  }, _react["default"].createElement(_index["default"].Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), _react["default"].createElement(_index["default"].Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}];
exports["default"] = _default;