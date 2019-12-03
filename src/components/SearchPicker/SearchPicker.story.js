import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Dropdown from '../Dropdown';
import SearchPicker from './index.js';
import Spinner from '../Spinner';

import MOCK_DATA from './mock_data';

const stories = storiesOf('SearchPicker', module);
stories.addDecorator(withKnobs).addDecorator(story => (
  <div
    id="root-preview"
    style={{
      display: 'flex',
      flex: 1,
      height: '100vh',
    }}>
    {story()}
  </div>
));

const searchFunction = ({ query, per_page }) => {
  return new Promise(r => setTimeout(r, 500)).then(() => {
    return MOCK_DATA.filter(item => {
      return item.name.includes(query) || item.description.includes(query);
    }).slice(0, per_page);
  });
};

stories.add('Default', () => {
  return (
    <SearchPicker onItemSelected={ action('keyboard selection item') } searchFunction={ searchFunction } type={ ['feature'] }>
      {({
        availableEntities,
        renderInput,
        isLoading,
        searchQuery,
        currentFauxFocusIndex,
        shouldDisplayResults,
        resultsText,
      }) => (
        <Dropdown isOpen={ true } width={ 600 } fullWidth={ true } renderActivator={ renderInput }>
          <Dropdown.Contents minWidth={ 600 } isLoading={ isLoading }>
            <Dropdown.ListItem ignoreToggle={ true }>
              <span className="micro muted soft--sides">{resultsText.summary}</span>
            </Dropdown.ListItem>
            {availableEntities.map((item, index) => (
              <Dropdown.ListItem key={ index }>
                <Dropdown.BlockLink
                  hasFauxFocus={ currentFauxFocusIndex === index }
                  onClick={ action(`click dropdown block link ${item.name}`) }>
                  <Dropdown.BlockLinkText text={ item.name } />
                  <Dropdown.BlockLinkSecondaryText secondaryText={ item.description } />
                </Dropdown.BlockLink>
              </Dropdown.ListItem>
            ))}
            {isLoading && <Spinner hasOverlay={ true } />}
          </Dropdown.Contents>
        </Dropdown>
      )}
    </SearchPicker>
  );
});
