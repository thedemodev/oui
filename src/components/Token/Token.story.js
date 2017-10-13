import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Token from './index.js';

const stories = storiesOf('Token', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => (<div>
    <Token
      name="Duck"
      style="secondary"
      testSection="token-test"
    />
    <Token
      name="Duck"
      style="primary"
    />
    <Token
      isDismissible={ true }
      name="Goose"
      style="primary"
      testSection="goose"
    />
  </div>)))
  .add('draggable', () => {
    return (
      <Token
        description="A popular childhood game."
        isDismissible={ true }
        isDraggable={ true }
        name="Duck Duck Goose"
        order={ 1 }
        style="primary"
      />);
  });
