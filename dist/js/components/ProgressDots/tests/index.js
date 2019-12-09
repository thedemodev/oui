"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/ProgressDots', function () {
  it('should render correctly without props', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render correctly with testSection prop', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "testing-foo"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
});