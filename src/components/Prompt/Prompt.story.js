import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, array } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import noop from 'lodash.noop';

import Prompt from './index.js';
import Button from '../Button';
import Dialog from '../Dialog/index.js';
import Input from '../Input';

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
          title={ text('title', 'Try Optimizely Rollouts for Free') }
          footerButtonContent={ array('footerButtonContent', [
            <Button style="plain" key={ 0 } onClick={ noop }>
              No Thanks
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Agree
            </Button>,
          ]) }>
          <p>
            <a href="https://www.optimizely.com/rollouts/">Optimizely Rollouts</a> is a safer, faster way to release new features. 
            Implement feature flagging, gradual rollouts, and safe rollbacks in your development process - 
            all with zero latency through our server-side and mobile SDKs.
          </p>
          <p>We’re providing this product completely free, with unlimited usage.
            By proceeding, you agree that your company’s use of Rollouts is governed by
            our online <a href="https://www.optimizely.com/terms/">Terms of Service</a> as a Free Access Subscription.
          </p>
          <p>
            <a href="https://www.optimizely.com/terms/">Privacy Policy</a>
          </p>
        </Prompt>
      </div>
    ))
  )
  .add(
    'With no close button',
    withInfo()(() => (
      <div>
        <p>This is text behind the prompt that is blocked by the overlay.</p>
        <Prompt
          hasCloseButton={ boolean('hasCloseButton', false) }
          title={ text('title', 'This is a Prompt') }
          bodyText={ text(
            'bodyText',
            'Prompts only contain text in the body, no data input.'
          ) }
          footerButtonContent={ array('footerButtonContent', [
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
            </Button>,
          ]) }
        />
      </div>
    ))
  );
