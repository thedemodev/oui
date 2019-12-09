import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Radio from './index.js';
var stories = storiesOf('Radio', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Radio, {
    testSection: text('testSection', 'test-radio'),
    name: text('name', 'this is a radio'),
    label: text('label', 'this is a radio')
  });
}).add('With html label', function () {
  return React.createElement(Radio, {
    testSection: text('testSection', 'test-radio'),
    name: text('name', 'this is a radio'),
    label: React.createElement("div", null, React.createElement("strong", null, "Label"), React.createElement("br", null), React.createElement("span", null, "Description text"))
  });
}).add('With labelWeight prop', function () {
  return React.createElement(Radio, {
    testSection: text('testSection', 'test-radio'),
    name: text('name', 'this is a radio'),
    label: text('label', 'this is a radio'),
    labelWeight: select('labelWeight', ['light', 'normal', 'bold'], 'bold')
  });
});