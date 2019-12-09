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
  examples: [_react["default"].createElement(_index["default"], {
    placeholder: "Enter a comment\u2026"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    isDisabled: true,
    defaultValue: "This textarea is disabled."
  })]
}, {
  examples: [
  /* eslint-disable no-console */
  _react["default"].createElement(_index["default"], {
    defaultValue: "This textarea has many event listeners.",
    onBlur: mockFunction,
    onChange: mockFunction,
    onFocus: mockFunction,
    onInput: mockFunction,
    onKeyDown: mockFunction
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    focus: true,
    placeholder: "This text area is auto focused."
  })]
}];
exports["default"] = _default;