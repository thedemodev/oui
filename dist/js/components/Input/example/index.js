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
    type: "text",
    placeholder: "This is a placeholder"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    label: "Test",
    displayError: true,
    placeholder: "This is a placeholder"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    defaultValue: "isReadOnly Example",
    label: "Test",
    isReadOnly: true
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    placeholder: "Browse by Name",
    isFilter: true
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    defaultValue: "onChange Example",
    onChange: mockFunction
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    defaultValue: "onBlur Example",
    onBlur: mockFunction
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    defaultValue: "onKeyDown Example",
    onKeyDown: mockFunction
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "text",
    label: "Label with Optional",
    isOptional: true
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "password",
    label: "Password",
    testSection: "input"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "number",
    min: 10,
    max: 50
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "number",
    textAlign: "right",
    min: 10,
    max: 50
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "date"
  })]
}];
exports["default"] = _default;