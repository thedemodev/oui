import React from 'react';
import DiscloseTable from '../index';
import Table from '../../Table';
import { shallow } from 'enzyme';

describe('components/DiscloseTable', () => {
  it('should render as a `table`', () => {
    const component = shallow(<DiscloseTable></DiscloseTable>);
    expect(component.type()).toBe('div');
    expect(component.children().first().type()).toEqual(Table);
  });

  it('should render children', () => {
    const component = shallow(<DiscloseTable><Table.THead></Table.THead></DiscloseTable>);
    expect(component.containsMatchingElement(<Table.THead></Table.THead>)).toBe(true);
  });

  describe('with a test section', () => {
    it('should render with a test section', () => {
      const component = shallow(<DiscloseTable testSection="foo"></DiscloseTable>);
      expect(component.is('[data-test-section="foo"]')).toBe(true);
    });
  });
});
