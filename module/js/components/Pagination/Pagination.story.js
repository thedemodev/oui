import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import Pagination from './index.js';
var stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Pagination, {
    currentPage: number('currentPage', 1),
    totalPages: number('totalPages', 10),
    onChange: action('page changed')
  });
});