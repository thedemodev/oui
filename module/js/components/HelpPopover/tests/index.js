import React from 'react';
import HelpPopover from '../index.js';
import { mount, shallow } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
describe.only('components/HelpPopover', function () {
  it('renders correctly', function () {
    var component = shallow(React.createElement(HelpPopover, {
      popoverTitle: "I am a popover title!"
    }, "I am a popover description."));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render text passed in as children and with default props', function () {
    var message = 'Hello! This is a short popover with no title, just the defaults.';
    var component = mount(React.createElement(HelpPopover, null, message));
    var overlayWrapper = component.find('OverlayWrapper');
    expect(overlayWrapper.length).toBe(1);
    expect(overlayWrapper.props().behavior).toBe('click');
    expect(overlayWrapper.props().isConstrainedToScreen).toBe(true);
    expect(overlayWrapper.props().testSection).toBe('help-popover');
    var popover = component.find('Popover');
    expect(popover.length).toBe(1);
    expect(popover.props().title).toBe(undefined);
    expect(popover.props().children).toBe(message);
  });
  it('should show the popover when button is focused', function () {
    var message = 'Hello! This is a short popover with no title, just the defaults.';
    var component = mount(React.createElement(HelpPopover, {
      behavior: "hover"
    }, message));
    component.find('button').simulate('focus');
    component.update();
    expect(mountToJson(component)).toMatchSnapshot();
  });
  it('should render custom props properly', function () {
    var child = React.createElement("p", null, "I am some random popover content. \uD83E\uDD13");
    var component = mount(React.createElement(HelpPopover, {
      behavior: "hover",
      testSection: "custom-test-section",
      popoverTitle: "I am a title"
    }, child));
    var overlayWrapper = component.find('OverlayWrapper');
    expect(overlayWrapper.length).toBe(1);
    expect(overlayWrapper.props().behavior).toBe('hover');
    var popover = component.find('Popover');
    expect(popover.length).toBe(1);
    expect(popover.props().title).toBe('I am a title');
    expect(popover.props().children).toBe(child);
  });
});