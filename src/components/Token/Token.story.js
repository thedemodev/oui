import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Token from './index.js';
import { action } from '@storybook/addon-actions/dist/preview';

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
      isDismissible={ true }
      name="Hello"
      style="primary"
      hasSnugWrap={ boolean('hasSnugWrap', false) }
    />
    <Token
      name="World"
      style="secondary"
      hasSnugWrap={ boolean('hasSnugWrap', false) }
    />
  </div>)))
  .add('no well', withInfo()(() => (<div>
    <Token
      name="Hello"
      style="primary"
      showWell={ false }
      hasSnugWrap={ boolean('hasSnugWrap', false) }
    />
    <Token
      name="World"
      style="secondary"
      showWell={ false }
      hasSnugWrap={ boolean('hasSnugWrap', false) }
    />
  </div>)))
  .add('draggable', withInfo()(() => {
    return (
      <Token
        description="A popular childhood game."
        isDismissible={ true }
        isDraggable={ true }
        name="Duck Duck Goose"
        order={ 1 }
        style="primary"
      />);
  }))
  .add('dismissible', withInfo()(() => {
    return (
      <Token
        isDismissible={ true }
        name="Delete me!"
        style="primary"
        onDismiss={ action('token dismissed') }
        hasSnugWrap={ boolean('hasSnugWrap', false) }
      />);
  }));
