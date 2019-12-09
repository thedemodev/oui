"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Link', function () {
  it('should render disabled', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      href: "http://google.com",
      isDisabled: true
    }, "Test Link"));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render target blank attribute', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      href: "http://google.com",
      newWindow: true
    }, "Test Link"));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render style classes', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      href: "http://google.com",
      style: "muted"
    }, "Test Link"));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render as a span if there is no href', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, "Faux Link"));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render ariaLabel', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      ariaLabel: "Go to Google",
      href: "http://google.com",
      style: "muted"
    }, "Test Link"));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
});