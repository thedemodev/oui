import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

import Dropdown from '../Dropdown';
import SearchPicker from './index.js';
import Spinner from '../Spinner';

import MOCK_DATA from './mock_data';

const stories = storiesOf('SearchPicker', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

const searchFunction = ({ query, per_page }) => {
  return new Promise(r => setTimeout(r, 500))
    .then(() => {
      return MOCK_DATA.filter(item => {
        return item.name.includes(query) || item.description.includes(query);
      })
      .slice(0, per_page);
    });
}

const onItemSelected = (item) => {
  action(`keyboard selection item ${item.id}`)
}

stories.add('Default', (() => {
  return (
    <SearchPicker
      onItemSelected={ onItemSelected }
      searchFunction={ searchFunction }
      type={['feature']}>
      {
        ({
          availableEntities,
          renderInput,
          isLoading,
          searchQuery,
          currentFauxFocusIndex,
          shouldDisplayResults,
          shouldDisplayCreate,
          resultsText,
        }) => (
          <Dropdown
            isOpen={ true }
            width={ 600 }
            activator={ <div> { renderInput() } </div> }>
            <Dropdown.Contents>
              <Dropdown.ListItem>
                <span className="micro muted soft--sides">{ resultsText.summary }</span>
              </Dropdown.ListItem>
              {
                availableEntities.map((item, index) => (
                  <Dropdown.ListItem hasFauxFocus={ currentFauxFocusIndex === index }>
                    <Dropdown.BlockLink onClick={ action(`click dropdown block link ${item.name}`) }>
                      <Dropdown.BlockLinkText text={ item.name } />
                      <Dropdown.BlockLinkSecondaryText secondaryText={ item.description } />
                    </Dropdown.BlockLink>
                  </Dropdown.ListItem>
                ))
              }
              { isLoading && <Spinner hasOverlay={ true } /> }
            </Dropdown.Contents>
          </Dropdown>
        )
      }
    </SearchPicker>
  );
}));
