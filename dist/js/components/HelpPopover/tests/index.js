"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index.js"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe.only('components/HelpPopover', function () {
  it('renders correctly', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      popoverTitle: "I am a popover title!"
    }, "I am a popover description."));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render text passed in as children and with default props', function () {
    var message = 'Hello! This is a short popover with no title, just the defaults.';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, message));
    var overlayWrapper = component.find('OverlayWrapper');
    expect(overlayWrapper.length).toBe(1);
    expect(overlayWrapper.props().behavior).toBe('click');
    expect(overlayWrapper.props().isConstrainedToScreen).toBe(true);
    expect(overlayWrapper.props().testSection).toBe('help-popover');
    var popover = component.find('Popover');
    expect(popover.length).toBe(1);
    expect(popover.props().title).toBe(undefined);
    expect(popover.props().children).toBe(message);
  });
  it('should show the popover when button is focused', function () {
    var message = 'Hello! This is a short popover with no title, just the defaults.';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "hover"
    }, message));
    component.find('button').simulate('focus');
    component.update();
    expect((0, _enzymeToJson.mountToJson)(component)).toMatchSnapshot();
  });
  it('should render custom props properly', function () {
    var child = _react["default"].createElement("p", null, "I am some random popover content. \uD83E\uDD13");

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "hover",
      testSection: "custom-test-section",
      popoverTitle: "I am a title"
    }, child));
    var overlayWrapper = component.find('OverlayWrapper');
    expect(overlayWrapper.length).toBe(1);
    expect(overlayWrapper.props().behavior).toBe('hover');
    var popover = component.find('Popover');
    expect(popover.length).toBe(1);
    expect(popover.props().title).toBe('I am a title');
    expect(popover.props().children).toBe(child);
  });
});