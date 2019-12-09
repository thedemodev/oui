"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TH = function TH(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      isCollapsed = _ref.isCollapsed,
      isNumerical = _ref.isNumerical,
      testSection = _ref.testSection,
      width = _ref.width;
  var classes = (0, _classnames["default"])({
    'oui-numerical': isNumerical,
    'oui-cell-collapse': isCollapsed
  });
  var styles = {
    width: width
  };
  return _react["default"].createElement("th", {
    className: classes,
    "data-test-section": testSection,
    style: styles,
    colSpan: colSpan
  }, children);
};

TH.propTypes = {
  /** Content within the `Table.TH` component */
  children: _propTypes["default"].node,

  /** Number of columns that the cell should span */
  colSpan: _propTypes["default"].number,

  /**
    Tell the cell to take up the least amount of width possible. This only
    works well if the table layout is `auto`, not `fixed`.
  */
  isCollapsed: _propTypes["default"].bool,

  /** Right-align the cell if the contents are numerical */
  isNumerical: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** A number with a unit that becomes the width of the `Table` cell */
  width: _propTypes["default"].string
};
TH.defaultProps = {
  isCollapsed: false,
  isNumerical: false
};
TH.displayName = 'Table.TH';
var _default = TH;
exports["default"] = _default;