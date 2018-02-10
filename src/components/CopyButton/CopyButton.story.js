import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import CopyButton from '../CopyButton';

const code = `const CopyButton = ({ testSection, onClick, text }) => {
  return (
    <CopyToClipboard
      text={ text }
      onCopy={ onClick }>
      <Button
        style="plain"
        ariaLabel="Copy code snippet"
        testSection={ testSection }>
        <Icon name='clipboard' />
      </Button>
    </CopyToClipboard>
  );
}`

const stories = storiesOf('CopyButton', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => {
    return (
      <CopyButton text={ code } />
    );
  }));
