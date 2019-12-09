"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Dropdown/DropdownBlockLinkSecondaryText', function () {
  it('should render as a `div`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('div');
  });
  it('should render secondary text', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      secondaryText: 'foo'
    }));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose"
    }));
    expect(component.findWhere(function (n) {
      return n.is('[data-test-section="block-link-description-goose"]');
    }).exists()).toBe(true);
  });
  it('should not render a warning if not passed as a prop', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.find('Icon').exists()).toBe(false);
  });
  it('should render a warning', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isWarning: true
    }));
    expect(component.find('Icon').exists()).toBe(true);
    expect(component.find('Icon').prop('name')).toBe('exclamation');
  });
});