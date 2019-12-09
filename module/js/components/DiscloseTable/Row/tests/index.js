import React from 'react';
import DiscloseRow from '../index';
import Table from '../../../Table';
import { mount } from 'enzyme';
describe('components/DiscloseTable/DiscloseRow', function () {
  var component;
  it('should render rowContents prop correctly', function () {
    component = mount(React.createElement(DiscloseRow, {
      rowContents: [React.createElement(Table.TD, {
        key: 'foo'
      }, "Experiment Name")]
    }, React.createElement("p", null, "Content")));
    expect(component.find('tr').find('TD').exists()).toBe(true);
  });
  it('should render the arrow inside first `Table.TD `', function () {
    component = mount(React.createElement(DiscloseRow, {
      rowContents: [React.createElement(Table.TD, {
        key: 'foo'
      }, "Experiment Name")]
    }, React.createElement("p", null, "Content")));
    expect(component.find('tr').find('td').containsMatchingElement(React.createElement("span", {
      className: "oui-disclose__symbol push-half--right"
    }))).toBe(true);
  });
  describe('when in collapsed state', function () {
    beforeEach(function () {
      component = mount(React.createElement(DiscloseRow, {
        rowContents: [React.createElement(Table.TD, {
          key: 'foo'
        }, "Experiment Name")]
      }, React.createElement("p", null, "Content")));
    });
    it('should render a single "tr" row', function () {
      expect(component.children()).toHaveLength(1);
    });
    it('should have valid CSS classes applied', function () {
      expect(component.find('tr').hasClass('oui-disclose-table--row__toggle')).toBe(true);
      expect(component.find('tr').hasClass('is-active')).toBe(false);
    });
    it('should not render childrenn', function () {
      expect(component.find('tr').find('p').exists()).toBe(false);
    });
  });
  describe('when in expanded state', function () {
    var rowComponents = [React.createElement(Table.TD, {
      key: 'foo'
    }, "Experiment Name")];
    beforeEach(function () {
      component = mount(React.createElement(DiscloseRow, {
        rowContents: rowComponents
      }, React.createElement("p", null, "Content")));
      component.find('tr').simulate('click');
    });
    it('should render two "tr" rows', function () {
      expect(component.find('tr').length).toBe(2);
    });
    it('should have valid CSS classes applied', function () {
      expect(component.find('tr').first().hasClass('oui-disclose-table--row__toggle')).toBe(true);
      expect(component.find('tr').first().hasClass('is-active')).toBe(true);
      expect(component.find('tr').last().hasClass('oui-disclose-table--row__content')).toBe(true);
    });
    it('should render children', function () {
      expect(component.find('tr').find('p').exists()).toBe(true);
      expect(component.find('tr').last().find('td').prop('colSpan')).toBe(rowComponents.length + 1);
    });
  });
});