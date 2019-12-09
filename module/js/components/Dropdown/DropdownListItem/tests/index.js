import React from 'react';
import DropdownListItem from '../index';
import { shallow } from 'enzyme';
describe('components/Dropdown/DropdownListItem', function () {
  it('should render as a `li`', function () {
    var component = shallow(React.createElement(DropdownListItem, null));
    expect(component.type()).toBe('li');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(DropdownListItem, null, "foo"));
    expect(component.text()).toBe('foo');
  });
  it('should render with the dropdown item class', function () {
    var component = shallow(React.createElement(DropdownListItem, null));
    expect(component.find('li').prop('className')).toBe('oui-dropdown__item');
  });
  it('should render with hardSides', function () {
    var component = shallow(React.createElement(DropdownListItem, {
      hardSides: true
    }));
    expect(component.find('li').prop('className')).toBe('hard--sides oui-dropdown__item');
  });
  it('should render with hardTop', function () {
    var component = shallow(React.createElement(DropdownListItem, {
      hardTop: true
    }));
    expect(component.find('li').prop('className')).toBe('hard--top oui-dropdown__item');
  });
  it('should set the ignoreToggle property on the onClick event when passed', function () {
    var syntheticEventMock = {
      persist: jest.fn()
    };
    var component = shallow(React.createElement(DropdownListItem, {
      ignoreToggle: true
    }));
    component.simulate('click', syntheticEventMock);
    expect(syntheticEventMock.persist).toHaveBeenCalledTimes(1);
    expect(syntheticEventMock.ignoreToggle).toBe(true);
  });
});