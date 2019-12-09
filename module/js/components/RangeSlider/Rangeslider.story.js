import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, boolean as _boolean } from '@storybook/addon-knobs';
import RangeSlider from './index.js';
import { FILL_COLOR_MAP } from './constants'; // build fillColorName options for a select/dropdown knob

var fillColorOptions = {
  None: ''
};
Object.keys(FILL_COLOR_MAP).forEach(function (color) {
  fillColorOptions[color] = color;
});
var stories = storiesOf('RangeSlider', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(RangeSlider, {
    value: number('value', 50)
  });
}).add('Disabled', function () {
  return React.createElement("div", null, React.createElement("input", {
    type: "text",
    className: "oui-text-input push-double--bottom"
  }), React.createElement(RangeSlider, {
    isDisabled: true,
    value: number('value', 50)
  }), React.createElement("input", {
    type: "text",
    className: "oui-text-input"
  }));
}).add('Custom Fill Color', function () {
  return React.createElement("div", null, React.createElement(RangeSlider, {
    fillColorName: select('fillColorName', fillColorOptions, 'red'),
    value: number('value', 50)
  }));
}).add('Use Off instead of 0%', function () {
  return React.createElement("div", null, React.createElement(RangeSlider, {
    value: number('value', 50),
    useOffForLabel: _boolean('useOffForLabel', true)
  }));
});