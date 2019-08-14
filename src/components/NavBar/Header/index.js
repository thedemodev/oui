import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../Link';
import Badge from '../../Badge';

const NavBarHeader = (props) => {
  const {
    badgeText,
    title,
    homeUrl,
    preTitle,
    isNavOpen,
    logo,
  } = props;
  return (
    <div data-test-section="navbar-header">
      <li className="root-nav__logo push-double--bottom">
        <Link href={ homeUrl }>
          { logo }
        </Link>
      </li>
      { preTitle }
      <li
        className={ classNames({
          'root-nav__project': true,
          'root-nav-fader': !isNavOpen,
        }) }>
        <div
          className="epsilon truncate"
          data-test-section="project-name">
          { title }
        </div>
        <Badge color='primary'>
          { badgeText }
        </Badge>
      </li>
    </div>
  );
};

NavBarHeader.propTypes = {
  /* Text to appear on the Badge below title */
  badgeText: PropTypes.string.isRequired,
  /* Root Url for Logo Link */
  homeUrl: PropTypes.string.isRequired,
  /* Is Nav Open or collapsed */
  isNavOpen: PropTypes.bool.isRequired,
  /* Logo Component */
  logo: PropTypes.node.isRequired,
  /* Optional content to show above the title */
  preTitle: PropTypes.node,
  /* Nav bar Title */
  title: PropTypes.string.isRequired,
};

NavBarHeader.defaultProps = {
  preTitle: null,
};

export default NavBarHeader;
