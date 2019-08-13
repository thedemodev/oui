import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import Icon from 'react-oui-icons';

import NavBar from './index';

const Logo = (props) => {
  const { isNavOpen } = props;
  return (
    <div className="push-double--left flex">
      <Icon
        name="dimensions"
        size="large"
      />
      { isNavOpen && <span className="push-half--left">Brand</span> }
    </div>
  );
};

Logo.propTypes = { isNavOpen: PropTypes.bool.isRequired };

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
    testSection: 'experiment',
  },
  {
    iconName: 'rollouts',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Features',
    testSection: 'features',
  },
  {
    iconName: 'audiences',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Audiences',
    testSection: 'audiences',
  },
  {
    iconName: 'events',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Events',
    testSection: 'events',
  },
  {
    iconName: 'settings',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Settings',
    testSection: 'Settings',
  },
  {
    iconName: 'getting-started',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Getting Started',
    testSection: 'getting-started',
    hasSeparator: true,
  },
];

const secondaryLinksItems = [
  {
    iconName: 'program-management',
    isVisible: true,
    isSecondaryLink: true,
    linkAction: {
      type: 'FUNCTION',
      action: () => {},
    },
    linkDescription: 'Program Management',
    testSection: 'program-management',
  },
  {
    iconName: 'help',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Help',
    testSection: 'help',
  },
  {
    iconName: 'feedback',
    isVisible: true,
    linkAction: {
      type: 'LINK_HREF',
      action: '#',
    },
    linkDescription: 'Feedback',
    testSection: 'feedback',
  },
];


const stories = storiesOf('NavBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      { story() }
    </div>
  ));

stories
  .add('Navigation bar with all options', (() => {
    return (
      <NavBar
        isNavOpen={ boolean('isNavOpen', true) }
        header={
          <NavBar.Header
            platformName="WEB"
            projectName="Test Project"
            homeUrl="http://optimizely.com"
            showProjectName={ true }
            trialSectionBody={ <div className="push-double--bottom push-double--left">Trial</div> }
            isNavOpen={ boolean('isNavOpen', true) }
            logo={ (<Logo isNavOpen={ boolean('isNavOpen', true) } />) }
          />
        }
        primaryLinks={ object('primaryLinks', primaryLinksItems) }
        secondaryLinks={ object('secondaryLinks', secondaryLinksItems) }
      />
    );
  }));
