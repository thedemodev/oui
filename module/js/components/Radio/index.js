import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../Label';
/**
 * Generates a `input` element of type `radio` that is wrapped in a `Label`.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Radio = function Radio(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$testSection = _ref.testSection,
      testSection = _ref$testSection === void 0 ? null : _ref$testSection,
      name = _ref.name,
      defaultChecked = _ref.defaultChecked,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      labelWeight = _ref.labelWeight;
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
    "data-test-section": "".concat(testSection, "-label")
  }, React.createElement("div", {
    className: "flex"
  }, React.createElement("input", {
    "data-oui-component": true,
    type: "radio",
    name: name,
    defaultChecked: defaultChecked,
    checked: checked,
    className: classes,
    disabled: isDisabled,
    onChange: onChange,
    "data-test-section": testSection,
    style: {
      'marginTop': '0.3em'
    }
  }), React.createElement("div", {
    className: labelClassNames
  }, label)));
};

Radio.propTypes = {
  /** Boolean to set radio input, for controlled component  */
  checked: PropTypes.bool,

  /** Boolean for how radio input renders initially  */
  defaultChecked: PropTypes.bool,

  /** Prevents radio input from being modified and appears disabled */
  isDisabled: PropTypes.bool,

  /** Text that describes the radio input */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Font weight for the label text */
  labelWeight: PropTypes.oneOf(['light', 'normal', 'bold']),

  /**
    String that can be used to identify a set of radio inputs so that only one
    in the set is checked at any given time.
  */
  name: PropTypes.string.isRequired,

  /** Function that fires when the radio input is clicked */
  onChange: PropTypes.func,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
Radio.defaultProps = {
  labelWeight: 'normal'
};
export default Radio;