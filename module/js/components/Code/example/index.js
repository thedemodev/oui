/* eslint-disable react/jsx-key, react/jsx-indent */
import React from 'react';
import Code from '../index';
export default [{
  examples: [React.createElement(Code, {
    type: "block"
  }, "var foo = 'bar';\nvar bat = 'baz';")]
}, {
  examples: [React.createElement(Code, {
    type: "block",
    isHighlighted: true,
    language: "javascript"
  }, "var highlightedFoo = 'bar';\nvar highlightedBat = 'baz';")]
}, {
  examples: [React.createElement(Code, {
    type: "block",
    hasCopyButton: true,
    testSection: "code"
  }, "var copyableFoo = 'bar';\nvar copyableBat = 'baz';")]
}, {
  examples: [React.createElement(Code, {
    type: "inline"
  }, 'var foo;')]
}];