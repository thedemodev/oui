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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /**
   * Use a custom element for this component
   */
  as: _propTypes["default"].elementType,

  /**
   * Allow the Container to fill available horizontal space.
   */
  fluid: _propTypes["default"].bool,

  /**
   * For testing/debugging only -- show hotpink grid borders and backgrounds.
   */
  outlineDebug: _propTypes["default"].bool,

  /**
   * Pad inner content.
   */
  paddedContent: _propTypes["default"].oneOf(['none', 'around', 'sides', 'ends', 'remove']),

  /**
   * Remove first and last child side padding.
   */
  pullRowPadding: _propTypes["default"].bool,

  /**
   * Add top margin space between rows.
   */
  pushRowsTop: _propTypes["default"].bool
};
var defaultProps = {
  as: 'div',
  fluid: false
};

var Container = _react["default"].forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      fluid = _ref.fluid,
      outlineDebug = _ref.outlineDebug,
      paddedContent = _ref.paddedContent,
      pullRowPadding = _ref.pullRowPadding,
      pushRowsTop = _ref.pushRowsTop,
      props = _objectWithoutProperties(_ref, ["as", "fluid", "outlineDebug", "paddedContent", "pullRowPadding", "pushRowsTop"]);

  var prefix = 'container';
  return _react["default"].createElement(Component, _extends({
    ref: ref
  }, props, {
    className: (0, _classnames["default"])(fluid ? "".concat(prefix, "-fluid") : prefix, outlineDebug && 'outline--debug', paddedContent && "padded-content--".concat(paddedContent), pullRowPadding && 'container--pull', pushRowsTop && 'push-rows--top')
  }));
});

Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
var _default = Container;
exports["default"] = _default;