import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';
import noop from 'lodash.noop';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Attention from '../src/components/Attention';
import Badge from '../src/components/Badge';
import Dropdown from '../src/components/Dropdown';
import HelpPopover from '../src/components/HelpPopover';
import BlockList from '../src/components/BlockList';
import Button from '../src/components/Button';
import ButtonIcon from '../src/components/ButtonIcon';
import EmptyDashboard from '../src/components/EmptyDashboard';
import Input from '../src/components/Input';
import Textarea from '../src/components/Textarea';
import TokensInput from '../src/components/TokensInput';
import Link from '../src/components/Link';
import ProgressBar from '../src/components/ProgressBar';
import ProgressDots from '../src/components/ProgressDots';
import RangeSlider from '../src/components/RangeSlider';
import SelectDropdown from '../src/components/SelectDropdown';
import Spinner from '../src/components/Spinner';
import Steps from '../src/components/Steps';
import Switch from '../src/components/Switch';
import TabNav from '../src/components/TabNav';
import Table from '../src/components/Table';
import Token from '../src/components/Token';
import Fieldset from '../src/components/Fieldset';
import Label from '../src/components/Label';
import FilterPicker from '../src/components/FilterPicker';

import Sheet from '../src/components/Sheet';

const items = [
  {
    label: 'Cat',
    value: 'cat',
  },
  {
    label: 'Dog',
    value: 'dog',
  },
  {
    label: 'Bear',
    value: 'bear',
  },
  {
    label: 'Squirrel',
    value: 'squirrel',
  },
];

const allEntityDataValue = object('allEntities', [
  { name: 'Desktop / Mac', id: 1 },
  { name: 'Heavy Spenders', description: '<$1000/annually purchase', id: 2 },
  { name: 'Never Purchased', description: 'People who have never bought anything but did browse', id: 3 },
  { name: 'Students / EDU', description: '', id: 4 },
  { name: 'West Coast', description: 'People on the west coast', id: 5 }
]);

const keysToSearchValue = object('keysToSearch', [ 'name', 'description' ]);

const selectedEntityIdsValue = object('selectedEntityIds', [ 123, 456 ]);


const stories = storiesOf('Form Typography', module);
stories
  .addDecorator(story => (
    <div id="root-preview" className="reading-column">
      {story()}
    </div>
  ));

stories
.add('Sheet', (() => (
  <div>
    <p>This is text behind the sheet that is blocked by the overlay.</p>
    <Sheet
      title={ text('title', 'New A/B Test') }
      subtitle={ text('subtitle', 'Test multiple variations against each other to determine the best experience and achieve statistical significance.') }
      hasCloseButton={ boolean('hasCloseButton', true) }
      onClose={ action('Sheet was closed') }
      footerButtonList={ [
        <Button style="plain" key={ 0 } onClick={ noop }>
            Cancel
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ noop }>
            Create A/B Test
        </Button>,
      ] }>
      <Fieldset
        title="Details"
        description="When creating a new A/B experiment, you should use a name and description you will easily remember or corresponds to a hypothesis.">
        <Input id="input-01" label="Name" type="text" placeholder="Add a name for this A/B Test." />
        <Textarea id="text-01" label="Description" placeholder="Add a description or the goal of this A/B Test." />
      </Fieldset>
      <Fieldset
        title="Targeting"
        description="Define the target URL or page where you’d like this A/B test to run.">
          <Label>Target by</Label>
        <SelectDropdown
          items={[
            {label: 'URL',value: 'URL'},
            {label: 'Other',description: '?',value: 'other'}
          ]}
          value="URL"
          label="Target by"
          onChange={ () => {} } />
        <Input id="input-03" label="URL" type="text" placeholder="Enter a target URL." />
      </Fieldset>
      <Fieldset
        title="Metrics"
        description="Add metrics that will best determine success and choose a primary metric for statistical significance.">
        <FilterPicker
          allEntities={ allEntityDataValue }
          selectedEntityIds={ selectedEntityIdsValue }
          keysToSearch={ keysToSearchValue }>
          { ({ availableEntities, filterQuery, handleFilterInput, selectedEntities }) => (
            <div className="oui-filter-picker-list">
                <Input
                  isFilter={ true }
                  onInput={ handleFilterInput }
                  placeholder="Browse for Metrics"
                  type="search"
                />
                <BlockList hasBorder={ true }>
                  <BlockList.Category>
                    <FilterPicker.ListItem
                      name={ 'Create New Metric' }
                      onClick={ action('Create Entity') }
                    />
                  </BlockList.Category>
                  <div className="max-scroll--medium">
                    <BlockList.Category header='Recent Metrics'>
                      { availableEntities.map((item, index) => {
                        return (
                          <FilterPicker.ListItem
                            key={ item.id }
                            id={ item.id }
                            name={ item.name }
                            description={ item.description }
                            onClick={ action(`Entity Add: ${item.id}`) }
                            buttonText={ 'View' }
                            onButtonClick={ action(`Entity Picker View: ${item.id}`) }
                          />
                        );
                      }) }
                    </BlockList.Category>
                  </div>
                </BlockList>
              </div>
          ) }
        </FilterPicker>
      </Fieldset>
      <Fieldset
        title="Holdback"
        description="Define the percentage of visitors who should see the original, unpersonalized experience.">
        <Input id="input-09" label="Traffic" type="number" />
      </Fieldset>
      <Fieldset
        title="Error"
        description="What happens when you enter an invalid value into an input field.">
        <Input id="input-09" label="Example Error" type="text" note="Please name your campaign." displayError={ true } placeholder="Just a placeholder" />
      </Fieldset>
    </Sheet>
  </div>
)))
.add('Type', (() => (
  <div>
    <h1>H1 Experiments</h1>
    <h2>H2 Experiments</h2>
    <h3>H3 Experiments</h3>
    <h4>H4 Experiments</h4>
    <h5>H5 Experiments</h5>
    <h6>H6 Experiments</h6>
    <p>Paragraph</p>
    <p className="micro">Micro</p>
  </div>
)))
.add('Headings', (() => (
  <div>
    <h1>Settings</h1>

    <h2 className="push-half--bottom">Snippet Implementation</h2>
    <p>Some paragraph text below that describes the heading above.</p>

    <h3>Snippet Details</h3>
    <p>Some paragraph text below that describes the heading above.</p>

    <h4>Snippet Settings</h4>
    <p>Some paragraph text below that describes the heading above.</p>

    <h5>Privacy</h5>
    <p>Some paragraph text below that describes the heading above.</p>

    <h6>JQuery Settings</h6>
  </div>
)));
