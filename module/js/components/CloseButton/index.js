import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';

var CloseButton = function CloseButton(props) {
  return React.createElement("button", {
    className: "oui-close-button",
    onClick: props.onClick
  }, React.createElement(Icon, {
    name: "close",
    size: props.size
  }));
};

CloseButton.propTypes = {
  /**
   *  Function to perform when the close button is clicked.
   */
  onClick: PropTypes.func.isRequired,

  /**
   *  Size of the close button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
CloseButton.defaultProps = {
  size: 'medium'
};
export default CloseButton;