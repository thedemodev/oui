/* eslint-disable react/jsx-key */
import React from 'react';
import Dropdown from '../index';
export default [{
  examples: [React.createElement(Dropdown, {
    isDisabled: false,
    isOpen: true,
    fullWidth: false,
    buttonContent: "Dropdown"
  }, React.createElement("ul", {
    className: "oui-dropdown width--200",
    style: {
      display: 'block'
    }
  }, React.createElement("li", {
    key: "1",
    className: "oui-dropdown__item"
  }, React.createElement("a", {
    key: "a",
    className: "oui-dropdown__block-link"
  }, "Manage Collaborators"), React.createElement("a", {
    key: "b",
    className: "oui-dropdown__block-link"
  }, "Manage This Thing")), React.createElement("li", {
    key: "2",
    className: "oui-dropdown__item"
  }, React.createElement("a", {
    key: "c",
    className: "oui-dropdown__block-link"
  }, "Experiment Change History"))))]
}];