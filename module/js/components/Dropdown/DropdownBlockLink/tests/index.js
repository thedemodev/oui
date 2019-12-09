import React from 'react';
import DropdownBlockLink from '../index';
import { shallow } from 'enzyme';
describe('components/Dropdown/DropdownBlockLink', function () {
  it('should render as a `div`', function () {
    var component = shallow(React.createElement(DropdownBlockLink, null, "foo"));
    expect(component.type()).toBe('div');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(DropdownBlockLink, null, "foo"));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(DropdownBlockLink, {
      testSection: "goose"
    }, "foo"));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should render with a track id', function () {
    var component = shallow(React.createElement(DropdownBlockLink, {
      trackId: "goose"
    }, "foo"));
    expect(component.is('[data-track-id="goose"]')).toBe(true);
  });
  it('should render with a min width', function () {
    var component = shallow(React.createElement(DropdownBlockLink, {
      minWidth: "300px"
    }, "foo"));
    expect(component.prop('style')).toEqual({
      minWidth: '300px'
    });
  });
  it('should render with link styling by default', function () {
    var component = shallow(React.createElement(DropdownBlockLink, null, "foo"));
    expect(component.prop('className')).toEqual('link oui-dropdown__block-link');
  });
  it('should render with link styling if prop passed as true', function () {
    var component = shallow(React.createElement(DropdownBlockLink, {
      isLink: true
    }, "foo"));
    expect(component.prop('className')).toEqual('link oui-dropdown__block-link');
  });
  it('should render with link styling if prop passed as false', function () {
    var component = shallow(React.createElement(DropdownBlockLink, {
      isLink: false
    }, "foo"));
    expect(component.prop('className')).toEqual('isSelected');
  });
  it('should call function that is passed in as `onClick` after click', function () {
    var obj = {
      func: function func() {}
    };
    spyOn(obj, 'func').and.stub();
    var component = shallow(React.createElement(DropdownBlockLink, {
      onClick: obj.func
    }, "Hello!"));
    component.simulate('click');
    expect(obj.func).toHaveBeenCalled();
  });
});