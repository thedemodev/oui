"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _lodash = _interopRequireDefault(require("lodash.noop"));

var _EditableInput = _interopRequireDefault(require("../EditableInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/EditableInput', function () {
  describe('basic rendering', function () {
    it('should render label when isEditing is false', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_EditableInput["default"], {
        isEditing: false,
        testSection: "editable-label",
        type: "text"
      }));
      expect(component.find('[data-test-section="editable-label"]').exists()).toBe(true);
      expect(component.find('Input').exists()).toBe(false);
    });
    it('should render Input when isEditing is true', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_EditableInput["default"], {
        isEditing: true,
        testSection: "editable-label",
        type: "text"
      }));
      expect(component.find('[data-test-section="editable-label"]').exists()).toBe(false);
      expect(component.find('Input').exists()).toBe(true);
    });
    it('should pass props to Input', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_EditableInput["default"], {
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
        onChange: _lodash["default"],
        placeholder: '',
        type: 'text'
      };
      expect(component.find('Input').props()).toEqual(expectedProps);
    });
  });
  describe('editing', function () {
    it('should be editable when label is clicked', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_EditableInput["default"], {
        testSection: "editable-label",
        type: "text"
      }));
      expect(component.state().isEditing).toBe(false);
      component.find('[data-test-section="editable-label"]').simulate('click');
      expect(component.state().isEditing).toBe(true);
    });
    it('should cancel editing if a user clicks outside text field', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_EditableInput["default"], {
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
      var component = (0, _enzyme.mount)(_react["default"].createElement(_EditableInput["default"], {
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