"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var _default = [{
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    density: "loose"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Experiment"), _react["default"].createElement(_index["default"].TH, null, "Conversion Rate"), _react["default"].createElement(_index["default"].TH, null, "Status"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Header CTA"), _react["default"].createElement(_index["default"].TD, {
    width: "20%"
  }, "12%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Shorter Contact Form"), _react["default"].createElement(_index["default"].TD, null, "4%"), _react["default"].createElement(_index["default"].TD, null, "Draft")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Larger search bar"), _react["default"].createElement(_index["default"].TD, null, "6.7%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Center aligned headline"), _react["default"].createElement(_index["default"].TD, null, "9.3%"), _react["default"].createElement(_index["default"].TD, null, "Running"))))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    style: "rule",
    density: "loose"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Experiment"), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true
  }, "Conversion Rate"), _react["default"].createElement(_index["default"].TH, null, "Status"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Header CTA"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "12%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Shorter Contact Form"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "4%"), _react["default"].createElement(_index["default"].TD, null, "Draft")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Larger search bar"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "6.7%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Center aligned headline"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "9.3%"), _react["default"].createElement(_index["default"].TD, null, "Running"))))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    style: "rule-no-bottom-border"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Experiment"), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true
  }, "Conversion Rate"), _react["default"].createElement(_index["default"].TH, null, "Status"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Header CTA"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "12%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Shorter Contact Form"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "4%"), _react["default"].createElement(_index["default"].TD, null, "Draft")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Larger search bar"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "6.7%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, "Center aligned headline"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true
  }, "9.3%"), _react["default"].createElement(_index["default"].TD, null, "Running"))))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    style: "wall",
    tableLayoutAlgorithm: "auto"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Experiment"), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true,
    width: "20%"
  }, "Conversion Rate"), _react["default"].createElement(_index["default"].TH, {
    isCollapsed: true
  }, "Status"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Header CTA"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "12%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start"))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Shorter Contact Form"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "4%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start"))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Larger search bar"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "6.7%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start"))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Center aligned headline"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "9.3%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start")))))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    tableLayoutAlgorithm: "auto"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Experiment"), _react["default"].createElement(_index["default"].TH, {
    isNumerical: true,
    width: "20%"
  }, "Conversion Rate"), _react["default"].createElement(_index["default"].TH, {
    isCollapsed: true
  }, "Status"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Header CTA"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "12%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start"))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Shorter Contact Form"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "4%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start"))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, "Larger search bar"), _react["default"].createElement(_index["default"].TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, "6.7%"), _react["default"].createElement(_index["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement(_Button["default"], {
    size: "small"
  }, "Start"))), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    colSpan: 3
  }, "Cell Spanning Three Columns"))))]
}, {
  isPadded: true,
  examples: [_react["default"].createElement(_index["default"], {
    density: "loose"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, {
    colSpan: 2
  }, "Experiment with colspan of 2"), _react["default"].createElement(_index["default"].TH, null, "Conversion Rate"), _react["default"].createElement(_index["default"].TH, null, "Status"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    colSpan: 2
  }, "Header CTA"), _react["default"].createElement(_index["default"].TD, {
    width: "20%"
  }, "12%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    colSpan: 2
  }, "Shorter Contact Form"), _react["default"].createElement(_index["default"].TD, null, "4%"), _react["default"].createElement(_index["default"].TD, null, "Draft")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    colSpan: 2
  }, "Larger search bar"), _react["default"].createElement(_index["default"].TD, null, "6.7%"), _react["default"].createElement(_index["default"].TD, null, "Paused")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, {
    colSpan: 2
  }, "Center aligned headline"), _react["default"].createElement(_index["default"].TD, null, "9.3%"), _react["default"].createElement(_index["default"].TD, null, "Running"))))]
}];
exports["default"] = _default;