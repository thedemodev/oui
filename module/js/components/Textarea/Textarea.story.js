import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean, number } from '@storybook/addon-knobs';
import Textarea from './index.js';
var stories = storiesOf('Textarea', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Textarea with knobs', function () {
  return React.createElement("div", null, React.createElement(Textarea, {
    isDisabled: _boolean('isDisabled', false),
    defaultValue: "Delete this default value and see the placeholder",
    maxLength: number('maxLength', 250),
    numRows: number('numRows', 25),
    placeholder: text('placeHolder', 'Enter a comment'),
    onBlur: action('Textarea: onBlur'),
    onChange: action('Textarea: onChange'),
    onFocus: action('Textarea: onFocus'),
    onInput: action('Textarea: onInput'),
    onKeyDown: action('Textarea: onKeyDown')
  }));
}).add('With label and note', function () {
  return React.createElement(Textarea, {
    label: "Field label",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
}).add('Error state', function () {
  return React.createElement(Textarea, {
    label: "Field label",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
}).add('Textarea with auto focus', function () {
  return React.createElement(Textarea, {
    label: "Field label",
    focus: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
});