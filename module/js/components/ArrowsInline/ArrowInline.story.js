import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ArrowsInline from '../ArrowsInline';
var stories = storiesOf('ArrowsInline', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Select the arrow', function () {
  return React.createElement(ArrowsInline, {
    direction: select('direction', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right'
    }, 'down'),
    testSection: "arrow-test"
  });
});