import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import noop from 'lodash.noop';

import Prompt from './index.js';
import Button from '../Button';

const stories = storiesOf('Prompt', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add(
    'Basic Prompt',
    withInfo()(() => (
      <div>
        <p>This is text behind the prompt that is blocked by the overlay.</p>
        <Prompt
          title={ text('title', 'Try Our New Feature') }
          hasCloseButton={ boolean('hasCloseButton', false) }
          footerButtonContent={ [
            <Button style="plain" key={ 0 } onClick={ noop }>
              No Thanks
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Continue
            </Button>,
          ] }>
          <p>Prompts only contain text in the body, no data input.</p>
          <p>They can also contain links, like <a href="www.optimizely.com">learn more about Optimizely features</a>.</p>
        </Prompt>
      </div>
    ))
  );
