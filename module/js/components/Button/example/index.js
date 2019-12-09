/* eslint-disable react/jsx-key */
import React from 'react';
import ArrowsInline from '../../ArrowsInline';
import Button from '../index';
import Icon from 'react-oui-icons';

var mockFunction = function mockFunction() {};

export default [{
  isPadded: true,
  examples: [React.createElement(Button, null, "Button"), React.createElement(Button, {
    style: "highlight"
  }, "Highlight"), React.createElement(Button, {
    style: "danger"
  }, "Danger"), React.createElement(Button, {
    style: "danger-outline"
  }, "Danger Outline"), React.createElement(Button, {
    style: "outline"
  }, "Outline"), React.createElement(Button, {
    style: "plain"
  }, "Plain"), React.createElement(Button, {
    style: "toggle"
  }, "Toggle")]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    isDisabled: true
  }, "Button"), React.createElement(Button, {
    isDisabled: true,
    style: "highlight"
  }, "Highlight"), React.createElement(Button, {
    isDisabled: true,
    style: "danger"
  }, "Danger"), React.createElement(Button, {
    isDisabled: true,
    style: "danger-outline"
  }, "Danger Outline"), React.createElement(Button, {
    isDisabled: true,
    style: "outline"
  }, "Outline"), React.createElement(Button, {
    isDisabled: true,
    style: "plain"
  }, "Plain"), React.createElement(Button, {
    isDisabled: true,
    style: "toggle"
  }, "Toggle")]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    isActive: true
  }, "Button")]
}, {
  backgroundColor: 'brand-dark',
  isPadded: true,
  examples: [React.createElement(Button, {
    style: "outline-reverse"
  }, "Outline Reverse Button")]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    style: "unstyled"
  }, "Unstyled Button")]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    style: "underline"
  }, "Underline Button\xA0", React.createElement(ArrowsInline, {
    direction: "down"
  }))]
}, {
  isPadded: true,
  examples: [React.createElement(Button, null, React.createElement(Icon, {
    name: "clipboard"
  }))]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    size: "tiny"
  }, "Tiny Button"), React.createElement(Button, {
    size: "small"
  }, "Small Button"), React.createElement(Button, {
    size: "large"
  }, "Large Button"), React.createElement(Button, {
    size: "narrow"
  }, "Narrow Button"), React.createElement(Button, {
    size: "tight"
  }, "Tight Button")]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    width: "full"
  }, "Full Button")]
}, {
  isPadded: true,
  examples: [React.createElement(Button, {
    onClick: mockFunction
  }, "Button with a Function")]
}];