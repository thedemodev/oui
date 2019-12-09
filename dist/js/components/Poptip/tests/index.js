"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _reactTippy = require("react-tippy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Poptip', function () {
  it('renders correctly', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      content: "Really interesting info!"
    }, "Testing Poptip"));
    component.props().setBodyDefined(true);
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should call the callback onClick', function () {
    var mockCallBack = jest.fn();
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      content: "Really interesting info!"
    }, _react["default"].createElement("button", {
      onClick: mockCallBack
    }, "Testing Poptip")));
    component.props().setBodyDefined(true);
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('should call the callback onMouseOver', function () {
    var mockCallBack = jest.fn();
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      content: "Really interesting info!"
    }, _react["default"].createElement("button", {
      onMouseOver: mockCallBack
    }, "Testing Poptip")));
    component.props().setBodyDefined(true);
    component.find('button').simulate('mouseover');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('should pass the delay and hideDelay prop to Tooltip', function () {
    var delay = 1000;
    var hideDelay = 2000;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      content: "Really interesting info!",
      delay: delay,
      hideDelay: hideDelay
    }, "Testing Poptip"));
    expect(component.find(_reactTippy.Tooltip).prop('delay')).toEqual([delay, hideDelay]);
  });
});