import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, select } from '@storybook/addon-knobs';
import OverlayWrapper from '../OverlayWrapper';
import Popover from '../Popover';
import Button from '../Button';
var alignOpts = {
  'center': 'center',
  'left': 'left',
  'right': 'right'
};
var verticalAlignOpts = {
  'middle': 'middle',
  'top': 'top',
  'bottom': 'bottom'
};

var ClosePopoverButton = function ClosePopoverButton(props, context) {
  return React.createElement(Button, {
    onClick: context.hideOverlay
  }, "Close Popopver");
};

var stories = storiesOf('OverlayWrapper', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, React.createElement("div", {
    className: "flexboxCenter"
  }, story()));
});
stories.add('Default popover', function () {
  return React.createElement(OverlayWrapper, {
    behavior: "click",
    horizontalAttachment: select('horizontalAttachment', alignOpts, 'center'),
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    shouldHideOnClick: _boolean('shouldHideOnClick', true),
    verticalAttachment: select('verticalAttachment', verticalAlignOpts, 'top')
  }, React.createElement(Button, {
    width: "default"
  }, "Open Popover"));
}).add('Pinned popover', function () {
  return React.createElement(OverlayWrapper, {
    behavior: "click",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "right",
    isConstrainedToScreen: true,
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"), React.createElement(ClosePopoverButton, null)),
    shouldHideOnClick: true,
    verticalAttachment: "middle",
    verticalTargetAttachment: "middle"
  }, React.createElement(Button, {
    width: "default"
  }, "Open Pinned Popover"));
}).add('Open on hover', function () {
  return React.createElement(OverlayWrapper, {
    behavior: "hover",
    horizontalAttachment: select('horizontalAttachment', alignOpts, 'center'),
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    verticalAttachment: select('verticalAttachment', verticalAlignOpts, 'top')
  }, React.createElement(Button, {
    width: "default"
  }, "Open Popover"));
}).add('Trying diff components', function () {
  return React.createElement(OverlayWrapper, {
    behavior: "hover",
    horizontalAttachment: select('horizontalAttachment', alignOpts, 'center'),
    overlay: React.createElement("div", null, "this is a box to try"),
    verticalAttachment: select('verticalAttachment', verticalAlignOpts, 'top')
  }, React.createElement(Button, {
    width: "default"
  }, "Open Popover"));
});