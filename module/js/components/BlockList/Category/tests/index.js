import React from 'react';
import Category from '../index';
import { shallow } from 'enzyme';
describe('components/BlockList/Category', function () {
  it('should render children', function () {
    var text = 'Hi!';
    var component = shallow(React.createElement(Category, null, text));
    expect(component.text()).toBe(text);
  });
  it('should render `header` when provided', function () {
    var component = shallow(React.createElement(Category, {
      header: "123456"
    }, "Goose"));
    expect(component.text()).toContain(123456);
  });
  it('should properly set test section', function () {
    var component = shallow(React.createElement(Category, {
      testSection: "foo"
    }, "Goose"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});