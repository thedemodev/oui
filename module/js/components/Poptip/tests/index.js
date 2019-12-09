import React from 'react';
import Poptip from '../index';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Tooltip } from 'react-tippy';
describe('components/Poptip', function () {
  it('renders correctly', function () {
    var component = shallow(React.createElement(Poptip, {
      content: "Really interesting info!"
    }, "Testing Poptip"));
    component.props().setBodyDefined(true);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should call the callback onClick', function () {
    var mockCallBack = jest.fn();
    var component = shallow(React.createElement(Poptip, {
      content: "Really interesting info!"
    }, React.createElement("button", {
      onClick: mockCallBack
    }, "Testing Poptip")));
    component.props().setBodyDefined(true);
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('should call the callback onMouseOver', function () {
    var mockCallBack = jest.fn();
    var component = shallow(React.createElement(Poptip, {
      content: "Really interesting info!"
    }, React.createElement("button", {
      onMouseOver: mockCallBack
    }, "Testing Poptip")));
    component.props().setBodyDefined(true);
    component.find('button').simulate('mouseover');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('should pass the delay and hideDelay prop to Tooltip', function () {
    var delay = 1000;
    var hideDelay = 2000;
    var component = mount(React.createElement(Poptip, {
      content: "Really interesting info!",
      delay: delay,
      hideDelay: hideDelay
    }, "Testing Poptip"));
    expect(component.find(Tooltip).prop('delay')).toEqual([delay, hideDelay]);
  });
});