/* eslint-disable react/jsx-key */
import React from 'react';
import Checkbox from '../index';

var mockFunction = function mockFunction() {};

export default [{
  examples: [React.createElement(Checkbox, {
    defaultChecked: false,
    label: "onChange Example",
    onChange: mockFunction
  })]
}, {
  examples: [React.createElement("div", null, React.createElement(Checkbox, {
    label: "First Value"
  }), React.createElement(Checkbox, {
    label: "Second Value"
  }), React.createElement(Checkbox, {
    label: "Third Value"
  }))]
}, {
  examples: [React.createElement(Checkbox, {
    defaultChecked: true,
    label: "Checked by default"
  })]
}, {
  examples: [React.createElement(Checkbox, {
    isDisabled: true,
    defaultChecked: true,
    label: "Disabled checkbox"
  })]
}];