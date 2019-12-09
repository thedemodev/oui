import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CopyButton from '../index';
describe('components/CopyButton', function () {
  it('should render children the icon button', function () {
    var component = shallow(React.createElement(CopyButton, {
      textToCopy: 'let bingo = "BINGO"',
      testSection: "fake-test-section"
    }));
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});