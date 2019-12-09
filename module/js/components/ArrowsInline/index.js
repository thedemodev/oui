function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var ArrowsInline = function ArrowsInline(_ref) {
  var direction = _ref.direction,
      testSection = _ref.testSection;
  var classes = classNames(_defineProperty({}, "oui-arrow-inline--".concat(direction), direction));
  return React.createElement("span", {
    "data-oui-component": true,
    className: classes,
    "aria-hidden": "true",
    "data-test-section": testSection
  });
};

ArrowsInline.defaultProps = {
  direction: 'down'
};
ArrowsInline.propTypes = {
  /** Direction the arrow points */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default ArrowsInline;