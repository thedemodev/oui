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

var TD = function TD(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      _ref$isNumerical = _ref.isNumerical,
      isNumerical = _ref$isNumerical === void 0 ? false : _ref$isNumerical,
      testSection = _ref.testSection,
      verticalAlign = _ref.verticalAlign,
      width = _ref.width;
  var classes = (0, _classnames["default"])(_defineProperty({
    'oui-numerical': isNumerical
  }, "vertical-align--".concat(verticalAlign), verticalAlign));
  var styles = {
    width: width
  };
  return _react["default"].createElement("td", {
    className: classes,
    "data-test-section": testSection,
    style: styles,
    colSpan: colSpan
  }, children);
};

TD.propTypes = {
  /** Content within the `Table.TD` component */
  children: _propTypes["default"].node,

  /** Number of columns that the cell should span */
  colSpan: _propTypes["default"].number,

  /** Right-align the cell if the contents are numerical */
  isNumerical: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Apply a class that vertically aligns the cells within the children */
  verticalAlign: _propTypes["default"].oneOf(['top', 'middle']),

  /** A number with a unit that becomes the width of the `Table` cell */
  width: _propTypes["default"].string
};
TD.displayName = 'Table.TD';
var _default = TD;
exports["default"] = _default;