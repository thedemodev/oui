import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ButtonRow from './index.js';
import Button from '../Button';
var stories = storiesOf('ButtonRow', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Button row skip step', function () {
  return React.createElement("div", null, React.createElement(ButtonRow, {
    leftGroup: [React.createElement(Button, {
      key: "1",
      style: "plain",
      width: "default"
    }, "Skip this step")],
    rightGroup: [React.createElement(Button, {
      key: "1",
      style: "plain",
      width: "default"
    }, "Plain Button"), React.createElement(Button, {
      key: "2",
      style: "highlight",
      width: "default"
    }, "Highlight Button")]
  }));
}).add('Buttons centered', function () {
  return React.createElement("div", null, React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      style: "outline",
      width: "default"
    }, "Center Button"), React.createElement(Button, {
      key: "2",
      style: "highlight",
      width: "default"
    }, "Center Button")]
  }));
}).add('Buttons fullwidth', function () {
  return React.createElement("div", null, React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      style: "outline",
      width: "full"
    }, "Full Width"), React.createElement(Button, {
      key: "2",
      style: "outline",
      width: "full"
    }, "Full Width"), React.createElement(Button, {
      key: "3",
      style: "highlight",
      width: "full"
    }, "Full Width")]
  }));
});