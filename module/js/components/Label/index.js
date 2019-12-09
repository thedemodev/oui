import React from 'react';
import PropTypes from 'prop-types';
/**
 * Wraps text or HTML in a `label` element. Often used to label inputs.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Label = function Label(_ref) {
  var isOptional = _ref.isOptional,
      isRequired = _ref.isRequired,
      children = _ref.children,
      testSection = _ref.testSection,
      inputId = _ref.inputId;
  var classes = null;
  var fieldLabel = null;

  if (isRequired) {
    fieldLabel = React.createElement("span", {
      className: "oui-label--required"
    });
  } else if (isOptional) {
    fieldLabel = React.createElement("span", {
      className: "oui-label__optional"
    }, "(Optional)");
  }

  if (typeof children === 'string') {
    classes = 'oui-label';
  }

  return React.createElement("label", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": testSection,
    htmlFor: inputId
  }, children, fieldLabel);
};

Label.propTypes = {
  /** What the label describes */
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),

  /** Id of the input to properly associate with this label */
  inputId: PropTypes.string,

  /** Includes optional label if true */
  isOptional: PropTypes.bool,

  /** Includes required asterisk label if true */
  isRequired: PropTypes.bool,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default Label;