"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/TextField', function () {
  it('should render a simple input with type text', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render with a simple label', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      label: "simple label",
      type: "text"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render with a simple label and a note', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      label: "Simple label",
      note: "simple note",
      type: "text"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render error style', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      displayError: true,
      label: "Simple label",
      note: "simple note",
      type: "text"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render with a placeholder', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      placeholder: "Simple placeholder",
      type: "text"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render search icon', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isFilter: true,
      type: "text"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should render max and min limits', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      min: 0,
      max: 100,
      type: "number"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  it('should call onChange fn() prop when a change happen on input', function () {
    var blurEvent = jest.fn();
    var textField = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      onBlur: blurEvent
    }));
    var input = textField.find('.oui-text-input');
    input.simulate('blur');
    expect(blurEvent).toHaveBeenCalled();
  });
  it('should call onBlur fn() prop when clicking out of input', function () {
    var changeEvent = jest.fn();
    var textField = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: changeEvent,
      type: "text"
    }));
    var input = textField.find('.oui-text-input');
    input.simulate('change');
    expect(changeEvent).toHaveBeenCalled();
  });
  it('should call onKeyDown fn() prop when pressing keys on input', function () {
    var keydownEvent = jest.fn();
    var textField = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onKeyDown: keydownEvent,
      type: "text"
    }));
    var input = textField.find('.oui-text-input');
    input.simulate('keyDown');
    expect(keydownEvent).toHaveBeenCalled();
  });
  it('should call onFocus fn() prop when clicking on input', function () {
    var focusEvent = jest.fn();
    var textField = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onFocus: focusEvent,
      type: "text"
    }));
    var input = textField.find('.oui-text-input');
    input.simulate('focus');
    expect(focusEvent).toHaveBeenCalled();
  });
  it('should render HTML type=number for when prop.type is percent', function () {
    var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "percent"
    }));
    expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
  });
  describe('custom min max percentages', function () {
    it('should allow minimum and maximum percentages when type is percent', function () {
      var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
        type: "percent",
        min: 70,
        max: 85
      }));
      expect(output.find('input').props().min).toBe(70);
      expect(output.find('input').props().max).toBe(85);
      expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
    });
    describe('invalid custom minimum', function () {
      it('should revert to the default if it is below 0', function () {
        var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          type: "percent",
          min: -10
        }));
        expect(output.find('input').props().min).toBe(0);
        expect(output.find('input').props().max).toBe(100);
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
      });
      it('should revert to the default if it is above 100', function () {
        var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          type: "percent",
          min: 101
        }));
        expect(output.find('input').props().min).toBe(0);
        expect(output.find('input').props().max).toBe(100);
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
      });
      it('should revert to the default if it is above the maximum', function () {
        var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          type: "percent",
          min: 80,
          max: 79
        }));
        expect(output.find('input').props().min).toBe(0);
        expect(output.find('input').props().max).toBe(100);
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
      });
    });
    describe('invalid custom maximum', function () {
      it('should revert to the default if it is below 0', function () {
        var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          type: "percent",
          max: -10
        }));
        expect(output.find('input').props().min).toBe(0);
        expect(output.find('input').props().max).toBe(100);
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
      });
      it('should revert to the default if it is above 100', function () {
        var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          type: "percent",
          max: 101
        }));
        expect(output.find('input').props().min).toBe(0);
        expect(output.find('input').props().max).toBe(100);
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
      });
      it('should revert to the default if it is below the minimum', function () {
        var output = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          type: "percent",
          min: 80,
          max: 79
        }));
        expect(output.find('input').props().min).toBe(0);
        expect(output.find('input').props().max).toBe(100);
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
      });
    });
  });
});