import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import noop from 'lodash.noop';

import Dialog from './index.js';
import Fieldset from '../Fieldset';
import Button from '../Button';
import Input from '../Input';

const stories = storiesOf('Dialog', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add(
    'Default Dialog',
    withInfo()(() => (
      <div>
        <div>
          {' '}
          <p>This is text behind the dialog that is blocked by the overlay.</p>
        </div>
        <Dialog
          title={ text('title', 'This is a  Dialog') }
          subtitle={ text('subtitle', 'This is a subtitle') }
          hasCloseButton={ boolean('hasCloseButton', true) }
          footerButtonContent={ [
            <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Save
            </Button>,
          ] }>
          <Fieldset
            title="Project Settings"
            description="Some quick setup"
            helpIcon={ true }
            popoverTitle="Popover title"
            popoverText="This should help you figure out what to do">
            <Input label="Verify Email" type="email"/>
            <Input label="Confirm Email" type="email"/>
          </Fieldset>
        </Dialog>
      </div>
    ))
  );
