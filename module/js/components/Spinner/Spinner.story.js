import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Spinner from './index.js';
var stories = storiesOf('Spinner', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Spinner, {
    "data-test-section": "test-spinner"
  });
});
stories.add('Smaller sizes', function () {
  return React.createElement(Spinner, {
    size: select('size', {
      small: 'small',
      tiny: 'tiny'
    }, 'small')
  });
});
stories.add('With overlay', function () {
  return React.createElement("div", {
    className: "position--relative"
  }, React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum iusto repudiandae earum porro reprehenderit perspiciatis iste delectus ipsam, accusantium ad sunt, rem mollitia, omnis illum explicabo facere quibusdam qui."), React.createElement(Spinner, {
    hasOverlay: true
  }));
});