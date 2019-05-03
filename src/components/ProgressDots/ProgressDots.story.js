import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ProgressDots from './index.js';

const stories = storiesOf('ProgressDots', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', (() => {
  return <ProgressDots testSection="test-progress-dots" />;
}));
