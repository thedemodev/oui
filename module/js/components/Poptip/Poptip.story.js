import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, select } from '@storybook/addon-knobs';
import Poptip from './index.js';
import Button from '../Button';
import Icon from 'react-oui-icons';
var stories = storiesOf('Poptip', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, React.createElement("div", {
    className: "flexboxCenter"
  }, story()));
});
stories.add('Basic poptip', function () {
  return React.createElement(Poptip, {
    trigger: "click",
    content: "This is a sample poptip.",
    position: "right"
  }, React.createElement(Button, {
    width: "default"
  }, "Default Poptip"));
}).add('Poptip with children inline', function () {
  return React.createElement("div", {
    className: "flex flex-align--center line--1"
  }, React.createElement("input", {
    className: "text-input width--300 push-half--right",
    type: "text"
  }), React.createElement(Poptip, {
    content: "Block Origin",
    position: "right",
    isInline: true
  }, React.createElement(Icon, {
    name: "ban"
  })));
}).add('Poptip to the right', function () {
  return React.createElement(Poptip, {
    trigger: "mouseenter",
    content: "This is a sample poptip.",
    position: "right"
  }, React.createElement(Button, {
    style: "unstyled",
    width: "default"
  }, React.createElement("a", null, "Poptip on the right")));
}).add('Poptip light theme', function () {
  return React.createElement(Poptip, {
    trigger: "click",
    content: "This is a sample poptip.",
    theme: "light"
  }, React.createElement(Button, {
    style: "unstyled",
    width: "default"
  }, React.createElement("a", null, "Click Poptip, light theme")));
}).add('Poptip light theme on the right', function () {
  return React.createElement(Poptip, {
    trigger: "click",
    content: "This is a sample poptip.",
    theme: "light",
    position: "right"
  }, React.createElement(Button, {
    style: "unstyled",
    width: "default"
  }, React.createElement("a", null, "Click Poptip, light theme, on the right")));
}).add('Customizable with knobs', function () {
  return React.createElement(Poptip, {
    content: 'This is a sample poptip.',
    disable: _boolean('disable', false),
    isAnimated: _boolean('isAnimated', true),
    position: select('position', ['top', 'right', 'bottom', 'left'], 'top'),
    theme: select('theme', ['dark', 'light', 'transparent'], 'dark'),
    trigger: select('trigger', ['mouseenter', 'focus', 'click', 'manual'], 'mouseenter')
  }, React.createElement(Button, {
    width: "default"
  }, "Customizable Poptip"));
}).add('Basic poptip with delay', function () {
  return React.createElement(Poptip, {
    trigger: "mouseenter",
    delay: 1000,
    hideDelay: 5000,
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
  }, React.createElement(Button, {
    width: "default"
  }, "Default Poptip"));
});