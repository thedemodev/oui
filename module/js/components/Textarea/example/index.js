/* eslint-disable react/jsx-key */
import React from 'react';
import Textarea from '../index';

var mockFunction = function mockFunction() {};

export default [{
  examples: [React.createElement(Textarea, {
    placeholder: "Enter a comment\u2026"
  })]
}, {
  examples: [React.createElement(Textarea, {
    isDisabled: true,
    defaultValue: "This textarea is disabled."
  })]
}, {
  examples: [
  /* eslint-disable no-console */
  React.createElement(Textarea, {
    defaultValue: "This textarea has many event listeners.",
    onBlur: mockFunction,
    onChange: mockFunction,
    onFocus: mockFunction,
    onInput: mockFunction,
    onKeyDown: mockFunction
  })]
}, {
  examples: [React.createElement(Textarea, {
    focus: true,
    placeholder: "This text area is auto focused."
  })]
}];