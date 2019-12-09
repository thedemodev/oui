import React from 'react';
import { ListGroup, ListGroupItem } from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/ListGroup', function () {
  it('render listgroup with correct classes', function () {
    var component = shallow(React.createElement(ListGroup, {
      title: "Hello Title",
      subtitle: "Hello Title"
    }, React.createElement(ListGroupItem, null, "Item!"), React.createElement(ListGroupItem, null, "Item 2!")));
    expect(component.is('div')).toBe(true);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});