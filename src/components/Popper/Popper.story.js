import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Popper from './index.js';

const stories = storiesOf('Popper', module);

// this add some decorators for making addons available
stories
  .addDecorator(withKnobs);

stories.add('default', withInfo('react <Popper /> component')(() => {
  return (
    <Popper arrow>
      <div style={{ width: 500, height: 500, background: 'pink'}}>
        <div className='icon'>
          this is the target element
        </div>
      </div>
      <div style={{ width: 100, height: 55, background: 'grey' }}>
        this is the popper element
      </div>
    </Popper>
  );
}
));
