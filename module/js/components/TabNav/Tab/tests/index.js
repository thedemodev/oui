import React from 'react';
import Tab from '../index';
import { shallow } from 'enzyme';
describe('components/TabNav/Tab', function () {
  var mockFunction = jest.fn();
  it('should render with correct classes', function () {
    var component = shallow(React.createElement(Tab, {
      onClick: mockFunction,
      tabId: "foo"
    }));
    expect(component.hasClass('oui-tabs-nav__item')).toBe(true);
  });
  it('should call function passed to onClick after tab is clicked', function () {
    var obj = {
      func: mockFunction
    };
    spyOn(obj, 'func').and.stub();
    var component = shallow(React.createElement(Tab, {
      onClick: obj.func,
      tabId: "foo"
    }));
    component.simulate('click');
    expect(obj.func).toHaveBeenCalled();
  });
  describe('with a child with `isDisabled` prop supplied', function () {
    it('should render only that child with a disabled class', function () {
      var component = shallow(React.createElement(Tab, {
        isDisabled: true,
        onClick: mockFunction,
        tabId: "foo"
      }));
      expect(component.hasClass('oui-tab-disabled')).toBe(true);
    });
  });
  it('should render with test section when provided', function () {
    var component = shallow(React.createElement(Tab, {
      testSection: "goose",
      onClick: mockFunction,
      tabId: "foo"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});