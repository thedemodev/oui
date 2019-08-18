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

const renderCurrentUserMenu = (
  isOpen,
  userName,
  profileUrl,
  profileAvatarUrl,
  accountSettingsUrl,
  logoutUrl,
  accountSwitcherItems,
) => {
  const shouldShowAccountList = accountSwitcherItems.length > 1;

  const Activator = ({ buttonRef, onClick, onBLur }) => (
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

  const profilePicClassNames = classNames('avatar', 'avatar--small');
  const profilePicInlineStyles = profileAvatarUrl ? { backgroundImage: `url(${profileAvatarUrl})` } : {};
  return ([
    <div
      className={ classNames(profilePicClassNames, 'flex--none') }
      data-test-section="profile-pic-wrapper-nav-open"
      key="profile-pic-wrapper"
      style={ profilePicInlineStyles }
    />,
    <ul
      className="push--left flex--1"
      key="current-user-links">
      {
        shouldShowAccountList ? (
          <Dropdown
            placement="right-start"
            activator={ <Activator /> }>
            <DropdownContents direction="up" minWidth="250px">
              <div data-test-section="account-switcher-dropdown-content">
                <BlockList>
                  <AccountSwitcher
                    accountSwitcherItems={ accountSwitcherItems }
                  />
                </BlockList>
              </div>
            </DropdownContents>
          </Dropdown>
        ) : (
          <div
            className="display--block truncate"
            data-test-section="nav-bar-user-name">
            { userName }
          </div>
        )
      }
      <li className="root-nav__faded__link truncate">
        <Link
          href={ accountSettingsUrl }
          style="reverse">
          Account Settings
        </Link>
      </li>
      <li className="root-nav__faded__link truncate">
        <Link
          href={ profileUrl }
          style="reverse">
          Profile
        </Link>
      </li>
      <li className="root-nav__faded__link truncate">
        <Link
          href={ logoutUrl }
          style="reverse">
          Log Out
        </Link>
      </li>
    </ul>,
  ]);
};

const renderCollapsedCurrentUserMenu = (
  isOpen,
  userName,
  profileUrl,
  profileAvatarUrl,
  accountSettingsUrl,
  logoutUrl,
  accountSwitcherItems,
) => {
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
            />
          </BlockList>
          <ul className="soft">
            <li className="soft-half--sides">
              <Link href={ accountSettingsUrl }>Account Settings</Link>
            </li>
            <li className="soft-half--sides">
              <Link href={ profileUrl }>Profile</Link>
            </li>
            <li className="soft-half--sides">
              <Link href={ logoutUrl }>Log Out</Link>
            </li>
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

const CurrentUserMenu = (props) => {
  const {
    profileAvatarUrl,
    isOpen,
    accountSwitcherItems,
    userName,
    accountSettingsUrl,
    profileUrl,
    logoutUrl,
  } = props;
  return (
    <div className="root-nav__user root-nav__link root-nav__link--tertiary">
      {
        isOpen
          ? renderCurrentUserMenu(
            isOpen,
            userName,
            profileUrl,
            profileAvatarUrl,
            accountSettingsUrl,
            logoutUrl,
            accountSwitcherItems,
          )
          : renderCollapsedCurrentUserMenu(
            isOpen,
            userName,
            profileUrl,
            profileAvatarUrl,
            accountSettingsUrl,
            logoutUrl,
            accountSwitcherItems,
          )
      }
    </div>
  );
};

CurrentUserMenu.propTypes = {
  /* Account Settings Url */
  accountSettingsUrl: PropTypes.string.isRequired,
  /* An array of elements containing the following account data
   * text: String
   * url: String
   * description: String
   * isCurrent: Bool */
  accountSwitcherItems: PropTypes.array.isRequired,
  /* True if Navbar is Open, False if collapsed */
  isOpen: PropTypes.bool.isRequired,
  /* Account Log Out Url */
  logoutUrl: PropTypes.string.isRequired,
  /* Account Profile Avatar Url */
  profileAvatarUrl: PropTypes.string.isRequired,
  /* Account Profile Url */
  profileUrl: PropTypes.string.isRequired,
  /* Account User name to display */
  userName: PropTypes.string.isRequired,
};

export default CurrentUserMenu;
