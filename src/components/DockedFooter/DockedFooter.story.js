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
  .add('With Less Content', withInfo()(() => (
    <div data-test-section="helloTesting" className="overflow-y--hidden" >
      <h2 className="push-double--top">Test</h2>
      <p>Test content...</p>
      <DockedFooter
        testSection={ 'docked-footer-less-content' }
        parentTestSection={ 'helloTesting' }
        includesMargin={ true }>
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
  .add('With More Content', withInfo()(() => (
    <div data-test-section="helloTestingLong" className="height--300 overflow-y--auto">
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
        testSection={ 'docked-footer-more-content' }
        parentTestSection={ 'helloTestingLong' }>
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
  );
