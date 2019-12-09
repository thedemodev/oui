"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Radio', function () {
  var mockFunction = jest.fn();
  it('should render an input of type radio', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose"
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render input with name when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose"
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render a checked radio input when `defaultChecked` is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      defaultChecked: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an unchecked radio input when `defaultChecked` is false', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      defaultChecked: false
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render a checked radio input when `checked` is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      checked: true,
      onChange: mockFunction
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an unchecked radio input when `checked` is false', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      checked: false,
      onChange: mockFunction
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should throw an error if a radio input is rendered without an `onChange` function', function () {
    spyOn(console, 'error').and.stub();
    (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "goose",
      checked: true
    }));
    expect(console.error.calls.all()[0].args[0]).toContain('You provided a `checked` prop to a form field without an `onChange` handler'); // eslint-disable-line
  });
  it('should call the `onChange` event handler when the radio input is changed', function () {
    var handler = {
      onChange: function onChange(event) {}
    };
    spyOn(handler, 'onChange');
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      onChange: handler.onChange
    }));
    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });
  it('should be wrapped in a label', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose"
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('label should render text', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      label: "foo"
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should add disabled class to label text when disabled', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDisabled: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should not add disabled class to label text when not disabled', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDisabled: false
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should add disabled attribute to radio input when disabled', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDisabled: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should not add disabled attribute to radio input when not disabled', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDisabled: false
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should add weight--normal class to label text when no labelWeight prop present', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    var label = component.find('.weight--normal');
    expect(label.length).toBe(1);
  });
  it('should add weight--normal class to label text when labelWeight prop = "normal"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      labelWeight: "normal"
    }));
    var label = component.find('.weight--normal');
    expect(label.length).toBe(1);
  });
  it('should add weight--light class to label text when labelWeight prop = "light"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      labelWeight: "light"
    }));
    var label = component.find('.weight--light');
    expect(label.length).toBe(1);
  });
  it('should add weight--bold class to label text when labelWeight prop = "bold"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      labelWeight: "bold"
    }));
    var label = component.find('.weight--bold');
    expect(label.length).toBe(1);
  });
  it('should ====OJO====', function () {
    var radioChange = jest.fn();
    var radio = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: radioChange,
      name: "goose"
    }));
    radio.find('input').simulate('change');
    expect(radioChange).toHaveBeenCalled();
  });
});