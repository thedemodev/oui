/* eslint-disable react/jsx-key */
import React from 'react';
import Sidebar from '../index';
export default [{
  examples: [React.createElement(Sidebar, {
    anchor: "left",
    docked: true,
    isOpen: true,
    width: 300
  }, React.createElement("p", null, "Sidebar content"))]
}];