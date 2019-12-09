import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Popover from './index.js';
import OverlayWrapper from '../OverlayWrapper';
import Button from '../Button';
var stories = storiesOf('Popover', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", null, React.createElement("div", {
    className: "position--relative height--100 text--center"
  }, React.createElement(Popover, {
    title: "Lorem ipsum dolor sit amet"
  }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"))));
}).add('Popover in action', function () {
  return React.createElement("div", {
    className: "position--relative height--100 text--center"
  }, React.createElement(OverlayWrapper, {
    behavior: "click",
    horizontalAttachment: "center",
    overlay: React.createElement(Popover, {
      title: "This is a working Popover!"
    }, React.createElement("p", null, "See `OverlayWrapper` for more examples.")),
    shouldHideOnClick: true,
    verticalAttachment: "top"
  }, React.createElement(Button, {
    width: "default"
  }, " Open Popover ")));
});