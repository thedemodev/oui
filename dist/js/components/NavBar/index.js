"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireDefault(require("../Link"));

var _Badge = _interopRequireDefault(require("../Badge"));

var _IconLink = _interopRequireDefault(require("./IconLink"));

var _CurrentUserMenu = _interopRequireDefault(require("./CurrentUserMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LINK = 'link';
var PUSH_STATE = 'pushstate';
var BUTTON = 'button';
var linkPropTypes = {
  /** Should show a separator line before this link. */
  hasSeparator: _propTypes["default"].bool,

  /** Url to Navigate to when type is link. */
  href: _propTypes["default"].string,

  /** Name of Icon. */
  iconName: _propTypes["default"].string.isRequired,

  /** Whether the link is highlighted blue as the current active nav link. */
  isActive: _propTypes["default"].bool,

  /** Condition in which this link is visible. */
  isVisible: _propTypes["default"].bool,

  /** Description of url. */
  linkLabel: _propTypes["default"].string,

  /** Handler called when link is clicked. */
  onClick: _propTypes["default"].func,

  /** Name of test data section. */
  testSection: _propTypes["default"].string,

  /** Type of Link. */
  type: _propTypes["default"].oneOf([LINK, PUSH_STATE, BUTTON])
};
var linkDefaultProps = {
  href: '',
  isActive: false,
  isVisible: true,
  linkLabel: '',
  testSection: null,
  hasSeparator: false,
  onClick: function onClick() {},
  type: LINK
};

var PrimaryLink = function PrimaryLink(props) {
  return _react["default"].createElement(_IconLink["default"], _extends({}, props, {
    isSecondaryLink: false
  }));
};

PrimaryLink.propTypes = linkPropTypes;
PrimaryLink.defaultProps = linkDefaultProps;

var SecondaryLink = function SecondaryLink(props) {
  return _react["default"].createElement(_IconLink["default"], _extends({}, props, {
    isSecondaryLink: true
  }));
};

SecondaryLink.propTypes = linkPropTypes;
SecondaryLink.defaultProps = linkDefaultProps;

var NavBar = function NavBar(props) {
  var isOpen = props.isOpen,
      homeUrl = props.homeUrl,
      logoUrl = props.logoUrl,
      trialContent = props.trialContent,
      title = props.title,
      badgeText = props.badgeText,
      children = props.children;

  var renderChildrenByType = function renderChildrenByType(ComponentType) {
    return _react["default"].Children.toArray(children).filter(function (child) {
      return child.type === ComponentType;
    }).map(function (element) {
      return _react["default"].cloneElement(element, {
        isOpen: isOpen
      });
    });
  };

  var logoClasses = (0, _classnames["default"])('push-double--left', {
    'root-nav__logo--full': isOpen,
    'root-nav__logo--mark': !isOpen
  });
  return _react["default"].createElement("nav", {
    className: (0, _classnames["default"])({
      'root-nav': true,
      'root-nav--open': isOpen
    }),
    "data-test-section": "p13n-root-navbar"
  }, _react["default"].createElement("div", {
    "data-test-section": "navbar-header"
  }, _react["default"].createElement("div", {
    className: "root-nav__logo push-double--bottom"
  }, _react["default"].createElement(_Link["default"], {
    href: homeUrl
  }, _react["default"].createElement("img", {
    alt: "logo",
    src: logoUrl,
    className: logoClasses
  }))), trialContent, _react["default"].createElement("div", {
    className: (0, _classnames["default"])({
      'root-nav__project': true,
      'root-nav-fader': !isOpen
    })
  }, _react["default"].createElement("div", {
    className: "epsilon truncate",
    "data-test-section": "project-name"
  }, title), _react["default"].createElement(_Badge["default"], {
    color: "primary",
    testSection: "project-badge"
  }, badgeText))), _react["default"].createElement("ul", {
    className: "push-double--ends"
  }, renderChildrenByType(PrimaryLink)), _react["default"].createElement("div", {
    className: "anchor--bottom"
  }, _react["default"].createElement("ul", {
    className: "push-double--ends"
  }, renderChildrenByType(SecondaryLink)), renderChildrenByType(_CurrentUserMenu["default"])));
};

NavBar.propTypes = {
  /** Text to appear below title in a badge. */
  badgeText: _propTypes["default"].string,

  /* Allowed Children are <PrimaryLink>, <SecondaryLink>, <CurrentUser>. */
  children: function children(props, propName) {
    var prop = props[propName];
    var error = null;

    _react["default"].Children.forEach(prop, function (child) {
      if (![SecondaryLink, PrimaryLink, _CurrentUserMenu["default"]].includes(child.type)) {
        error = new Error('Children should be of type PrimaryLink, SecondaryLink, or CurrentUserMenu.');
      }
    });

    if (!error && _react["default"].Children.toArray(prop).filter(function (child) {
      return child.type === _CurrentUserMenu["default"];
    }).length !== 1) {
      error = new Error('There should be only one instance of `CurrentUserMenu`');
    }

    return error;
  },

  /** Url to navigate to when Brand Logo is clicked. */
  homeUrl: _propTypes["default"].string,

  /** Is Navigation Bar open or closed. */
  isOpen: _propTypes["default"].bool,

  /** Brand logo URL. */
  logoUrl: _propTypes["default"].string,

  /** Title of navigation bar */
  title: _propTypes["default"].string,

  /** Component to appear above title and below brand logo. */
  trialContent: _propTypes["default"].node
};
NavBar.defaultProps = {
  badgeText: '',
  homeUrl: '',
  isOpen: true,
  logoUrl: null,
  title: '',
  trialContent: null
};
NavBar.PrimaryLink = PrimaryLink;
NavBar.SecondaryLink = SecondaryLink;
NavBar.CurrentUserMenu = _CurrentUserMenu["default"];
var _default = NavBar;
exports["default"] = _default;