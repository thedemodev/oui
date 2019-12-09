"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/ListGroup', function () {
  it('render listgroup with correct classes', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.ListGroup, {
      title: "Hello Title",
      subtitle: "Hello Title"
    }, _react["default"].createElement(_index.ListGroupItem, null, "Item!"), _react["default"].createElement(_index.ListGroupItem, null, "Item 2!")));
    expect(component.is('div')).toBe(true);
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
});