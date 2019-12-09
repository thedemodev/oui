import React from 'react';
import DropdownContents from '../index';
import { shallow } from 'enzyme';

var renderHeader = function renderHeader() {
  return React.createElement("div", {
    className: "header"
  }, "a header");
};

describe('components/Dropdown/DropdownContents', function () {
  it('should render as a `div` with a single ul', function () {
    var component = shallow(React.createElement(DropdownContents, null));
    expect(component.type()).toBe('div');
    expect(component.childAt(0).type()).toBe('ul');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(DropdownContents, null, React.createElement("li", null, "foo")));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(DropdownContents, {
      testSection: "goose"
    }));
    expect(component.find('ul').is('[data-test-section="goose"]')).toBe(true);
  });
  it('should render with nowrap', function () {
    var component = shallow(React.createElement(DropdownContents, {
      isNoWrap: true
    }));
    expect(component.prop('className')).toBe('nowrap oui-dropdown oui-dropdown--right');
  });
  it('should render a header if `props.renderHeader` is passed', function () {
    var component = shallow(React.createElement(DropdownContents, {
      renderHeader: renderHeader
    }));
    expect(component.find('div.header').exists()).toBe(true);
  });
  it('should render with default direction left', function () {
    var component = shallow(React.createElement(DropdownContents, null));
    expect(component.prop('className')).toBe('oui-dropdown oui-dropdown--right');
  });
  it('should render with direction right', function () {
    var component = shallow(React.createElement(DropdownContents, {
      direction: 'right'
    }));
    expect(component.prop('className')).toBe('oui-dropdown');
  });
  it('should render with direction up', function () {
    var component = shallow(React.createElement(DropdownContents, {
      direction: 'up'
    }));
    expect(component.prop('className')).toBe('oui-dropdown oui-dropdown--up');
  });
  it('should render with a minimum width', function () {
    var component = shallow(React.createElement(DropdownContents, {
      minWidth: '300px'
    }));
    expect(component.find('ul').prop('style')).toEqual({
      minWidth: '300px'
    });
  });
  it('should render with scroll styles if canScroll', function () {
    var component = shallow(React.createElement(DropdownContents, {
      canScroll: true
    }));
    expect(component.find('ul').prop('style')).toEqual({
      overflowY: 'visible',
      maxHeight: 'none'
    });
  });
});