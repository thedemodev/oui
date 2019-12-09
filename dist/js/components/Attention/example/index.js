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
    isDismissible: true,
    alignment: "center",
    type: "warning",
    testSection: "attention-foo"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    alignment: "left",
    type: "bad-news"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "brand"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "good-news"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "warning"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    alignment: "center"
  }, "Hello! This is a short attention bar.")]
}];
exports["default"] = _default;