import React from 'react';
import TBody from '../index';
import { shallow } from 'enzyme';
describe('components/Table/TBody', function () {
  it('should render as a `tbody`', function () {
    var component = shallow(React.createElement(TBody, null));
    expect(component.type()).toBe('tbody');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(TBody, null, React.createElement("td", null)));
    expect(component.containsMatchingElement(React.createElement("td", null))).toBe(true);
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(TBody, {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});