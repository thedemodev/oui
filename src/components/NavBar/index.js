import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from './Header';
import IconLink from './IconLink';

const linksPropTypeShape = PropTypes.shape({
  iconName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  /* Object, { type: '', action: '', pushStateHandler: '' } */
  /* type key value can be pushStateHref, linkHref, function */
  /* if key is pushStateHref, action is string, handler is function */
  /* if key is linkHref, action is string */
  /* if key is function, action is function */
  linkAction: PropTypes.object.isRequired,
  linkDescription: PropTypes.string.isRequired,
  /* String, name of test data section */
  testSection: PropTypes.string.isRequired,

});

const renderLinks = (links, isPrimary, isNavOpen) => (
  <li className="push-double--ends">
    <ul>
      {
        links.filter(item => item.isVisible).map((item => (
          <IconLink
            key={ `${item.iconName}-${item.linkDescription}` }
            { ...item }
            isSecondaryLink={ !isPrimary }
            isNavOpen={ isNavOpen }
          />
        )))
      }
    </ul>
  </li>
);

const NavBar = (props) => {
  const {
    isNavOpen,
    header,
    primaryLinks,
    secondaryLinks,
  } = props;
  return (
    <ul
      className={ classNames({
        'root-nav': true,
        'root-nav--open': isNavOpen,
      }) }
      data-test-section="p13n-root-navbar">
      { header }
      { renderLinks(primaryLinks, true, isNavOpen) }
      <li className="anchor--bottom">
        <ul>
          { renderLinks(secondaryLinks, false, isNavOpen) }
        </ul>
      </li>
    </ul>
  );
};

NavBar.propTypes = {
  header: PropTypes.node,
  /* Is Navigation Bar open or closed */
  isNavOpen: PropTypes.bool,
  primaryLinks: PropTypes.arrayOf(linksPropTypeShape),
  secondaryLinks: PropTypes.arrayOf(linksPropTypeShape),
};

NavBar.defaultProps = {
  header: '',
  isNavOpen: true,
  primaryLinks: [],
  secondaryLinks: [],
};

NavBar.Header = Header;

export default NavBar;
