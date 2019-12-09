"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Table/TH', function () {
  it('should render as a `th`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('th');
  });
  it('should render children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "foo"));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should add numerical class to table cells when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isNumerical: true
    }));
    expect(component.hasClass('oui-numerical')).toBe(true);
  });
  it('should not add numerical class to table cells by default', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.hasClass('oui-numerical')).toBe(false);
  });
  it('should add collapsed class to table cells when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isCollapsed: true
    }));
    expect(component.hasClass('oui-cell-collapse')).toBe(true);
  });
  it('should not add collapsed class to table cells by default', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.hasClass('oui-cell-collapse')).toBe(false);
  });
  it('should add width inline style to table cells when provided', function () {
    var component = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      width: "50%"
    }));
    expect(component.attr('style')).toContain('width:50%');
  });
  it('should not add width inline style to table cells by default', function () {
    var component = (0, _enzyme.render)(_react["default"].createElement(_index["default"], null));
    var componentStyle = component.children().attr('style');

    if (componentStyle) {
      expect(componentStyle).not.toContain('width');
    }
  });
});