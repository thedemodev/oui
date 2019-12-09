import React from 'react';
import PropTypes from 'prop-types';

var THead = function THead(_ref) {
  var children = _ref.children,
      testSection = _ref.testSection;
  return React.createElement("thead", {
    "data-test-section": testSection
  }, children);
};

THead.propTypes = {
  /** Should be a `Table.TR` component */
  children: PropTypes.node,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
THead.displayName = 'Table.THead';
export default THead;