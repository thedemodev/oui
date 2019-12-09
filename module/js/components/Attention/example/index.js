/* eslint-disable react/jsx-key */
import React from 'react';
import Attention from '../index';
export default [{
  examples: [React.createElement(Attention, {
    isDismissible: true,
    alignment: "center",
    type: "warning",
    testSection: "attention-foo"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [React.createElement(Attention, {
    alignment: "left",
    type: "bad-news"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [React.createElement(Attention, {
    type: "brand"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [React.createElement(Attention, {
    type: "good-news"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [React.createElement(Attention, {
    type: "warning"
  }, "Hello! This is a short attention bar.")]
}, {
  examples: [React.createElement(Attention, {
    alignment: "center"
  }, "Hello! This is a short attention bar.")]
}];