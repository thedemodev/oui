/* eslint-disable react/jsx-key */
import React from 'react';
import Badge from '../index';
export default [{
  examples: [React.createElement(Badge, {
    color: "default"
  }, "Default"), React.createElement(Badge, {
    color: "draft"
  }, "Draft"), React.createElement(Badge, {
    color: "live"
  }, "Live"), React.createElement(Badge, {
    color: "primary"
  }, "Primary"), React.createElement(Badge, {
    color: "plain"
  }, "Plain"), React.createElement(Badge, {
    color: "bad-news"
  }, "Bad News")]
}, {
  examples: [React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement(Badge, {
    color: "draft"
  }, "1"), " Unpublished Change")]
}, {
  examples: [React.createElement("div", null, React.createElement(Badge, {
    color: "draft"
  }, "1"), React.createElement(Badge, {
    color: "live"
  }, "3"))]
}];