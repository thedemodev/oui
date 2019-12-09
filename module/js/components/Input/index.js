function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useCallback } from 'react';
import Label from '../Label';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/**
 * Generates an `input` element (optionally wrapped in a label) and accepts
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Input = React.forwardRef(function (props, ref) {
  var label = props.label,
      displayError = props.displayError,
      testSection = props.testSection,
      isOptional = props.isOptional,
      note = props.note,
      isRequired = props.isRequired,
      id = props.id,
      isFilter = props.isFilter,
      type = props.type,
      value = props.value,
      defaultValue = props.defaultValue,
      placeholder = props.placeholder,
      isReadOnly = props.isReadOnly,
      isDisabled = props.isDisabled,
      onBlur = props.onBlur,
      onInput = props.onInput,
      onChange = props.onChange,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onFocus = props.onFocus,
      min = props.min,
      max = props.max,
      step = props.step,
      maxLength = props.maxLength,
      textAlign = props.textAlign;
  var renderNote = useCallback(function () {
    return React.createElement("div", {
      className: "oui-form-note",
      "data-test-section": testSection && testSection + '-note'
    }, note);
  }, [note, testSection]);

  var renderInput = function renderInput() {
    var hasAlignStyle = false;

    if (textAlign) {
      hasAlignStyle = true;
    }

    var classes = classNames('oui-text-input', {
      'oui-text-input--read-only': isReadOnly
    }, {
      'oui-text-input--search': isFilter
    }, {
      'oui-form-bad-news': displayError
    }, _defineProperty({}, "text--".concat(textAlign), hasAlignStyle));
    return React.createElement("input", _extends({
      "data-oui-component": true,
      className: classes,
      id: id,
      ref: ref,
      type: type,
      value: value,
      defaultValue: defaultValue,
      placeholder: placeholder,
      required: isRequired,
      readOnly: isReadOnly,
      disabled: isDisabled,
      onBlur: onBlur,
      onChange: onChange,
      onClick: onClick,
      onInput: onInput,
      onKeyDown: onKeyDown,
      onFocus: onFocus,
      min: min,
      max: max,
      step: step
    }, typeof maxLength === 'undefined' ? {} : {
      maxLength: maxLength
    }, {
      "data-test-section": testSection,
      autoFocus: focus
    }));
  };

  if (label) {
    return React.createElement("div", {
      "data-oui-component": true,
      className: classNames({
        'oui-form-bad-news': displayError
      })
    }, React.createElement(Label, {
      testSection: testSection && testSection + '-label',
      isRequired: isRequired,
      isOptional: isOptional,
      inputId: id
    }, label), renderInput(props, ref), note && renderNote(props));
  }

  return React.createElement(React.Fragment, null, renderInput(props, ref), note && renderNote(props));
});
Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: PropTypes.string,

  /** Includes search icon if true */
  displayError: PropTypes.bool,

  /** Id of the input to properly associate with the input's label */
  id: PropTypes.string,

  /** Prevents input from being modified and appears disabled */
  isDisabled: PropTypes.bool,

  /** Includes error if true */
  isFilter: PropTypes.bool,

  /** Adds an optional label if there is a label provided
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isOptional: function verifyIsOptionalProp(props) {
    if (props.isOptional && !props.label) {
      return new Error('Must include a value for the label prop to use the isOptional prop');
    }

    return null;
  },

  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly: PropTypes.bool,

  /** Includes required asterisk label if true
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isRequired: function verifyIsRequiredProp(props) {
    if (props.isRequired && !props.label) {
      return new Error('Must include a value for the label prop to use the isRequired prop');
    }

    return null;
  },

  /** Text that describes the input */
  label: PropTypes.string,

  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max: PropTypes.number,

  /**
   * Max length of the input value. Should be used only when type is 'text',
   * 'email', 'search', 'password', 'tel', or 'url'.
   */
  maxLength: PropTypes.number,

  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min: PropTypes.number,

  /** Form note for the input */
  note: PropTypes.string,

  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
   */
  onBlur: PropTypes.func,

  /** Function that fires when the input loses focus after the value changes */
  onChange: PropTypes.func,

  /** Function that fires when the input is clicked */
  onClick: PropTypes.func,

  /** Function that fires when the input gains focus */
  onFocus: PropTypes.func,

  /** Function that fires on keypress */
  onInput: PropTypes.func,

  /** Function that fires when a key is pressed down */
  onKeyDown: PropTypes.func,

  /** Input placeholder text */
  placeholder: PropTypes.string,

  /** Input step value */
  step: PropTypes.string,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Align text inside input. Default is left. */
  textAlign: PropTypes.oneOf(['left', 'right']),

  /** Supported input types */
  type: PropTypes.oneOf(['text', 'password', 'date', 'number', 'email', 'url', 'search', 'tel', 'time']).isRequired,

  /** Text within the input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Input.displayName = 'Input';
Input.defaultProps = {
  note: null,
  isRequired: false
};
export default Input;