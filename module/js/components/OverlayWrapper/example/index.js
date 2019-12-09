/* eslint-disable react/jsx-key */
import React from 'react';
import OverlayWrapper from '../index';
import Button from '../../Button/';
import Popover from '../../Popover/';
export default [{
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(OverlayWrapper, {
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"))
  }, React.createElement(Button, null, "Open Popover")))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(OverlayWrapper, {
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    horizontalAttachment: "left",
    horizontalTargetAttachment: "right",
    verticalAttachment: "middle",
    verticalTargetAttachment: "middle",
    isConstrainedToScreen: true
  }, React.createElement(Button, null, "Open Pinned Popover")))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(OverlayWrapper, {
    overlay: React.createElement(Popover, null, React.createElement("p", null, "The close button works because `OverlayWrapper` exposes a `hideOverlay` method using `context` in React."), React.createElement("p", null, "See the source for `OverlayWrapper` to learn more."))
  }, React.createElement(Button, null, "Popover With A Close Button")))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(OverlayWrapper, {
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, React.createElement(Button, null, "Open Popover")))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(OverlayWrapper, {
    overlay: React.createElement(Popover, {
      title: "Lorem ipsum dolor sit amet"
    }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")),
    shouldHideOnClick: false
  }, React.createElement(Button, null, "Don't Close On Click Outside Popover")))]
}];