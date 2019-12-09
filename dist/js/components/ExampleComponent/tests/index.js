"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _Input = _interopRequireDefault(require("../../Input"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/ExampleComponent', function () {
  var component;
  var fnMock = jest.fn(function (event) {
    return event;
  });
  beforeEach(function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      aString: 'aStringValue',
      aNumber: 5,
      aBoolean: true,
      aFunction: fnMock,
      anArray: [1, 2, 3],
      anObject: {
        initialValue: 'INITIAL_VALUE'
      }
    }, function (_ref) {
      var aString = _ref.aString,
          aNumber = _ref.aNumber,
          aBoolean = _ref.aBoolean,
          aFunction = _ref.aFunction,
          anArray = _ref.anArray,
          anObject = _ref.anObject,
          handleInputUpdate = _ref.handleInputUpdate,
          name = _ref.name;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Input["default"], {
        type: "text",
        onInput: handleInputUpdate,
        testSection: "nameInput"
      }), _react["default"].createElement("div", {
        "data-test-section": "inputNameValue"
      }, name), _react["default"].createElement(_Button["default"], {
        style: "outline",
        onClick: aFunction,
        testSection: "pressMe"
      }, "Press Me!"), _react["default"].createElement("div", {
        "data-test-section": "aString"
      }, String(aString)), _react["default"].createElement("div", {
        "data-test-section": "aNumber"
      }, String(aNumber)), _react["default"].createElement("div", {
        "data-test-section": "aBoolean"
      }, String(aBoolean)), _react["default"].createElement("div", {
        "data-test-section": "anArray"
      }, JSON.stringify(anArray)), _react["default"].createElement("div", {
        "data-test-section": "anObject"
      }, JSON.stringify(anObject)));
    }));
  });
  it('should update "aStringValue" prop', function () {
    expect(component.find('[data-test-section="aString"]').text()).toBe('aStringValue (with updates)');
  });
  it('should update "aNumber" prop', function () {
    expect(component.find('[data-test-section="aNumber"]').text()).toBe('6');
  });
  it('should update "aBoolean" prop', function () {
    expect(component.find('[data-test-section="aBoolean"]').text()).toBe('false');
  });
  it('should update "anArray" prop', function () {
    expect(component.find('[data-test-section="anArray"]').text()).toBe('[1,2,3,4,5,6]');
  });
  it('should update "anObject" prop', function () {
    expect(component.find('[data-test-section="anObject"]').text()).toBe('{\"initialValue\":\"INITIAL_VALUE\",\"newKey\":true}');
  });
  it('should update ExampleComponent state and return name to children when a user types their name in an input', function () {
    expect(component.state()).toMatchObject({
      name: ''
    });
    component.find('[data-test-section="nameInput"]').simulate('input', {
      target: {
        value: 'Johnny'
      }
    });
    expect(component.state()).toMatchObject({
      name: 'Johnny'
    });
    expect(component.find('[data-test-section="inputNameValue"]').text()).toBe('Johnny');
  });
  it('should call aFunction with a string argument of "updated" when the Button is pressed', function () {
    component.find('[data-test-section="pressMe"]').simulate('click');
    expect(fnMock.mock.calls[0][0]).toBe('updated');
  });
  it('should match the Jest Snapshot', function () {
    expect((0, _enzymeToJson.mountToJson)(component)).toMatchSnapshot();
  });
});