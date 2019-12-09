"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Dropdown/DropdownListItem', function () {
  it('should render as a `li`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('li');
  });
  it('should render children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "foo"));
    expect(component.text()).toBe('foo');
  });
  it('should render with the dropdown item class', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.find('li').prop('className')).toBe('oui-dropdown__item');
  });
  it('should render with hardSides', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      hardSides: true
    }));
    expect(component.find('li').prop('className')).toBe('hard--sides oui-dropdown__item');
  });
  it('should render with hardTop', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      hardTop: true
    }));
    expect(component.find('li').prop('className')).toBe('hard--top oui-dropdown__item');
  });
  it('should set the ignoreToggle property on the onClick event when passed', function () {
    var syntheticEventMock = {
      persist: jest.fn()
    };
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      ignoreToggle: true
    }));
    component.simulate('click', syntheticEventMock);
    expect(syntheticEventMock.persist).toHaveBeenCalledTimes(1);
    expect(syntheticEventMock.ignoreToggle).toBe(true);
  });
});