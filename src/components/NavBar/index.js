import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from './Header';

const NavBar = (props) => {
  const {
    isNavOpen,
    children,
  } = props;
  return (
    <ul
      className={ classNames({
        'root-nav': true,
        'root-nav--open': isNavOpen,
      }) }
      data-test-section="p13n-root-navbar">
      { children }
    </ul>
  );
};

NavBar.propTypes = {
  /* Expect Navbar content */
  children: PropTypes.node.isRequired,
  /* Is Navigation Bar open or closed */
  isNavOpen: PropTypes.bool.isRequired,
};

NavBar.Header = Header;

export default NavBar;
