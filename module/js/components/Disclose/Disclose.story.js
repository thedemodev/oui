import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Disclose from './index.js';
import Checkbox from '../Checkbox';
var stories = storiesOf('Disclose', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Disclose, {
    title: "default title"
  }, React.createElement("h3", null, "Some Title"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."));
});
stories.add('Multiple stacked', function () {
  return React.createElement("div", null, React.createElement(Disclose, {
    headerStyle: "header-bordered",
    title: "Some Title",
    childrenStyle: "border"
  }, React.createElement("div", {
    className: "soft--left"
  }, React.createElement("h3", null, "Some Title"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))), React.createElement(Disclose, {
    headerStyle: "header-bordered",
    title: "Some Title"
  }, React.createElement("div", {
    className: "soft--left"
  }, React.createElement("h3", null, "Some Title"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))));
});
stories.add('Header style', function () {
  return React.createElement("div", null, React.createElement(Disclose, {
    headerStyle: "header",
    title: "Browsers"
  }, React.createElement("div", {
    className: "soft--left"
  }, React.createElement("a", null, "Safari")), React.createElement("div", {
    className: "soft--left"
  }, React.createElement("a", null, "Chrome")), React.createElement("div", {
    className: "soft--left"
  }, React.createElement("a", null, "Opera")), React.createElement("div", {
    className: "soft--left"
  }, React.createElement("a", null, "IE"))), React.createElement(Disclose, {
    headerStyle: "header",
    title: "Some Title",
    childrenStyle: "border"
  }, React.createElement("div", {
    className: "soft--left"
  }, React.createElement("h3", null, "Some Title"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."))));
});
stories.add('With divider', function () {
  return React.createElement("div", null, React.createElement(Disclose, {
    childrenStyle: "divider",
    title: "Some Title"
  }, React.createElement("h3", null, "Some Title"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")), React.createElement(Disclose, {
    childrenStyle: "divider",
    title: "Some Title"
  }, React.createElement("h3", null, "Some Title"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")));
});
stories.add('With ul', function () {
  return React.createElement("div", null, React.createElement(Disclose, {
    childrenStyle: "divider",
    title: "Some Title"
  }, React.createElement("ul", {
    className: "push-half oui-input-list"
  }, React.createElement("li", null, React.createElement(Checkbox, {
    label: "When triggered, deactivate if conditions are not met",
    testSection: "configure-view-smart-deactivation_enabled"
  })), React.createElement("li", {
    className: "push-double--left"
  }, React.createElement(Checkbox, {
    label: "Undo changes when page activates",
    testSection: "configure-view-smart-undo_on_deactivation"
  }), React.createElement("div", {
    className: "push-triple--left muted"
  }, "Undoing changes during page activation allows your single page app to dynamically apply and remove changes. Learn more about when to use this, and why this might be useful.")))));
});