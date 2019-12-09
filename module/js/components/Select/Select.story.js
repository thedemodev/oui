import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean } from '@storybook/addon-knobs';
import Select from './index.js';
var stories = storiesOf('Select', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Select, {
    isDisabled: _boolean('isDisabled', false),
    name: "zoo",
    id: "zoo"
  }, React.createElement("option", {
    value: "one"
  }, "This is option one"), React.createElement("option", {
    value: "two"
  }, "And this is option two"));
});