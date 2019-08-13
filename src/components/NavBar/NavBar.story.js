import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import NavBar from './index';

const Logo = () => {
  return (
    <div> Brand Logo </div>
  );
};

const primaryLinksItems = [
  {
    iconName: 'projects',
    isVisible: true,
    linkAction: {
      type: 'PUSH_STATE_HREF',
      action: '#',
      pushStateHandler: () => {},
    },
    linkDescription: 'Projects Link',
    testSection: 'projects-link',
  },
  {
    iconName: 'experiment',
    isActive: true,
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Experiment',
    testSection: 'projects-link',
  },
  {
    iconName: 'audiences',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Audiences',
    testSection: 'projects-link',
  },
  {
    iconName: 'pages',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Projects Link',
    testSection: 'Pages',
  },
  {
    iconName: 'settings',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Projects Link',
    testSection: 'Settings',
  },
];

const secondaryLinksItems = [
  {
    iconName: 'archive',
    isVisible: true,
    isSecondaryLink: true,
    linkAction: {
      type: 'FUNCTION',
      action: () => {},
    },
    linkDescription: 'Secondary Link 1',
    testSection: 'projects-link',
  },
  {
    iconName: 'ab',
    isVisible: true,
    linkAction: {
      type: 'FUNCTION',
      action: () => {},
    },
    linkDescription: 'Secondary Link 2',
    testSection: 'projects-link',
  },
  {
    iconName: 'help',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Secondary Link 3',
    testSection: 'Pages',
  },
  {
    iconName: 'feedback',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: '4',
    testSection: 'Settings',
  },
];


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
  })).add('Primary Links', (() => {
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
        <NavBar.PrimaryLinks
          isNavOpen={ boolean('isNavOpen', true) }
          items={ primaryLinksItems }
        />
      </NavBar>
    );
  })).add('Secondary Links', (() => {
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
        <NavBar.PrimaryLinks
          isNavOpen={ boolean('isNavOpen', true) }
          items={ primaryLinksItems }
        />
        <NavBar.SecondaryLinks
          isNavOpen={ boolean('isNavOpen', true) }
          items={ secondaryLinksItems }
        />
      </NavBar>
    );
  }));
