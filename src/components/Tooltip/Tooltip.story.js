import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Tooltip from './index.js';

const stories = storiesOf('Tooltip', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => (<div>
    <h3>
      I am an H3 with a tooltip next to it!
      <Tooltip title="Help" description="This is some help text to explain the thing next to whose question mark icon you are hovering over." />
    </h3>
  </div>)))
  .add('nondefault', withInfo()(() => (<div>
    <h3>
      I am an H3 with a tooltip next to it <br />but with a differently positioned anchor arrow!
      <Tooltip
        title="Help"
        description="This is some help text to explain the thing next to whose question mark icon you are hovering over."
        horizontalAttachment={ 'center' }
        verticalAttachment={ 'top' }
      />
    </h3>
  </div>)))
  .add('clickable poptip', withInfo()(() => (<div>
    <h3>
      Click my tip
      <Tooltip
        title="Help"
        behavior="click"
        description="You clicked."
      />
    </h3>
  </div>)));
