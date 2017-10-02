import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ArrowsInline from '../ArrowsInline';

const stories = storiesOf('ArrowsInline', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('select the arrow', withInfo()(() => {
    return (
      <ArrowsInline
        direction={ select('direction', { up: 'up', down: 'down', left: 'left', right: 'right' }, 'up') }
        testSection="arrow-test"
      />
    );
  }));
