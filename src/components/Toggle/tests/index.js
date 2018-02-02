import React from 'react';
import Toggle from '../index';
import { shallow } from 'enzyme';

describe('components/Toggle', () => {
  it('should render an `OverlayWrapper` with correct props', () => {
    const component = shallow(
      <Toggle />
    );

    expect(component.length).toBe(1);
  });
});
