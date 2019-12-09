"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/BlockList', function () {
  it('should render children', function () {
    var text = 'Hi!';
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, text));
    expect(component.text()).toBe(text);
  });
  it('should properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }, "Goose"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should add `border--all` when `hasBorder` is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      hasBorder: true
    }, "Goose"));
    expect(component.hasClass('border--all')).toBe(true);
  });
  it('should not add `border--all` when `hasBorder` is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      hasBorder: false
    }, "Goose"));
    expect(component.hasClass('border--all')).toBe(false);
  });
  it('should properly set `maxHeight` if provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      maxHeight: "300px"
    }, "Goose"));
    expect(component.prop('style')).toMatchObject({
      maxHeight: '300px'
    });
  });
  it('should not set `maxHeight` if not provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "Goose"));
    expect(component.prop('style')).not.toMatchObject({
      maxHeight: '300px'
    });
  });
});