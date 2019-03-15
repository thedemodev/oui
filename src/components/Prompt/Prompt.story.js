import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, array } from '@storybook/addon-knobs';
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
          title={ text('title', 'This is a Prompt') }
          bodyText={ text('bodyText', 'Prompts only contain text in the body, no data input.') }
          footerButtonContent={ array('footerButtonContent', [
            <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
            </Button>,
          ] )}
        />
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
          bodyText={ text('bodyText', 
            'Prompts only contain text in the body, no data input.')
          }
          footerButtonContent={ array('footerButtonContent',[
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
            </Button>,
          ])}
        />
      </div>
    ))
  )
  .add(
    'With a link',
    withInfo()(() => (
      <div>
        <p>This is text behind the prompt that is blocked by the overlay.</p>
        <Prompt
          linkURL={ text('linkURL', 'www.optimizely.com') }
          title={ text('title', 'This is a Prompt') }
          bodyText={ text('bodyText', 'Prompts only contain text in the body, no data input. They can also contain a link for learning more.') }
          footerButtonContent={ array('footerButtonContent', [
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
            </Button>,
          ])}
        />
      </div>
    ))
  );
