/* eslint-disable react/jsx-key */
import React from 'react';
import Radio from '../index';

var mockFunction = function mockFunction() {};

export default [{
  examples: [React.createElement(Radio, {
    defaultChecked: false,
    label: "onChange Example",
    name: "example-1",
    onChange: mockFunction
  })]
}, {
  examples: [React.createElement("div", null, React.createElement(Radio, {
    label: "First Value",
    name: "multi-example"
  }), React.createElement(Radio, {
    label: "Second Value",
    name: "multi-example"
  }), React.createElement(Radio, {
    label: "Third Value",
    name: "multi-example"
  }))]
}, {
  examples: [React.createElement(Radio, {
    defaultChecked: true,
    label: "Checked by default",
    name: "example-3"
  })]
}, {
  examples: [React.createElement(Radio, {
    isDisabled: true,
    defaultChecked: true,
    label: "Disabled checkbox",
    name: "example-4"
  })]
}];