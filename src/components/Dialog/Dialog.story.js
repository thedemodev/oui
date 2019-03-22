import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
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
          <p>You shouldn't see this text behind the dialog.</p>
        </div>
        <Dialog
          title="This is a  Dialog"
          subtitle="This is a subtitle"
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
            isOptional={ true }
            helpIcon={ true }
            popoverTitle="Popover title"
            popoverText="This should help you figure out what to do">
            <Input label="Verify Email" />
            <Input label="Confirm Email" />
          </Fieldset>
        </Dialog>
      </div>
    ))
  );
