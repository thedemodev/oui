import React from 'react';
import { shallow } from 'enzyme';
import Disclose from '../index';

const disclose = shallow(<Disclose>un disclose</Disclose>);

describe('Disclose Component', () => {
  it('renders correctly', () => {
    expect(disclose).toMatchSnapshot();
  });

  it('initialize with `state` isOpen is false', () => {
    expect(disclose.state().isOpen).toBe(false);
  });

  it('will set `state` isOpen to true when click on link', () => {
    disclose.find('.oui-disclose__link').simulate('click');
    expect(disclose.state().isOpen).toBe(true);
  });
});
