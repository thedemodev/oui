"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var _default = [{
  examples: [_react["default"].createElement(_index["default"], {
    max: "100",
    min: "0",
    progress: "60",
    topLabel: "hola esto es un label"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    max: "80",
    min: "0",
    progress: "20"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    leftLabel: "Allocated traffic",
    max: "250",
    min: "0",
    progress: "90",
    rightLabel: "Available traffic"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    leftLabel: "Allocated traffic",
    min: "20",
    max: "80",
    progress: "30",
    rightLabel: "Available traffic",
    topLabel: "hola esto es un label"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    displayError: true,
    leftLabel: "Allocated traffic",
    min: "20",
    max: "80",
    progress: "30",
    rightLabel: "Available traffic",
    topLabel: "hola esto es un label"
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    displayError: true,
    min: "0",
    max: "100",
    progress: "60"
  })]
}];
exports["default"] = _default;