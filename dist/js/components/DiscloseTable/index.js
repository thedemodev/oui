"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DiscloseTable = function DiscloseTable(_ref) {
  var children = _ref.children,
      testSection = _ref.testSection;
  return _react["default"].createElement("table", {
    "data-oui-component": true,
    className: "oui-disclose-table",
    style: {
      tableLayout: 'auto'
    },
    "data-test-section": testSection
  }, children);
};

DiscloseTable.propTypes = {
  /** Should be a `Table.THead` or `Table.TBody` */
  children: _propTypes["default"].node.isRequired,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
DiscloseTable.Row = _Row["default"];
var _default = DiscloseTable;
exports["default"] = _default;