function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SelectDropdown from './index.js';
var stories = storiesOf('SelectDropdown', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
var items = [{
  label: 'Cat',
  description: 'A small feline.',
  value: 'cat'
}, {
  label: 'Dog',
  value: 'dog'
}, {
  label: 'Dog with a really long name',
  value: 'dog-long'
}, {
  label: 'Bear',
  description: 'Likes honey',
  value: 'bear'
}, {
  label: 'Squirrel',
  description: 'Smarter than it looks',
  value: 'squirrel'
}];
stories.add('Default', function () {
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    value: 'dog',
    onChange: action('SelectDropdown value changed')
  }));
}).add('Initial placeholder', function () {
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    initialPlaceholder: "Select a value...",
    onChange: action('SelectDropdown value changed')
  }));
}).add('Width of activator', function () {
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    value: 'dog',
    onChange: action('SelectDropdown value changed'),
    width: '400px '
  }));
}).add('Full Width Activator', function () {
  return React.createElement(Container, null, React.createElement("div", {
    style: {
      'width': '400px',
      'border': '1px solid',
      'height': '100px'
    }
  }, React.createElement(SelectDropdown, {
    items: items,
    value: 'dog',
    onChange: action('SelectDropdown value changed'),
    fullWidth: true
  })));
}).add('Specify max width of activator', function () {
  return React.createElement("div", null, React.createElement("p", {
    className: "push--bottom"
  }, "Specifying the ", React.createElement("code", null, "maxWidth"), " property allows you to truncate longer dropdowns while keeping shorter ones short."), React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    value: 'dog-long',
    onChange: action('SelectDropdown value changed'),
    maxWidth: '120px '
  }), React.createElement("div", {
    className: "push--left"
  }), React.createElement(SelectDropdown, {
    items: items,
    value: 'dog',
    onChange: action('SelectDropdown value changed'),
    maxWidth: '120px '
  })));
}).add('Display Error', function () {
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    displayError: true,
    value: 'bear',
    onChange: action('SelectDropdown value changed')
  }));
}).add('Width of dropdown', function () {
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    value: 'dog',
    onChange: action('SelectDropdown value changed'),
    minDropdownWidth: '400px '
  }));
}).add('Disabled', function () {
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: items,
    value: 'dog',
    minDropdownWidth: '400px ',
    isDisabled: _boolean('isDisabled', true),
    onChange: action('SelectDropdown value changed')
  }));
}).add('ActivatorLabel', function () {
  var itemsWithActivatorLabel = [{
    activatorLabel: 'Production',
    label: 'Production (50%)',
    value: 'Production'
  }, {
    activatorLabel: 'Staging',
    label: 'Staging (100%)',
    value: 'Staging'
  }];
  return React.createElement(Container, null, React.createElement(SelectDropdown, {
    items: itemsWithActivatorLabel,
    value: "Production",
    onChange: action('SelectDropdown value changed')
  }));
});
var Container = styled.div(_templateObject());