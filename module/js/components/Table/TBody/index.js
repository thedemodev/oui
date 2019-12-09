import React from 'react';
import PropTypes from 'prop-types';

var TBody = function TBody(_ref) {
  var children = _ref.children,
      testSection = _ref.testSection;
  return React.createElement("tbody", {
    "data-test-section": testSection
  }, children);
};

TBody.propTypes = {
  /** Should be a `Table.TR` component */
  children: PropTypes.node,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
TBody.displayName = 'Table.TBody';
export default TBody;