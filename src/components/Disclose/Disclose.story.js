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
    <Disclose title='default title'>
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
      <Disclose headerStyle='header-bordered' title='Some Title' childrenStyle='border'>
        <div className='soft--left'>
          <h3>Some Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
          expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
          accusantium corporis, beatae maxime quasi. Tempora.</p>
        </div>
      </Disclose>
      <Disclose headerStyle='header-bordered' title='Some Title'>
        <div className='soft--left'>
          <h3>Some Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
          expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
          accusantium corporis, beatae maxime quasi. Tempora.</p>
        </div>
      </Disclose>
    </div>
  );
}));

stories.add('header style', withInfo()(() => {
  return (
    <div>
      <Disclose headerStyle='header' title='Browsers'>
        <div className='soft--left'><a>Safari</a></div>
        <div className='soft--left'><a>Chrome</a></div>
        <div className='soft--left'><a>Opera</a></div>
        <div className='soft--left'><a>IE</a></div>
      </Disclose>
      <Disclose headerStyle='header' title='Some Title' childrenStyle='border'>
        <div className='soft--left'>
          <h3>Some Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
          expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
          accusantium corporis, beatae maxime quasi. Tempora.</p>
        </div>
      </Disclose>
    </div>
  );
}));

stories.add('with divider', withInfo()(() => {
  return (
    <div>
      <Disclose childrenStyle='divider' title='Some Title'>
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </Disclose>
      <Disclose childrenStyle='divider' title='Some Title'>
        <h3>Some Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </Disclose>
    </div>
  );
}));

