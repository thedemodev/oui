import React from 'react';
import { mount } from 'enzyme';
import CurrentUserMenu from '../index';

var getTestSection = function getTestSection(component, testSection) {
  return component.find("[data-test-section=\"".concat(testSection, "\"]"));
};

var userAccounts = [{
  text: 'Account 1',
  url: '#',
  description: 'Account 1 Description',
  isCurrent: false
}, {
  text: 'Account 3',
  url: '#',
  description: 'Account 3 Description',
  isCurrent: false
}, {
  text: 'Account 5',
  url: '#',
  description: 'Account 5 Description',
  isCurrent: false
}, {
  text: 'Account 4',
  url: '#',
  description: 'Account 4 Description',
  isCurrent: false
}, {
  text: 'Account 2',
  url: '#',
  description: 'Account 2 Description',
  isCurrent: true
}];
describe('components/NavBar/CurrentUserMenu', function () {
  var component;
  var handlerObj;
  describe('showEmulate prop is true', function () {
    describe('when Navbar is open', function () {
      beforeEach(function () {
        handlerObj = {
          accountSwitcherHandler: function accountSwitcherHandler() {},
          onEmulateClick: function onEmulateClick() {}
        };
        spyOn(handlerObj, 'accountSwitcherHandler');
        spyOn(handlerObj, 'onEmulateClick');
        component = mount(React.createElement(CurrentUserMenu, {
          accountSwitcherHandler: handlerObj.accountSwitcherHandler,
          accountSwitcherItems: userAccounts,
          userName: "Hassan Khalid",
          accountSettingsUrl: "#",
          logoutUrl: "#",
          onEmulateClick: handlerObj.onEmulateClick,
          showEmulate: true,
          profileUrl: "#"
        }));
      });
      afterEach(function () {
        component.unmount();
      });
      it('should default isOpen to true if not passed as props', function () {
        expect(component.props().isOpen).toBe(true);
      });
      it('should render OUI Dropdown when there are more than one accounts', function () {
        expect(component.find('Dropdown').length).toBe(1);
      });
      it('should display Emulate link', function () {
        expect(getTestSection(component, 'nav-bar-close-emulate').length).toBe(1);
      });
      it('should call onEmulateClick callback when Emulate link is clicked', function () {
        getTestSection(component, 'nav-bar-close-emulate').simulate('click');
        expect(handlerObj.onEmulateClick).toBeCalled();
      });
      it('should have color-admin--border class on profile avatar image', function () {
        expect(getTestSection(component, 'profile-pic-wrapper-nav-open').find('.color-admin--border').length).toBe(1);
      });
    });
    describe('when Navbar is closed', function () {
      beforeEach(function () {
        handlerObj = {
          accountSwitcherHandler: function accountSwitcherHandler() {},
          onEmulateClick: function onEmulateClick() {}
        };
        spyOn(handlerObj, 'accountSwitcherHandler');
        spyOn(handlerObj, 'onEmulateClick');
        component = mount(React.createElement(CurrentUserMenu, {
          accountSwitcherHandler: handlerObj.accountSwitcherHandler,
          accountSwitcherItems: userAccounts,
          userName: "Hassan Khalid",
          accountSettingsUrl: "#",
          logoutUrl: "#",
          onEmulateClick: handlerObj.onEmulateClick,
          showEmulate: true,
          profileUrl: "#",
          isOpen: false
        }));
      });
      afterEach(function () {
        component.unmount();
      });
      it('should only render profile avatar image', function () {
        expect(getTestSection(component, 'profile-pic-wrapper-nav-close').length).toBe(1);
      });
      it('should render OUI Popover', function () {
        expect(getTestSection(component, 'navbar-account-switcher-popover-content').length).toBe(1);
      });
      it('should display Emulate link when popper is clicked', function () {
        expect(getTestSection(component, 'nav-bar-close-emulate').length).toBe(1);
      });
      it('should call onEmulateClick callback when Emulate link is clicked', function () {
        getTestSection(component, 'profile-pic-wrapper-nav-close').simulate('click');
        getTestSection(component, 'nav-bar-close-emulate').simulate('click');
        expect(handlerObj.onEmulateClick).toBeCalled();
      });
      it('should have color-admin--border class on profile avatar image', function () {
        expect(getTestSection(component, 'profile-pic-wrapper-nav-close').find('.color-admin--border').length).toBe(1);
      });
    });
  });
  describe('showEmulate prop is false', function () {
    describe('when Navbar is open', function () {
      beforeEach(function () {
        handlerObj = {
          accountSwitcherHandler: function accountSwitcherHandler() {},
          onEmulateClick: function onEmulateClick() {}
        };
        spyOn(handlerObj, 'accountSwitcherHandler');
        spyOn(handlerObj, 'onEmulateClick');
        component = mount(React.createElement(CurrentUserMenu, {
          accountSwitcherHandler: handlerObj.accountSwitcherHandler,
          accountSwitcherItems: userAccounts,
          userName: "Hassan Khalid",
          accountSettingsUrl: "#",
          logoutUrl: "#",
          onEmulateClick: handlerObj.onEmulateClick,
          showEmulate: false,
          profileUrl: "#"
        }));
      });
      afterEach(function () {
        component.unmount();
      });
      it('should not display Emulate link', function () {
        expect(getTestSection(component, 'nav-bar-close-emulate').length).toBe(0);
      });
      it('should not have color-admin--border class on profile avatar image', function () {
        expect(getTestSection(component, 'profile-pic-wrapper-nav-open').find('.color-admin--border').length).toBe(0);
      });
    });
    describe('when Navbar is closed', function () {
      beforeEach(function () {
        handlerObj = {
          accountSwitcherHandler: function accountSwitcherHandler() {},
          onEmulateClick: function onEmulateClick() {}
        };
        spyOn(handlerObj, 'accountSwitcherHandler');
        spyOn(handlerObj, 'onEmulateClick');
        component = mount(React.createElement(CurrentUserMenu, {
          accountSwitcherHandler: handlerObj.accountSwitcherHandler,
          accountSwitcherItems: userAccounts,
          userName: "Hassan Khalid",
          accountSettingsUrl: "#",
          logoutUrl: "#",
          onEmulateClick: handlerObj.onEmulateClick,
          showEmulate: false,
          profileUrl: "#",
          isOpen: false
        }));
      });
      afterEach(function () {
        component.unmount();
      });
      it('should only render profile avatar image', function () {
        expect(getTestSection(component, 'profile-pic-wrapper-nav-close').length).toBe(1);
      });
      it('should render OUI Popover', function () {
        expect(getTestSection(component, 'navbar-account-switcher-popover-content').length).toBe(1);
      });
      it('should not display Emulate link when popper is clicked', function () {
        expect(getTestSection(component, 'nav-bar-close-emulate').length).toBe(0);
      });
      it('should not have color-admin--border class on profile avatar image', function () {
        expect(getTestSection(component, 'profile-pic-wrapper-nav-close').find('.color-admin--border').length).toBe(0);
      });
    });
  });
  describe('when we have multiple accounts', function () {
    describe('navbar is open', function () {
      beforeEach(function () {
        handlerObj = {
          accountSwitcherHandler: function accountSwitcherHandler() {},
          onEmulateClick: function onEmulateClick() {}
        };
        spyOn(handlerObj, 'accountSwitcherHandler');
        spyOn(handlerObj, 'onEmulateClick');
        component = mount(React.createElement(CurrentUserMenu, {
          accountSwitcherHandler: handlerObj.accountSwitcherHandler,
          accountSwitcherItems: userAccounts,
          userName: "Hassan Khalid",
          accountSettingsUrl: "#",
          logoutUrl: "#",
          onEmulateClick: handlerObj.onEmulateClick,
          showEmulate: false,
          profileUrl: "#"
        }));
      });
      afterEach(function () {
        component.unmount();
      });
      it('should render OUI Dropdown', function () {
        expect(component.find('Dropdown').length).toBe(1);
      });
    });
  });
  describe('when we have a single account', function () {
    describe('navbar is open', function () {
      beforeEach(function () {
        handlerObj = {
          accountSwitcherHandler: function accountSwitcherHandler() {},
          onEmulateClick: function onEmulateClick() {}
        };
        spyOn(handlerObj, 'accountSwitcherHandler');
        spyOn(handlerObj, 'onEmulateClick');
        component = mount(React.createElement(CurrentUserMenu, {
          accountSwitcherHandler: handlerObj.accountSwitcherHandler,
          accountSwitcherItems: [userAccounts[1]],
          userName: "Hassan Khalid",
          accountSettingsUrl: "#",
          logoutUrl: "#",
          onEmulateClick: handlerObj.onEmulateClick,
          showEmulate: false,
          profileUrl: "#"
        }));
      });
      afterEach(function () {
        component.unmount();
      });
      it('should not render OUI Dropdown', function () {
        expect(component.find('Dropdown').length).toBe(0);
      });
      it('should only display username', function () {
        expect(getTestSection(component, 'nav-bar-user-name').length).toBe(1);
        expect(getTestSection(component, 'nav-bar-user-name').text()).toBe('Hassan Khalid');
      });
    });
  });
});