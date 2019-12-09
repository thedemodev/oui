"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/TabNav', function () {
  var mockFunction = jest.fn();
  it('should render with correct classes', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      activeTab: "foo"
    }, _react["default"].createElement("foo", null)));
    expect(component.hasClass('oui-tabs')).toBe(true);
    expect(component.children().hasClass('oui-tabs-nav')).toBe(true);
  });
  it('should render children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      activeTab: "foo"
    }, _react["default"].createElement("foo", null)));
    expect(component.containsMatchingElement(_react["default"].createElement("foo", null))).toBe(true);
  });
  it('should render even with conditionally rendered children', function () {
    var shouldRender = false;
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      activeTab: "foo"
    }, _react["default"].createElement("foo", null), shouldRender && _react["default"].createElement("bar", null)));
    expect(component.containsMatchingElement(_react["default"].createElement("foo", null))).toBe(true);
    expect(component.containsMatchingElement(_react["default"].createElement("bar", null))).toBe(false);
  });
  it('should add the active class to the tab with the same active id assigned to activeTab', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      activeTab: "first"
    }, _react["default"].createElement(_index["default"].Tab, {
      tabId: "first",
      onClick: mockFunction
    }, "Foo"), _react["default"].createElement(_index["default"].Tab, {
      tabId: "second",
      onClick: mockFunction
    }, "Bar")));
    expect(component.find('.is-active').length).toBe(1);
  });
  describe('with `style` prop supplied', function () {
    it('should render with prop value as OUI tab class modifier', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
        activeTab: "foo",
        style: ['small', 'center']
      }, _react["default"].createElement("foo", null)));
      expect(component.hasClass('oui-tabs--small')).toBe(true);
      expect(component.hasClass('oui-tabs--center')).toBe(true);
    });
  });
  describe('with no `style` prop supplied', function () {
    it('should render without OUI tab class modifiers', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
        activeTab: "foo"
      }, _react["default"].createElement("foo", null)));
      expect(component.is('[class*="oui-tabs--"]')).toBe(false);
    });
  });
  it('should render with test section when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      activeTab: "foo",
      testSection: "goose"
    }, _react["default"].createElement("foo", null)));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});