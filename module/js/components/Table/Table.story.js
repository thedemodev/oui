import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Table from './index.js';
import Button from '../Button';
var stories = storiesOf('Table', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", null, React.createElement(Table, {
    density: select('density', {
      'loose': 'loose',
      'tight': 'tight'
    }, 'tight'),
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, null, " Conversion Rate "), React.createElement(Table.TH, null, " Status "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Header CTA "), React.createElement(Table.TD, {
    width: "20%"
  }, " 12% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Shorter Contact Form "), React.createElement(Table.TD, null, " 4% "), React.createElement(Table.TD, null, " Draft ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Larger search bar "), React.createElement(Table.TD, null, " 6.7% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Center aligned headline "), React.createElement(Table.TD, null, " 9.3% "), React.createElement(Table.TD, null, " Running ")))));
}).add('Custom tr borders', function () {
  return React.createElement("div", null, React.createElement(Table, null, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, null, " Conversion Rate "), React.createElement(Table.TH, null, " Status "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, {
    borderStyle: "ends",
    backgroundColor: "faint"
  }, React.createElement(Table.TD, null, " Header CTA "), React.createElement(Table.TD, null, " 12% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Shorter Contact Form "), React.createElement(Table.TD, null, " 4% "), React.createElement(Table.TD, null, " Draft ")))));
}).add('Loose & rule style', function () {
  return React.createElement("div", null, React.createElement(Table, {
    density: "loose",
    style: "rule",
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, {
    isNumerical: true
  }, " Conversion Rate "), React.createElement(Table.TH, null, " Status "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Header CTA "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 12% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Shorter Contact Form "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 4% "), React.createElement(Table.TD, null, " Draft ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Larger search bar "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 6.7% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Center aligned headline "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 9.3% "), React.createElement(Table.TD, null, " Running ")))));
}).add('Tight & no bottom border', function () {
  return React.createElement("div", null, React.createElement(Table, {
    density: "tight",
    style: "rule-no-bottom-border",
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, "Experiment "), React.createElement(Table.TH, {
    isNumerical: true
  }, " Conversion Rate "), React.createElement(Table.TH, null, " Status "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Header CTA "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 12% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Shorter Contact Form "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 4% "), React.createElement(Table.TD, null, " Draft ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Larger search bar "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 6.7% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Center aligned headline "), React.createElement(Table.TD, {
    isNumerical: true
  }, " 9.3% "), React.createElement(Table.TD, null, " Running ")))));
}).add('Dome', function () {
  return React.createElement("div", null, React.createElement(Table, {
    density: "tight",
    style: "wall",
    tableLayoutAlgorithm: "auto"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, {
    isNumerical: true,
    width: "20%"
  }, "Conversion Rate "), React.createElement(Table.TH, {
    isCollapsed: true
  }, " Status "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, " Header CTA "), React.createElement(Table.TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 12% "), React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, React.createElement(Button, {
    size: "small",
    width: "default"
  }, " Start "))), React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, " Shorter Contact Form "), React.createElement(Table.TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 4% "), React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, React.createElement(Button, {
    size: "small",
    width: "default"
  }, " Start "))), React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, " Larger search bar "), React.createElement(Table.TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 6.7% "), React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, React.createElement(Button, {
    size: "small",
    width: "default"
  }, " Start "))), React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, " Center aligned headline "), React.createElement(Table.TD, {
    isNumerical: true,
    verticalAlign: "middle"
  }, " 9.3% "), React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, React.createElement(Button, {
    size: "small",
    width: "default"
  }, " Start "))))));
});