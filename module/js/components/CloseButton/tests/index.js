import React from 'react';
import { mount } from 'enzyme';
import CloseButton from '../index';
describe('CloseButton Component ', function () {
  it('renders a default close button', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(CloseButton, {
      onClick: onClickSpy
    }));
    expect(component.find('.oui-close-button').length).toBe(1);
    expect(component.find('.oui-icon--16').length).toBe(1);
  });
  it('renders a close button with a large icon', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(CloseButton, {
      onClick: onClickSpy,
      size: "large"
    }));
    expect(component.find('.oui-close-button').length).toBe(1);
    expect(component.find('.oui-icon--24').length).toBe(1);
  });
  it('calls the function passed in to onClick', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(CloseButton, {
      onClick: onClickSpy,
      size: "large"
    }));
    component.find('.oui-close-button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});