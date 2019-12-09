function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var TR = function TR(_ref) {
  var _classNames;

  var isActive = _ref.isActive,
      noBorder = _ref.noBorder,
      noHover = _ref.noHover,
      borderStyle = _ref.borderStyle,
      backgroundColor = _ref.backgroundColor,
      testSection = _ref.testSection,
      children = _ref.children;
  var classes = classNames((_classNames = {
    'oui-table-row--active': isActive,
    'no-border': noBorder,
    'hover--disabled': noHover
  }, _defineProperty(_classNames, "border--".concat(borderStyle), borderStyle), _defineProperty(_classNames, "background--".concat(backgroundColor), backgroundColor), _classNames));
  return React.createElement("tr", {
    className: classes,
    "data-test-section": testSection
  }, children);
};

TR.propTypes = {
  /** Background color for each row */
  backgroundColor: PropTypes.oneOf(['faint', 'light']),

  /** Border style for each row */
  borderStyle: PropTypes.oneOf(['bottom', 'top', 'sides', 'ends', 'none']),

  /** Expects a `Table.TD` or `Table.TH` component */
  children: PropTypes.node,

  /** If true, add active class */
  isActive: PropTypes.bool,

  /** If true, add class to remove border */
  noBorder: PropTypes.bool,

  /** If true, remove hover on inner TDs */
  noHover: PropTypes.bool,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
TR.displayName = 'Table.TR';
export default TR;