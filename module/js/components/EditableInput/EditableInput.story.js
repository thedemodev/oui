import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import EditableInput from './index.js';
var stories = storiesOf('EditableInput', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('EditableInput', function () {
  return React.createElement(EditableInput, {
    value: "Click me to edit",
    onChange: action('on change'),
    type: "text"
  });
}).add('Error state', function () {
  return React.createElement(EditableInput, {
    label: "Field label",
    displayError: true,
    value: "Click me to fix errors",
    note: "Form error note.",
    placeholder: "Just a placeholder",
    type: "text"
  });
});