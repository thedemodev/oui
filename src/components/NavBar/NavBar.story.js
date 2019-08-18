import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
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

const stories = storiesOf('NavBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      { story() }
    </div>
  ));

stories
  .add('With All Options', (() => {
    return (
      <NavBar
        isOpen={ boolean('isOpen', true) }
        logo={ <Logo isNavOpen={ boolean('isOpen', true) } /> }
        title="Test Project"
        badgeText="WEB"
        badgeColor="draft"
        homeUrl="http://optimizely.com"
        trialContent={
          <div className="push-double--bottom push-double--left">
            <b>5</b> days { boolean('isOpen', true) && 'left in your trial' }
          </div>
        }>
        <NavBar.PrimaryLink iconName="projects" type="pushstate" linkDescription="Projects" testSection="projects"/>
        <NavBar.PrimaryLink iconName="experiment" type="link" href="http://optimizely.com" linkDescription="Experiment" testSection="experiment" isActive={ true } />
        <NavBar.PrimaryLink iconName="rollouts" type="link" linkDescription="Features" testSection="features" />
        <NavBar.PrimaryLink iconName="audiences" type="link" linkDescription="Audiences" testSection="audiences" />
        <NavBar.PrimaryLink iconName="events" type="button" linkDescription="Events" testSection="events" />
        <NavBar.PrimaryLink iconName="settings" type="link" linkDescription="Settings" testSection="settings" />
        <NavBar.PrimaryLink
          iconName="getting-started"
          type="pushstate"
          linkDescription="Getting Started"
          testSection="getting-started"
          hasSeparator={ true }
        />
        <NavBar.SecondaryLink
          iconName="program-management"
          type="button"
          linkDescription="Program Management"
          testSection="program-management"
        />
        <NavBar.SecondaryLink iconName="help" type="link" linkDescription="Help" testSection="help" />
        <NavBar.SecondaryLink iconName="feedback" type="link" linkDescription="Feedback" testSection="feedback" />
        <NavBar.CurrentUser
          isOpen={ boolean('isOpen', true) }
          accountSwitcherItems={
            [
              { text: 'Account 1', url: '#', description: 'Account 1 Description', isCurrent: false },
              { text: 'Account 2', url: '#', description: 'Account 2 Description', isCurrent: true },
              { text: 'Account 3', url: '#', description: 'Account 3 Description very very very very very very very long', isCurrent: false },
            ]
          }
          userName="Hassan Khalid"
          accountSettingsUrl="#"
          profileUrl="#"
          logoutUrl="#"
          profileAvatarUrl=""
        />
      </NavBar>
    );
  }));
