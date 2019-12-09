function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import THead from './THead';
import TR from './TR';
import TH from './TH';
import TBody from './TBody';
import TD from './TD';
/**
 * Simple component to wrap `Table.THead` and `Table.TBody` components.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Table = function Table(_ref) {
  var _classNames;

  var children = _ref.children,
      density = _ref.density,
      shouldAddHover = _ref.shouldAddHover,
      style = _ref.style,
      tableLayoutAlgorithm = _ref.tableLayoutAlgorithm,
      testSection = _ref.testSection;
  var classes = classNames((_classNames = {
    'oui-table': true
  }, _defineProperty(_classNames, "oui-table--".concat(style), style), _defineProperty(_classNames, "oui-table--".concat(density), density), _defineProperty(_classNames, 'oui-table--hover', shouldAddHover), _classNames));
  var styles = {
    tableLayout: tableLayoutAlgorithm
  };
  return React.createElement("table", {
    "data-oui-component": true,
    className: classes,
    style: styles,
    "data-test-section": testSection
  }, children);
};

Table.propTypes = {
  /** Should be a `Table.THead` or `Table.TBody` */
  children: PropTypes.node,

  /** Sets the padding within cells */
  density: PropTypes.oneOf(['tight', 'loose']),

  /** Whether to set the hover class on the Table */
  shouldAddHover: PropTypes.bool,

  /** Available border and hover options */
  style: PropTypes.oneOf(['wall', 'rule', 'rule-no-bottom-border']),

  /**
    Adjust the [CSS `table-layout` property](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
    that is used to calculate the with of inner table cells.
  */
  tableLayoutAlgorithm: PropTypes.oneOf(['auto', 'fixed']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
Table.defaultProps = {
  density: 'tight',
  tableLayoutAlgorithm: 'fixed'
};
Table.THead = THead;
Table.TR = TR;
Table.TH = TH;
Table.TBody = TBody;
Table.TD = TD;
export default Table;