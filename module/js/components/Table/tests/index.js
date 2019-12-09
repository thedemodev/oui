import React from 'react';
import Table from '../index';
import { shallow, render } from 'enzyme';
describe('components/Table', function () {
  it('should render as a table', function () {
    var component = shallow(React.createElement(Table, null));
    expect(component.type()).toBe('table');
  });
  it('should render children', function () {
    var component = shallow(React.createElement(Table, null, React.createElement("thead", null)));
    expect(component.containsMatchingElement(React.createElement("thead", null))).toBe(true);
  });
  describe('with `density` prop supplied', function () {
    it('should render with prop value as OUI table class modifier', function () {
      var component = shallow(React.createElement(Table, {
        density: "loose"
      }));
      expect(component.hasClass('oui-table--loose')).toBe(true);
    });
  });
  describe('with no `density` prop supplied', function () {
    it('should render with default `density` prop value as OUI table class modifier', function () {
      var component = shallow(React.createElement(Table, null));
      expect(component.hasClass('oui-table--loose')).toBe(false);
    });
  });
  describe('with `tableLayoutAlgorithm` prop supplied', function () {
    it('should render with provided `tableLayoutAlgorithm` prop value as inline style', function () {
      var component = render(React.createElement(Table, {
        tableLayoutAlgorithm: "auto"
      }));
      expect(component.attr('style')).toContain('table-layout:auto');
    });
  });
  describe('with no `tableLayoutAlgorithm` prop supplied', function () {
    it('should render with default `tableLayoutAlgorithm` prop value as inline style', function () {
      var component = render(React.createElement(Table, null));
      expect(component.attr('style')).toContain('table-layout:fixed');
    });
  });
  describe('with `style` prop supplied', function () {
    it('should render with prop value as OUI table class modifier', function () {
      var component = shallow(React.createElement(Table, {
        style: "rule"
      }));
      expect(component.hasClass('oui-table--rule')).toBe(true);
    });
  });
  describe('with no `style` prop supplied', function () {
    it('should render without OUI table class modifiers', function () {
      var component = shallow(React.createElement(Table, null));
      expect(component.hasClass('oui-table--wall')).toBe(false);
      expect(component.hasClass('oui-table--rule')).toBe(false);
      expect(component.hasClass('oui-table--rule-no-bottom-border')).toBe(false);
    });
  });
  describe('with a test section', function () {
    it('should render with a test section', function () {
      var component = shallow(React.createElement(Table, {
        testSection: "goose"
      }));
      expect(component.is('[data-test-section="goose"]')).toBe(true);
    });
  });
});