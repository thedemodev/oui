"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disclose = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
  title: "Some title"
}, " ", _react["default"].createElement("div", null, "disclose this"), " "));
describe('Disclose Component ', function () {
  it('renders correctly', function () {
    expect((0, _enzymeToJson.shallowToJson)(disclose)).toMatchSnapshot();
  });
  it('should add a hard left class to the link when the indented prop is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: "Some title",
      indented: false
    }, " ", _react["default"].createElement("div", null, "disclose this"), " "));
    expect(component.find('a').hasClass('hard--left')).toBe(true);
  });
});