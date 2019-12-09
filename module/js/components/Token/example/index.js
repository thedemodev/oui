/* eslint-disable react/jsx-key */
import React from 'react';
import Token from '../index';

var mockFunction = function mockFunction() {};

export default [{
  examples: [React.createElement(Token, {
    name: "Duck",
    testSection: "token-test"
  }), React.createElement(Token, {
    name: "Duck",
    style: "primary"
  }), React.createElement(Token, {
    name: "Goose",
    style: "primary",
    testSection: "goose",
    isDismissible: true,
    onDismiss: mockFunction
  })]
}, {
  examples: [React.createElement(Token, {
    name: "Duck Duck Goose",
    description: "A popular childhood game.",
    isDismissible: true,
    isDraggable: true,
    style: "primary",
    order: 1,
    onDismiss: mockFunction
  })]
}];