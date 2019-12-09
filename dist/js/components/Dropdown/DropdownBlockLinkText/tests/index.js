"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Dropdown/DropdownBlockLinkText', function () {
  it('should render as a `span`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('span');
  });
  it('should render text', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      text: "foo"
    }));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="block-link-text-goose"]')).toBe(true);
  });
});