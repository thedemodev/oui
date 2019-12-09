import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../Label';
/**
 * Generates a `checkbox` element wrapped in a Label
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      labelWeight = _ref.labelWeight,
      onChange = _ref.onChange,
      testSection = _ref.testSection;
  var labelClassNames = classNames({
    'flush--bottom': true,
    'push--left': true,
    'weight--light': labelWeight === 'light',
    'weight--normal': labelWeight === 'normal',
    'weight--bold': labelWeight === 'bold',
    'cursor--pointer': true,
    'oui-label--disabled': isDisabled
  });
  var classes = classNames({
    'flex--none': true
  });
  return React.createElement(Label, {
    testSection: testSection && testSection + '-label'
  }, React.createElement("div", {
    className: "flex"
  }, React.createElement("input", {
    "data-oui-component": true,
    type: "checkbox",
    defaultChecked: defaultChecked,
    checked: checked,
    className: classes,
    disabled: isDisabled,
    onChange: onChange,
    "data-test-section": testSection,
    style: {
      'marginTop': '0.35em'
    }
  }), React.createElement("div", {
    className: labelClassNames
  }, label)));
};

Checkbox.propTypes = {
  /** Boolean to set checkbox, for controlled component  */
  checked: PropTypes.bool,

  /** Boolean for how checkbox renders initially  */
  defaultChecked: PropTypes.bool,

  /** Prevents checkbox from being modified and appears disabled */
  isDisabled: PropTypes.bool,

  /** Label that describes the checkbox */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Font weight for the label text */
  labelWeight: PropTypes.oneOf(['light', 'normal', 'bold']),

  /** Function that fires when the checkbox is clicked */
  onChange: PropTypes.func,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
Checkbox.defaultProps = {
  labelWeight: 'normal'
};
export default Checkbox;