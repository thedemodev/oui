import React from 'react';
import DropdownBlockLinkSecondaryText from '../index';
import { shallow } from 'enzyme';
describe('components/Dropdown/DropdownBlockLinkSecondaryText', function () {
  it('should render as a `div`', function () {
    var component = shallow(React.createElement(DropdownBlockLinkSecondaryText, null));
    expect(component.type()).toBe('div');
  });
  it('should render secondary text', function () {
    var component = shallow(React.createElement(DropdownBlockLinkSecondaryText, {
      secondaryText: 'foo'
    }));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(DropdownBlockLinkSecondaryText, {
      testSection: "goose"
    }));
    expect(component.findWhere(function (n) {
      return n.is('[data-test-section="block-link-description-goose"]');
    }).exists()).toBe(true);
  });
  it('should not render a warning if not passed as a prop', function () {
    var component = shallow(React.createElement(DropdownBlockLinkSecondaryText, null));
    expect(component.find('Icon').exists()).toBe(false);
  });
  it('should render a warning', function () {
    var component = shallow(React.createElement(DropdownBlockLinkSecondaryText, {
      isWarning: true
    }));
    expect(component.find('Icon').exists()).toBe(true);
    expect(component.find('Icon').prop('name')).toBe('exclamation');
  });
});