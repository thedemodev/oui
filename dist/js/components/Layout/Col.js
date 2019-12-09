"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEVICE_SIZES = ['large', 'small'];

var colSize = _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].oneOf(['fitContent', 'fillSpace'])]);

var stringOrNumber = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]);

var column = _propTypes["default"].oneOfType([
/** colSize shorthand */
colSize, _propTypes["default"].shape({
  /** Draw border on this single column. */
  border: _propTypes["default"].oneOf(['top', 'bottom', 'left', 'right', 'sides', 'ends', 'all']),

  /** Push columns around with an offset. */
  offset: stringOrNumber,

  /** Specify a content display order different from HTML source order. */
  order: stringOrNumber,

  /** Pad inner content with a default amount. */
  paddedContent: _propTypes["default"].oneOf(['none', 'around', 'sides', 'ends', 'remove']),

  /** Size of this column; allows for some shorthand. */
  size: colSize
})]);

var propTypes = {
  /** Specify an element besides <div>. */
  as: _propTypes["default"].elementType,

  /** Add single border column. */
  border: _propTypes["default"].oneOf(['top', 'bottom', 'left', 'right', 'sides', 'ends', 'all']),

  /** Inner contents. */
  children: _propTypes["default"].node,

  /** Whether or not this is a reading column layout */
  isReadingColumn: _propTypes["default"].bool,

  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  large: column,

  /** Add default amount of padding. */
  paddedContent: _propTypes["default"].oneOf(['around', 'sides', 'ends']),

  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  small: column
};
var defaultProps = {
  as: 'div',
  isReadingColumn: false
};

var Col = _react["default"].forwardRef(function (_ref, ref) {
  var border = _ref.border,
      paddedContent = _ref.paddedContent,
      isReadingColumn = _ref.isReadingColumn,
      Component = _ref.as,
      props = _objectWithoutProperties(_ref, ["border", "paddedContent", "isReadingColumn", "as"]);

  var prefix = 'col';
  var spans = [];
  var classes = [];

  if (border) {
    classes.push("border--".concat(border));
  }

  if (paddedContent && paddedContent !== 'none') {
    classes.push("padded-content--".concat(paddedContent));
  }

  if (isReadingColumn) {
    classes.push('reading-column');
  }

  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (propValue !== null && propValue !== undefined && _typeof(propValue) === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? 'fillSpace' : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    if (offset !== null && offset !== undefined) {
      classes.push("offset-".concat(brkPoint, "-").concat(offset));
    }

    if (order !== null && order !== undefined) {
      classes.push("order-".concat(brkPoint, "-").concat(order));
    }

    if (span !== null && span !== undefined) {
      spans.push(span === 'fillSpace' ? "".concat(prefix, "-").concat(brkPoint) : "".concat(prefix, "-").concat(brkPoint, "-").concat(span));
    }
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return _react["default"].createElement(Component, _extends({}, props, {
    ref: ref,
    className: _classnames["default"].apply(void 0, spans.concat(classes))
  }));
});

Col.displayName = 'Col';
Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
var _default = Col;
exports["default"] = _default;