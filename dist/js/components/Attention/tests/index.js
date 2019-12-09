"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Attention', function () {
  it('should render text passed in as children', function () {
    var message = 'Hello! This is a short attention bar.';
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, message));
    expect(component.text()).toBe(message);
  });
  it('should render dismiss button when prop is provided', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDismissible: true,
      testSection: "foo"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(1);
  });
  it('should not render dismiss button by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "attention"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(0);
  });
  it('should have a properly set role attribute', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "'Hello! This is a short attention bar.'"));
    expect(component.is('[role="alert"]')).toBe(true);
  });
  it('should have aria-label if type is provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "brand"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.is('[aria-label]')).toBe(true);
  });
  /**
   * Dismissible Attention components should use button element since it
   * triggers an action instead of navigating elsewhere.
   */

  it('should use an HTML button element for a close button', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDismissible: true,
      testSection: "foo"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.find('button[data-test-section="foo-dismiss"]').length).toBe(1);
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }, "'Hello! This is a short attention bar.'"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});