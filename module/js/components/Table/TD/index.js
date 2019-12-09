function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var TD = function TD(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      _ref$isNumerical = _ref.isNumerical,
      isNumerical = _ref$isNumerical === void 0 ? false : _ref$isNumerical,
      testSection = _ref.testSection,
      verticalAlign = _ref.verticalAlign,
      width = _ref.width;
  var classes = classNames(_defineProperty({
    'oui-numerical': isNumerical
  }, "vertical-align--".concat(verticalAlign), verticalAlign));
  var styles = {
    width: width
  };
  return React.createElement("td", {
    className: classes,
    "data-test-section": testSection,
    style: styles,
    colSpan: colSpan
  }, children);
};

TD.propTypes = {
  /** Content within the `Table.TD` component */
  children: PropTypes.node,

  /** Number of columns that the cell should span */
  colSpan: PropTypes.number,

  /** Right-align the cell if the contents are numerical */
  isNumerical: PropTypes.bool,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Apply a class that vertically aligns the cells within the children */
  verticalAlign: PropTypes.oneOf(['top', 'middle']),

  /** A number with a unit that becomes the width of the `Table` cell */
  width: PropTypes.string
};
TD.displayName = 'Table.TD';
export default TD;