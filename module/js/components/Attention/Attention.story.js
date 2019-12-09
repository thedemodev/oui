import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
import Attention from '../Attention';
var typeOptions = {
  'bad-news': 'bad-news',
  'brand': 'brand',
  'good-news': 'good-news',
  'warning': 'warning'
};
var stories = storiesOf('Attention', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Attentions states', function () {
  return React.createElement(Attention, {
    alignment: select('alignment', {
      center: 'center',
      left: 'left'
    }, 'center'),
    isDismissible: _boolean('isDismissible', false),
    testSection: "attention-foo",
    type: select('type', typeOptions, 'warning')
  }, text('content', 'Hello! This is a short attention bar.'));
});