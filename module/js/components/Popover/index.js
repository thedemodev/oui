function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
var DEFAULT_PADDING_PROP = 'default';
var HARD_PADDING_PROP = 'hard';
var SOFT_DOUBLE_PROP = 'soft-double';
var SOFT_HALF_PADDING_PROP = 'soft-half';
/**
 * Simple component often used to display supplemental information to contents
 * on a page.
 *
 * See `OverlayWrapper` component to position a popover on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Popover = function Popover(_ref) {
  var children = _ref.children,
      padding = _ref.padding,
      testSection = _ref.testSection,
      title = _ref.title,
      popoverId = _ref.popoverId;
  var popOverClasses = classNames({
    'oui-pop--over': true
  });
  var popOverContentClasses = classNames({
    'oui-pop--over__content': true
  });
  var shouldAddPaddingClass = padding !== DEFAULT_PADDING_PROP && [HARD_PADDING_PROP, SOFT_DOUBLE_PROP, SOFT_HALF_PADDING_PROP].includes(padding);

  if (shouldAddPaddingClass) {
    popOverContentClasses = classNames(_defineProperty({
      'oui-pop--over__content': true
    }, padding, true));
  }

  return React.createElement("div", {
    id: popoverId,
    "data-oui-component": true,
    className: popOverClasses,
    style: {
      display: 'block',
      opacity: 1,
      position: 'initial'
    },
    "data-test-section": testSection
  }, React.createElement("div", {
    className: popOverContentClasses
  }, title && React.createElement("div", {
    className: "oui-pop--over__title"
  }, title), children));
};

Popover.propTypes = {
  /** Content that appears within the popover body */
  children: PropTypes.node.isRequired,

  /** Padding class or 'default' padding for the popover container */
  padding: PropTypes.oneOf([DEFAULT_PADDING_PROP, HARD_PADDING_PROP, SOFT_DOUBLE_PROP, SOFT_HALF_PADDING_PROP]),

  /** Id used to associate Popover to trigger */
  popoverId: PropTypes.string,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Text describing the popover contents */
  title: PropTypes.string
};
Popover.defaultProps = {
  padding: 'default'
};
export default Popover;