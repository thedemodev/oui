function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { isUndefined, noop } from 'lodash';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var DropdownContents = React.forwardRef(function (props, ref) {
  var styleProps = {};

  if (!isUndefined(props.isLoading)) {
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

  var wrapperClasses = classNames({
    nowrap: props.isNoWrap,
    'oui-dropdown': true,
    'oui-dropdown--right': props.direction === 'left',
    'oui-dropdown--up': props.direction === 'up'
  });
  var listClasses = classNames({
    'min-height--100': props.isLoading
  });
  return React.createElement("div", {
    ref: ref,
    className: wrapperClasses
  }, props.renderHeader(), React.createElement("ul", _extends({
    className: listClasses,
    style: styleProps
  }, props.testSection ? {
    'data-test-section': props.testSection
  } : {}), props.children));
});
DropdownContents.displayName = 'DropdownContents';
DropdownContents.propTypes = {
  /** Whether contents can scroll */
  canScroll: PropTypes.bool,

  /** Nodes to display within */
  children: PropTypes.node.isRequired,

  /** Direction of contents */
  direction: PropTypes.oneOf(['left', 'right', 'up']),

  /** Whether or not the dropdown is in a loading state. */
  isLoading: PropTypes.bool,

  /** Whether to wrap contents or not */
  isNoWrap: PropTypes.bool,

  /** Minimum width of contents */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Optional render function to display a header before the list. */
  renderHeader: PropTypes.func,

  /** Test section for element */
  testSection: PropTypes.string
};
DropdownContents.defaultProps = {
  canScroll: false,
  direction: 'left',
  isLoading: undefined,
  isNoWrap: false,
  renderHeader: noop,
  testSection: ''
};
export default DropdownContents;