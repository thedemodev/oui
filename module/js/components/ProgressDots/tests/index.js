import React from 'react';
import ProgressDots from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/ProgressDots', function () {
  it('should render correctly without props', function () {
    var output = shallow(React.createElement(ProgressDots, null));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly with testSection prop', function () {
    var output = shallow(React.createElement(ProgressDots, {
      testSection: "testing-foo"
    }));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});