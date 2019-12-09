function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var propTypes = {
  /**
   * @default 'row'
   */
  as: PropTypes.elementType,

  /**
   * Add visible border to row
  */
  border: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'sides', 'ends', 'all', 'none']),

  /**
   * Display layout as vertical column.
  */
  displayVertical: PropTypes.bool,

  /**
   * For testing/debugging only -- show grid hotpink borders and backgrounds.
   */
  outlineDebug: PropTypes.bool,

  /**
   * Force overflow scrolling
   */
  overflow: PropTypes.oneOf(['none', 'overflow-y--scroll', 'overflow-x--auto', 'overflow-y--auto']),

  /**
   * Pad inner content.
   */
  paddedContent: PropTypes.oneOf(['none', 'around', 'sides', 'ends', 'remove']),

  /**
   * Removes gutters and negative margins.
   */
  removeGutters: PropTypes.bool,

  /** Whether this row should wrap at small screen sizes */
  shouldWrap: PropTypes.bool
};
var defaultProps = {
  as: 'div',
  border: 'none',
  displayVertical: false,
  overflow: 'none',
  outlineDebug: false,
  paddedContent: 'none',
  removeGutters: false,
  shouldWrap: true
};
var Row = React.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      border = _ref.border,
      displayVertical = _ref.displayVertical,
      overflow = _ref.overflow,
      outlineDebug = _ref.outlineDebug,
      paddedContent = _ref.paddedContent,
      removeGutters = _ref.removeGutters,
      shouldWrap = _ref.shouldWrap,
      props = _objectWithoutProperties(_ref, ["as", "border", "displayVertical", "overflow", "outlineDebug", "paddedContent", "removeGutters", "shouldWrap"]);

  var classes = [];

  if (border) {
    classes.push("border--".concat(border));
  }

  if (displayVertical) {
    classes.push('flex--column');
  }

  if (outlineDebug) {
    classes.push('outline--debug');
  }

  if (overflow) {
    classes.push(overflow);
  }

  if (!shouldWrap) {
    classes.push('row--no-wrap');
  }

  if (paddedContent && paddedContent !== 'none') {
    classes.push("padded-content--".concat(paddedContent));
  }

  return React.createElement(Component, _extends({}, props, {
    className: classNames('row', classes, removeGutters && 'gutters--remove')
  }));
});
Row.displayName = 'Row';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;