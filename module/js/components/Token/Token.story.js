import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, select } from '@storybook/addon-knobs';
import Token from './index.js';
import { action } from '@storybook/addon-actions/dist/preview';
var styleOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Error: 'error'
};
var stories = storiesOf('Token', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('default', function () {
  return React.createElement("div", null, React.createElement(Token, {
    isDismissible: true,
    name: "Hello",
    style: select('style', styleOptions, 'primary'),
    hasSnugWrap: _boolean('hasSnugWrap', false)
  }), React.createElement(Token, {
    name: "World",
    style: "secondary",
    hasSnugWrap: _boolean('hasSnugWrap', false)
  }));
}).add('no well', function () {
  return React.createElement("div", null, React.createElement(Token, {
    name: "Hello",
    style: "primary",
    showWell: false,
    hasSnugWrap: _boolean('hasSnugWrap', false)
  }), React.createElement(Token, {
    name: "World",
    style: "secondary",
    showWell: false,
    hasSnugWrap: _boolean('hasSnugWrap', false)
  }));
}).add('draggable', function () {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "push--bottom"
  }, React.createElement(Token, {
    description: "The big kids.",
    isDismissible: true,
    isDraggable: true,
    name: "Students: Grades 6-12",
    onDismiss: action('token dismissed'),
    order: 1,
    style: "primary"
  })), React.createElement("div", {
    className: "push--bottom"
  }, React.createElement(Token, {
    description: "The little kids.",
    isDismissible: true,
    isDraggable: true,
    name: "Students: Grades K-5",
    onDismiss: action('token dismissed'),
    order: 1,
    style: "secondary"
  })), React.createElement("div", {
    className: "push--bottom"
  }, React.createElement(Token, {
    description: "The little little kids.",
    isDismissible: true,
    isDraggable: true,
    name: "Students: TK",
    onDismiss: action('token dismissed'),
    order: 1,
    style: "secondary"
  })));
}).add('dismissible', function () {
  return React.createElement(Token, {
    isDismissible: true,
    name: "Delete me!",
    style: "primary",
    onDismiss: action('token dismissed'),
    hasSnugWrap: _boolean('hasSnugWrap', false)
  });
}).add('full width', function () {
  return React.createElement(Token, {
    hasSnugWrap: _boolean('hasSnugWrap', false),
    isDismissible: _boolean('isDismissible', true),
    isFullWidth: _boolean('isFullWidth', true),
    name: "I'm full width!",
    onDismiss: action('token dismissed'),
    showWell: _boolean('showWell', false),
    style: "primary"
  });
});