import React from 'react';
import Badge from '../index';
import { shallow } from 'enzyme';
describe('components/Badge', function () {
  it('should render text passed in as children', function () {
    var message = 'Published';
    var component = shallow(React.createElement(Badge, null, message));
    expect(component.text()).toBe(message);
  });
  it('should add classes to the badge', function () {
    var component = shallow(React.createElement(Badge, {
      color: "draft"
    }, "Unchanged"));
    expect(component.hasClass('oui-badge')).toBe(true);
    expect(component.hasClass('oui-badge--draft')).toBe(true);
  });
  it('should have a properly set test section', function () {
    var component = shallow(React.createElement(Badge, {
      testSection: "foo"
    }, "Unchanged"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});