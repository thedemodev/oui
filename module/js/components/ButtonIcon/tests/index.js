import React from 'react';
import ButtonIcon from '../index';
import { mount } from 'enzyme';
describe('ButtonIcon component', function () {
  it('should render a medium size icon by default', function () {
    var component = mount(React.createElement(ButtonIcon, {
      iconName: "add"
    }));
    expect(component.find('.oui-button-icon__medium').length).toBe(1);
    expect(component.find('.oui-icon').length).toBe(1);
  });
  it('should change size when prop is passed', function () {
    var component = mount(React.createElement(ButtonIcon, {
      iconName: "add",
      size: "large"
    }));
    expect(component.find('.oui-button-icon__large').length).toBe(1);
  });
  it('should set the title on the button when title is passed', function () {
    var component = mount(React.createElement(ButtonIcon, {
      iconName: "add",
      title: "add row"
    }));
    expect(component.getDOMNode().attributes.getNamedItem('title').value).toBe('add row');
  });
  it('should disable the button if isDisabled is true', function () {
    var component = mount(React.createElement(ButtonIcon, {
      iconName: "add",
      isDisabled: true
    }));
    expect(component.getDOMNode().attributes.getNamedItem('disabled').value).not.toBe(null);
  });
  it('should add a style when style prop is passed', function () {
    var component = mount(React.createElement(ButtonIcon, {
      iconName: "add",
      style: "danger"
    }));
    expect(component.find('.oui-button--danger').length).toBe(1);
  });
  it('should call function that is passed in as `onClick` after click', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(ButtonIcon, {
      onClick: onClickSpy,
      iconName: "add"
    }));
    component.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should not call the onClick function if button isDisabled', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(ButtonIcon, {
      iconName: "add",
      isDisabled: true,
      onClick: onClickSpy
    }));
    component.simulate('click');
    expect(onClickSpy).not.toHaveBeenCalled();
  });
});