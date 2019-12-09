import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean as _boolean } from '@storybook/addon-knobs';
import PaginationControls from './index.js';
var stories = storiesOf('PaginationControls', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, React.createElement("p", {
    className: "push-quad--bottom"
  }, "Use the ", React.createElement("strong", null, "currentPage"), " knob to see the various states of the PaginationControls."), story());
});
var totalPages = 43;
stories.add('Default', function () {
  return React.createElement(PaginationControls, {
    currentPage: number('currentPage', 1),
    totalPages: number('totalPages', totalPages),
    goToPage: action('page changed')
  });
}).add('Loading', function () {
  return React.createElement(PaginationControls, {
    currentPage: number('currentPage', 1),
    totalPages: number('totalPages', totalPages),
    goToPage: action('page changed'),
    isLoading: _boolean('isLoading', true)
  });
}).add('Customize totalSlots', function () {
  return React.createElement(PaginationControls, {
    currentPage: number('currentPage', 20),
    totalSlots: number('totalSlots ( >= 7)', 11),
    totalPages: number('totalPages', totalPages),
    goToPage: action('page changed')
  });
});