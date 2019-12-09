"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Switch', function () {
  it('should render an `Switch` with correct props', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an `Switch` with correct props', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.length).toBe(1);
  });
  it('should disable the switch', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDisabled: true
    }));
    expect(component.find('input').hasClass('oui-switch--disabled')).toBe(true);
  });
  it('should disable the input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDisabled: true
    }));
    expect(component.find('input').is('[disabled]')).toBe(true);
  });
});