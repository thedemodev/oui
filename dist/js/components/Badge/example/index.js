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
    color: "default"
  }, "Default"), _react["default"].createElement(_index["default"], {
    color: "draft"
  }, "Draft"), _react["default"].createElement(_index["default"], {
    color: "live"
  }, "Live"), _react["default"].createElement(_index["default"], {
    color: "primary"
  }, "Primary"), _react["default"].createElement(_index["default"], {
    color: "plain"
  }, "Plain"), _react["default"].createElement(_index["default"], {
    color: "bad-news"
  }, "Bad News")]
}, {
  examples: [_react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement(_index["default"], {
    color: "draft"
  }, "1"), " Unpublished Change")]
}, {
  examples: [_react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    color: "draft"
  }, "1"), _react["default"].createElement(_index["default"], {
    color: "live"
  }, "3"))]
}];
exports["default"] = _default;