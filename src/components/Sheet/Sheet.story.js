import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import noop from 'lodash.noop';

import Sheet from './index.js';
import Button from '../Button';
import Fieldset from '../Fieldset';
import Input from '../Input';

const stories = storiesOf('Sheet', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add(
    'Default Sheet',
    withInfo()(() => (
      <div>
        <p>This is text behind the prompt that is blocked by the overlay.</p>
        <Sheet
          title={ text('title', 'This is a Sheet') }
          hasCloseButton={ boolean('hasCloseButton', true) }
          footerButtonContent={ [
            <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
            </Button>,
          ] }>
          <Fieldset
            title="Project Name"
            description="Give your project a name"
            isOptional={ false }
            helpIcon={ true }
            popoverTitle="Popover title"
            popoverText="This should help you figure out what to do">
            <Input label="Some data" type="text"/>
            <Input label="Some more data" type="text"/>
          </Fieldset>
          <Fieldset
            title="Project Description"
            description="Give your project a description"
            isOptional={ true }
            helpIcon={ true }
            popoverTitle="Popover title"
            popoverText="This should help you figure out what to do">
            <Input label="Some data" type="text"/>
          </Fieldset>
          <Fieldset
            title="Project Details">
            <Input label="Target URL" type="text" isRequired={ true }/>
          </Fieldset>
        </Sheet>
      </div>
    ))
  );
