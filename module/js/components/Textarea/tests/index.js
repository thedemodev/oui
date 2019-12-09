import React from 'react';
import Textarea from '../index';
import { shallow, mount } from 'enzyme';
describe('components/Textarea', function () {
  it('should render a `<textarea>` element', function () {
    var component = shallow(React.createElement(Textarea, null));
    expect(component.type()).toBe('textarea');
  });
  it('should add correct OUI classes', function () {
    var component = shallow(React.createElement(Textarea, null));
    expect(component.hasClass('oui-textarea')).toBe(true);
  });
  it('should call the `onChange` event handler when the textarea is changed', function () {
    var handler = {
      onChange: function onChange(event) {}
    };
    spyOn(handler, 'onChange');
    var component = mount(React.createElement(Textarea, {
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
    var component = mount(React.createElement(Textarea, {
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
    var component = mount(React.createElement(Textarea, {
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
    var component = mount(React.createElement(Textarea, {
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
    var component = mount(React.createElement(Textarea, {
      onInput: handler.onInput
    }));
    component.simulate('input');
    expect(handler.onInput).toHaveBeenCalled();
  });
  it('should blur the textarea when `blur` function is called', function () {
    var component = mount(React.createElement(Textarea, null));
    var instance = component.instance();
    spyOn(instance._textarea, 'blur');
    instance.blur();
    expect(instance._textarea.blur).toHaveBeenCalled();
  });
  it('should have a properly set test section', function () {
    var component = shallow(React.createElement(Textarea, {
      testSection: "foo"
    }));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should render a label if label is passed', function () {
    var component = mount(React.createElement(Textarea, {
      testSection: "foo",
      label: "Input Label"
    }));
    expect(component.find('[data-test-section="foo-label"]').length).toBe(1);
  });
  it('should render a label with optional text if label and isOptional is passed', function () {
    var component = mount(React.createElement(Textarea, {
      testSection: "foo",
      label: "Input Label",
      isOptional: true
    }));
    expect(component.text()).toBe('Input Label(Optional)');
  });
  it('should throw an error if isOptional is passed without a label', function () {
    spyOn(console, 'error').and.stub();
    shallow(React.createElement(Textarea, {
      testSection: "foo",
      isOptional: true
    }));
    expect(console.error.calls.all()[0].args[0]).toContain('Must include a value for the label prop to use the isOptional prop'); // eslint-disable-line
  });
  it('should not render a label by default', function () {
    var component = mount(React.createElement(Textarea, {
      testSection: "foo"
    }));
    expect(component.find('[data-test-section="foo-label"]').length).toBe(0);
  });
  it('should render a note if passed', function () {
    var component = mount(React.createElement(Textarea, {
      testSection: "foo",
      note: "A short description"
    }));
    expect(component.find('[data-test-section="foo-note"]').length).toBe(1);
    expect(component.find('[data-test-section="foo-note"]').text()).toBe('A short description');
  });
  it('should add a numRows attribute when numRows is passed', function () {
    var component = mount(React.createElement(Textarea, {
      numRows: 10
    }));
    expect(component.find('textarea').prop('rows')).toBe(10);
  });
  it('should add a maxLength attribute when maxLength is passed', function () {
    var component = mount(React.createElement(Textarea, {
      maxLength: 50
    }));
    expect(component.find('textarea').prop('maxLength')).toBe(50);
  });
});