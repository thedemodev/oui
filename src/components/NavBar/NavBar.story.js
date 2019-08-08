import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import NavBar from './index';

const Logo = () => {
  return (
    <div> Brand Logo </div>
  );
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
  .add('With Free Trial', (() => {
    return (
      <NavBar isNavOpen={ boolean('isNavOpen', true) }>
        <NavBar.Header
          platformName="WEB"
          projectName="Test Project"
          homeUrl="http://optimizely.com"
          showProjectName={ true }
          trialSectionBody={ <div className="push-double--bottom push-double--left">Trial</div> }
          isNavOpen={ boolean('isNavOpen', true) }
          logo={ (<Logo />) }
        />
      </NavBar>
    );
  })).add('With no Trial', (() => {
    return (
      <NavBar isNavOpen={ boolean('isNavOpen', true) }>
        <NavBar.Header
          platformName="WEB"
          projectName="Test Project"
          homeUrl="http://optimizely.com"
          showProjectName={ true }
          isNavOpen={ boolean('isNavOpen', true) }
          logo={ (<Logo />) }
        />
      </NavBar>
    );
  }));
