"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Select', function () {
  it('should render correctly when declared with no properties', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("option", {
      value: "one"
    }, "This is option one"), _react["default"].createElement("option", {
      value: "two"
    }, "And this is option two")));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render correctly when isDisabled prop is declare', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isDisabled: true
    }, _react["default"].createElement("option", {
      value: "one"
    }, "This is option one"), _react["default"].createElement("option", {
      value: "two"
    }, "And this is option two")));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
});