function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * Tiny inline component used to draw attention to an item's state or status.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Badge = function Badge(props) {
  var classes = classNames(_defineProperty({
    'oui-badge': true
  }, "oui-badge--".concat(props.color), props.color));
  return React.createElement("span", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": props.testSection
  }, props.children);
};

Badge.propTypes = {
  /** Text that appears within the component */
  children: PropTypes.node.isRequired,

  /** Various color schemes */
  color: PropTypes.oneOf(['default', 'draft', 'live', 'primary', 'plain', 'bad-news']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
Badge.defaultProps = {
  color: 'default'
};
export default Badge;