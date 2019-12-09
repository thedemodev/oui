import React from 'react';
import DropdownBlockLinkText from '../index';
import { shallow } from 'enzyme';
describe('components/Dropdown/DropdownBlockLinkText', function () {
  it('should render as a `span`', function () {
    var component = shallow(React.createElement(DropdownBlockLinkText, null));
    expect(component.type()).toBe('span');
  });
  it('should render text', function () {
    var component = shallow(React.createElement(DropdownBlockLinkText, {
      text: "foo"
    }));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = shallow(React.createElement(DropdownBlockLinkText, {
      testSection: "goose"
    }));
    expect(component.is('[data-test-section="block-link-text-goose"]')).toBe(true);
  });
});