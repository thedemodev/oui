import React from 'react';
import Checkbox from '../index';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Checkbox', function () {
  var mockFunction = jest.fn();
  it('should render an input of type checkbox', function () {
    var component = mount(React.createElement(Checkbox, null));
    expect(component.find('input[type="checkbox"]').length).toBe(1);
  });
  it('should render a checked checkbox when `defaultChecked` is true', function () {
    var component = shallow(React.createElement(Checkbox, {
      defaultChecked: true
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render an unchecked checkbox when `defaultChecked` is false', function () {
    var component = shallow(React.createElement(Checkbox, {
      defaultChecked: false
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render a checked checkbox when `checked` is true', function () {
    var component = shallow(React.createElement(Checkbox, {
      checked: true,
      onChange: mockFunction
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render an unchecked checkbox when `checked` is false', function () {
    var component = shallow(React.createElement(Checkbox, {
      checked: false,
      onChange: mockFunction
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should throw an error if a checkbox is rendered without an onChange function', function () {
    spyOn(console, 'error').and.stub();
    mount(React.createElement(Checkbox, {
      checked: true
    }));
    expect(console.error.calls.all()[0].args[0]).toContain('You provided a `checked` prop to a form field without an `onChange` handler'); // eslint-disable-line
  });
  it('should call the onChange event handler when the checkbox is changed', function () {
    var handler = {
      onChange: function onChange(event) {}
    };
    spyOn(handler, 'onChange');
    var component = shallow(React.createElement(Checkbox, {
      onChange: handler.onChange
    }));
    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });
  it('should be wrapped in a label', function () {
    var component = mount(React.createElement(Checkbox, null));
    var label = component.find('label');
    var checkbox = label.find('input[type="checkbox"]');
    expect(label.length).toBe(1);
    expect(checkbox.length).toBe(1);
  });
  it('label should render text', function () {
    var component = mount(React.createElement(Checkbox, {
      label: "foo"
    }));
    var label = component.find('label');
    expect(label.text()).toBe('foo');
  });
  it('should add disabled class to label text when disabled', function () {
    var component = mount(React.createElement(Checkbox, {
      isDisabled: true
    }));
    var label = component.find('.oui-label--disabled');
    expect(label.length).toBe(1);
  });
  it('should not add disabled class to label text when not disabled', function () {
    var component = mount(React.createElement(Checkbox, {
      isDisabled: false
    }));
    var label = component.find('.oui-label--disabled');
    expect(label.length).toBe(0);
  });
  it('should add disabled attribute to checkbox when disabled', function () {
    var component = mount(React.createElement(Checkbox, {
      isDisabled: true
    }));
    var input = component.find('input[disabled]');
    expect(input.length).toBe(1);
  });
  it('should add weight--normal class to label text when no labelWeight prop present', function () {
    var component = mount(React.createElement(Checkbox, null));
    var label = component.find('.weight--normal');
    expect(label.length).toBe(1);
  });
  it('should add weight--normal class to label text when labelWeight prop = "normal"', function () {
    var component = mount(React.createElement(Checkbox, {
      labelWeight: "normal"
    }));
    var label = component.find('.weight--normal');
    expect(label.length).toBe(1);
  });
  it('should add weight--light class to label text when labelWeight prop = "light"', function () {
    var component = mount(React.createElement(Checkbox, {
      labelWeight: "light"
    }));
    var label = component.find('.weight--light');
    expect(label.length).toBe(1);
  });
  it('should add weight--bold class to label text when labelWeight prop = "bold"', function () {
    var component = mount(React.createElement(Checkbox, {
      labelWeight: "bold"
    }));
    var label = component.find('.weight--bold');
    expect(label.length).toBe(1);
  });
  it('should not add disabled attribute to checkbox when not disabled', function () {
    var component = mount(React.createElement(Checkbox, {
      isDisabled: false
    }));
    expect(component.find('input').prop('disabled')).toBe(false);
  });
  it('should properly add a test section to label', function () {
    var component = mount(React.createElement(Checkbox, {
      testSection: "duck"
    }));
    expect(component.find('[data-test-section="duck-label"]').length).toBe(1);
  });
  it('should properly add a test section to checkbox', function () {
    var component = mount(React.createElement(Checkbox, {
      testSection: "duck"
    }));
    expect(component.find('input[type="checkbox"][data-test-section="duck"]').length).toBe(1);
  });
});