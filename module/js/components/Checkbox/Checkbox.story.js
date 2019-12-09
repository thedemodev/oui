import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean as _boolean } from '@storybook/addon-knobs';
import Checkbox from '../Checkbox';
var stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('With string label', function () {
  return React.createElement(Checkbox, {
    defaultChecked: true,
    label: text('label', 'checkbox component'),
    isDisabled: _boolean('isDisabled', false)
  });
}).add('With html label', function () {
  return React.createElement(Checkbox, {
    defaultChecked: true,
    label: React.createElement("div", null, React.createElement("strong", null, "Label"), React.createElement("br", null), React.createElement("span", null, "Description text")),
    isDisabled: _boolean('isDisabled', false)
  });
}).add('With labelWeight', function () {
  return React.createElement(Checkbox, {
    defaultChecked: true,
    label: text('label', 'checkbox component'),
    labelWeight: select('labelWeight', ['light', 'normal', 'bold'], 'bold'),
    isDisabled: _boolean('isDisabled', false)
  });
});