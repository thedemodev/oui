function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * Generates an `spinner` element with/without overlay and optinaly
 * using props for sizes small or tiny for smaller sizes.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Spinner = function Spinner(_ref) {
  var size = _ref.size,
      hasOverlay = _ref.hasOverlay,
      testSection = _ref.testSection;
  var classes = classNames('oui-spinner', _defineProperty({}, "oui-spinner--".concat(size), size));

  if (hasOverlay) {
    return React.createElement("div", {
      "data-oui-component": true,
      "data-test-section": testSection,
      className: "oui-overlay"
    }, React.createElement("div", {
      className: classes
    }));
  }

  return React.createElement("div", {
    "data-test-section": testSection,
    className: classes
  });
};

Spinner.propTypes = {
  /** boolean class for establish overlay */
  hasOverlay: PropTypes.bool,

  /** various sizes */
  size: PropTypes.oneOf(['small', 'tiny']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
Spinner.displayName = 'Spinner';
export default Spinner;