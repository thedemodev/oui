"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TR = function TR(_ref) {
  var _classNames;

  var isActive = _ref.isActive,
      noBorder = _ref.noBorder,
      noHover = _ref.noHover,
      borderStyle = _ref.borderStyle,
      backgroundColor = _ref.backgroundColor,
      testSection = _ref.testSection,
      children = _ref.children;
  var classes = (0, _classnames["default"])((_classNames = {
    'oui-table-row--active': isActive,
    'no-border': noBorder,
    'hover--disabled': noHover
  }, _defineProperty(_classNames, "border--".concat(borderStyle), borderStyle), _defineProperty(_classNames, "background--".concat(backgroundColor), backgroundColor), _classNames));
  return _react["default"].createElement("tr", {
    className: classes,
    "data-test-section": testSection
  }, children);
};

TR.propTypes = {
  /** Background color for each row */
  backgroundColor: _propTypes["default"].oneOf(['faint', 'light']),

  /** Border style for each row */
  borderStyle: _propTypes["default"].oneOf(['bottom', 'top', 'sides', 'ends', 'none']),

  /** Expects a `Table.TD` or `Table.TH` component */
  children: _propTypes["default"].node,

  /** If true, add active class */
  isActive: _propTypes["default"].bool,

  /** If true, add class to remove border */
  noBorder: _propTypes["default"].bool,

  /** If true, remove hover on inner TDs */
  noHover: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
TR.displayName = 'Table.TR';
var _default = TR;
exports["default"] = _default;