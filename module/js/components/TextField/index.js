/**
 * DEPERCATION NOTICE: TextField is no longer being maintained,
 * use Input component instead.
 */
import React from 'react';
import Label from '../Label';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/**
 * Generates an `input` element (optionally wrapped in a label) and accepts
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var TextField = function TextField(_ref) {
  var _ref$note = _ref.note,
      note = _ref$note === void 0 ? false : _ref$note,
      defaultValue = _ref.defaultValue,
      _ref$displayError = _ref.displayError,
      displayError = _ref$displayError === void 0 ? false : _ref$displayError,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isFilter = _ref.isFilter,
      isFilter = _ref$isFilter === void 0 ? false : _ref$isFilter,
      isOptional = _ref.isOptional,
      isReadOnly = _ref.isReadOnly,
      onBlur = _ref.onBlur,
      isRequired = _ref.isRequired,
      label = _ref.label,
      min = _ref.min,
      max = _ref.max,
      onChange = _ref.onChange,
      onInput = _ref.onInput,
      onKeyDown = _ref.onKeyDown,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      testSection = _ref.testSection,
      type = _ref.type,
      value = _ref.value;
  var wrapperClasses = classnames({
    'oui-form-bad-news': displayError
  });
  var inputClassNames = classnames('oui-text-input', {
    'oui-text-input--search': isFilter,
    'text--right': type === 'number' || type === 'percent'
  });
  var inputType = type;

  if (type === 'percent') {
    inputType = 'number'; // min must be less than max, and both must be within 0 - 100.
    // Otherwise, ignore and set to default

    var oldMin = min;
    min = !min || min < 0 || min > 100 || min > max ? 0 : min;
    max = !max || max < 0 || max > 100 || max < oldMin ? 100 : max;
  }

  return (
    /* eslint-disable react/jsx-no-bind */
    React.createElement("div", {
      "data-oui-component": true,
      className: wrapperClasses ? 'oui-form-bad-news' : null
    }, label && React.createElement(Label, {
      displayError: displayError,
      isRequired: isRequired,
      isOptional: isOptional
    }, label), React.createElement("span", {
      className: "flex flex-align--center"
    }, React.createElement("input", {
      className: inputClassNames,
      type: inputType,
      value: value,
      defaultValue: defaultValue,
      placeholder: placeholder,
      required: isRequired,
      readOnly: isReadOnly,
      disabled: isDisabled,
      onInput: onInput,
      onChange: onChange,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      onFocus: onFocus,
      min: min,
      max: max,
      "data-test-section": testSection
    }), type === 'percent' && React.createElement("span", {
      className: "push-half--left push--right"
    }, "%")), note && React.createElement("div", {
      className: "oui-form-note"
    }, note))
  );
};

TextField.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: PropTypes.string,

  /** Toggle error state styles  */
  displayError: PropTypes.bool,

  /** Prevents input from being modified and appears disabled */
  isDisabled: PropTypes.bool,

  /** Includes error if true */
  isFilter: PropTypes.bool,

  /** Adds an optional label if there is a label provided
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isOptional: PropTypes.bool,

  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly: PropTypes.bool,

  /** Prevents input from being submitted without value */
  isRequired: PropTypes.bool,

  /** Text that describes the input */
  label: PropTypes.string,

  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max: PropTypes.number,

  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min: PropTypes.number,

  /** Append note near form input. */
  note: PropTypes.string,

  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
  */
  onBlur: PropTypes.func,

  /** Function that fires when the input loses focus after the value changes */
  onChange: PropTypes.func,

  /** Function that fires when the input gains focus */
  onFocus: PropTypes.func,

  /** Function that fires on keypress */
  onInput: PropTypes.func,

  /** Function that fires when a key is pressed down */
  onKeyDown: PropTypes.func,

  /** Input placeholder text */
  placeholder: PropTypes.string,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Supported input types */
  type: PropTypes.oneOf(['text', 'password', 'date', 'number', 'percent', 'email', 'url', 'search', 'tel']).isRequired,

  /** Text within the input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default TextField;