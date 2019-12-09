/* eslint-disable react/jsx-key */
import React from 'react';
import TextField from '../index';
export default [{
  examples: [React.createElement(TextField, {
    label: "Field label",
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text",
    isOptional: true
  })]
}, {
  examples: [React.createElement(TextField, {
    label: "Field label with error",
    displayError: true,
    note: "A short description or note about this field.",
    placeholder: "Just a placeholder",
    type: "text",
    isRequired: true
  })]
}];