import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import HelpPopover from './index.js';
var stories = storiesOf('HelpPopover', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(HelpPopover, {
    popoverTitle: "This is a popover title"
  }, "This is a popover description. \uD83E\uDD13");
}).add('Hover', function () {
  return React.createElement("div", null, React.createElement("div", {
    className: "position--relative height--100 text--center"
  }, React.createElement(HelpPopover, {
    popoverTitle: "This is a popover title",
    behavior: "hover",
    horizontalAttachment: "left",
    verticalAttachment: "middle"
  }, "You hovered! \uD83E\uDD13")));
});