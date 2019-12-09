"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Badge', function () {
  it('should render text passed in as children', function () {
    var message = 'Published';
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, message));
    expect(component.text()).toBe(message);
  });
  it('should add classes to the badge', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      color: "draft"
    }, "Unchanged"));
    expect(component.hasClass('oui-badge')).toBe(true);
    expect(component.hasClass('oui-badge--draft')).toBe(true);
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }, "Unchanged"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});