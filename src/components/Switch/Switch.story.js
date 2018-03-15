import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Switch from './index.js';

const stories = storiesOf('Switch', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', withInfo()(() => {
  return <Switch onClick={ action('clicked the switch') }/>;
}));

stories.add('off', withInfo()(() => {
  return <Switch checked={ false } onClick={ action('clicked the switch') }/>;
}));
