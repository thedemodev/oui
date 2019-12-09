import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean as _boolean, text } from '@storybook/addon-knobs';
import NavBar from './index'; // TODO[1]: Do this with CSS only.

var openLogoUrl = 'https://app.optimizely.com/dist/static/img/rebrand/logo-f64d2aed989db744b609666199d7d2a2.svg';
var collapsedLogoUrl = 'https://app.optimizely.com/dist/static/img/rebrand/symbol-c90e70f8502ec71c46e528c5da800028.svg';

var getLogoUrl = function getLogoUrl(isOpen) {
  return isOpen ? openLogoUrl : collapsedLogoUrl;
};

var stories = storiesOf('NavBar', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('With All Options', function () {
  return React.createElement(NavBar, {
    isOpen: _boolean('isOpen', true),
    logoUrl: getLogoUrl(_boolean('isOpen', true)),
    title: "Test Project",
    badgeText: "WEB",
    badgeColor: "draft",
    homeUrl: "http://optimizely.com",
    trialContent: React.createElement("div", {
      className: "push-double--bottom push-double--left truncate"
    }, _boolean('isOpen', true) && '5 days left in your trial')
  }, React.createElement(NavBar.PrimaryLink, {
    iconName: "projects",
    type: "pushstate",
    linkLabel: "Projects",
    testSection: "projects",
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.PrimaryLink, {
    iconName: "experiment",
    type: "link",
    linkLabel: "Experiment",
    testSection: "experiment",
    isActive: true,
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.PrimaryLink, {
    iconName: "rollouts",
    type: "link",
    linkLabel: "Features",
    testSection: "features",
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.PrimaryLink, {
    iconName: "audiences",
    type: "link",
    linkLabel: "Audiences",
    testSection: "audiences",
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.PrimaryLink, {
    iconName: "events",
    type: "button",
    linkLabel: "Events",
    testSection: "events",
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.PrimaryLink, {
    iconName: "settings",
    type: "link",
    linkLabel: "Settings",
    testSection: "settings",
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.PrimaryLink, {
    iconName: "getting-started",
    type: "pushstate",
    linkLabel: "Getting Started",
    testSection: "getting-started",
    hasSeparator: true,
    onClick: action('PrimaryLink onClick')
  }), React.createElement(NavBar.SecondaryLink, {
    iconName: "program-management",
    type: "button",
    linkLabel: "Program Management",
    testSection: "program-management",
    onClick: action('SecondaryLink onClick')
  }), React.createElement(NavBar.SecondaryLink, {
    iconName: "help",
    type: "link",
    linkLabel: "Help",
    testSection: "help",
    onClick: action('SecondaryLink onClick')
  }), React.createElement(NavBar.SecondaryLink, {
    onClick: action('SecondaryLink onClick'),
    iconName: "feedback",
    type: "link",
    linkLabel: "Feedback",
    testSection: "feedback"
  }), React.createElement(NavBar.CurrentUserMenu, {
    showEmulate: _boolean('showEmulate', true),
    onEmulateClick: action('onEmulateClick'),
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
    accountSwitcherHandler: action('accountSwitcherHandler'),
    userName: "Hassan Khalid",
    accountSettingsUrl: "#",
    profileUrl: "#",
    logoutUrl: "#",
    profileAvatarUrl: text('profileAvatarUrl', 'https://optimizely-profile-images-devel.s3.amazonaws.com/img/user/hassan.khalid%40optimizely.com/c57517e7ee4941d0a5e71f3d89df0c0d.jpg')
  }));
});