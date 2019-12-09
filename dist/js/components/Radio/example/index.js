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
    defaultChecked: false,
    label: "onChange Example",
    name: "example-1",
    onChange: mockFunction
  })]
}, {
  examples: [_react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    label: "First Value",
    name: "multi-example"
  }), _react["default"].createElement(_index["default"], {
    label: "Second Value",
    name: "multi-example"
  }), _react["default"].createElement(_index["default"], {
    label: "Third Value",
    name: "multi-example"
  }))]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    defaultChecked: true,
    label: "Checked by default",
    name: "example-3"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    isDisabled: true,
    defaultChecked: true,
    label: "Disabled checkbox",
    name: "example-4"
  })]
}];
exports["default"] = _default;