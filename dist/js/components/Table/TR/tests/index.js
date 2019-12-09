"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Table/TR', function () {
  it('should render as a `tr`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('tr');
  });
  it('should render children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("td", null)));
    expect(component.containsMatchingElement(_react["default"].createElement("td", null))).toBe(true);
  });
  it('should render with test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should render without a border if noBorder is passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      noBorder: true,
      testSection: "goose"
    }));
    expect(component.hasClass('no-border')).toBe(true);
  });
});