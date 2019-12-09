"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Spinner', function () {
  it('should render correctly', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render correctly with overlay', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      hasOverlay: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render correctly with size property set to tiny', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      size: "tiny"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render correctly with size & overlay props', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      hasOverlay: true,
      size: "tiny"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render correctly including testSection prop', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "testing-foo"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
});