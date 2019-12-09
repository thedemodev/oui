import React from 'react';
import Attention from '../index';
import { shallow, mount } from 'enzyme';
describe('components/Attention', function () {
  it('should render text passed in as children', function () {
    var message = 'Hello! This is a short attention bar.';
    var component = shallow(React.createElement(Attention, null, message));
    expect(component.text()).toBe(message);
  });
  it('should render dismiss button when prop is provided', function () {
    var component = mount(React.createElement(Attention, {
      isDismissible: true,
      testSection: "foo"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(1);
  });
  it('should not render dismiss button by default', function () {
    var component = mount(React.createElement(Attention, {
      testSection: "attention"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(0);
  });
  it('should have a properly set role attribute', function () {
    var component = shallow(React.createElement(Attention, null, "'Hello! This is a short attention bar.'"));
    expect(component.is('[role="alert"]')).toBe(true);
  });
  it('should have aria-label if type is provided', function () {
    var component = shallow(React.createElement(Attention, {
      type: "brand"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.is('[aria-label]')).toBe(true);
  });
  /**
   * Dismissible Attention components should use button element since it
   * triggers an action instead of navigating elsewhere.
   */

  it('should use an HTML button element for a close button', function () {
    var component = mount(React.createElement(Attention, {
      isDismissible: true,
      testSection: "foo"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.find('button[data-test-section="foo-dismiss"]').length).toBe(1);
  });
  it('should have a properly set test section', function () {
    var component = shallow(React.createElement(Attention, {
      testSection: "foo"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});