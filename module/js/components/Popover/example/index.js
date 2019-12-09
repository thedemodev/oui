/* eslint-disable react/jsx-key */
import React from 'react';
import Popover from '../index';
import Button from '../../Button/';
import OverlayWrapper from '../../OverlayWrapper/';
export default [{
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(Popover, {
    title: "Lorem ipsum dolor sit amet"
  }, React.createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!")))]
}, {
  examples: [React.createElement("div", {
    className: "position--relative height--100"
  }, React.createElement(OverlayWrapper, {
    overlay: React.createElement(Popover, {
      title: "This is a working Popover!"
    }, React.createElement("p", null, "See `OverlayWrapper` for more examples."))
  }, React.createElement(Button, null, "Open Popover")))]
}];