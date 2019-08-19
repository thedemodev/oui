/**
 * Main component of Current User Menu to manage Links,
 * Profile Pic and Account Switcher
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AccountSwitcher from './AccountSwitcher';

import BlockList from '../../BlockList';
import Dropdown from '../../Dropdown';
import DropdownContents from '../../Dropdown/DropdownContents';
import Link from '../../Link';
import OverlayWrapper from '../../OverlayWrapper';
import Popover from '../../Popover';
import Button from '../../Button';

const renderEmulate = (isOpen, handler) => (
  <li
    className={ classNames({
      'root-nav__faded__link truncate': isOpen,
      'soft-half--sides': !isOpen,
    }) }>
    <Button
      onClick={ handler }
      style="unstyled"
      testSection="nav-bar-close-impersonate">
      <span className="admin--color">Emulate</span>
    </Button>
  </li>
);

const renderLinks = (isOpen, accountSettingsUrl, profileUrl, logoutUrl) => {
  const linkClass = isOpen ? 'root-nav__faded__link truncate' : 'soft-half--sides';
  const linkStyle = isOpen ? 'reverse' : 'default';
  return (
    <React.Fragment>
      <li className={ linkClass }>
        <Link href={ accountSettingsUrl } style={ linkStyle }>Account Settings</Link>
      </li>
      <li className={ linkClass }>
        <Link href={ profileUrl } style={ linkStyle }>Profile</Link>
      </li>
      <li className={ linkClass }>
        <Link href={ logoutUrl } style={ linkStyle }>Log Out</Link>
      </li>
    </React.Fragment>
  );
};

const Activator = ({ buttonRef, onClick, onBLur, userName }) => (
  <div
    ref={ buttonRef }
    onClick={ onClick }
    onBlur={ onBLur }
    data-test-section="account-switcher-dropdown-activator"
    title={ userName }
    className={ classNames(
      'link--reverse',
      'micro',
      'flex',
      'flex-align--center',
    ) }>
    <span
      className="display--block truncate"
      data-test-section="nav-bar-user-name">
      { userName }
    </span>
    <div className="flex--1 push-half--left">
      <span className="oui-arrow-inline--down oui-arrow-inline--small vertical-align--middle" />
    </div>
  </div>
);

Activator.propTypes = {
  buttonRef: PropTypes.object.isRequired,
  onBLur: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

class CurrentUserMenu extends React.Component {
  static propTypes = {
    /** Account Settings Url */
    accountSettingsUrl: PropTypes.string.isRequired,
    /** Function Called to Switch Account */
    accountSwitcherHandler: PropTypes.func.isRequired,
    /** An array of elements containing the following account data
     * text: String
     * url: String
     * description: String
     * isCurrent: Bool */
    accountSwitcherItems: PropTypes.array.isRequired,
    /** True if Navbar is Open, False if collapsed */
    isOpen: PropTypes.bool,
    /** Account Log Out Url */
    logoutUrl: PropTypes.string.isRequired,
    /** Function called when Emulate is clicked */
    onEmulateClick: PropTypes.bool.isRequired,
    /** Account Profile Avatar Url */
    profileAvatarUrl: PropTypes.string.isRequired,
    /** Account Profile Url */
    profileUrl: PropTypes.string.isRequired,
    /** Show Emulate Link */
    showEmulate: PropTypes.bool.isRequired,
    /** Account User name to display */
    userName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isOpen: true,
  };

  renderCurrentUserMenu = () => {
    const {
      isOpen,
      userName,
      profileUrl,
      profileAvatarUrl,
      accountSettingsUrl,
      logoutUrl,
      accountSwitcherItems,
      showEmulate,
      onEmulateClick,
      accountSwitcherHandler,
    } = this.props;
    const shouldShowAccountList = accountSwitcherItems.length > 1;

    const profilePicClassNames = classNames('avatar', 'avatar--small', 'flex--none');
    const profilePicInlineStyles = profileAvatarUrl ? { backgroundImage: `url(${profileAvatarUrl})` } : {};
    return ([
      <div
        className={ profilePicClassNames }
        data-test-section="profile-pic-wrapper-nav-open"
        key="profile-pic-wrapper"
        style={ profilePicInlineStyles }
      />,
      <ul
        className="push--left flex--1"
        key="current-user-links">
        { shouldShowAccountList &&
        <Dropdown
          placement="right-start"
          activator={ <Activator userName={ userName } /> }>
          <DropdownContents direction="up" minWidth="250px">
            <div data-test-section="account-switcher-dropdown-content">
              <BlockList>
                <AccountSwitcher
                  accountSwitcherItems={ accountSwitcherItems }
                  accountSwitcherHandler={ accountSwitcherHandler }
                />
              </BlockList>
            </div>
          </DropdownContents>
        </Dropdown>
        }
        { !shouldShowAccountList &&
        <div
          className="display--block truncate"
          data-test-section="nav-bar-user-name">
          { userName }
        </div>
        }
        { showEmulate && renderEmulate(isOpen, onEmulateClick) }
        { renderLinks(isOpen, accountSettingsUrl, profileUrl, logoutUrl) }
      </ul>,
    ]);
  };

  renderCollapsedCurrentUserMenu = () => {
    const {
      isOpen,
      profileUrl,
      profileAvatarUrl,
      accountSettingsUrl,
      logoutUrl,
      accountSwitcherItems,
      showEmulate,
      onEmulateClick,
      accountSwitcherHandler,
    } = this.props;
    const profilePicClassNames = classNames('avatar', 'avatar--small');

    const profilePicInlineStyles = profileAvatarUrl ? { backgroundImage: `url(${profileAvatarUrl})` } : {};
    return (
      <OverlayWrapper
        horizontalAttachment="left"
        horizontalTargetAttachment="right"
        verticalAttachment="top"
        verticalTargetAttachment="top"
        shouldHideOnClick={ true }
        testSection="account-switcher-popover"
        overlay={ (
          <Popover
            padding="hard"
            testSection="navbar-account-switcher-popover-content">
            <BlockList>
              <AccountSwitcher
                accountSwitcherItems={ accountSwitcherItems }
                accountSwitcherHandler={ accountSwitcherHandler }
              />
            </BlockList>
            <ul className="soft">
              { showEmulate && renderEmulate(isOpen, onEmulateClick) }
              { renderLinks(isOpen, accountSettingsUrl, profileUrl, logoutUrl) }
            </ul>
          </Popover>
        ) }>
        <div data-test-section="profile-pic-wrapper-nav-close">
          <div
            className={ profilePicClassNames }
            style={ profilePicInlineStyles }
          />
        </div>
      </OverlayWrapper>
    );
  };

  render() {
    const { isOpen } = this.props;
    return (
      <div className="root-nav__user root-nav__link root-nav__link--tertiary">
        { isOpen ? this.renderCurrentUserMenu() : this.renderCollapsedCurrentUserMenu() }
      </div>
    );
  }
}
export default CurrentUserMenu;
