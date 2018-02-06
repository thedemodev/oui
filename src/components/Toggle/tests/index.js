import React from 'react';
import Toggle from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Toggle', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Toggle />
    );
  });

  it('should render an `Toggle` with correct props', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render an `Toggle` with correct props', () => {
    expect(component.length).toBe(1);
  });

});
