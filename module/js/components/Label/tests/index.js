import React from 'react';
import Label from '../index';
import { shallow, render } from 'enzyme';
describe('components/Label', function () {
  it('should render label with text content', function () {
    var component = shallow(React.createElement(Label, null, "Foo"));
    expect(component.text()).toBe('Foo');
  });
  it('should render nothing when label is empty', function () {
    var component = shallow(React.createElement(Label, null));
    expect(!component);
  });
  it('should render label with correct classes content', function () {
    var component = shallow(React.createElement(Label, null, "Foo"));
    expect(component.hasClass('oui-label')).toBe(true);
  });
  it('should render label as a `label` element', function () {
    var component = shallow(React.createElement(Label, null, "Foo"));
    expect(component.type()).toBe('label');
  });
  describe('with DOM nodes as children', function () {
    it('should render label with DOM nodes', function () {
      var component = shallow(React.createElement(Label, null, React.createElement("div", null, "Foo")));
      expect(component.containsMatchingElement(React.createElement("div", null, "Foo"))).toBe(true);
    });
    it('should render label without extra classes', function () {
      var component = render(React.createElement(Label, null, React.createElement("div", null, "Foo")));
      expect(component.children().attr('class')).toBeFalsy();
    });
  });
  it('should render an optional label if isOptional is set', function () {
    var component = shallow(React.createElement(Label, {
      isOptional: true
    }, "Test"));
    expect(component.find('.oui-label__optional').length).toBe(1);
  });
  it('should render an asterisk label if isRequired is set', function () {
    var component = shallow(React.createElement(Label, {
      isRequired: true
    }, "Test"));
    expect(component.find('.oui-label--required').length).toBe(1);
  });
  it('should render only isRequired if both isOptional and isRequired are set', function () {
    var component = shallow(React.createElement(Label, {
      isRequired: true,
      isOptional: true
    }, "Test"));
    expect(component.find('.oui-label--required').length).toBe(1);
    expect(component.find('.oui-label__optional').length).toBe(0);
  });
  it('should have a properly set test section', function () {
    var component = shallow(React.createElement(Label, {
      testSection: "foo"
    }, "Foo"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should have a properly set for attribute if inputId is set', function () {
    var component = render(React.createElement(Label, {
      testSection: "foo",
      inputId: "input-01"
    }, "Foo"));
    expect(component.is('[for="input-01"]')).toBe(true);
  });
});