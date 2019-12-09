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
    label: "Field label",
    placeholder: "Just a placeholder",
    type: "text",
    isOptional: true
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    label: "Field label with error",
    displayError: true,
    placeholder: "Just a placeholder",
    type: "text",
    isEditing: true
  })]
}];
exports["default"] = _default;