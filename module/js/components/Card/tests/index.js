import React from 'react';
import Card from '../index';
import { shallow, mount } from 'enzyme';
describe('components/Card', function () {
  var title = 'Hello world card';
  var body = 'Basic content inside this card';
  var test = 'foo';
  var mockFunction = jest.fn();
  it('should render the title passed in', function () {
    var component = shallow(React.createElement(Card, {
      title: title,
      testSection: test
    }, body));
    expect(component.find('[data-test-section="foo-title"]').text()).toBe(title);
  });
  it('should render text passed in as children', function () {
    var component = shallow(React.createElement(Card, {
      title: title,
      testSection: test
    }, body));
    expect(component.find('[data-test-section="foo-body"]').text()).toBe(body);
  });
  it('should render element passed in as children', function () {
    var component = shallow(React.createElement(Card, {
      title: title,
      testSection: test
    }, React.createElement("span", {
      "data-test-section": "foo-body-inner"
    }, body)));
    expect(component.exists('[[data-test-section="foo-body-inner"]]')).toBe(true);
  });
  it('should not render dismiss button by default', function () {
    var component = mount(React.createElement(Card, {
      title: title,
      testSection: test
    }, body));
    expect(component.find('[data-test-section="foo-close"]').length).toBe(0);
  });
  it('should render dismiss button when prop is provided', function () {
    var component = mount(React.createElement(Card, {
      title: title,
      testSection: test,
      onClose: mockFunction
    }, body));
    expect(component.find('[data-test-section="foo-close"]').length).toBe(1);
  });
});