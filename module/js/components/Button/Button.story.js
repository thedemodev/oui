import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonRow from '../ButtonRow';
import Button from './index.js';
import Link from '../Link';
import ArrowsInline from '../ArrowsInline';
var stories = storiesOf('Button', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Knobs', function () {
  return React.createElement(Button, {
    style: select('style', {
      'highlight': 'highlight',
      'danger': 'danger',
      'danger-outline': 'danger-outline',
      'outline': 'outline',
      'outline-reverse': 'outline-reverse',
      'plain': 'plain',
      'toggle': 'toggle',
      'underline': 'underline',
      'unstyled': 'unstyled'
    }, 'highlight'),
    isDisabled: _boolean('isDisabled', false),
    isActive: _boolean('isActive', false),
    isLoading: _boolean('isLoading', false),
    width: select('width', {
      'default': 'default',
      'full': 'full'
    }, 'default'),
    size: select('size', {
      'tiny': 'tiny',
      'small': 'small',
      'large': 'large',
      'narrow': 'narrow',
      'tight': 'tight'
    }, 'narrow')
  }, text('customize me!', 'customize me!'));
}).add('All buttons', function () {
  return React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      isActive: _boolean('isActive', false),
      width: "default"
    }, "Button"), React.createElement(Button, {
      key: "2",
      isActive: _boolean('isActive', false),
      style: "highlight",
      width: "default"
    }, "Highlight"), React.createElement(Button, {
      key: "3",
      isActive: _boolean('isActive', false),
      style: "danger",
      width: "default"
    }, "Danger"), React.createElement(Button, {
      key: "4",
      isActive: _boolean('isActive', false),
      style: "danger-outline",
      width: "default"
    }, "Danger Outline"), React.createElement(Button, {
      key: "5",
      isActive: _boolean('isActive', false),
      style: "outline",
      width: "default"
    }, "Outline"), React.createElement(Button, {
      key: "6",
      isActive: _boolean('isActive', false),
      style: "plain",
      width: "default"
    }, "Plain"), React.createElement(Button, {
      key: "7",
      isActive: _boolean('isActive', false),
      style: "toggle",
      width: "default"
    }, "Toggle")]
  });
}).add('Disabled', function () {
  return React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      isDisabled: true,
      width: "default"
    }, "Button"), React.createElement(Button, {
      key: "2",
      isDisabled: true,
      style: "highlight",
      width: "default"
    }, "Highlight"), React.createElement(Button, {
      key: "3",
      isDisabled: true,
      style: "danger",
      width: "default"
    }, "Danger"), React.createElement(Button, {
      key: "4",
      isDisabled: true,
      style: "danger-outline",
      width: "default"
    }, "Danger Outline"), React.createElement(Button, {
      key: "5",
      isDisabled: true,
      style: "outline",
      width: "default"
    }, "Outline"), React.createElement(Button, {
      key: "6",
      isDisabled: true,
      style: "plain",
      width: "default"
    }, "Plain"), React.createElement(Button, {
      key: "7",
      isDisabled: true,
      style: "toggle",
      width: "default"
    }, "Toggle")]
  });
}).add('Underline button', function () {
  return React.createElement(Button, {
    style: "underline",
    width: "default"
  }, "Underline Button", React.createElement(ArrowsInline, {
    direction: "down"
  }));
}).add('Sizes variations', function () {
  return React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      width: "default",
      size: "tiny"
    }, "Tiny Button"), React.createElement(Button, {
      key: "2",
      width: "default",
      size: "small"
    }, "Small Button"), React.createElement(Button, {
      key: "3",
      width: "default",
      size: "large"
    }, "Large Button"), React.createElement(Button, {
      key: "4",
      width: "default",
      size: "narrow"
    }, "Narrow Button"), React.createElement(Button, {
      key: "5",
      width: "default",
      size: "tight"
    }, "Tight Button")]
  });
}).add('Button without an onClick', function () {
  return React.createElement(Button, {
    isLink: true
  }, "Faux Button");
}).add('Button without an onClick (disabled)', function () {
  return React.createElement(Button, {
    isLink: true,
    isDisabled: true
  }, "Faux Button");
}).add('Button that looks like a Link', function () {
  return React.createElement(Button, {
    style: "unstyled",
    onClick: action('Saying hi!')
  }, React.createElement(Link, null, "Say Hi"));
}).add('Button that disables on click', function () {
  return React.createElement(Button, {
    style: "highlight",
    isLoading: _boolean('isLoading', true),
    onClick: action('I have been clicked')
  }, "Create Campaign");
}).add('Button that disables on click with custom text', function () {
  return React.createElement(Button, {
    style: "highlight",
    isLoading: _boolean('isLoading', true),
    loadingText: text('loadingText', 'Creating Campaign'),
    onClick: action('I have been clicked')
  }, "Create Campaign");
});