import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';
import classNames from 'classnames';

var ButtonIcon = function ButtonIcon(_ref) {
  var ariaDescribedBy = _ref.ariaDescribedBy,
      iconName = _ref.iconName,
      isDisabled = _ref.isDisabled,
      onClick = _ref.onClick,
      size = _ref.size,
      style = _ref.style,
      testSection = _ref.testSection,
      title = _ref.title;

  function handleOnClick(event) {
    if (isDisabled) {
      return;
    }

    onClick(event);
  }

  return React.createElement("button", {
    "aria-describedby": ariaDescribedBy,
    className: classNames('oui-button', 'oui-button-icon', "oui-button-icon__".concat(size), "oui-button--".concat(style)),
    "data-oui-component": true,
    "data-test-section": testSection,
    disabled: isDisabled,
    onClick: handleOnClick,
    title: title
  }, React.createElement(Icon, {
    name: iconName,
    size: size
  }));
};

ButtonIcon.propTypes = {
  /**
   *  Used to associate this button icon with a popover
   */
  ariaDescribedBy: PropTypes.string,

  /**
   *  Name of the icon to use
   */
  iconName: PropTypes.string.isRequired,

  /**
   * Prevent users from interacting with the button
   */
  isDisabled: PropTypes.bool,

  /**
   *  Function to perform when the close button is clicked.
   */
  onClick: PropTypes.func.isRequired,

  /**
   *  Size of the button, medium by default
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   *  Various style options
   */
  style: PropTypes.oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'plain']),

  /**
   * Hook for automated JavaScript tests
   */
  testSection: PropTypes.string,

  /**
   *  Title of the button used on hover and for screen readers
   */
  title: PropTypes.string.isRequired
};
ButtonIcon.defaultProps = {
  iconName: 'add',
  onClick: function onClick() {},
  size: 'medium',
  title: ''
};
export default ButtonIcon;