import PropTypes from 'prop-types';
import React from 'react';

const Footer = props => (
  <div className="oui-form__footer">
    { props.children }
  </div>
);

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Footer;
