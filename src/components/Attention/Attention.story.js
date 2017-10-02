import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Attention from '../Attention';

const typeOptions = {
  'bad-news': 'bad-news',
  'brand': 'brand',
  'good-news': 'good-news',
  'warning': 'warning',
};

const stories = storiesOf('Attention', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('attentions states', withInfo()(() => {
    return (
      <Attention
        alignment={ select('alignment', { center: 'center', left: 'left' }, 'center') }
        isDismissible={ boolean('isDismissible', false) }
        testSection="attention-foo"
        type={ select('type', typeOptions, 'warning') } >
        {text('content', 'Hello! This is a short attention bar.')}
      </Attention>
    );
  }));
