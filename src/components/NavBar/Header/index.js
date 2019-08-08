import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../../Link';
import Badge from '../../Badge';

const NavBarHeader = (props) => {
  const {
    platformName,
    projectName,
    homeUrl,
    showProjectName,
    trialSectionBody,
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
      { trialSectionBody }
      <li
        className={ classNames({
          'root-nav__project': true,
          'root-nav-fader': !isNavOpen,
        }) }>
        { showProjectName && (
          <div
            className="epsilon truncate"
            data-test-section="project-name">
            { projectName }
          </div>
        ) }
        <Badge color='primary'>
          { platformName }
        </Badge>
      </li>
    </div>
  );
};

NavBarHeader.propTypes = {
  /* Root Url for Logo Link */
  homeUrl: PropTypes.string.isRequired,
  /* Is Nav Open or collapsed */
  isNavOpen: PropTypes.bool.isRequired,
  /* Logo Component */
  logo: PropTypes.node.isRequired,
  /* Platform Name */
  platformName: PropTypes.string.isRequired,
  /* Project Name */
  projectName: PropTypes.string.isRequired,
  /* Boolean to show Project */
  showProjectName: PropTypes.bool.isRequired,
  /* Trial Section Content */
  trialSectionBody: PropTypes.node,
};

NavBarHeader.defaultProps = {
  trialSectionBody: null,
};

export default NavBarHeader;
