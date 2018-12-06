import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import RootNav from './index.js';
import Icon from 'react-oui-icons';

const stories = storiesOf('RootNav', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => (
    <div>
      { /* Insert component here */ }
    </div>
  )));

