import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var Switch = function Switch(props) {
  var onClick = props.onClick,
      _props$elementId = props.elementId,
      elementId = _props$elementId === void 0 ? 'switch1' : _props$elementId,
      checked = props.checked,
      isDisabled = props.isDisabled,
      testSection = props.testSection;
  var switchClasses = classnames({
    'oui-switch': true,
    'oui-switch--disabled': isDisabled
  });
  return React.createElement("div", {
    className: "position--relative",
    "data-oui-component": true,
    "data-test-section": testSection
  }, React.createElement("input", {
    type: "checkbox",
    id: elementId,
    className: switchClasses,
    checked: checked,
    onClick: onClick,
    disabled: isDisabled
  }), React.createElement("label", {
    htmlFor: elementId,
    "data-on-label": "On",
    "data-off-label": "Off"
  }));
};

Switch.propTypes = {
  // checked true means the switch is on; false is off
  checked: PropTypes.bool,
  // string for label/input id pair, should be unique to the page
  elementId: PropTypes.string,

  /** Whether it is disabled, will render greyscale if so **/
  isDisabled: PropTypes.bool,
  // onClick function
  onClick: PropTypes.func,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default Switch;