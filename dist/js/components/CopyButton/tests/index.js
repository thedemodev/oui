"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/CopyButton', function () {
  it('should render children the icon button', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      textToCopy: 'let bingo = "BINGO"',
      testSection: "fake-test-section"
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
});