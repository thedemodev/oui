import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Card from '../Card';

const stories = storiesOf('Card', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      { story() }
    </div>
  ));

stories
  .add('card', () => {
    return (
      <Card
        title='Card Title'
        shadow={ false }
        testSection="card">
        Hello! This is a short card example.
      </Card>
    );
  })
  .add('card states', withInfo()(() => {
    return (
      <Card
        title={ text('title', 'Card Title') }
        shadow={ boolean('onClose', false) }
        testSection="card">
        { text('body', 'Hello! This is a short card example.') }
      </Card>
    );
  }));
