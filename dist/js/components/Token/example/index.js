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
    name: "Duck",
    testSection: "token-test"
  }), _react["default"].createElement(_index["default"], {
    name: "Duck",
    style: "primary"
  }), _react["default"].createElement(_index["default"], {
    name: "Goose",
    style: "primary",
    testSection: "goose",
    isDismissible: true,
    onDismiss: mockFunction
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    name: "Duck Duck Goose",
    description: "A popular childhood game.",
    isDismissible: true,
    isDraggable: true,
    style: "primary",
    order: 1,
    onDismiss: mockFunction
  })]
}];
exports["default"] = _default;