"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Input', function () {
  it('should render a "text" input when type="text" is passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text"
    })).childAt(0);
    expect(component.type()).toBe('input');
    expect(component.hasClass('oui-text-input')).toBe(true);
    expect(component.is('[type="text"]')).toBe(true);
  });
  it('should render error class when displayError prop is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text",
      displayError: true
    })).childAt(0);
    expect(component.hasClass('oui-form-bad-news')).toBe(true);
  });
  it('should render proper text align class when prop is set', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text",
      textAlign: "right"
    })).childAt(0);
    expect(component.find('input').hasClass('text--right')).toBe(true);
  });
  it('should render proper text align class when prop is set', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text",
      textAlign: "left"
    })).childAt(0);
    expect(component.find('input').hasClass('text--left')).toBe(true);
  });
  it('should render a "number" input when type="number" is passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "number"
    })).childAt(0);
    expect(component.is('[type="number"]')).toBe(true);
  });
  it('should output an error if a "value" prop is passed without an "onChange" handler', function () {
    spyOn(console, 'error').and.stub();
    (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo"
    }));
    expect(console.error).toHaveBeenCalled(); // eslint-disable-line
  });
  it('should call the onChange event handler when the input is changed', function () {
    var handler = {
      onChange: function onChange(event) {}
    };
    spyOn(handler, 'onChange');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo",
      onChange: handler.onChange
    }));
    component.simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });
  it('should call the onFocus event handler when the input gains focus', function () {
    var handler = {
      onFocus: function onFocus(event) {}
    };
    spyOn(handler, 'onFocus');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo",
      onFocus: handler.onFocus
    }));
    component.simulate('focus');
    expect(handler.onFocus).toHaveBeenCalled();
  });
  it('should call the onBlur event handler when the input loses focus', function () {
    var handler = {
      onBlur: function onBlur(event) {}
    };
    spyOn(handler, 'onBlur');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo",
      onBlur: handler.onBlur
    }));
    component.simulate('blur');
    expect(handler.onBlur).toHaveBeenCalled();
  });
  it('should call the onKeyDown event handler when a key is pressed down', function () {
    var handler = {
      onKeyDown: function onKeyDown(event) {}
    };
    spyOn(handler, 'onKeyDown');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo",
      onKeyDown: handler.onKeyDown
    }));
    component.simulate('keydown');
    expect(handler.onKeyDown).toHaveBeenCalled();
  });
  it('should call the onInput event handler when the input receives user input', function () {
    var handler = {
      onInput: function onInput(event) {}
    };
    spyOn(handler, 'onInput');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo",
      onInput: handler.onInput
    }));
    component.simulate('input');
    expect(handler.onInput).toHaveBeenCalled();
  });
  it('should blur the input when blur function is called', function () {
    var blurSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      value: "foo",
      onBlur: blurSpy
    }));
    component.simulate('blur');
    expect(blurSpy).toHaveBeenCalled();
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo"
    })).childAt(0);
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should add a `max` attribute when `max` is provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "number",
      max: 10
    })).childAt(0);
    expect(component.is('[max=10]')).toBe(true);
  });
  it('should add a `min` attribute when `min` is provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "number",
      min: 10
    })).childAt(0);
    expect(component.is('[min=10]')).toBe(true);
  });
  it('should add a `step` attribute when `step` is provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "number",
      step: "0.1"
    })).childAt(0);
    expect(component.is('[step="0.1"]')).toBe(true);
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo"
    })).childAt(0);
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should render a label if label is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo",
      label: "Input Label"
    }));
    expect(component.find('[data-test-section="foo-label"]').length).toBe(1);
  });
  it('should render for and id attributes if an id is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo",
      label: "Input Label",
      id: "input-01"
    }));
    expect(component.is('[id="input-01"]')).toBe(true);
    expect(component.find('[htmlFor="input-01"]').exists()).toBe(true);
  });
  it('should render a label with optional text if label and isOptional is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo",
      label: "Input Label",
      isOptional: true
    }));
    expect(component.text()).toBe('Input Label(Optional)');
  });
  it('should throw an error if isOptional is passed without a label', function () {
    spyOn(console, 'error').and.stub();
    (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo",
      isOptional: true
    }));
    /* eslint-disable no-console */

    expect(console.error.calls.all()[0].args[0]).toContain('Must include a value for the label prop to use the isOptional prop');
    /* eslint-enable */
  });
  it('should render a label with * if isRequired is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo",
      label: "Input Label",
      isRequired: true
    }));
    expect(component.find('.oui-label--required').length).toBe(1);
  });
  it('should not render a label by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo"
    }));
    expect(component.find('[data-test-section="foo-label"]').length).toBe(0);
  });
  it('should render a note if passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      testSection: "foo",
      note: "A short description"
    }));
    expect(component.find('[data-test-section="foo-note"]').length).toBe(1);
    expect(component.find('[data-test-section="foo-note"]').text()).toBe('A short description');
  });
  it('should add a maxLength attribute when maxLength is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "text",
      maxLength: 50
    }));
    expect(component.find('input').prop('maxLength')).toBe(50);
  });
});