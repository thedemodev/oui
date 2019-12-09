/* eslint-disable react/jsx-key */
import React from 'react';
import Label from '../index';
export default [{
  examples: [React.createElement(Label, null, "I'm a Label")]
}, {
  examples: [React.createElement(Label, {
    isRequired: true
  }, "I'm a Required Label")]
}, {
  examples: [React.createElement(Label, {
    isOptional: true
  }, "I'm an Optional Label")]
}, {
  examples: [React.createElement(Label, null, React.createElement("div", null, "When I have nodes,"), React.createElement("div", null, "I'm unstyled"))]
}];