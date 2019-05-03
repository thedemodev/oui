import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Checkbox from '../Checkbox';

const stories = storiesOf('Checkbox', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('with string label', (() => {
    return (
      <Checkbox
        defaultChecked={ true }
        label={ text('label', 'checkbox component') }
        isDisabled={ boolean('isDisabled', false) }
      />
    );
  }))
  .add('with html label', (() => {
    return (
      <Checkbox
        defaultChecked={ true }
        label={
          <div>
            <strong>Label</strong>
            <br />
            <span>Description text</span>
          </div>
        }
        isDisabled={ boolean('isDisabled', false) }
      />
    );
  }))
  .add('with labelWeight', (() => {
    return (
      <Checkbox
        defaultChecked={ true }
        label={ text('label', 'checkbox component') }
        labelWeight={ select('labelWeight', ['light', 'normal', 'bold'], 'bold') }
        isDisabled={ boolean('isDisabled', false) }
      />
    );
  }));
