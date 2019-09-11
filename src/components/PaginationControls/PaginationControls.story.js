import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import PaginationControls from './index.js';

const stories = storiesOf('PaginationControls', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <p className="push-quad--bottom">
        Use the <strong>currentPage</strong> knob to see the various states of the PaginationControls.
      </p>
      {story()}
    </div>
  ));

const totalPages = 43;

stories
  .add('Default', (() => {
    return (
      <PaginationControls
        currentPage={ number('currentPage', 1) }
        totalPages={ number('totalPages', totalPages) }
        goToPage={ action('page changed') }
      />
    );
  }))
  .add('Loading', (() => {
    return (
      <PaginationControls
        currentPage={ number('currentPage', 1) }
        totalPages={ number('totalPages', totalPages) }
        goToPage={ action('page changed') }
        isLoading={ boolean('isLoading', true) }
      />
    );
  }))
  .add('Customize totalSlots', (() => {
    return (
      <PaginationControls
        currentPage={ number('currentPage', 20) }
        totalSlots={ number('totalSlots ( >= 7)', 11) }
        totalPages={ number('totalPages', totalPages) }
        goToPage={ action('page changed') }
      />
    );
  }));


