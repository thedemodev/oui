import React from 'react';
import DismissButton from '../index';
import { shallow } from 'enzyme';
describe('components/Token/DismissButton', function () {
  var mockFunction = jest.fn();
  it('should render `Button`', function () {
    var component = shallow(React.createElement(DismissButton, {
      onClick: mockFunction
    }));
    expect(component.find('Button').length).toBe(1);
  });
  it('should pass test section to `Button`', function () {
    var component = shallow(React.createElement(DismissButton, {
      testSection: "goose",
      onClick: mockFunction
    }));
    expect(component.find('Button').props().testSection).toBe('goose-dismiss');
  });
  it('should pass `onClick` to `Button`', function () {
    var myFunc = mockFunction;
    var component = shallow(React.createElement(DismissButton, {
      testSection: "goose",
      onClick: myFunc
    }));
    expect(component.find('Button').props().onClick).toBe(myFunc);
  });
});