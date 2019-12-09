function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
  /**
   * Use a custom element for this component
   */
  as: PropTypes.elementType,

  /**
   * Allow the Container to fill available horizontal space.
   */
  fluid: PropTypes.bool,

  /**
   * For testing/debugging only -- show hotpink grid borders and backgrounds.
   */
  outlineDebug: PropTypes.bool,

  /**
   * Pad inner content.
   */
  paddedContent: PropTypes.oneOf(['none', 'around', 'sides', 'ends', 'remove']),

  /**
   * Remove first and last child side padding.
   */
  pullRowPadding: PropTypes.bool,

  /**
   * Add top margin space between rows.
   */
  pushRowsTop: PropTypes.bool
};
var defaultProps = {
  as: 'div',
  fluid: false
};
var Container = React.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      fluid = _ref.fluid,
      outlineDebug = _ref.outlineDebug,
      paddedContent = _ref.paddedContent,
      pullRowPadding = _ref.pullRowPadding,
      pushRowsTop = _ref.pushRowsTop,
      props = _objectWithoutProperties(_ref, ["as", "fluid", "outlineDebug", "paddedContent", "pullRowPadding", "pushRowsTop"]);

  var prefix = 'container';
  return React.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classNames(fluid ? "".concat(prefix, "-fluid") : prefix, outlineDebug && 'outline--debug', paddedContent && "padded-content--".concat(paddedContent), pullRowPadding && 'container--pull', pushRowsTop && 'push-rows--top')
  }));
});
Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
export default Container;