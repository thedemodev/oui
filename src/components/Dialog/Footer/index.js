import PropTypes from 'prop-types';
import React from 'react';

const Footer = props => (
  <div className="oui-dialog__footer">
    { props.children }
  </div>
);

Footer.propTypes = {
  /**
   * Button contents of the Dialog footer.
   */
  children: PropTypes.element.isRequired,
};

export default Footer;
