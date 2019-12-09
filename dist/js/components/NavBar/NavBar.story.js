"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// TODO[1]: Do this with CSS only.
var openLogoUrl = 'https://app.optimizely.com/dist/static/img/rebrand/logo-f64d2aed989db744b609666199d7d2a2.svg';
var collapsedLogoUrl = 'https://app.optimizely.com/dist/static/img/rebrand/symbol-c90e70f8502ec71c46e528c5da800028.svg';

var getLogoUrl = function getLogoUrl(isOpen) {
  return isOpen ? openLogoUrl : collapsedLogoUrl;
};

var stories = (0, _react2.storiesOf)('NavBar', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('With All Options', function () {
  return _react["default"].createElement(_index["default"], {
    isOpen: (0, _addonKnobs["boolean"])('isOpen', true),
    logoUrl: getLogoUrl((0, _addonKnobs["boolean"])('isOpen', true)),
    title: "Test Project",
    badgeText: "WEB",
    badgeColor: "draft",
    homeUrl: "http://optimizely.com",
    trialContent: _react["default"].createElement("div", {
      className: "push-double--bottom push-double--left truncate"
    }, (0, _addonKnobs["boolean"])('isOpen', true) && '5 days left in your trial')
  }, _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "projects",
    type: "pushstate",
    linkLabel: "Projects",
    testSection: "projects",
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "experiment",
    type: "link",
    linkLabel: "Experiment",
    testSection: "experiment",
    isActive: true,
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "rollouts",
    type: "link",
    linkLabel: "Features",
    testSection: "features",
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "audiences",
    type: "link",
    linkLabel: "Audiences",
    testSection: "audiences",
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "events",
    type: "button",
    linkLabel: "Events",
    testSection: "events",
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "settings",
    type: "link",
    linkLabel: "Settings",
    testSection: "settings",
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].PrimaryLink, {
    iconName: "getting-started",
    type: "pushstate",
    linkLabel: "Getting Started",
    testSection: "getting-started",
    hasSeparator: true,
    onClick: (0, _addonActions.action)('PrimaryLink onClick')
  }), _react["default"].createElement(_index["default"].SecondaryLink, {
    iconName: "program-management",
    type: "button",
    linkLabel: "Program Management",
    testSection: "program-management",
    onClick: (0, _addonActions.action)('SecondaryLink onClick')
  }), _react["default"].createElement(_index["default"].SecondaryLink, {
    iconName: "help",
    type: "link",
    linkLabel: "Help",
    testSection: "help",
    onClick: (0, _addonActions.action)('SecondaryLink onClick')
  }), _react["default"].createElement(_index["default"].SecondaryLink, {
    onClick: (0, _addonActions.action)('SecondaryLink onClick'),
    iconName: "feedback",
    type: "link",
    linkLabel: "Feedback",
    testSection: "feedback"
  }), _react["default"].createElement(_index["default"].CurrentUserMenu, {
    showEmulate: (0, _addonKnobs["boolean"])('showEmulate', true),
    onEmulateClick: (0, _addonActions.action)('onEmulateClick'),
    accountSwitcherItems: [{
      text: 'Account 1',
      url: '#',
      description: 'Account 1 Description',
      isCurrent: false
    }, {
      text: 'Account 3',
      url: '#',
      description: 'Account 3 Description',
      isCurrent: false
    }, {
      text: 'Account 2',
      url: '#',
      description: 'Account 2 Description',
      isCurrent: true
    }],
    accountSwitcherHandler: (0, _addonActions.action)('accountSwitcherHandler'),
    userName: "Hassan Khalid",
    accountSettingsUrl: "#",
    profileUrl: "#",
    logoutUrl: "#",
    profileAvatarUrl: (0, _addonKnobs.text)('profileAvatarUrl', 'https://optimizely-profile-images-devel.s3.amazonaws.com/img/user/hassan.khalid%40optimizely.com/c57517e7ee4941d0a5e71f3d89df0c0d.jpg')
  }));
});