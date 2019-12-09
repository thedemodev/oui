import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Badge from './index.js';
var stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('All badges', function () {
  return React.createElement("div", null, React.createElement(Badge, {
    color: "default"
  }, "Default"), React.createElement(Badge, {
    color: "draft"
  }, "Draft"), React.createElement(Badge, {
    color: "live"
  }, "Live"), React.createElement(Badge, {
    color: "primary"
  }, "Primary"), React.createElement(Badge, {
    color: "plain"
  }, "Plain"), React.createElement(Badge, {
    color: "bad-news"
  }, "Bad News"));
}).add('With text', function () {
  return React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement(Badge, {
    color: "draft"
  }, "1"), text('text', 'Unpublished Change'));
}).add('With numbers', function () {
  return React.createElement("div", null, React.createElement(Badge, {
    color: "draft"
  }, number('draft number', 9)), React.createElement(Badge, {
    color: "live"
  }, number('light number', 9)));
});