import React from 'react';
import { mount, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Disclose from '../index';
var disclose = shallow(React.createElement(Disclose, {
  title: "Some title"
}, " ", React.createElement("div", null, "disclose this"), " "));
describe('Disclose Component ', function () {
  it('renders correctly', function () {
    expect(shallowToJson(disclose)).toMatchSnapshot();
  });
  it('should add a hard left class to the link when the indented prop is false', function () {
    var component = mount(React.createElement(Disclose, {
      title: "Some title",
      indented: false
    }, " ", React.createElement("div", null, "disclose this"), " "));
    expect(component.find('a').hasClass('hard--left')).toBe(true);
  });
});