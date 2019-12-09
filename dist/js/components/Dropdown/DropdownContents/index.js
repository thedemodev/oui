"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownContents = void 0;

var _lodash = require("lodash");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DropdownContents = _react["default"].forwardRef(function (props, ref) {
  var styleProps = {};

  if (!(0, _lodash.isUndefined)(props.isLoading)) {
    // Supports loading spinner over <ul> contents
    styleProps.position = 'relative';
  }

  if (props.minWidth) {
    styleProps.minWidth = props.minWidth;
  }

  if (props.canScroll) {
    styleProps.overflowY = 'visible';
    styleProps.maxHeight = 'none';
  }

  var wrapperClasses = (0, _classnames["default"])({
    nowrap: props.isNoWrap,
    'oui-dropdown': true,
    'oui-dropdown--right': props.direction === 'left',
    'oui-dropdown--up': props.direction === 'up'
  });
  var listClasses = (0, _classnames["default"])({
    'min-height--100': props.isLoading
  });
  return _react["default"].createElement("div", {
    ref: ref,
    className: wrapperClasses
  }, props.renderHeader(), _react["default"].createElement("ul", _extends({
    className: listClasses,
    style: styleProps
  }, props.testSection ? {
    'data-test-section': props.testSection
  } : {}), props.children));
});

exports.DropdownContents = DropdownContents;
DropdownContents.displayName = 'DropdownContents';
DropdownContents.propTypes = {
  /** Whether contents can scroll */
  canScroll: _propTypes["default"].bool,

  /** Nodes to display within */
  children: _propTypes["default"].node.isRequired,

  /** Direction of contents */
  direction: _propTypes["default"].oneOf(['left', 'right', 'up']),

  /** Whether or not the dropdown is in a loading state. */
  isLoading: _propTypes["default"].bool,

  /** Whether to wrap contents or not */
  isNoWrap: _propTypes["default"].bool,

  /** Minimum width of contents */
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Optional render function to display a header before the list. */
  renderHeader: _propTypes["default"].func,

  /** Test section for element */
  testSection: _propTypes["default"].string
};
DropdownContents.defaultProps = {
  canScroll: false,
  direction: 'left',
  isLoading: undefined,
  isNoWrap: false,
  renderHeader: _lodash.noop,
  testSection: ''
};
var _default = DropdownContents;
exports["default"] = _default;