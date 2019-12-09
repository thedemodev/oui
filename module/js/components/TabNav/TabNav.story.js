import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import TabNav from './index.js';
var stories = storiesOf('TabNav', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Dashboard tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "second",
    style: ['dashboard']
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Basic tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "first"
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Closed tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "second",
    style: ['small']
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Centered tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "first",
    style: ['small', 'center']
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Plain tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "first",
    style: ['small', 'sub']
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Sub tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "first",
    style: ['sub']
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
}).add('Header tabs', function () {
  return React.createElement(TabNav, {
    activeTab: "first",
    style: ['header']
  }, React.createElement(TabNav.Tab, {
    onClick: action('first tab clicked'),
    tabId: "first"
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    onClick: action('second tab clicked'),
    tabId: "second"
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    onClick: action('third tab clicked'),
    tabId: "third"
  }, "Tab #3"));
});