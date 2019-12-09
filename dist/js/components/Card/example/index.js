"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var someMethod = function someMethod() {};

var _default = [{
  examples: [_react["default"].createElement(_index["default"], {
    title: "Title"
  }, "Hello World")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    title: "Title",
    onClose: someMethod,
    testSection: "data-track-card-close"
  }, "Hello World with closer element")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    title: "Title"
  }, "Blank card")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    title: "Title",
    shadow: true
  }, "Shadow")]
}];
exports["default"] = _default;