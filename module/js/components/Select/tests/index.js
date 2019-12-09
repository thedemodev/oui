import React from 'react';
import Select from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Select', function () {
  it('should render correctly when declared with no properties', function () {
    var output = shallow(React.createElement(Select, null, React.createElement("option", {
      value: "one"
    }, "This is option one"), React.createElement("option", {
      value: "two"
    }, "And this is option two")));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly when isDisabled prop is declare', function () {
    var output = shallow(React.createElement(Select, {
      isDisabled: true
    }, React.createElement("option", {
      value: "one"
    }, "This is option one"), React.createElement("option", {
      value: "two"
    }, "And this is option two")));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});