import React from 'react';
import Link from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Link', function () {
  it('should render disabled', function () {
    var output = shallow(React.createElement(Link, {
      href: "http://google.com",
      isDisabled: true
    }, "Test Link"));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render target blank attribute', function () {
    var output = shallow(React.createElement(Link, {
      href: "http://google.com",
      newWindow: true
    }, "Test Link"));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render style classes', function () {
    var output = shallow(React.createElement(Link, {
      href: "http://google.com",
      style: "muted"
    }, "Test Link"));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render as a span if there is no href', function () {
    var output = shallow(React.createElement(Link, null, "Faux Link"));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render ariaLabel', function () {
    var output = shallow(React.createElement(Link, {
      ariaLabel: "Go to Google",
      href: "http://google.com",
      style: "muted"
    }, "Test Link"));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});