import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Radio from './index.js';

const stories = storiesOf('Radio', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', withInfo()(() => {
  return (
    <Radio
      data-test-section="test-radio"
      name='this is a radio'
      label='this is a radio'
    />);
}));

// isDisabled,
// testSection,
// name,
// defaultChecked,
// checked,
// onChange,
// label,
