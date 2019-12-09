"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Textarea', function () {
  it('should render a `<textarea>` element', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('textarea');
  });
  it('should add correct OUI classes', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.hasClass('oui-textarea')).toBe(true);
  });
  it('should call the `onChange` event handler when the textarea is changed', function () {
    var handler = {
      onChange: function onChange(event) {}
    };
    spyOn(handler, 'onChange');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: handler.onChange
    }));
    component.simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });
  it('should call the `onFocus` event handler when the textarea gains focus', function () {
    var handler = {
      onFocus: function onFocus(event) {}
    };
    spyOn(handler, 'onFocus');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onFocus: handler.onFocus
    }));
    component.simulate('focus');
    expect(handler.onFocus).toHaveBeenCalled();
  });
  it('should call the `onBlur` event handler when the textarea loses focus', function () {
    var handler = {
      onBlur: function onBlur(event) {}
    };
    spyOn(handler, 'onBlur');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onBlur: handler.onBlur
    }));
    component.simulate('blur');
    expect(handler.onBlur).toHaveBeenCalled();
  });
  it('should call the `onKeyDown` event handler when a key is pressed down', function () {
    var handler = {
      onKeyDown: function onKeyDown(event) {}
    };
    spyOn(handler, 'onKeyDown');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onKeyDown: handler.onKeyDown
    }));
    component.simulate('keydown');
    expect(handler.onKeyDown).toHaveBeenCalled();
  });
  it('should call the `onInput` event handler when the textarea receives user input', function () {
    var handler = {
      onInput: function onInput(event) {}
    };
    spyOn(handler, 'onInput');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onInput: handler.onInput
    }));
    component.simulate('input');
    expect(handler.onInput).toHaveBeenCalled();
  });
  it('should blur the textarea when `blur` function is called', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    var instance = component.instance();
    spyOn(instance._textarea, 'blur');
    instance.blur();
    expect(instance._textarea.blur).toHaveBeenCalled();
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should render a label if label is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      label: "Input Label"
    }));
    expect(component.find('[data-test-section="foo-label"]').length).toBe(1);
  });
  it('should render a label with optional text if label and isOptional is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      label: "Input Label",
      isOptional: true
    }));
    expect(component.text()).toBe('Input Label(Optional)');
  });
  it('should throw an error if isOptional is passed without a label', function () {
    spyOn(console, 'error').and.stub();
    (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      isOptional: true
    }));
    expect(console.error.calls.all()[0].args[0]).toContain('Must include a value for the label prop to use the isOptional prop'); // eslint-disable-line
  });
  it('should not render a label by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "foo"
    }));
    expect(component.find('[data-test-section="foo-label"]').length).toBe(0);
  });
  it('should render a note if passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      testSection: "foo",
      note: "A short description"
    }));
    expect(component.find('[data-test-section="foo-note"]').length).toBe(1);
    expect(component.find('[data-test-section="foo-note"]').text()).toBe('A short description');
  });
  it('should add a numRows attribute when numRows is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      numRows: 10
    }));
    expect(component.find('textarea').prop('rows')).toBe(10);
  });
  it('should add a maxLength attribute when maxLength is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      maxLength: 50
    }));
    expect(component.find('textarea').prop('maxLength')).toBe(50);
  });
});