import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TabNav from './index.js';

const stories = storiesOf('TabNav', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('basic tabs', withInfo()(() => <div>
    <TabNav activeTab="first">
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  </div>))
  .add('closed tabs', withInfo()(() => <div>
    <TabNav activeTab="second" style={ ['small'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  </div>))
  .add('centered tabs', withInfo()(() => <div>
    <TabNav activeTab="first" style={ ['small', 'center'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  </div>))
  .add('plain tabs', withInfo()(() => <div>
    <TabNav activeTab="first" style={ ['small', 'sub'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  </div>));

