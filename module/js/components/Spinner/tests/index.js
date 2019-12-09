import React from 'react';
import Spinner from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Spinner', function () {
  it('should render correctly', function () {
    var output = shallow(React.createElement(Spinner, null));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly with overlay', function () {
    var output = shallow(React.createElement(Spinner, {
      hasOverlay: true
    }));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly with size property set to tiny', function () {
    var output = shallow(React.createElement(Spinner, {
      size: "tiny"
    }));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly with size & overlay props', function () {
    var output = shallow(React.createElement(Spinner, {
      hasOverlay: true,
      size: "tiny"
    }));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly including testSection prop', function () {
    var output = shallow(React.createElement(Spinner, {
      testSection: "testing-foo"
    }));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});