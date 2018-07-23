import React from 'react';
import DiscloseRow from '../index';
import { shallow, mount } from 'enzyme';

describe('components/DiscloseTable/DiscloseRow', () => {
  it('should render a single `tr` row when in collapsed state', () => {
    const component = shallow(<DiscloseRow rowContents={ [ ] }><p></p></DiscloseRow>);
    expect(component.children()).toHaveLength(1);
  });

  it('should render a two `tr` row when in expanded state', () => {
    const component = mount(<DiscloseRow rowContents={ [ ] }><p></p></DiscloseRow>);
    expect(component.find('tr').length).toBe(1);
    component.find('tr').simulate('click');
    expect(component.find('tr').length).toBe(2);
  });
});
