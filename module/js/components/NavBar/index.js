function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link';
import Badge from '../Badge';
import IconLink from './IconLink';
import CurrentUserMenu from './CurrentUserMenu';
var LINK = 'link';
var PUSH_STATE = 'pushstate';
var BUTTON = 'button';
var linkPropTypes = {
  /** Should show a separator line before this link. */
  hasSeparator: PropTypes.bool,

  /** Url to Navigate to when type is link. */
  href: PropTypes.string,

  /** Name of Icon. */
  iconName: PropTypes.string.isRequired,

  /** Whether the link is highlighted blue as the current active nav link. */
  isActive: PropTypes.bool,

  /** Condition in which this link is visible. */
  isVisible: PropTypes.bool,

  /** Description of url. */
  linkLabel: PropTypes.string,

  /** Handler called when link is clicked. */
  onClick: PropTypes.func,

  /** Name of test data section. */
  testSection: PropTypes.string,

  /** Type of Link. */
  type: PropTypes.oneOf([LINK, PUSH_STATE, BUTTON])
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
  return React.createElement(IconLink, _extends({}, props, {
    isSecondaryLink: false
  }));
};

PrimaryLink.propTypes = linkPropTypes;
PrimaryLink.defaultProps = linkDefaultProps;

var SecondaryLink = function SecondaryLink(props) {
  return React.createElement(IconLink, _extends({}, props, {
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
    return React.Children.toArray(children).filter(function (child) {
      return child.type === ComponentType;
    }).map(function (element) {
      return React.cloneElement(element, {
        isOpen: isOpen
      });
    });
  };

  var logoClasses = classNames('push-double--left', {
    'root-nav__logo--full': isOpen,
    'root-nav__logo--mark': !isOpen
  });
  return React.createElement("nav", {
    className: classNames({
      'root-nav': true,
      'root-nav--open': isOpen
    }),
    "data-test-section": "p13n-root-navbar"
  }, React.createElement("div", {
    "data-test-section": "navbar-header"
  }, React.createElement("div", {
    className: "root-nav__logo push-double--bottom"
  }, React.createElement(Link, {
    href: homeUrl
  }, React.createElement("img", {
    alt: "logo",
    src: logoUrl,
    className: logoClasses
  }))), trialContent, React.createElement("div", {
    className: classNames({
      'root-nav__project': true,
      'root-nav-fader': !isOpen
    })
  }, React.createElement("div", {
    className: "epsilon truncate",
    "data-test-section": "project-name"
  }, title), React.createElement(Badge, {
    color: "primary",
    testSection: "project-badge"
  }, badgeText))), React.createElement("ul", {
    className: "push-double--ends"
  }, renderChildrenByType(PrimaryLink)), React.createElement("div", {
    className: "anchor--bottom"
  }, React.createElement("ul", {
    className: "push-double--ends"
  }, renderChildrenByType(SecondaryLink)), renderChildrenByType(CurrentUserMenu)));
};

NavBar.propTypes = {
  /** Text to appear below title in a badge. */
  badgeText: PropTypes.string,

  /* Allowed Children are <PrimaryLink>, <SecondaryLink>, <CurrentUser>. */
  children: function children(props, propName) {
    var prop = props[propName];
    var error = null;
    React.Children.forEach(prop, function (child) {
      if (![SecondaryLink, PrimaryLink, CurrentUserMenu].includes(child.type)) {
        error = new Error('Children should be of type PrimaryLink, SecondaryLink, or CurrentUserMenu.');
      }
    });

    if (!error && React.Children.toArray(prop).filter(function (child) {
      return child.type === CurrentUserMenu;
    }).length !== 1) {
      error = new Error('There should be only one instance of `CurrentUserMenu`');
    }

    return error;
  },

  /** Url to navigate to when Brand Logo is clicked. */
  homeUrl: PropTypes.string,

  /** Is Navigation Bar open or closed. */
  isOpen: PropTypes.bool,

  /** Brand logo URL. */
  logoUrl: PropTypes.string,

  /** Title of navigation bar */
  title: PropTypes.string,

  /** Component to appear above title and below brand logo. */
  trialContent: PropTypes.node
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
NavBar.CurrentUserMenu = CurrentUserMenu;
export default NavBar;