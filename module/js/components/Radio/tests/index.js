import React from 'react';
import Radio from '../index';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Radio', function () {
  var mockFunction = jest.fn();
  it('should render an input of type radio', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose"
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render input with name when provided', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose"
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render a checked radio input when `defaultChecked` is true', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      defaultChecked: true
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render an unchecked radio input when `defaultChecked` is false', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      defaultChecked: false
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render a checked radio input when `checked` is true', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      checked: true,
      onChange: mockFunction
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render an unchecked radio input when `checked` is false', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      checked: false,
      onChange: mockFunction
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should throw an error if a radio input is rendered without an `onChange` function', function () {
    spyOn(console, 'error').and.stub();
    mount(React.createElement(Radio, {
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
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      onChange: handler.onChange
    }));
    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });
  it('should be wrapped in a label', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose"
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('label should render text', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      label: "foo"
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should add disabled class to label text when disabled', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      isDisabled: true
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should not add disabled class to label text when not disabled', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      isDisabled: false
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should add disabled attribute to radio input when disabled', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      isDisabled: true
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should not add disabled attribute to radio input when not disabled', function () {
    var component = shallow(React.createElement(Radio, {
      name: "goose",
      isDisabled: false
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should add weight--normal class to label text when no labelWeight prop present', function () {
    var component = mount(React.createElement(Radio, null));
    var label = component.find('.weight--normal');
    expect(label.length).toBe(1);
  });
  it('should add weight--normal class to label text when labelWeight prop = "normal"', function () {
    var component = mount(React.createElement(Radio, {
      labelWeight: "normal"
    }));
    var label = component.find('.weight--normal');
    expect(label.length).toBe(1);
  });
  it('should add weight--light class to label text when labelWeight prop = "light"', function () {
    var component = mount(React.createElement(Radio, {
      labelWeight: "light"
    }));
    var label = component.find('.weight--light');
    expect(label.length).toBe(1);
  });
  it('should add weight--bold class to label text when labelWeight prop = "bold"', function () {
    var component = mount(React.createElement(Radio, {
      labelWeight: "bold"
    }));
    var label = component.find('.weight--bold');
    expect(label.length).toBe(1);
  });
  it('should ====OJO====', function () {
    var radioChange = jest.fn();
    var radio = mount(React.createElement(Radio, {
      onChange: radioChange,
      name: "goose"
    }));
    radio.find('input').simulate('change');
    expect(radioChange).toHaveBeenCalled();
  });
});