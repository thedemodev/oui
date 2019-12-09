import React from 'react';
import ExampleComponent from '../index';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Input from '../../Input';
import Button from '../../Button';
describe('components/ExampleComponent', function () {
  var component;
  var fnMock = jest.fn(function (event) {
    return event;
  });
  beforeEach(function () {
    component = mount(React.createElement(ExampleComponent, {
      aString: 'aStringValue',
      aNumber: 5,
      aBoolean: true,
      aFunction: fnMock,
      anArray: [1, 2, 3],
      anObject: {
        initialValue: 'INITIAL_VALUE'
      }
    }, function (_ref) {
      var aString = _ref.aString,
          aNumber = _ref.aNumber,
          aBoolean = _ref.aBoolean,
          aFunction = _ref.aFunction,
          anArray = _ref.anArray,
          anObject = _ref.anObject,
          handleInputUpdate = _ref.handleInputUpdate,
          name = _ref.name;
      return React.createElement(React.Fragment, null, React.createElement(Input, {
        type: "text",
        onInput: handleInputUpdate,
        testSection: "nameInput"
      }), React.createElement("div", {
        "data-test-section": "inputNameValue"
      }, name), React.createElement(Button, {
        style: "outline",
        onClick: aFunction,
        testSection: "pressMe"
      }, "Press Me!"), React.createElement("div", {
        "data-test-section": "aString"
      }, String(aString)), React.createElement("div", {
        "data-test-section": "aNumber"
      }, String(aNumber)), React.createElement("div", {
        "data-test-section": "aBoolean"
      }, String(aBoolean)), React.createElement("div", {
        "data-test-section": "anArray"
      }, JSON.stringify(anArray)), React.createElement("div", {
        "data-test-section": "anObject"
      }, JSON.stringify(anObject)));
    }));
  });
  it('should update "aStringValue" prop', function () {
    expect(component.find('[data-test-section="aString"]').text()).toBe('aStringValue (with updates)');
  });
  it('should update "aNumber" prop', function () {
    expect(component.find('[data-test-section="aNumber"]').text()).toBe('6');
  });
  it('should update "aBoolean" prop', function () {
    expect(component.find('[data-test-section="aBoolean"]').text()).toBe('false');
  });
  it('should update "anArray" prop', function () {
    expect(component.find('[data-test-section="anArray"]').text()).toBe('[1,2,3,4,5,6]');
  });
  it('should update "anObject" prop', function () {
    expect(component.find('[data-test-section="anObject"]').text()).toBe('{\"initialValue\":\"INITIAL_VALUE\",\"newKey\":true}');
  });
  it('should update ExampleComponent state and return name to children when a user types their name in an input', function () {
    expect(component.state()).toMatchObject({
      name: ''
    });
    component.find('[data-test-section="nameInput"]').simulate('input', {
      target: {
        value: 'Johnny'
      }
    });
    expect(component.state()).toMatchObject({
      name: 'Johnny'
    });
    expect(component.find('[data-test-section="inputNameValue"]').text()).toBe('Johnny');
  });
  it('should call aFunction with a string argument of "updated" when the Button is pressed', function () {
    component.find('[data-test-section="pressMe"]').simulate('click');
    expect(fnMock.mock.calls[0][0]).toBe('updated');
  });
  it('should match the Jest Snapshot', function () {
    expect(mountToJson(component)).toMatchSnapshot();
  });
});