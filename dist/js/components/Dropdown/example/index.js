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
    isDisabled: false,
    isOpen: true,
    fullWidth: false,
    buttonContent: "Dropdown"
  }, _react["default"].createElement("ul", {
    className: "oui-dropdown width--200",
    style: {
      display: 'block'
    }
  }, _react["default"].createElement("li", {
    key: "1",
    className: "oui-dropdown__item"
  }, _react["default"].createElement("a", {
    key: "a",
    className: "oui-dropdown__block-link"
  }, "Manage Collaborators"), _react["default"].createElement("a", {
    key: "b",
    className: "oui-dropdown__block-link"
  }, "Manage This Thing")), _react["default"].createElement("li", {
    key: "2",
    className: "oui-dropdown__item"
  }, _react["default"].createElement("a", {
    key: "c",
    className: "oui-dropdown__block-link"
  }, "Experiment Change History"))))]
}];
exports["default"] = _default;