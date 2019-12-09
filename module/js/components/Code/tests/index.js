import React from 'react';
import Code from '../index';
import { shallow, mount, render } from 'enzyme';
describe('components/Code', function () {
  it('should render inline code in code tag', function () {
    var component = shallow(React.createElement(Code, {
      type: "inline"
    }, 'var foo;'));
    expect(component.type()).toBe('code');
  });
  it('should render block code as preformatted text', function () {
    var component = shallow(React.createElement(Code, {
      type: "block"
    }, 'var foo;'));
    expect(component.children().type()).toBe('pre');
  });
  it('should render code that is passed in', function () {
    var code = 'var foo;';
    var componentInline = mount(React.createElement(Code, {
      type: "inline"
    }, code));
    var componentBlock = mount(React.createElement(Code, {
      type: "block"
    }, code));
    expect(componentInline.text()).toBe(code);
    expect(componentBlock.text()).toBe(code);
  });
  it('should not render if children are null', function () {
    var component = shallow(React.createElement(Code, {
      type: "block"
    }));
    expect(component.html()).toBeFalsy();
  });
  it('should add syntax highlighting to code when specified', function () {
    var code = 'var foo;';
    var componentInline = render(React.createElement(Code, {
      type: "inline",
      isHighlighted: true
    }, code));
    var componentBlock = render(React.createElement(Code, {
      type: "block",
      isHighlighted: true
    }, code));
    expect(componentInline.find('[class^="hljs-"]').length).toBe(1);
    expect(componentBlock.find('[class^="hljs-"]').length).toBe(1);
  });
  it('should not add syntax highlighting by default', function () {
    var code = 'var foo;';
    var componentInline = mount(React.createElement(Code, {
      type: "inline"
    }, code));
    var componentBlock = mount(React.createElement(Code, {
      type: "block"
    }, code));
    expect(componentInline.find('[class^="hljs-"]').length).toBe(0);
    expect(componentBlock.find('[class^="hljs-"]').length).toBe(0);
  });
  it('should not add syntax highlighting if language is provided but highlighting is not requested', function () {
    var code = 'var foo;';
    var componentInline = mount(React.createElement(Code, {
      type: "inline",
      language: "js"
    }, code));
    var componentBlock = mount(React.createElement(Code, {
      type: "block",
      language: "js"
    }, code));
    expect(componentInline.find('[class^="hljs-"]').length).toBe(0);
    expect(componentBlock.find('[class^="hljs-"]').length).toBe(0);
  });
  it('should have a properly set test section', function () {
    var componentInline = shallow(React.createElement(Code, {
      testSection: "foo-inline",
      type: "inline"
    }, "Hello!"));
    var componentBlock = shallow(React.createElement(Code, {
      testSection: "foo-block",
      type: "block"
    }, "Hello!"));
    expect(componentInline.is('[data-test-section="foo-inline"]')).toBe(true);
    expect(componentBlock.find('[data-test-section="foo-block"]').length).toBe(1);
  });
  it('should not add a copy button by default', function () {
    var code = 'var foo;';
    var component = mount(React.createElement(Code, {
      type: "block",
      testSection: "code"
    }, code));
    expect(component.find('[data-test-section="code-copy-button"]').length).toBe(0);
  });
});