import React from 'react';
import PropTypes from 'prop-types';
import DiscloseRow from './Row';

var DiscloseTable = function DiscloseTable(_ref) {
  var children = _ref.children,
      testSection = _ref.testSection;
  return React.createElement("table", {
    "data-oui-component": true,
    className: "oui-disclose-table",
    style: {
      tableLayout: 'auto'
    },
    "data-test-section": testSection
  }, children);
};

DiscloseTable.propTypes = {
  /** Should be a `Table.THead` or `Table.TBody` */
  children: PropTypes.node.isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
DiscloseTable.Row = DiscloseRow;
export default DiscloseTable;