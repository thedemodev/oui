import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Icon from 'react-oui-icons';
import Autocomplete from './index.js';
import Input from '../Input';

const cityData = [
  { name: 'austin', population: '950,000' },
  { name: 'atlanta', population: '470,000' },
  { name: 'chicago', population: '2.7 million' },
  { name: 'boston', population: '670,000' },
  { name: 'denver', population: '690,000' },
  { name: 'detroit', population: '670,000' },
  { name: 'san jose', population: '1 million' },
  { name: 'san antonio', population: '1.5 million' },
  { name: 'san francisco', population: '880,000' },
  { name: 'st louis', population: '310,000' },
  { name: 'new haven', population: '130,000' },
  { name: 'new orleans', population: '390,000' },
  { name: 'new york', population: '8.5 million' },
  { name: 'miami', population: '450,00' },
  { name: 'philadelphia', population: '1.6 million' },
  { name: 'phoenix', population: '1.6 million' },
  { name: 'jacksonville', population: '880,000' },
];

const filterByCityName = (suggestion) => suggestion.name.toLowerCase();

const SearchInput = (props) => {
  return (
    <div className='flex flex-align--center'>
      <div className='push-half--right'>
        <Icon name='search' />
      </div>
      <Input { ...props } />
    </div>
  );
};

const stories = storiesOf('Autocomplete', module);
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
      <Autocomplete
        InputField={ SearchInput }
        debounce={ 300 }
        filterBy={ filterByCityName }
        focus={ true }
        onChange={ action('suggestions changed') }
        placeholder='Search by city...'
        suggestions={ cityData }
      />
    );
  }));
