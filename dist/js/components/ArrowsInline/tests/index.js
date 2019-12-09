"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/ArrowsInline', function () {
  /**
   * The icons "chevrons" on their own don't contain much value and can be
   * hidden from screen readers. A label should provided to other components
   * (a button, for example) that may use this component.
   */
  it('should have aria-hidden property set to true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.is('[aria-hidden="true"]')).toBe(true);
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});