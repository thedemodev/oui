import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean } from '@storybook/addon-knobs';
import Label from './index.js';
var stories = storiesOf('Label', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default label', function () {
  return React.createElement("div", null, React.createElement(Label, {
    isRequired: _boolean('isRequired', false),
    isOptional: _boolean('isOptional', false)
  }, "I'm a Label"));
});