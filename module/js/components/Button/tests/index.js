import React from 'react';
import Button from '../index';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
describe('components/Loading Button', function () {
  it('should not disable the button if isLoading is false', function () {
    var component = mount(React.createElement(Button, {
      isLoading: false
    }, "Create Campaign"));
    expect(component.getDOMNode().attributes.getNamedItem('disabled')).toBe(null);
  });
  it('should disable the button if isLoading is true', function () {
    var component = mount(React.createElement(Button, {
      isLoading: true
    }, "Create Campaign"));
    expect(component.getDOMNode().attributes.getNamedItem('disabled').value).not.toBe(null);
  });
  it('should add a loading spinner', function () {
    var component = mount(React.createElement(Button, {
      isLoading: true
    }, "Create Campaign"));
    expect(component.find('.oui-button--loading').exists()).toBe(true);
    expect(component.find('.oui-spinner').exists()).toBe(true);
  });
  it('should change the button text to Processing if loadingText is not passed', function () {
    var component = mount(React.createElement(Button, {
      isLoading: true
    }, "Create Campaign"));
    expect(component.find('button').text()).toBe('Processing');
  });
  it('should change the button text to the loadingText passed in', function () {
    var loadingText = 'Creating Campaign';
    var component = mount(React.createElement(Button, {
      isLoading: true,
      loadingText: loadingText
    }, "Create Campaign"));
    expect(component.find('button').text()).toBe(loadingText);
  });
  it('should add an `aria-live` polite value', function () {
    var component = mount(React.createElement(Button, {
      isLoading: true
    }, "Create Campaign"));
    expect(component.find('[aria-live="polite"]').exists()).toBe(true);
  });
});
describe('components/Button', function () {
  it('should render a `button` HTML element', function () {
    var component = mount(React.createElement(Button, null, "Hello!"));
    expect(component.find('button').exists()).toBe(true);
  });
  it('should render contents that are passed in', function () {
    var component = mount(React.createElement(Button, null, "Hello!"));
    expect(component.text()).toBe('Hello!');
  });
  it('should call function that is passed in as `onClick` after click', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(Button, {
      onClick: onClickSpy
    }, "Hello!"));
    component.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should call function that is passed in as `onBlur` after losing focus', function () {
    var onBlurSpy = jest.fn();
    var component = mount(React.createElement(Button, {
      onBlur: onBlurSpy
    }, "Hello!"));
    component.simulate('blur');
    expect(onBlurSpy).toHaveBeenCalled();
  });
  it('should call function that is passed in as `onMouseDown` after mousedown', function () {
    var onMouseDownSpy = jest.fn();
    var component = mount(React.createElement(Button, {
      onMouseDown: onMouseDownSpy
    }, "Hello!"));
    component.simulate('mousedown');
    expect(onMouseDownSpy).toHaveBeenCalled();
  });
  it('should add an `aria-label` when provided', function () {
    var component = mount(React.createElement(Button, {
      ariaLabel: "a11y"
    }, "Hello!"));
    expect(component.find('[aria-label="a11y"]').exists()).toBe(true);
  });
  it('should add a title when provided', function () {
    var component = mount(React.createElement(Button, {
      title: "a11y"
    }, "Hello!"));
    expect(component.find('[title="a11y"]').exists()).toBe(true);
  });
  it('should add the active class if `isActive` is true', function () {
    var component = mount(React.createElement(Button, {
      isActive: true
    }, "Hello!"));
    expect(component.find('button').hasClass('is-active')).toBe(true);
  });
  it('should add the disabled attribute if `isDisabled` is true', function () {
    var component = mount(React.createElement(Button, {
      isDisabled: true
    }, "Hello!"));
    expect(component.getDOMNode().attributes.getNamedItem('disabled').value).not.toBe(null);
  });
  it('should be of type `button` when `isSubmit` is false', function () {
    var component = mount(React.createElement(Button, {
      isSubmit: false
    }, "Hello!"));
    expect(component.getDOMNode().attributes.getNamedItem('type').value).toBe('button');
  });
  it('should be of type `button` when `isSubmit` is not provided', function () {
    var component = mount(React.createElement(Button, null, "Hello!"));
    expect(component.getDOMNode().attributes.getNamedItem('type').value).toBe('button');
  });
  it('should be of type `submit` when `isSubmit` is true', function () {
    var component = mount(React.createElement(Button, {
      isSubmit: true
    }, "Hello!"));
    expect(component.getDOMNode().attributes.getNamedItem('type').value).toBe('submit');
  });
  it('should have a properly set size class if `size` is provided', function () {
    var component = mount(React.createElement(Button, {
      size: "tiny"
    }, "Hello!"));
    expect(component.find('button').hasClass('oui-button--tiny')).toBe(true);
  });
  it('should have a properly set style class if `style` is provided', function () {
    var component = mount(React.createElement(Button, {
      style: "outline"
    }, "Hello!"));
    expect(component.find('button').hasClass('oui-button--outline')).toBe(true);
  });
  it('should have a properly set test section', function () {
    var component = mount(React.createElement(Button, {
      testSection: "foo"
    }, "Hello!"));
    expect(component.find('[data-test-section="foo"]').exists()).toBe(true);
  });
  it('should have a properly set width class if `width` is provided', function () {
    var component = mount(React.createElement(Button, {
      width: "full"
    }, "Hello!"));
    expect(component.find('button').hasClass('oui-button--full')).toBe(true);
  });
  it('should render as a div if isLink is true', function () {
    var output = mount(React.createElement(Button, {
      isLink: true
    }, "Faux Button"));
    expect(output.find('button').exists()).toBe(false);
    expect(mountToJson(output)).toMatchSnapshot();
  });
});