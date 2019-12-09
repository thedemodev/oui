function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var CurrentUserMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CurrentUserMenu, _React$Component);

  function CurrentUserMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CurrentUserMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CurrentUserMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderActivator", function (_ref) {
      var buttonRef = _ref.buttonRef,
          onClick = _ref.onClick,
          onBlur = _ref.onBlur;
      var userName = _this.props.userName;
      return React.createElement("div", {
        ref: buttonRef,
        onClick: onClick,
        onBlur: onBlur,
        "data-test-section": "account-switcher-dropdown-activator",
        title: userName,
        className: classNames('link--reverse', 'micro', 'flex', 'flex-align--center')
      }, React.createElement("span", {
        className: "display--block truncate",
        "data-test-section": "nav-bar-user-name"
      }, userName), React.createElement("div", {
        className: "flex--1 push-half--left"
      }, React.createElement("span", {
        className: "oui-arrow-inline--down oui-arrow-inline--small vertical-align--middle"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmulate", function () {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onEmulateClick = _this$props.onEmulateClick;
      return React.createElement("li", {
        className: classNames({
          'root-nav__faded__link truncate': isOpen,
          'soft-half--sides': !isOpen
        })
      }, React.createElement(Button, {
        onClick: onEmulateClick,
        style: "unstyled",
        testSection: "nav-bar-close-emulate"
      }, React.createElement("span", {
        className: "admin--color"
      }, "Emulate")));
    });

    _defineProperty(_assertThisInitialized(_this), "renderLinks", function () {
      var _this$props2 = _this.props,
          isOpen = _this$props2.isOpen,
          accountSettingsUrl = _this$props2.accountSettingsUrl,
          profileUrl = _this$props2.profileUrl,
          logoutUrl = _this$props2.logoutUrl;
      var linkClass = isOpen ? 'root-nav__faded__link truncate' : 'soft-half--sides';
      var linkStyle = isOpen ? 'reverse' : 'default';
      return React.createElement(React.Fragment, null, React.createElement("li", {
        className: linkClass
      }, React.createElement(Link, {
        href: accountSettingsUrl,
        style: linkStyle
      }, "Account Settings")), React.createElement("li", {
        className: linkClass
      }, React.createElement(Link, {
        href: profileUrl,
        style: linkStyle
      }, "Profile")), React.createElement("li", {
        className: linkClass
      }, React.createElement(Link, {
        href: logoutUrl,
        style: linkStyle
      }, "Log Out")));
    });

    _defineProperty(_assertThisInitialized(_this), "renderCurrentUserMenu", function () {
      var _this$props3 = _this.props,
          userName = _this$props3.userName,
          profileAvatarUrl = _this$props3.profileAvatarUrl,
          accountSwitcherItems = _this$props3.accountSwitcherItems,
          showEmulate = _this$props3.showEmulate,
          accountSwitcherHandler = _this$props3.accountSwitcherHandler;
      var shouldShowAccountList = accountSwitcherItems.length > 1;
      var profilePicClassNames = classNames('avatar', 'avatar--small', 'flex--none', {
        'color-admin--border': showEmulate
      });
      var profilePicInlineStyles = profileAvatarUrl ? {
        backgroundImage: "url(".concat(profileAvatarUrl, ")")
      } : {};
      return [React.createElement("div", {
        className: profilePicClassNames,
        "data-test-section": "profile-pic-wrapper-nav-open",
        key: "profile-pic-wrapper",
        style: profilePicInlineStyles
      }), React.createElement("ul", {
        className: "push--left flex--1",
        key: "current-user-links"
      }, shouldShowAccountList && React.createElement("li", null, React.createElement(Dropdown, {
        placement: "right-start",
        renderActivator: _this.renderActivator
      }, React.createElement(Dropdown.Contents, {
        direction: "up",
        minWidth: "250px"
      }, React.createElement("div", {
        "data-test-section": "account-switcher-dropdown-content"
      }, React.createElement(BlockList, null, React.createElement(AccountSwitcher, {
        accountSwitcherItems: accountSwitcherItems,
        accountSwitcherHandler: accountSwitcherHandler
      })))))), !shouldShowAccountList && React.createElement("div", {
        className: "display--block truncate",
        "data-test-section": "nav-bar-user-name"
      }, userName), showEmulate && _this.renderEmulate(), _this.renderLinks())];
    });

    _defineProperty(_assertThisInitialized(_this), "renderPrivacy", function () {
      var year = new Date().getFullYear();
      return React.createElement("div", {
        className: "root-nav__user root-nav__link root-nav__link--plain hard--bottom muted"
      }, React.createElement("span", {
        className: "display--inline-block"
      }, "\xA92010\u2013", year, " Optimizely. ", React.createElement("a", {
        href: "https://www.optimizely.com/privacy/",
        className: "muted underline"
      }, "Privacy")));
    });

    _defineProperty(_assertThisInitialized(_this), "renderCollapsedCurrentUserMenu", function () {
      var _this$props4 = _this.props,
          profileAvatarUrl = _this$props4.profileAvatarUrl,
          accountSwitcherItems = _this$props4.accountSwitcherItems,
          showEmulate = _this$props4.showEmulate,
          accountSwitcherHandler = _this$props4.accountSwitcherHandler;
      var profilePicClassNames = classNames('avatar', 'avatar--small', {
        'color-admin--border': showEmulate
      });
      var profilePicInlineStyles = profileAvatarUrl ? {
        backgroundImage: "url(".concat(profileAvatarUrl, ")")
      } : {};
      return React.createElement(OverlayWrapper, {
        horizontalAttachment: "left",
        horizontalTargetAttachment: "right",
        verticalAttachment: "top",
        verticalTargetAttachment: "top",
        shouldHideOnClick: true,
        testSection: "account-switcher-popover",
        overlay: React.createElement(Popover, {
          padding: "hard",
          testSection: "navbar-account-switcher-popover-content"
        }, React.createElement(BlockList, null, React.createElement(AccountSwitcher, {
          accountSwitcherItems: accountSwitcherItems,
          accountSwitcherHandler: accountSwitcherHandler
        })), React.createElement("ul", {
          className: "soft"
        }, showEmulate && _this.renderEmulate(), _this.renderLinks()))
      }, React.createElement("div", {
        "data-test-section": "profile-pic-wrapper-nav-close"
      }, React.createElement("div", {
        className: profilePicClassNames,
        style: profilePicInlineStyles
      })));
    });

    return _this;
  }

  _createClass(CurrentUserMenu, [{
    key: "render",
    value: function render() {
      var isOpen = this.props.isOpen;
      return React.createElement("div", null, React.createElement("div", {
        className: "root-nav__user root-nav__link root-nav__link--tertiary"
      }, isOpen ? this.renderCurrentUserMenu() : this.renderCollapsedCurrentUserMenu()), isOpen && this.renderPrivacy());
    }
  }]);

  return CurrentUserMenu;
}(React.Component);

_defineProperty(CurrentUserMenu, "propTypes", {
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
    isCurrent: PropTypes.bool.isRequired
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
  userName: PropTypes.string.isRequired
});

_defineProperty(CurrentUserMenu, "defaultProps", {
  isOpen: true,
  showEmulate: false
});

export default CurrentUserMenu;