import React from 'react';
import PropTypes from 'prop-types';
/**
 * Generates an <select> element
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Select = function Select(_ref) {
  var children = _ref.children,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      name = _ref.name;
  return React.createElement("select", {
    "data-oui-component": true,
    disabled: isDisabled,
    name: name,
    id: id,
    className: "oui-select"
  }, children);
};

Select.propTypes = {
  /** options elements */
  children: PropTypes.node,

  /** select id */
  id: PropTypes.string,

  /** boolean for when select is disabled */
  isDisabled: PropTypes.bool,

  /** select name */
  name: PropTypes.string
};
Select.displayName = 'Select';
export default Select;