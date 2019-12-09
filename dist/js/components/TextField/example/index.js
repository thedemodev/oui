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
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text",
    isOptional: true
  })]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    label: "Field label with error",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text",
    isRequired: true
  })]
}];
exports["default"] = _default;