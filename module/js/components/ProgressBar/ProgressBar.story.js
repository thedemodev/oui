import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean as _boolean } from '@storybook/addon-knobs';
import ProgressBar from '../ProgressBar';
var stories = storiesOf('ProgressBar', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Progress with knobs', function () {
  return React.createElement(ProgressBar, {
    displayError: _boolean('displayError', false),
    max: number('max', 100),
    min: number('min', 0),
    progress: number('progress', 60),
    topLabel: text('topLabel', 'hola esto es un label'),
    leftLabel: text('leftLabel', 'Allocated traffic'),
    rightLabel: text('rightLabel', 'Available traffic')
  });
}).add('Progress bad news', function () {
  return React.createElement(ProgressBar, {
    max: number('max', 100),
    min: number('min', 0),
    displayError: true,
    progress: number('progress', 60),
    topLabel: text('topLabel', 'hola esto es un label'),
    leftLabel: text('leftLabel', 'Allocated traffic'),
    rightLabel: text('rightLabel', 'Available traffic')
  });
});