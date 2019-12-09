import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean, number, select } from '@storybook/addon-knobs';
import TextField from './index.js';
var stories = storiesOf('TextField (deprecated)', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, React.createElement("div", {
    className: "attention attention--bad-news oui-text--center push-double--bottom"
  }, "TextField component is deprecated. Please use Input instead for the same features."), story());
});
stories.add('TextField with knobs', function () {
  return React.createElement(TextField, {
    defaultValue: text('defaultValue', 'some default value'),
    displayError: _boolean('displayError', false),
    isFilter: _boolean('isFilter', false),
    isOptional: _boolean('isOptional', false),
    isRequired: _boolean('isRequired', false),
    label: text('Label', 'Use Input Component instead'),
    max: number('max', 50),
    min: number('min', 10),
    note: text('note', ''),
    onChange: action('on change'),
    onBlur: action('on blur'),
    onKeyDown: action('on key press'),
    placeholder: text('placeholder', 'just a placeholder'),
    type: select('type', ['text', 'password', 'number', 'date', 'percent'], 'text')
  });
}).add('TextField', function () {
  return React.createElement(TextField, {
    label: "Use Input Component instead",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  });
}).add('Percent', function () {
  return React.createElement(TextField, {
    label: "Total Traffic Allocated:",
    placeholder: "100",
    defaultValue: text('defaultValue', '0'),
    type: "percent",
    max: number('max', 100),
    min: number('min', 0)
  });
}).add('Error state', function () {
  return React.createElement(TextField, {
    label: "Use Input Component instead",
    displayError: true,
    note: "Form error note.",
    placeholder: "Just a placeholder",
    type: "text"
  });
});