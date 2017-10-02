import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Checkbox from '../Checkbox';

const stories = storiesOf('Checkbox', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('Checkboxs states', withInfo()(() => {
    return (
      <Checkbox
        defaultChecked={ true }
        label={ text('label', 'checkbox component') }
        isDisabled={ boolean('isDisabled', false) }
      />
    );
  }));
