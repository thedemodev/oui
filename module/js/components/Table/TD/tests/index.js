import React from 'react';
import TD from '../index';
import { shallow, render } from 'enzyme';
describe('components/Table/TD', function () {
  it('should render as a `td`', function () {
    var component = shallow(React.createElement(TD, null));
    expect(component.type()).toBe('td');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(TD, null, "foo"));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(TD, {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should add numerical class to table cells when provided', function () {
    var component = shallow(React.createElement(TD, {
      isNumerical: true
    }));
    expect(component.hasClass('oui-numerical')).toBe(true);
  });
  it('should not add numerical class to table cells by default', function () {
    var component = shallow(React.createElement(TD, null));
    expect(component.hasClass('oui-numerical')).toBe(false);
  });
  it('should add vertical align class to table cells when provided', function () {
    var component = shallow(React.createElement(TD, {
      verticalAlign: "middle"
    }));
    expect(component.hasClass('vertical-align--middle')).toBe(true);
  });
  it('should not add vertical align class to table cells when not provided', function () {
    var component = shallow(React.createElement(TD, null));
    expect(component.hasClass('vertical-align--middle')).toBe(false);
  });
  it('should add width inline style to table cells when provided', function () {
    var component = render(React.createElement(TD, {
      width: "50%"
    }));
    expect(component.attr('style')).toContain('width:50%');
  });
  it('should not add width inline style to table cells by default', function () {
    var component = render(React.createElement(TD, null));
    var componentStyle = component.children().attr('style');

    if (componentStyle) {
      expect(componentStyle).not.toContain('width');
    }
  });
  it('should add colspan to table cells when provided', function () {
    var component = render(React.createElement(TD, {
      colSpan: 3
    }));
    expect(component.attr('colspan')).toBe('3');
  });
});