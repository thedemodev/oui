"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Checkbox', function () {
  var mockFunction = jest.fn();
  it('should render an input of type checkbox', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find('input[type="checkbox"]').length).toBe(1);
  });
  it('should render a checked checkbox when `defaultChecked` is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      defaultChecked: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an unchecked checkbox when `defaultChecked` is false', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      defaultChecked: false
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render a checked checkbox when `checked` is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      checked: true,
      onChange: mockFunction
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an unchecked checkbox when `checked` is false', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      checked: false,
      onChange: mockFunction
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should throw an error if a checkbox is rendered without an onChange function', function () {
    spyOn(console, 'error').and.stub();
    (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      checked: true
    }));
    expect(console.error.calls.all()[0].args[0]).toContain('You provided a `checked` prop to a form field without an `onChange` handler'); // eslint-disable-line
  });
  it('should call the onChange event handler when the checkbox is changed', function () {
    var handler = {
      onChange: function onChange(event) {}
    };
    spyOn(handler, 'onChange');
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      onChange: handler.onChange
    }));
    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });
  it('should be wrapped in a label', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    var label = component.find('label');
    var checkbox = label.find('input[type="checkbox"]');
    expect(label.length).toBe(1);
    expect(checkbox.length).toBe(1);
  });
  it('label should render text', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "foo"
    }));
    var label = component.find('label');
    expect(label.text()).toBe('foo');
  });
  it('should add disabled class to label text when disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDisabled: true
    }));
    var label = component.find('.oui-label--disabled');
    expect(label.length).toBe(1);
  });
  it('should not add disabled class to label text when not disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDisabled: false
    }));
    var label = component.find('.oui-label--disabled');
    expect(label.length).toBe(0);
  });
  it('should add disabled attribute to checkbox when disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDisabled: true
    }));
    var input = component.find('input[disabled]');
    expect(input.length).toBe(1);
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
  it('should not add disabled attribute to checkbox when not disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      isDisabled: false
    }));
    expect(component.find('input').prop('disabled')).toBe(false);
  });
  it('should properly add a test section to label', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "duck"
    }));
    expect(component.find('[data-test-section="duck-label"]').length).toBe(1);
  });
  it('should properly add a test section to checkbox', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "duck"
    }));
    expect(component.find('input[type="checkbox"][data-test-section="duck"]').length).toBe(1);
  });
});