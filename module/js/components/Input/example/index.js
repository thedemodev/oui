/* eslint-disable react/jsx-key */
import React from 'react';
import Input from '../index';

var mockFunction = function mockFunction() {};

export default [{
  examples: [React.createElement(Input, {
    type: "text",
    placeholder: "This is a placeholder"
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    label: "Test",
    displayError: true,
    placeholder: "This is a placeholder"
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    defaultValue: "isReadOnly Example",
    label: "Test",
    isReadOnly: true
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    placeholder: "Browse by Name",
    isFilter: true
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    defaultValue: "onChange Example",
    onChange: mockFunction
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    defaultValue: "onBlur Example",
    onBlur: mockFunction
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    defaultValue: "onKeyDown Example",
    onKeyDown: mockFunction
  })]
}, {
  examples: [React.createElement(Input, {
    type: "text",
    label: "Label with Optional",
    isOptional: true
  })]
}, {
  examples: [React.createElement(Input, {
    type: "password",
    label: "Password",
    testSection: "input"
  })]
}, {
  examples: [React.createElement(Input, {
    type: "number",
    min: 10,
    max: 50
  })]
}, {
  examples: [React.createElement(Input, {
    type: "number",
    textAlign: "right",
    min: 10,
    max: 50
  })]
}, {
  examples: [React.createElement(Input, {
    type: "date"
  })]
}];