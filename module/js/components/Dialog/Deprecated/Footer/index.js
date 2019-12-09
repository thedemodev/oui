import PropTypes from 'prop-types';
import React from 'react';

var Footer = function Footer(props) {
  return React.createElement("div", {
    className: "oui-dialog__footer"
  }, props.children);
};

Footer.propTypes = {
  children: PropTypes.element.isRequired
};
export default Footer;