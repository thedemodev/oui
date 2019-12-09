import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Switch from './index.js';
var stories = storiesOf('Switch', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Switch, {
    onClick: action('clicked the switch')
  });
});
stories.add('Off', function () {
  return React.createElement(Switch, {
    checked: false,
    onClick: action('clicked the switch')
  });
});
stories.add('On', function () {
  return React.createElement(Switch, {
    checked: true,
    onClick: action('clicked the switch')
  });
});
stories.add('Disabled', function () {
  return React.createElement("div", null, React.createElement(Switch, {
    checked: true,
    isDisabled: true,
    onClick: action('Checked')
  }), React.createElement(Switch, {
    checked: false,
    isDisabled: true,
    onClick: action('Not checked')
  }));
});