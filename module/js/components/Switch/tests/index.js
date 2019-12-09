import React from 'react';
import Switch from '../index';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Switch', function () {
  it('should render an `Switch` with correct props', function () {
    var component = shallow(React.createElement(Switch, null));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render an `Switch` with correct props', function () {
    var component = shallow(React.createElement(Switch, null));
    expect(component.length).toBe(1);
  });
  it('should disable the switch', function () {
    var component = mount(React.createElement(Switch, {
      isDisabled: true
    }));
    expect(component.find('input').hasClass('oui-switch--disabled')).toBe(true);
  });
  it('should disable the input', function () {
    var component = mount(React.createElement(Switch, {
      isDisabled: true
    }));
    expect(component.find('input').is('[disabled]')).toBe(true);
  });
});