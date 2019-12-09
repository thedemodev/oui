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
  examples: [_react["default"].createElement(_index["default"], null, "I'm a Label")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    isRequired: true
  }, "I'm a Required Label")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    isOptional: true
  }, "I'm an Optional Label")]
}, {
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement("div", null, "When I have nodes,"), _react["default"].createElement("div", null, "I'm unstyled"))]
}];
exports["default"] = _default;