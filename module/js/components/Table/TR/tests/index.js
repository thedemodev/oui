import React from 'react';
import TR from '../index';
import { shallow } from 'enzyme';
describe('components/Table/TR', function () {
  it('should render as a `tr`', function () {
    var component = shallow(React.createElement(TR, null));
    expect(component.type()).toBe('tr');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(TR, null, React.createElement("td", null)));
    expect(component.containsMatchingElement(React.createElement("td", null))).toBe(true);
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(TR, {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should render without a border if noBorder is passed', function () {
    var component = shallow(React.createElement(TR, {
      noBorder: true,
      testSection: "goose"
    }));
    expect(component.hasClass('no-border')).toBe(true);
  });
});