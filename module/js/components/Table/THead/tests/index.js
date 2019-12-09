import React from 'react';
import THead from '../index';
import { shallow } from 'enzyme';
describe('components/Table/THead', function () {
  it('should render as a `thead`', function () {
    var component = shallow(React.createElement(THead, null));
    expect(component.type()).toBe('thead');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(THead, null, React.createElement("th", null)));
    expect(component.containsMatchingElement(React.createElement("th", null))).toBe(true);
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(THead, {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});