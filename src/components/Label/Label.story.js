import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Label from './index.js';

const stories = storiesOf('Label', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default label', withInfo()(() => <div>
    <Label
      isRequired={ boolean('isRequired', false) }
      isOptional={ boolean('isOptional', false) }>I'm a Label</Label>
  </div>));

