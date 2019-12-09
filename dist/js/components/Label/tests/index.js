"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Label', function () {
  it('should render label with text content', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "Foo"));
    expect(component.text()).toBe('Foo');
  });
  it('should render nothing when label is empty', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(!component);
  });
  it('should render label with correct classes content', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "Foo"));
    expect(component.hasClass('oui-label')).toBe(true);
  });
  it('should render label as a `label` element', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "Foo"));
    expect(component.type()).toBe('label');
  });
  describe('with DOM nodes as children', function () {
    it('should render label with DOM nodes', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("div", null, "Foo")));
      expect(component.containsMatchingElement(_react["default"].createElement("div", null, "Foo"))).toBe(true);
    });
    it('should render label without extra classes', function () {
      var component = (0, _enzyme.render)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("div", null, "Foo")));
      expect(component.children().attr('class')).toBeFalsy();
    });
  });
  it('should render an optional label if isOptional is set', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isOptional: true
    }, "Test"));
    expect(component.find('.oui-label__optional').length).toBe(1);
  });
  it('should render an asterisk label if isRequired is set', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isRequired: true
    }, "Test"));
    expect(component.find('.oui-label--required').length).toBe(1);
  });
  it('should render only isRequired if both isOptional and isRequired are set', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isRequired: true,
      isOptional: true
    }, "Test"));
    expect(component.find('.oui-label--required').length).toBe(1);
    expect(component.find('.oui-label__optional').length).toBe(0);
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }, "Foo"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should have a properly set for attribute if inputId is set', function () {
    var component = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      inputId: "input-01"
    }, "Foo"));
    expect(component.is('[for="input-01"]')).toBe(true);
  });
});