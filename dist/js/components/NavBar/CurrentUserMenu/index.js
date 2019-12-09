"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BlockList = _interopRequireDefault(require("../../BlockList"));

var _Dropdown = _interopRequireDefault(require("../../Dropdown"));

var _Link = _interopRequireDefault(require("../../Link"));

var _OverlayWrapper = _interopRequireDefault(require("../../OverlayWrapper"));

var _Popover = _interopRequireDefault(require("../../Popover"));

var _Button = _interopRequireDefault(require("../../Button"));

var _AccountSwitcher = _interopRequireDefault(require("./AccountSwitcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      return _react["default"].createElement("div", {
        ref: buttonRef,
        onClick: onClick,
        onBlur: onBlur,
        "data-test-section": "account-switcher-dropdown-activator",
        title: userName,
        className: (0, _classnames["default"])('link--reverse', 'micro', 'flex', 'flex-align--center')
      }, _react["default"].createElement("span", {
        className: "display--block truncate",
        "data-test-section": "nav-bar-user-name"
      }, userName), _react["default"].createElement("div", {
        className: "flex--1 push-half--left"
      }, _react["default"].createElement("span", {
        className: "oui-arrow-inline--down oui-arrow-inline--small vertical-align--middle"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmulate", function () {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onEmulateClick = _this$props.onEmulateClick;
      return _react["default"].createElement("li", {
        className: (0, _classnames["default"])({
          'root-nav__faded__link truncate': isOpen,
          'soft-half--sides': !isOpen
        })
      }, _react["default"].createElement(_Button["default"], {
        onClick: onEmulateClick,
        style: "unstyled",
        testSection: "nav-bar-close-emulate"
      }, _react["default"].createElement("span", {
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
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("li", {
        className: linkClass
      }, _react["default"].createElement(_Link["default"], {
        href: accountSettingsUrl,
        style: linkStyle
      }, "Account Settings")), _react["default"].createElement("li", {
        className: linkClass
      }, _react["default"].createElement(_Link["default"], {
        href: profileUrl,
        style: linkStyle
      }, "Profile")), _react["default"].createElement("li", {
        className: linkClass
      }, _react["default"].createElement(_Link["default"], {
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
      var profilePicClassNames = (0, _classnames["default"])('avatar', 'avatar--small', 'flex--none', {
        'color-admin--border': showEmulate
      });
      var profilePicInlineStyles = profileAvatarUrl ? {
        backgroundImage: "url(".concat(profileAvatarUrl, ")")
      } : {};
      return [_react["default"].createElement("div", {
        className: profilePicClassNames,
        "data-test-section": "profile-pic-wrapper-nav-open",
        key: "profile-pic-wrapper",
        style: profilePicInlineStyles
      }), _react["default"].createElement("ul", {
        className: "push--left flex--1",
        key: "current-user-links"
      }, shouldShowAccountList && _react["default"].createElement("li", null, _react["default"].createElement(_Dropdown["default"], {
        placement: "right-start",
        renderActivator: _this.renderActivator
      }, _react["default"].createElement(_Dropdown["default"].Contents, {
        direction: "up",
        minWidth: "250px"
      }, _react["default"].createElement("div", {
        "data-test-section": "account-switcher-dropdown-content"
      }, _react["default"].createElement(_BlockList["default"], null, _react["default"].createElement(_AccountSwitcher["default"], {
        accountSwitcherItems: accountSwitcherItems,
        accountSwitcherHandler: accountSwitcherHandler
      })))))), !shouldShowAccountList && _react["default"].createElement("div", {
        className: "display--block truncate",
        "data-test-section": "nav-bar-user-name"
      }, userName), showEmulate && _this.renderEmulate(), _this.renderLinks())];
    });

    _defineProperty(_assertThisInitialized(_this), "renderPrivacy", function () {
      var year = new Date().getFullYear();
      return _react["default"].createElement("div", {
        className: "root-nav__user root-nav__link root-nav__link--plain hard--bottom muted"
      }, _react["default"].createElement("span", {
        className: "display--inline-block"
      }, "\xA92010\u2013", year, " Optimizely. ", _react["default"].createElement("a", {
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
      var profilePicClassNames = (0, _classnames["default"])('avatar', 'avatar--small', {
        'color-admin--border': showEmulate
      });
      var profilePicInlineStyles = profileAvatarUrl ? {
        backgroundImage: "url(".concat(profileAvatarUrl, ")")
      } : {};
      return _react["default"].createElement(_OverlayWrapper["default"], {
        horizontalAttachment: "left",
        horizontalTargetAttachment: "right",
        verticalAttachment: "top",
        verticalTargetAttachment: "top",
        shouldHideOnClick: true,
        testSection: "account-switcher-popover",
        overlay: _react["default"].createElement(_Popover["default"], {
          padding: "hard",
          testSection: "navbar-account-switcher-popover-content"
        }, _react["default"].createElement(_BlockList["default"], null, _react["default"].createElement(_AccountSwitcher["default"], {
          accountSwitcherItems: accountSwitcherItems,
          accountSwitcherHandler: accountSwitcherHandler
        })), _react["default"].createElement("ul", {
          className: "soft"
        }, showEmulate && _this.renderEmulate(), _this.renderLinks()))
      }, _react["default"].createElement("div", {
        "data-test-section": "profile-pic-wrapper-nav-close"
      }, _react["default"].createElement("div", {
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
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "root-nav__user root-nav__link root-nav__link--tertiary"
      }, isOpen ? this.renderCurrentUserMenu() : this.renderCollapsedCurrentUserMenu()), isOpen && this.renderPrivacy());
    }
  }]);

  return CurrentUserMenu;
}(_react["default"].Component);

_defineProperty(CurrentUserMenu, "propTypes", {
  /** Account Settings Url */
  accountSettingsUrl: _propTypes["default"].string.isRequired,

  /** Function Called to Switch Account */
  accountSwitcherHandler: _propTypes["default"].func.isRequired,

  /** An array of elements containing the following account data
   * text: String
   * url: String
   * description: String
   * isCurrent: Bool */
  accountSwitcherItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    text: _propTypes["default"].string.isRequired,
    description: _propTypes["default"].string.isRequired,
    url: _propTypes["default"].string.isRequired,
    isCurrent: _propTypes["default"].bool.isRequired
  })).isRequired,

  /** True if Navbar is Open, False if collapsed */
  isOpen: _propTypes["default"].bool,

  /** Account Log Out Url */
  logoutUrl: _propTypes["default"].string.isRequired,

  /** Function called when Emulate is clicked */
  onEmulateClick: _propTypes["default"].func.isRequired,

  /** Account Profile Avatar Url */
  profileAvatarUrl: _propTypes["default"].string,

  /** Account Profile Url */
  profileUrl: _propTypes["default"].string.isRequired,

  /** Show Emulate Link */
  showEmulate: _propTypes["default"].bool,

  /** Account User name to display */
  userName: _propTypes["default"].string.isRequired
});

_defineProperty(CurrentUserMenu, "defaultProps", {
  isOpen: true,
  showEmulate: false
});

var _default = CurrentUserMenu;
exports["default"] = _default;