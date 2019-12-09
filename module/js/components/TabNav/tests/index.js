import React from 'react';
import TabNav from '../index';
import { shallow, mount } from 'enzyme';
describe('components/TabNav', function () {
  var mockFunction = jest.fn();
  it('should render with correct classes', function () {
    var component = shallow(React.createElement(TabNav, {
      activeTab: "foo"
    }, React.createElement("foo", null)));
    expect(component.hasClass('oui-tabs')).toBe(true);
    expect(component.children().hasClass('oui-tabs-nav')).toBe(true);
  });
  it('should render children', function () {
    var component = shallow(React.createElement(TabNav, {
      activeTab: "foo"
    }, React.createElement("foo", null)));
    expect(component.containsMatchingElement(React.createElement("foo", null))).toBe(true);
  });
  it('should render even with conditionally rendered children', function () {
    var shouldRender = false;
    var component = shallow(React.createElement(TabNav, {
      activeTab: "foo"
    }, React.createElement("foo", null), shouldRender && React.createElement("bar", null)));
    expect(component.containsMatchingElement(React.createElement("foo", null))).toBe(true);
    expect(component.containsMatchingElement(React.createElement("bar", null))).toBe(false);
  });
  it('should add the active class to the tab with the same active id assigned to activeTab', function () {
    var component = mount(React.createElement(TabNav, {
      activeTab: "first"
    }, React.createElement(TabNav.Tab, {
      tabId: "first",
      onClick: mockFunction
    }, "Foo"), React.createElement(TabNav.Tab, {
      tabId: "second",
      onClick: mockFunction
    }, "Bar")));
    expect(component.find('.is-active').length).toBe(1);
  });
  describe('with `style` prop supplied', function () {
    it('should render with prop value as OUI tab class modifier', function () {
      var component = shallow(React.createElement(TabNav, {
        activeTab: "foo",
        style: ['small', 'center']
      }, React.createElement("foo", null)));
      expect(component.hasClass('oui-tabs--small')).toBe(true);
      expect(component.hasClass('oui-tabs--center')).toBe(true);
    });
  });
  describe('with no `style` prop supplied', function () {
    it('should render without OUI tab class modifiers', function () {
      var component = shallow(React.createElement(TabNav, {
        activeTab: "foo"
      }, React.createElement("foo", null)));
      expect(component.is('[class*="oui-tabs--"]')).toBe(false);
    });
  });
  it('should render with test section when provided', function () {
    var component = shallow(React.createElement(TabNav, {
      activeTab: "foo",
      testSection: "goose"
    }, React.createElement("foo", null)));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});