/* eslint-disable react/jsx-key */
import React from 'react';
import TabNav from '../index';

var mockFunction = function mockFunction() {};

export default [{
  isPadded: true,
  examples: [React.createElement(TabNav, {
    activeTab: 'first'
  }, React.createElement(TabNav.Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}, {
  isPadded: true,
  examples: [React.createElement(TabNav, {
    activeTab: 'second',
    style: ['small']
  }, React.createElement(TabNav.Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}, {
  isPadded: true,
  examples: [React.createElement(TabNav, {
    activeTab: 'first',
    style: ['small', 'center']
  }, React.createElement(TabNav.Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}, {
  isPadded: true,
  examples: [React.createElement(TabNav, {
    activeTab: 'first',
    style: ['small', 'sub']
  }, React.createElement(TabNav.Tab, {
    tabId: "first",
    onClick: mockFunction
  }, "Tab #1"), React.createElement(TabNav.Tab, {
    tabId: "second",
    onClick: mockFunction
  }, "Tab #2"), React.createElement(TabNav.Tab, {
    tabId: "third",
    onClick: mockFunction
  }, "Tab #3"))]
}];