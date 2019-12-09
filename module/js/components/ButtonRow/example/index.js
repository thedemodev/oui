/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../../Button';
import ButtonRow from '../../ButtonRow';
export default [{
  examples: [React.createElement(ButtonRow, {
    leftGroup: [React.createElement(Button, {
      key: "1",
      style: "plain"
    }, "Skip this step")],
    rightGroup: [React.createElement(Button, {
      key: "1",
      style: "plain"
    }, "Plain Button"), React.createElement(Button, {
      key: "2",
      style: "highlight"
    }, "Highlight Button")]
  })]
}, {
  examples: [React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      style: "outline"
    }, "Center Button"), React.createElement(Button, {
      key: "2",
      style: "highlight"
    }, "Center Button")]
  })]
}, {
  examples: [React.createElement(ButtonRow, {
    centerGroup: [React.createElement(Button, {
      key: "1",
      style: "outline",
      width: "full"
    }, "Full Width"), React.createElement(Button, {
      key: "2",
      style: "outline",
      width: "full"
    }, "Full Width"), React.createElement(Button, {
      key: "3",
      style: "highlight",
      width: "full"
    }, "Full Width")]
  })]
}];