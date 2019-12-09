"use strict";

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _index = _interopRequireDefault(require("../index.js"));

var _Link = _interopRequireDefault(require("../../Link/"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/EmptyDashboard', function () {
  it('should render', function () {
    var output = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      headline: "Get started with Optimizely X",
      description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
        href: "http://google.com"
      }, "X Feature"), " with a Google."),
      button: _react["default"].createElement(_Button["default"], {
        style: "highlight"
      }, "Highlight Button"),
      imagePath: "https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render with button below image when showButtonBelow property is set to TRUE', function () {
    var output = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      headline: "Get started with Optimizely X",
      description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
        href: "http://google.com"
      }, "X Feature"), " with a Google."),
      button: _react["default"].createElement(_Button["default"], {
        style: "highlight"
      }, "Highlight Button"),
      imagePath: "https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg",
      showButtonBelow: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render with specified height and width when passed using the imageHeight and imageWidth properties', function () {
    var output = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      headline: "Get started with Optimizely X",
      description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
        href: "http://google.com"
      }, "X Feature"), " with a Google."),
      button: _react["default"].createElement(_Button["default"], {
        style: "highlight"
      }, "Highlight Button"),
      imagePath: "https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg",
      imageHeight: "300px",
      imageWidth: "200px"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
});