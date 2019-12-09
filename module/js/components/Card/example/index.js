/* eslint-disable react/jsx-key */
import React from 'react';
import Card from '../index';

var someMethod = function someMethod() {};

export default [{
  examples: [React.createElement(Card, {
    title: "Title"
  }, "Hello World")]
}, {
  examples: [React.createElement(Card, {
    title: "Title",
    onClose: someMethod,
    testSection: "data-track-card-close"
  }, "Hello World with closer element")]
}, {
  examples: [React.createElement(Card, {
    title: "Title"
  }, "Blank card")]
}, {
  examples: [React.createElement(Card, {
    title: "Title",
    shadow: true
  }, "Shadow")]
}];