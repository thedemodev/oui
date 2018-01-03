import React from 'react';
import icons from './icons.json';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';


const stories = storiesOf('Plain Popper', module);

// this add some decorators for making addons available
stories
  .addDecorator(withKnobs);

stories.add('icon docs', withInfo('react <Icon /> component')(() => {
  return (
    <div>hola popper</div>
  );
}
));
