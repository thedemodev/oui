import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Toolbar from './index.js';
var stories = storiesOf('Toolbar', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", null, React.createElement(Toolbar, null, React.createElement(Toolbar.Left, null, React.createElement(Toolbar.Link, {
    href: 'www.google.com',
    label: "Link"
  })), React.createElement(Toolbar.Right, null, React.createElement(Toolbar.Link, {
    isDisabled: true,
    href: 'www.google.com',
    label: "Disabled Link"
  }), React.createElement(Toolbar.Link, {
    href: 'www.google.com',
    label: "Enabled Link"
  }), React.createElement(Toolbar.Button, {
    onClick: action('Saying hi!'),
    label: "Button"
  }))));
});