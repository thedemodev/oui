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
    homeUrl,
    logo,
    preTitle,
    title,
    badgeText,
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
      <Header
        homeUrl={ homeUrl }
        isNavOpen={ isNavOpen }
        logo={ logo }
        badgeText={ badgeText }
        title={ title }
        preTitle={ preTitle }
      />
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
  /** Text to appear below title in a badge. */
  badgeText: PropTypes.string,
  /** Url to navigate to when Brand Logo is clicked. */
  homeUrl: PropTypes.string,
  /** Is Navigation Bar open or closed. */
  isNavOpen: PropTypes.bool,
  /** Component containing brand logo. */
  logo: PropTypes.node,
  /** Component to appear above title and below brand logo. */
  preTitle: PropTypes.node,
  /** Primary links of navigation bar. */
  primaryLinks: PropTypes.arrayOf(linksPropTypeShape),
  /** Primary links of navigation bar. */
  secondaryLinks: PropTypes.arrayOf(linksPropTypeShape),
  /** Title of navigation bar */
  title: PropTypes.string,
};

NavBar.defaultProps = {
  badgeText: '',
  homeUrl: '',
  isNavOpen: true,
  logo: null,
  preTitle: null,
  primaryLinks: [],
  secondaryLinks: [],
  title: '',
};

export default NavBar;
