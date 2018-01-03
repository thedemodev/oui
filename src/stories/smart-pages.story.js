import React from 'react';
import styled from 'styled-components';
import Icon from 'react-oui-icons';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Select from '../components/Select';
import TextField from '../components/TextField';
import Dropdown from '../components/Dropdown';
import Disclose from '../components/Disclose';
import BlockList from '../components/BlockList';
import Card from '../components/Card';

const anonymFn = () => {}

const data = [
  {title: 'Immediately', description: 'Check conditions as soon as the page is loaded'},
  {title: 'When the URL changes', description: 'Triggered when the URL in the visitors browser changes.'},
  {title: 'When callback is called', description: 'A javascript function you can call to activate the page when needed.'},
  {title: 'When DOM changes', description: 'Triggered when any element on the page changes.'},
  {title: 'When a javascript condition is true', description: 'Polling. A function that is called every 50s, when tru conditions for activation will be checked.'},
];

const dataAny = [
  {title: 'any', description: 'Any condition is true will cause the page to activate.'},
  {title: 'all', description: 'All conditions are true will cause the page to activate.'},
];

const dataAddButton = [
  {title: 'URL Match', description: 'Match the visitors URL.'},
  {title: 'Element is present', description: 'Check if an element present on the page.'},
  {title: 'Javascript Condition', description: 'Write your own conditional logic.'}
];

const stories = storiesOf('SmartPages', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="form">
      {story()}
    </div>
  ));

stories
  .add('default state', () => (<div>
    <h2 className='beta'>New Page</h2>
    <TextField label="Name" onChange={anonymFn} onBlur={anonymFn} onKeyDown={anonymFn} placeholder="Page name" type="text" />
    <TextField label="Editor url" onChange={anonymFn} onBlur={anonymFn} onKeyDown={anonymFn} placeholder="URL" type="text" />

    <Dropdown fullWidth={ false } style='outline' buttonContent='Immediately' width={400}>
      <BlockList>
        { data && data.map((item, index) => <BlockList.Category header={ item.header } key={ index }>
                <BlockList.Item onClick={ anonymFn }>
                  <div className="flex flex-align--center">
                    <div className="flex--1">
                      <div>{ item.title }</div>
                      <div className="muted micro">{ item.description }</div>
                    </div>
                  </div>
                </BlockList.Item>
              </BlockList.Category>)
        }
      </BlockList>
    </Dropdown>
    check if
    <Dropdown
      fullWidth={ false }
      style='outline'
      buttonContent='any'
      width={400}>
      <BlockList>
        {
          dataAny.map((item, index) => {
            return (
              <BlockList.Category header={ item.header } key={ index }>
                <BlockList.Item onClick={ anonymFn }>
                  <div className="flex flex-align--center">
                    <div className="flex--1">
                      <div>{ item.title }</div>
                      <div className="muted micro">{ item.description }</div>
                    </div>
                  </div>
                </BlockList.Item>
              </BlockList.Category>
            );
          })
        }
      </BlockList>
    </Dropdown>
    conditions is valid.

    <Card title="Card Title" onClose testSection="card">
      URL 
      <Select name="match" id="match">
        <option value="one">
          does match
        </option>
        <option value="two">
          does not match
        </option>
      </Select>
      this <strong>URLs</strong>:

      <TextField
        onChange={anonymFn}
        onBlur={anonymFn}
        onKeyDown={anonymFn}
        placeholder="URL"
        type="text"
      />

      <Select name="simplematch" id="simplematch">
        <option value="one">
          simple match
        </option>
        <option value="two">
          exact match
        </option>
        <option value="two">
          substring match
        </option>
        <option value="two">
          regular expression
        </option>
      </Select>
      <Button>
        <Icon name="add" size="large"/>
      </Button>
    </Card>
    
    <Dropdown
      fullWidth={ true }
      buttonContent='any'
      width={'100%'}>
      <BlockList>
        {
          dataAddButton.map((item, index) => {
            return (
              <BlockList.Category header={ item.header } key={ index }>
                <BlockList.Item onClick={ anonymFn }>
                  <div className="flex flex-align--center">
                    <div className="flex--1">
                      <div>{ item.title }</div>
                      <div className="muted micro">{ item.description }</div>
                    </div>
                  </div>
                </BlockList.Item>
              </BlockList.Category>
            );
          })
        }
      </BlockList>
    </Dropdown>

    <Disclose childrenStyle='divider' title='Advanced'>
      <ul className="push-half oui-input-list">
        <li>
          <Checkbox
            label="When triggered, deactivate if conditions are not met"
            testSection="configure-view-smart-deactivation_enabled"
          />
        </li>
        <li className="push-double--left">
          <Checkbox
            label="Undo changes when page activates"
            testSection="configure-view-smart-undo_on_deactivation"
          />
          <div className="push-triple--left muted">
            Undoing changes during page activation allows your single page app
            to dynamically apply and remove changes. Learn more about when to
            use this, and why this might be useful.
          </div>
        </li>
      </ul>
    </Disclose>
    <hr/>
    <Button style='plain'>Cancel</Button>
    <Button style='highlight'>Create Page</Button>
  </div>));