import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Rangeslider from './index.js';

const stories = storiesOf('Rangeslider', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', withInfo()(() => {
  return (
    <div>
      <input type="text" className="oui-text-input push-double--bottom" />
      <Rangeslider
        value={ number('value', 50) }
      />
      <input type="text" className="oui-text-input" />
    </div>
  );
}));
