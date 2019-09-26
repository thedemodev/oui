import React from 'react';

import { storiesOf } from '@storybook/react';
import noop from 'lodash.noop';
import { withInfo } from '@storybook/addon-info';

import DockableFooter from './index.js';
import Button from '../Button';

const stories = storiesOf('DockableFooter', module);
stories
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add('Default', withInfo()(() => (
    <div data-test-section="helloTesting" className="height--1-1">
      <p>Test content...</p>
      <p>Test content...</p>
      <p>Test content...</p>
      <p>Test content...</p>
      <p>Test content...</p>
      <DockableFooter
        parentTestSection={ 'helloTesting' }
        isDocked={ true }>
        { [
          <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
          </Button>,
        ] }
      </DockableFooter>
    </div>
  ))
  )
  .add('Faux Sheet Short', (() => (
    <div>
      <p>Text behind faux sheet.</p>
      <div className="oui-sheet__wrapper">
        <div className="oui-sheet__overlay" />
        <div
          data-oui-component={ true }
          className="oui-sheet overflow-y--auto"
          data-test-section={ 'helloTesting' }>
          <header className="oui-sheet__header">
            <h2 className="flush--bottom">Hello Fake Sheet</h2>
            Hello Fake Sheet
          </header>
          <div className="oui-sheet__body">
            <p>Some Form elements...</p>
          </div>
          <DockableFooter
            parentTestSection={ 'helloTesting' }
            isDocked={ true }>
            { [
              <Button style="plain" key={ 0 } onClick={ noop }>
                  Cancel
              </Button>,
              <Button style="highlight" key={ 1 } onClick={ noop }>
                  Confirm
              </Button>,
            ] }
          </DockableFooter>
        </div>
      </div>
    </div>
  ))
  )
  .add('Faux Sheet Tall', (() => (
    <div>
      <p>Text behind faux sheet.</p>
      <div className="oui-sheet__wrapper">
        <div className="oui-sheet__overlay" />
        <div
          data-oui-component={ true }
          className="oui-sheet overflow-y--auto"
          data-test-section={ 'helloTesting' }>
          <header className="oui-sheet__header">
            <h2 className="flush--bottom">Hello Fake Sheet</h2>
            Hello Fake Sheet
          </header>
          <div className="oui-sheet__body">
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
            <p>Some Form elements...</p>
          </div>
          <DockableFooter
            parentTestSection={ 'helloTesting' }
            isDocked={ true }>
            { [
              <Button style="plain" key={ 0 } onClick={ noop }>
                  Cancel
              </Button>,
              <Button style="highlight" key={ 1 } onClick={ noop }>
                  Confirm
              </Button>,
            ] }
          </DockableFooter>
        </div>
      </div>
    </div>
  ))
  );
