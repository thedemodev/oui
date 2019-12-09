"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../Button"));

var _ButtonRow = _interopRequireDefault(require("../../ButtonRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var _default = [{
  examples: [_react["default"].createElement(_ButtonRow["default"], {
    leftGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "plain"
    }, "Skip this step")],
    rightGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "plain"
    }, "Plain Button"), _react["default"].createElement(_Button["default"], {
      key: "2",
      style: "highlight"
    }, "Highlight Button")]
  })]
}, {
  examples: [_react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "outline"
    }, "Center Button"), _react["default"].createElement(_Button["default"], {
      key: "2",
      style: "highlight"
    }, "Center Button")]
  })]
}, {
  examples: [_react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_Button["default"], {
      key: "1",
      style: "outline",
      width: "full"
    }, "Full Width"), _react["default"].createElement(_Button["default"], {
      key: "2",
      style: "outline",
      width: "full"
    }, "Full Width"), _react["default"].createElement(_Button["default"], {
      key: "3",
      style: "highlight",
      width: "full"
    }, "Full Width")]
  })]
}];
exports["default"] = _default;