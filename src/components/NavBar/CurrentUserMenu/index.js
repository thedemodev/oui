/**
 * Main component of Current User Menu to manage Links,
 * Profile Pic and Account Switcher
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BlockList from '../../BlockList';
import Dropdown from '../../Dropdown';
import Link from '../../Link';
import OverlayWrapper from '../../OverlayWrapper';
import Popover from '../../Popover';
import Button from '../../Button';

import AccountSwitcher from './AccountSwitcher';

const Activator = ({ buttonRef, onClick, onBlur, userName }) => (
  <div
    ref={ buttonRef }
    onClick={ onClick }
    onBlur={ onBlur }
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
  buttonRef: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
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
    accountSwitcherItems: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isCurrent: PropTypes.bool.isRequired,
    })).isRequired,
    /** True if Navbar is Open, False if collapsed */
    isOpen: PropTypes.bool,
    /** Account Log Out Url */
    logoutUrl: PropTypes.string.isRequired,
    /** Function called when Emulate is clicked */
    onEmulateClick: PropTypes.func.isRequired,
    /** Account Profile Avatar Url */
    profileAvatarUrl: PropTypes.string,
    /** Account Profile Url */
    profileUrl: PropTypes.string.isRequired,
    /** Show Emulate Link */
    showEmulate: PropTypes.bool,
    /** Account User name to display */
    userName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isOpen: true,
    showEmulate: false,
  };

  renderEmulate = () => {
    const { isOpen, onEmulateClick } = this.props;
    return (
      <li
        className={ classNames({
          'root-nav__faded__link truncate': isOpen,
          'soft-half--sides': !isOpen,
        }) }>
        <Button
          onClick={ onEmulateClick }
          style="unstyled"
          testSection="nav-bar-close-emulate">
          <span className="admin--color">Emulate</span>
        </Button>
      </li>
    );
  };

  renderLinks = () => {
    const { isOpen, accountSettingsUrl, profileUrl, logoutUrl } = this.props;
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

  renderCurrentUserMenu = () => {
    const {
      userName,
      profileAvatarUrl,
      accountSwitcherItems,
      showEmulate,
      accountSwitcherHandler,
    } = this.props;
    const shouldShowAccountList = accountSwitcherItems.length > 1;

    const profilePicClassNames = classNames('avatar', 'avatar--small', 'flex--none', { 'color-admin--border': showEmulate });
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
          <li><Dropdown
            placement="right-start"
            activator={ <Activator userName={ userName } /> }>
            <Dropdown.Contents direction="up" minWidth="250px">
              <div data-test-section="account-switcher-dropdown-content">
                <BlockList>
                  <AccountSwitcher
                    accountSwitcherItems={ accountSwitcherItems }
                    accountSwitcherHandler={ accountSwitcherHandler }
                  />
                </BlockList>
              </div>
            </Dropdown.Contents>
          </Dropdown></li>
        }
        { !shouldShowAccountList &&
          <div
            className="display--block truncate"
            data-test-section="nav-bar-user-name">
            { userName }
          </div>
        }
        { showEmulate && this.renderEmulate() }
        { this.renderLinks() }
      </ul>,
    ]);
  };

  renderPrivacy = () => {
    return (
      <div className="root-nav__user root-nav__link root-nav__link--plain hard--bottom muted">
        <span className="display--inline-block">©2010&ndash;2019 Optimizely. <a href="https://www.optimizely.com/privacy/" className="muted underline">Privacy</a></span>
      </div>
    );
  }
  renderPrivacyMinimal = () => {
    return;
  }

  renderCollapsedCurrentUserMenu = () => {
    const {
      profileAvatarUrl,
      accountSwitcherItems,
      showEmulate,
      accountSwitcherHandler,
    } = this.props;
    const profilePicClassNames = classNames('avatar', 'avatar--small', { 'color-admin--border': showEmulate });

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
              { showEmulate && this.renderEmulate() }
              { this.renderLinks() }
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
      <div>
        <div className="root-nav__user root-nav__link root-nav__link--tertiary">
          { isOpen ? this.renderCurrentUserMenu() : this.renderCollapsedCurrentUserMenu() }
        </div>
        { isOpen ? this.renderPrivacy() : this.renderPrivacyMinimal() }
      </div>
    );
  }
}
export default CurrentUserMenu;
