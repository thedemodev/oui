import React from 'react';
import { storiesOf } from '@storybook/react';
import noop from 'lodash.noop';
import { withInfo } from '@storybook/addon-info';
import DockedFooter from './index.js';
import Button from '../Button';
var stories = storiesOf('DockedFooter', module);
stories.addDecorator(function (story) {
  return React.createElement("div", {
    className: "soft-quad--sides"
  }, story());
});
stories.add('With Less Content', withInfo()(function () {
  return React.createElement("div", {
    "data-test-section": "helloTesting",
    className: "overflow-y--hidden"
  }, React.createElement("h2", {
    className: "push-double--top"
  }, "Test"), React.createElement("p", null, "Test content..."), React.createElement(DockedFooter, {
    testSection: 'docked-footer-less-content',
    parentTestSection: 'helloTesting',
    includesMargin: true
  }, [React.createElement(Button, {
    style: "plain",
    key: 0,
    onClick: noop
  }, "Cancel"), React.createElement(Button, {
    style: "highlight",
    key: 1,
    onClick: noop
  }, "Confirm")]));
})).add('With More Content', withInfo()(function () {
  return React.createElement("div", {
    "data-test-section": "helloTestingLong",
    className: "height--300 overflow-y--auto"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "push-double--top"
  }, "Test"), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content..."), React.createElement("p", null, "Test content...")), React.createElement(DockedFooter, {
    testSection: 'docked-footer-more-content',
    parentTestSection: 'helloTestingLong'
  }, [React.createElement(Button, {
    style: "plain",
    key: 0,
    onClick: noop
  }, "Cancel"), React.createElement(Button, {
    style: "highlight",
    key: 1,
    onClick: noop
  }, "Confirm")]));
}));