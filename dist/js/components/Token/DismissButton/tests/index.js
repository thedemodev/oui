"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Token/DismissButton', function () {
  var mockFunction = jest.fn();
  it('should render `Button`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      onClick: mockFunction
    }));
    expect(component.find('Button').length).toBe(1);
  });
  it('should pass test section to `Button`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose",
      onClick: mockFunction
    }));
    expect(component.find('Button').props().testSection).toBe('goose-dismiss');
  });
  it('should pass `onClick` to `Button`', function () {
    var myFunc = mockFunction;
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose",
      onClick: myFunc
    }));
    expect(component.find('Button').props().onClick).toBe(myFunc);
  });
});