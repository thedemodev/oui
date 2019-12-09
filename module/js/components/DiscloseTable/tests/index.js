import React from 'react';
import DiscloseTable from '../index';
import Table from '../../Table';
import { shallow, mount } from 'enzyme';
describe('components/DiscloseTable', function () {
  it('should render as a `table`', function () {
    var component = shallow(React.createElement(DiscloseTable, null, React.createElement(Table.THead, null)));
    expect(component.type()).toBe('table');
  });
  it('should render children', function () {
    var component = mount(React.createElement(DiscloseTable, null, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, "Table Header Name")))));
    expect(component.find('THead').exists()).toBe(true);
    expect(component.find('TR').exists()).toBe(true);
    expect(component.find('TH').exists()).toBe(true);
    expect(component.find('TH').text()).toBe('Table Header Name');
  });
  it('should render with correct style and classNames', function () {
    var component = shallow(React.createElement(DiscloseTable, null, React.createElement(Table.THead, null)));
    expect(component.hasClass('oui-disclose-table')).toBe(true);
    expect(component.prop('style')).toEqual({
      tableLayout: 'auto'
    });
  });
  describe('with a test section', function () {
    it('should render with a test section', function () {
      var component = shallow(React.createElement(DiscloseTable, {
        testSection: "foo"
      }, React.createElement(Table.THead, null)));
      expect(component.is('[data-test-section="foo"]')).toBe(true);
    });
  });
});