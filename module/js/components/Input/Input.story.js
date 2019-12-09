import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean, number, select } from '@storybook/addon-knobs';
import Input from './index.js';
var stories = storiesOf('Input', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Input with knobs', function () {
  return React.createElement(Input, {
    defaultValue: text('defaultValue', 'some default value'),
    displayError: _boolean('displayError', false),
    id: "input-01",
    isFilter: _boolean('isFilter', false),
    isDropdown: _boolean('isDropdown', true),
    isOptional: _boolean('isOptional', false),
    label: text('Label', ''),
    max: number('max', 50),
    maxLength: number('maxLength', 250),
    min: number('min', 10),
    onChange: action('on change'),
    onBlur: action('on blur'),
    onKeyDown: action('on key press'),
    placeholder: text('placeholder', 'just a placeholder'),
    isRequired: _boolean('isRequired', false),
    type: select('type', ['text', 'password', 'number', 'date'], 'text')
  });
}).add('Inputs', function () {
  return React.createElement("div", null, React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-01",
    label: "Field label",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-02",
    label: "Label for required field",
    isRequired: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-03",
    label: "Field label",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-04",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-05",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-06",
    placeholder: "Has an error",
    type: "text",
    displayError: true
  })));
}).add('Error states', function () {
  return React.createElement("div", null, React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-01",
    label: "Field label",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-02",
    label: "Field label",
    displayError: true,
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-03",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text"
  })), React.createElement("fieldset", null, React.createElement(Input, {
    id: "input-04",
    displayError: true,
    placeholder: "Just a placeholder",
    type: "text"
  })));
});