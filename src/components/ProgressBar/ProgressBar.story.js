import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ProgressBar from '../ProgressBar';

const stories = storiesOf('ProgressBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('Progress with knobs', withInfo()(() => {
    return (
      <ProgressBar
        displayError={ boolean('displayError', false) }
        max={ number('max', 100) }
        min={ number('min', 0) }
        progress={ number('progress', 60) }
        topLabel={ text('topLabel', 'hola esto es un label') }
        leftLabel={ text('leftLabel', 'Allocated traffic') }
        rightLabel={ text('rightLabel', 'Available traffic') }
      />);
  }))
  .add('Progress bad news', withInfo()(() => {
    return (
      <ProgressBar
        max={ number('max', 100) }
        min={ number('min', 0) }
        displayError={ true }
        progress={ number('progress', 60) }
        topLabel={ text('topLabel', 'hola esto es un label') }
        leftLabel={ text('leftLabel', 'Allocated traffic') }
        rightLabel={ text('rightLabel', 'Available traffic') }
      />);
  }));
