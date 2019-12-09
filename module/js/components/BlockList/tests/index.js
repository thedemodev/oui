import React from 'react';
import BlockList from '../index';
import { shallow } from 'enzyme';
describe('components/BlockList', function () {
  it('should render children', function () {
    var text = 'Hi!';
    var component = shallow(React.createElement(BlockList, null, text));
    expect(component.text()).toBe(text);
  });
  it('should properly set test section', function () {
    var component = shallow(React.createElement(BlockList, {
      testSection: "foo"
    }, "Goose"));
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
  it('should add `border--all` when `hasBorder` is true', function () {
    var component = shallow(React.createElement(BlockList, {
      testSection: "foo",
      hasBorder: true
    }, "Goose"));
    expect(component.hasClass('border--all')).toBe(true);
  });
  it('should not add `border--all` when `hasBorder` is true', function () {
    var component = shallow(React.createElement(BlockList, {
      testSection: "foo",
      hasBorder: false
    }, "Goose"));
    expect(component.hasClass('border--all')).toBe(false);
  });
  it('should properly set `maxHeight` if provided', function () {
    var component = shallow(React.createElement(BlockList, {
      maxHeight: "300px"
    }, "Goose"));
    expect(component.prop('style')).toMatchObject({
      maxHeight: '300px'
    });
  });
  it('should not set `maxHeight` if not provided', function () {
    var component = shallow(React.createElement(BlockList, null, "Goose"));
    expect(component.prop('style')).not.toMatchObject({
      maxHeight: '300px'
    });
  });
});