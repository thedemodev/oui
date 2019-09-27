import React from 'react';

import { storiesOf } from '@storybook/react';
import noop from 'lodash.noop';
import { withInfo } from '@storybook/addon-info';

import DockedFooter from './index.js';
import Button from '../Button';

const stories = storiesOf('DockedFooter', module);
stories
  .addDecorator(story => <div className="soft-quad--sides">{story()}</div>);

stories
  .add('Default short', withInfo()(() => (
    <div data-test-section="helloTesting" className="">
      <h2 className="push-double--top">Test</h2>
      <p>Test content...</p>
      <DockedFooter
        parentTestSection={ 'helloTesting' }
        isInsideSheet={ false }
        includesMargin={ true }
        isDocked={ true }>
        { [
          <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
          </Button>,
        ] }
      </DockedFooter>
    </div>
  ))
  )
  .add('Default long', withInfo()(() => (
    <div data-test-section="helloTestingLong" className="">
      <div>
        <h2 className="push-double--top">Test</h2>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
        <p>Test content...</p>
      </div>
      <DockedFooter
        parentTestSection={ 'helloTestingLong' }
        isInsideSheet={ false }
        isDocked={ true }>
        { [
          <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
          </Button>,
        ] }
      </DockedFooter>
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
          data-test-section={ 'helloShortTesting' }>
          <header className="oui-sheet__header">
            <h2 className="flush--bottom">Hello Fake Sheet</h2>
            Hello Fake Sheet
          </header>
          <div className="oui-sheet__body">
            <p>Some Form elements...</p>
          </div>
          <DockedFooter
            parentTestSection={ 'helloShortTesting' }
            isInsideSheet={ true }
            includesMargin={ false }
            isDocked={ true }>
            { [
              <Button style="plain" key={ 0 } onClick={ noop }>
                  Cancel
              </Button>,
              <Button style="highlight" key={ 1 } onClick={ noop }>
                  Confirm
              </Button>,
            ] }
          </DockedFooter>
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
          <DockedFooter
            parentTestSection={ 'helloTesting' }
            isInsideSheet={ true }
            includesMargin={ false }
            isDocked={ true }>
            { [
              <Button style="plain" key={ 0 } onClick={ noop }>
                  Cancel
              </Button>,
              <Button style="highlight" key={ 1 } onClick={ noop }>
                  Confirm
              </Button>,
            ] }
          </DockedFooter>
        </div>
      </div>
    </div>
  ))
  );
