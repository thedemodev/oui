"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/BlockList/Category', function () {
  it('should render children', function () {
    var text = 'Hi!';
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, text));
    expect(component.text()).toBe(text);
  });
  it('should render `header` when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      header: "123456"
    }, "Goose"));
    expect(component.text()).toContain(123456);
  });
  it('should properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }, "Goose"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});