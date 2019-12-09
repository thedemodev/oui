"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _THead = _interopRequireDefault(require("./THead"));

var _TR = _interopRequireDefault(require("./TR"));

var _TH = _interopRequireDefault(require("./TH"));

var _TBody = _interopRequireDefault(require("./TBody"));

var _TD = _interopRequireDefault(require("./TD"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Simple component to wrap `Table.THead` and `Table.TBody` components.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Table = function Table(_ref) {
  var _classNames;

  var children = _ref.children,
      density = _ref.density,
      shouldAddHover = _ref.shouldAddHover,
      style = _ref.style,
      tableLayoutAlgorithm = _ref.tableLayoutAlgorithm,
      testSection = _ref.testSection;
  var classes = (0, _classnames["default"])((_classNames = {
    'oui-table': true
  }, _defineProperty(_classNames, "oui-table--".concat(style), style), _defineProperty(_classNames, "oui-table--".concat(density), density), _defineProperty(_classNames, 'oui-table--hover', shouldAddHover), _classNames));
  var styles = {
    tableLayout: tableLayoutAlgorithm
  };
  return _react["default"].createElement("table", {
    "data-oui-component": true,
    className: classes,
    style: styles,
    "data-test-section": testSection
  }, children);
};

Table.propTypes = {
  /** Should be a `Table.THead` or `Table.TBody` */
  children: _propTypes["default"].node,

  /** Sets the padding within cells */
  density: _propTypes["default"].oneOf(['tight', 'loose']),

  /** Whether to set the hover class on the Table */
  shouldAddHover: _propTypes["default"].bool,

  /** Available border and hover options */
  style: _propTypes["default"].oneOf(['wall', 'rule', 'rule-no-bottom-border']),

  /**
    Adjust the [CSS `table-layout` property](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
    that is used to calculate the with of inner table cells.
  */
  tableLayoutAlgorithm: _propTypes["default"].oneOf(['auto', 'fixed']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Table.defaultProps = {
  density: 'tight',
  tableLayoutAlgorithm: 'fixed'
};
Table.THead = _THead["default"];
Table.TR = _TR["default"];
Table.TH = _TH["default"];
Table.TBody = _TBody["default"];
Table.TD = _TD["default"];
var _default = Table;
exports["default"] = _default;