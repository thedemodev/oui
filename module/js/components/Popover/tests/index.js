import React from 'react';
import Popover from '../index';
import { shallow, render } from 'enzyme';
describe('components/Popover', function () {
  it('should render text passed in as children', function () {
    var message = 'Hello! This is a short popover.';
    var component = shallow(React.createElement(Popover, null, message));
    expect(component.text()).toBe(message);
  });
  it('should render title when provided', function () {
    var title = '123456';
    var component = shallow(React.createElement(Popover, {
      title: title
    }, "Heyo!"));
    expect(component.text()).toContain(title);
  });
  it('should render id when provided', function () {
    var component = shallow(React.createElement(Popover, {
      popoverId: "123456"
    }, "Heyo!"));
    expect(component.is('[id="123456"]')).toBe(true);
  });
  it('has `oui-pop--over` class applied', function () {
    var component = shallow(React.createElement(Popover, null, "Heyo!"));
    expect(component.hasClass('oui-pop--over')).toBe(true);
  });
  it('should overwrite SCSS to display by default', function () {
    var component = render(React.createElement(Popover, null, "Heyo!"));
    expect(component.attr('style')).toContain('display:block');
    expect(component.attr('style')).toContain('opacity:1');
    expect(component.attr('style')).toContain('position:initial');
  });
  it('should have a properly set test section', function () {
    var component = shallow(React.createElement(Popover, {
      testSection: "foo"
    }, "Heyo!"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should not modify classes when "default" is provided for padding prop', function () {
    var component = shallow(React.createElement(Popover, {
      padding: "default"
    }, "Heyo!"));
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toBe('oui-pop--over__content');
  });
  it('should not modify classes when nothing is provided for padding prop', function () {
    var component = shallow(React.createElement(Popover, null, "Heyo!"));
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toBe('oui-pop--over__content');
  });
  it('should not modify classes when an invalid class is provided for padding prop', function () {
    var component = shallow(React.createElement(Popover, {
      padding: "foobar"
    }, "Heyo!"));
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toBe('oui-pop--over__content');
  });
  it('should modify classes when a valid class is provided for padding prop', function () {
    var component = shallow(React.createElement(Popover, {
      padding: "hard"
    }, "Heyo!"));
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toContain('hard');
  });
});