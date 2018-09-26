import React from 'react';
import Switch from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Switch', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Switch />
    );
  });

  it('should render an `Switch` with correct props', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render an `Switch` with correct props', () => {
    expect(component.length).toBe(1);
  });

  it('should disable the switch', () => {
    expect(component.hasClass('oui-switch--disabled')).toBe(false);
  });

});
