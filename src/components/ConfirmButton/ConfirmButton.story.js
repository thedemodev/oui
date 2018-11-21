import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ConfirmButton from './index.js';

const styleOptions = {
  highlight: 'highlight',
  danger: 'danger',
  'danger-outline': 'danger-outline',
  outline: 'outline',
  'outline-reverse': 'outline-reverse',
  plain: 'plain',
  toggle: 'toggle',
  underline: 'underline',
  unstyled: 'unstyled',
};

const stories = storiesOf('ConfirmButton', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => {
    return (
      <ConfirmButton
        disableCancel={ boolean('disableCancel', false) }
        disableConfirm={ boolean('disableConfirm', false) }
        cancelStyle={ select('cancelStyle', styleOptions, 'plain') }
        cancelText={ text('cancelText', 'Cancel') }
        confirmStyle={ select('confirmStyle', styleOptions, 'highlight') }
        confirmText={ text('confirmText', 'Save') }
        onCancel={ action('cancel') }
        onConfirm={ action('confirm') }
      />
    );
  }));

