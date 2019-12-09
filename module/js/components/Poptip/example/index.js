/* eslint-disable react/jsx-key */
import React from 'react';
import Poptip from '../index';
import Button from '../../Button';
import Icon from 'react-oui-icons';
export default [{
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(Poptip, {
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
  }, React.createElement(Button, null, "Basic Poptip")))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, "Learn More\u2026\xA0", React.createElement(Poptip, {
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "right",
    verticalAttachment: "middle",
    verticalTargetAttachment: "middle"
  }, React.createElement(Button, {
    style: "unstyled"
  }, React.createElement(Icon, {
    name: "help"
  }))))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(Poptip, {
    content: "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, React.createElement(Button, null, "Poptip With Advanced Positioning")))]
}];