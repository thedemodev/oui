import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean as _boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './index.js';
import Container from '../Layout/Container';
import Row from '../Layout/Row';
import Col from '../Layout/Col';
import { smokeLight } from '../../tokens/forimport/index.es';
var stories = storiesOf('ButtonIcon', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, React.createElement(Container, {
    paddedContent: "around"
  }, story()));
});
stories.add('Default', function () {
  return React.createElement(Row, {
    style: {
      background: "".concat(smokeLight)
    },
    displayVertical: true
  }, React.createElement(Col, {
    small: "auto"
  }, React.createElement(ButtonIcon, {
    iconName: "arrow-left",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('I have been clicked'),
    title: "Previous",
    size: select('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small')
  }), React.createElement("span", {
    className: "push--left"
  }, "Default (no style prop applied)")), React.createElement(Col, {
    small: "auto"
  }, React.createElement(ButtonIcon, {
    iconName: "arrow-right",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('I have been clicked'),
    size: select('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "highlight",
    title: "Next"
  }), React.createElement("span", {
    className: "push--left"
  }, "Highlight")), React.createElement(Col, {
    small: "auto"
  }, React.createElement(ButtonIcon, {
    iconName: "close",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('I have been clicked'),
    size: select('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "outline",
    title: "Close Dialog"
  }), React.createElement("span", {
    className: "push--left"
  }, "Outline")), React.createElement(Col, {
    small: "auto"
  }, React.createElement(ButtonIcon, {
    iconName: "add",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('I have been clicked'),
    size: select('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "danger",
    title: "Add row"
  }), React.createElement("span", {
    className: "push--left"
  }, "Danger")), React.createElement(Col, {
    small: "auto"
  }, React.createElement(ButtonIcon, {
    iconName: "minus",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('I have been clicked'),
    size: select('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "danger-outline",
    title: "delete row"
  }), React.createElement("span", {
    className: "push--left"
  }, "Danger-outline")), React.createElement(Col, {
    small: "auto"
  }, React.createElement(ButtonIcon, {
    iconName: "ellipsis",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('I have been clicked'),
    size: select('size', {
      'small': 'small',
      'medium': 'medium',
      'large': 'large'
    }, 'small'),
    style: "plain",
    title: "More options"
  }), React.createElement("span", {
    className: "push--left"
  }, "Plain")));
});