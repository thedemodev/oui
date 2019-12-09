import React from 'react';
import PropTypes from 'prop-types';
/**
 * Generates an `ProgressDots`
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var ProgressDots = function ProgressDots(_ref) {
  var testSection = _ref.testSection;
  return React.createElement("ul", {
    "data-oui-component": true,
    "data-test-section": testSection,
    className: "oui-progress-dots"
  }, React.createElement("li", null), React.createElement("li", null), React.createElement("li", null));
};

ProgressDots.propTypes = {
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
ProgressDots.displayName = 'ProgressDots';
export default ProgressDots;