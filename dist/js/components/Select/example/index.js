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
    name: "zoo",
    id: "zoo"
  }, _react["default"].createElement("option", {
    value: "one"
  }, "This is option one"), _react["default"].createElement("option", {
    value: "two"
  }, "And this is option two"))]
}];
exports["default"] = _default;