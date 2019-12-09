import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ProgressDots from './index.js';
var stories = storiesOf('ProgressDots', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(ProgressDots, {
    testSection: "test-progress-dots"
  });
});