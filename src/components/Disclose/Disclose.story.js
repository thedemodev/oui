import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Disclose from './index.js';

const stories = storiesOf('Disclose', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', withInfo()(() => {
  return (
    <Disclose>
      <h3>Some Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
      expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
      accusantium corporis, beatae maxime quasi. Tempora.</p>
    </Disclose>
  );
}));

stories.add('multiple stacked', withInfo()(() => {
  return (
    <div>
      <Disclose style='all'>
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </Disclose>
      <Disclose style='all'>
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </Disclose>
    </div>
  );
}));

stories.add('with divider', withInfo()(() => {
  return (
    <div>
      <Disclose style='divider'>
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </Disclose>
      <Disclose style='divider'>
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </Disclose>
    </div>
  );
}));

