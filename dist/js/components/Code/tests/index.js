"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Code', function () {
  it('should render inline code in code tag', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "inline"
    }, 'var foo;'));
    expect(component.type()).toBe('code');
  });
  it('should render block code as preformatted text', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "block"
    }, 'var foo;'));
    expect(component.children().type()).toBe('pre');
  });
  it('should render code that is passed in', function () {
    var code = 'var foo;';
    var componentInline = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "inline"
    }, code));
    var componentBlock = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "block"
    }, code));
    expect(componentInline.text()).toBe(code);
    expect(componentBlock.text()).toBe(code);
  });
  it('should not render if children are null', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "block"
    }));
    expect(component.html()).toBeFalsy();
  });
  it('should add syntax highlighting to code when specified', function () {
    var code = 'var foo;';
    var componentInline = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      type: "inline",
      isHighlighted: true
    }, code));
    var componentBlock = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      type: "block",
      isHighlighted: true
    }, code));
    expect(componentInline.find('[class^="hljs-"]').length).toBe(1);
    expect(componentBlock.find('[class^="hljs-"]').length).toBe(1);
  });
  it('should not add syntax highlighting by default', function () {
    var code = 'var foo;';
    var componentInline = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "inline"
    }, code));
    var componentBlock = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "block"
    }, code));
    expect(componentInline.find('[class^="hljs-"]').length).toBe(0);
    expect(componentBlock.find('[class^="hljs-"]').length).toBe(0);
  });
  it('should not add syntax highlighting if language is provided but highlighting is not requested', function () {
    var code = 'var foo;';
    var componentInline = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "inline",
      language: "js"
    }, code));
    var componentBlock = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "block",
      language: "js"
    }, code));
    expect(componentInline.find('[class^="hljs-"]').length).toBe(0);
    expect(componentBlock.find('[class^="hljs-"]').length).toBe(0);
  });
  it('should have a properly set test section', function () {
    var componentInline = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo-inline",
      type: "inline"
    }, "Hello!"));
    var componentBlock = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo-block",
      type: "block"
    }, "Hello!"));
    expect(componentInline.is('[data-test-section="foo-inline"]')).toBe(true);
    expect(componentBlock.find('[data-test-section="foo-block"]').length).toBe(1);
  });
  it('should not add a copy button by default', function () {
    var code = 'var foo;';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "block",
      testSection: "code"
    }, code));
    expect(component.find('[data-test-section="code-copy-button"]').length).toBe(0);
  });
});