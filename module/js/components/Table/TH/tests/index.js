import React from 'react';
import TH from '../index';
import { shallow, render } from 'enzyme';
describe('components/Table/TH', function () {
  it('should render as a `th`', function () {
    var component = shallow(React.createElement(TH, null));
    expect(component.type()).toBe('th');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(TH, null, "foo"));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(TH, {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should add numerical class to table cells when provided', function () {
    var component = shallow(React.createElement(TH, {
      isNumerical: true
    }));
    expect(component.hasClass('oui-numerical')).toBe(true);
  });
  it('should not add numerical class to table cells by default', function () {
    var component = shallow(React.createElement(TH, null));
    expect(component.hasClass('oui-numerical')).toBe(false);
  });
  it('should add collapsed class to table cells when provided', function () {
    var component = shallow(React.createElement(TH, {
      isCollapsed: true
    }));
    expect(component.hasClass('oui-cell-collapse')).toBe(true);
  });
  it('should not add collapsed class to table cells by default', function () {
    var component = shallow(React.createElement(TH, null));
    expect(component.hasClass('oui-cell-collapse')).toBe(false);
  });
  it('should add width inline style to table cells when provided', function () {
    var component = render(React.createElement(TH, {
      width: "50%"
    }));
    expect(component.attr('style')).toContain('width:50%');
  });
  it('should not add width inline style to table cells by default', function () {
    var component = render(React.createElement(TH, null));
    var componentStyle = component.children().attr('style');

    if (componentStyle) {
      expect(componentStyle).not.toContain('width');
    }
  });
});