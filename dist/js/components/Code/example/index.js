"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key, react/jsx-indent */
var _default = [{
  examples: [_react["default"].createElement(_index["default"], {
    type: "block"
  }, "var foo = 'bar';\nvar bat = 'baz';")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "block",
    isHighlighted: true,
    language: "javascript"
  }, "var highlightedFoo = 'bar';\nvar highlightedBat = 'baz';")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "block",
    hasCopyButton: true,
    testSection: "code"
  }, "var copyableFoo = 'bar';\nvar copyableBat = 'baz';")]
}, {
  examples: [_react["default"].createElement(_index["default"], {
    type: "inline"
  }, 'var foo;')]
}];
exports["default"] = _default;