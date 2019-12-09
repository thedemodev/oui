function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Steps from './index.js';
var stories = storiesOf('Steps', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
var items = [{
  label: 'Cat',
  value: 'cat'
}, {
  label: 'Dog',
  value: 'dog'
}, {
  label: 'Bear',
  value: 'bear'
}, {
  label: 'Squirrel',
  value: 'squirrel'
}];
stories.add('Default', function () {
  return React.createElement(Container, null, React.createElement(Steps, {
    items: items,
    currentStep: 'bear',
    onClick: action('Stage clicked')
  }));
}).add('User cannot edit', function () {
  return React.createElement(Container, null, React.createElement(Steps, {
    items: items,
    currentStep: 'bear',
    onClick: action('Stage clicked'),
    userCanEdit: false
  }));
});
var Container = styled.div(_templateObject());