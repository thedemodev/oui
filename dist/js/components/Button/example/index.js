"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ArrowsInline = _interopRequireDefault(require("../../ArrowsInline"));

var _index = _interopRequireDefault(require("../index"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var mockFunction = function mockFunction() {};

var _default = [{
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], null, "Button"), _react["default"].createElement(_index["default"], {
    style: "highlight"
  }, "Highlight"), _react["default"].createElement(_index["default"], {
    style: "danger"
  }, "Danger"), _react["default"].createElement(_index["default"], {
    style: "danger-outline"
  }, "Danger Outline"), _react["default"].createElement(_index["default"], {
    style: "outline"
  }, "Outline"), _react["default"].createElement(_index["default"], {
    style: "plain"
  }, "Plain"), _react["default"].createElement(_index["default"], {
    style: "toggle"
  }, "Toggle")]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    isDisabled: true
  }, "Button"), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    style: "highlight"
  }, "Highlight"), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    style: "danger"
  }, "Danger"), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    style: "danger-outline"
  }, "Danger Outline"), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    style: "outline"
  }, "Outline"), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    style: "plain"
  }, "Plain"), _react["default"].createElement(_index["default"], {
    isDisabled: true,
    style: "toggle"
  }, "Toggle")]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    isActive: true
  }, "Button")]
}, {
  backgroundColor: 'brand-dark',
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    style: "outline-reverse"
  }, "Outline Reverse Button")]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    style: "unstyled"
  }, "Unstyled Button")]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    style: "underline"
  }, "Underline Button\xA0", _react["default"].createElement(_ArrowsInline["default"], {
    direction: "down"
  }))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], null, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "clipboard"
  }))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    size: "tiny"
  }, "Tiny Button"), _react["default"].createElement(_index["default"], {
    size: "small"
  }, "Small Button"), _react["default"].createElement(_index["default"], {
    size: "large"
  }, "Large Button"), _react["default"].createElement(_index["default"], {
    size: "narrow"
  }, "Narrow Button"), _react["default"].createElement(_index["default"], {
    size: "tight"
  }, "Tight Button")]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    width: "full"
  }, "Full Button")]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    onClick: mockFunction
  }, "Button with a Function")]
}];
exports["default"] = _default;