import React from 'react';
import ArrowsInline from '../index';
import { shallow } from 'enzyme';
describe('components/ArrowsInline', function () {
  /**
   * The icons "chevrons" on their own don't contain much value and can be
   * hidden from screen readers. A label should provided to other components
   * (a button, for example) that may use this component.
   */
  it('should have aria-hidden property set to true', function () {
    var component = shallow(React.createElement(ArrowsInline, null));
    expect(component.is('[aria-hidden="true"]')).toBe(true);
  });
  it('should have a properly set test section', function () {
    var component = shallow(React.createElement(ArrowsInline, {
      testSection: "foo"
    }));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});