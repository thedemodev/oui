import React from 'react';
import { mount } from 'enzyme';
import noop from 'lodash.noop';
import EditableInput from '../EditableInput';
describe('components/EditableInput', function () {
  describe('basic rendering', function () {
    it('should render label when isEditing is false', function () {
      var component = mount(React.createElement(EditableInput, {
        isEditing: false,
        testSection: "editable-label",
        type: "text"
      }));
      expect(component.find('[data-test-section="editable-label"]').exists()).toBe(true);
      expect(component.find('Input').exists()).toBe(false);
    });
    it('should render Input when isEditing is true', function () {
      var component = mount(React.createElement(EditableInput, {
        isEditing: true,
        testSection: "editable-label",
        type: "text"
      }));
      expect(component.find('[data-test-section="editable-label"]').exists()).toBe(false);
      expect(component.find('Input').exists()).toBe(true);
    });
    it('should pass props to Input', function () {
      var component = mount(React.createElement(EditableInput, {
        isEditing: true,
        type: "text",
        note: "test"
      }));
      var expectedProps = {
        focus: true,
        value: '',
        isRequired: false,
        displayError: false,
        label: '',
        note: 'test',
        onFocus: expect.any(Function),
        onBlur: expect.any(Function),
        onChange: noop,
        placeholder: '',
        type: 'text'
      };
      expect(component.find('Input').props()).toEqual(expectedProps);
    });
  });
  describe('editing', function () {
    it('should be editable when label is clicked', function () {
      var component = mount(React.createElement(EditableInput, {
        testSection: "editable-label",
        type: "text"
      }));
      expect(component.state().isEditing).toBe(false);
      component.find('[data-test-section="editable-label"]').simulate('click');
      expect(component.state().isEditing).toBe(true);
    });
    it('should cancel editing if a user clicks outside text field', function () {
      var component = mount(React.createElement(EditableInput, {
        isEditing: true,
        type: "text"
      }));
      component.find('input').simulate('blur');
      expect(component.state().isEditing).toBe(false);
    });
    it('should execute onChange prop when text field changes', function () {
      var newValue = 'new value';
      var oldValue = 'old value';
      var onChangeSpy = jest.fn();
      var component = mount(React.createElement(EditableInput, {
        isEditing: true,
        onChange: onChangeSpy,
        type: "text",
        value: oldValue
      }));
      component.find('input').simulate('change', {
        target: {
          value: newValue
        }
      });
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy.mock.calls[0][0].target.value).toEqual(newValue);
    });
  });
});