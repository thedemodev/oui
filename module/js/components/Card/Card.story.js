import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean } from '@storybook/addon-knobs';
import Button from '../Button';
import Card from '../Card';
var stories = storiesOf('Card', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Card, {
    title: text('title', 'Card Title'),
    shadow: _boolean('shadow', false),
    onClose: action('close card'),
    testSection: "card"
  }, text('body', 'Hello! This is a short card example.'));
}).add('Custom Contents', function () {
  return React.createElement(Card, {
    title: text('title', 'Card Title'),
    shadow: _boolean('shadow', false),
    onClose: action('close card'),
    testSection: "card"
  }, React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement("div", {
    className: "flex--1"
  }, React.createElement("div", null, "Complex Contents"), React.createElement("div", {
    className: "muted micro"
  }, "This is a description.")), React.createElement(Button, {
    size: "small",
    style: "outline"
  }, "Inner Button")));
});