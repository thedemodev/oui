import React from 'react';
import { mount } from 'enzyme';

import NavBar from '../index';

const getTestSection = (component, testSection) => component.find(`[data-test-section="${testSection}"]`);

describe('components/NavBar', () => {
  let component;
  let handlerObj;

  describe('When Navbar is Open', () => {
    beforeEach(() => {
      handlerObj = {
        accountSwitcherHandlerSpy: () => {},
        onEmulateClickSpy: () => {},
        SecondaryLinkClickSpy: () => {},
        PrimaryLinkClickSpy: () => {},
      };
      spyOn(handlerObj, 'accountSwitcherHandlerSpy');
      spyOn(handlerObj, 'onEmulateClickSpy');
      spyOn(handlerObj, 'SecondaryLinkClickSpy');
      spyOn(handlerObj, 'PrimaryLinkClickSpy');
      component = mount(
        <NavBar
          isOpen={ true }
          logoUrl="#"
          title="Test Project"
          badgeText="WEB"
          badgeColor="draft"
          homeUrl="http://optimizely.com"
          trialContent={
            <div className="push-double--bottom push-double--left" data-test-section="trial-content-section">
              <b>5</b> days
            </div>
          }>
          <NavBar.PrimaryLink
            iconName="projects"
            type="pushstate"
            linkLabel="Projects"
            testSection="projects"
            onClick={ handlerObj.PrimaryLinkClickSpy }
          />
          <NavBar.SecondaryLink
            onClick={ handlerObj.SecondaryLinkClickSpy }
            iconName="feedback"
            type="link"
            linkLabel="Feedback"
            testSection="feedback"
          />
          <NavBar.CurrentUserMenu
            showEmulate={ true }
            onEmulateClick={ handlerObj.onEmulateClickSpy }
            accountSwitcherItems={
              [
                { text: 'Account 1', url: '#', description: 'Account 1 Description', isCurrent: false },
                { text: 'Account 2', url: '#', description: 'Account 2 Description', isCurrent: true },
                { text: 'Account 3', url: '#', description: 'Account 3 Description', isCurrent: false },
              ]
            }
            accountSwitcherHandler={ handlerObj.accountSwitcherHandlerSpy }
            userName="Hassan Khalid"
            accountSettingsUrl="#"
            profileUrl="#"
            logoutUrl="#"
            profileAvatarUrl="https://app.optimizely.com/dist/static/img/profile-default-3da996cf8eaf436eb2f8f059bc277241.svg"
          />
        </NavBar>
      );
    });

    afterEach(function() {
      component.unmount();
    });

    it('should generate the correct class names when the Nav width is changed', function() {
      expect(component.find('.root-nav--open').length).toBe(1);
      component.setProps({
        isOpen: false,
      });
      expect(component.find('.root-nav--open').length).toBe(0);
    });

    it('should show Projects Primary link', function() {
      expect(getTestSection(component, 'projects-internal-link').length).toBe(1);
    });

    it('should show Feedback Secondary link', function() {
      expect(getTestSection(component, 'feedback-external-link').length).toBe(1);
    });

    it('should show correct project name', function() {
      expect(getTestSection(component, 'project-name').text()).toBe('Test Project');
    });

    it('should show correct project badge', function() {
      expect(getTestSection(component, 'project-badge').text()).toBe('WEB');
    });

    it('should display trial content section', function() {
      expect(getTestSection(component, 'trial-content-section').length).toBe(1);
    });

    it('should display Current User name', function() {
      expect(getTestSection(component, 'nav-bar-user-name').length).toBe(1);
    });

    it('should display Emulate when showEmulate prop is true', function() {
      expect(getTestSection(component, 'nav-bar-close-emulate').length).toBe(1);
    });
  });

  describe('When Navbar is Collapsed', () => {
    beforeEach(() => {
      handlerObj = {
        accountSwitcherHandlerSpy: () => {},
        onEmulateClickSpy: () => {},
        SecondaryLinkClickSpy: () => {},
        PrimaryLinkClickSpy: () => {},
      };
      spyOn(handlerObj, 'accountSwitcherHandlerSpy');
      spyOn(handlerObj, 'onEmulateClickSpy');
      spyOn(handlerObj, 'SecondaryLinkClickSpy');
      spyOn(handlerObj, 'PrimaryLinkClickSpy');
      component = mount(
        <NavBar
          isOpen={ false }
          logoUrl="#"
          title="Test Project"
          badgeText="WEB"
          badgeColor="draft"
          homeUrl="http://optimizely.com"
          trialContent={
            <div className="push-double--bottom push-double--left" data-test-section="trial-content-section">
              <b>5</b> days
            </div>
          }>
          <NavBar.PrimaryLink
            iconName="projects"
            type="pushstate"
            linkLabel="Projects"
            testSection="projects"
            onClick={ handlerObj.PrimaryLinkClickSpy }
          />
          <NavBar.SecondaryLink
            onClick={ handlerObj.SecondaryLinkClickSpy }
            iconName="feedback"
            type="link"
            linkLabel="Feedback"
            testSection="feedback"
          />
          <NavBar.CurrentUserMenu
            showEmulate={ true }
            onEmulateClick={ handlerObj.onEmulateClickSpy }
            accountSwitcherItems={
              [
                { text: 'Account 1', url: '#', description: 'Account 1 Description', isCurrent: false },
                { text: 'Account 2', url: '#', description: 'Account 2 Description', isCurrent: true },
                { text: 'Account 3', url: '#', description: 'Account 3 Description', isCurrent: false },
              ]
            }
            accountSwitcherHandler={ handlerObj.accountSwitcherHandlerSpy }
            userName="Hassan Khalid"
            accountSettingsUrl="#"
            profileUrl="#"
            logoutUrl="#"
            profileAvatarUrl="https://app.optimizely.com/dist/static/img/profile-default-3da996cf8eaf436eb2f8f059bc277241.svg"
          />
        </NavBar>
      );
    });

    afterEach(function() {
      component.unmount();
    });

    it('should not display user name', function() {
      expect(getTestSection(component, 'nav-bar-user-name').length).toBe(0);
    });

    it('should display trial content section', function() {
      expect(getTestSection(component, 'trial-content-section').length).toBe(1);
    });

    it('should display popover when profile avatar image is clicked', function() {
      getTestSection(component, 'account-switcher-popover').simulate('click');
      expect(getTestSection(component, 'navbar-account-switcher-popover-content').length).toBe(1);
    });

    it('should display list of accounts in popover', function() {
      getTestSection(component, 'account-switcher-popover').simulate('click');
      expect(getTestSection(component, 'switch-account-row').length).toBe(3);
    });

    it('should display Emulate when showEmulate prop is true', function() {
      getTestSection(component, 'account-switcher-popover').simulate('click');
      expect(getTestSection(component, 'nav-bar-close-emulate').length).toBe(1);
    });
  });
});
