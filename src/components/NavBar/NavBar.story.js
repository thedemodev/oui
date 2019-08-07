import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import NavBar from './index'

const typeOptions = {
  'bad-news': 'bad-news',
  'brand': 'brand',
  'good-news': 'good-news',
  'warning': 'warning',
};

const stories = storiesOf('NavBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('Expanded', (() => {
    return (
      <NavBar isNavOpen={ boolean('isNavOpen', true) }>
        <NavBar.Header
          platformName="WEB"
          projectName="Test Project"
          homeUrl="http://optimizely.com"
          showProjectName={ true }
          trialSectionBody={ <div className="push-double--bottom push-double--left">Trial</div> }
          isNavOpen={ boolean('isNavOpen', true) }
        />
      </NavBar>
    );
  }));
