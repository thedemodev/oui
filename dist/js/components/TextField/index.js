"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("../Label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * DEPERCATION NOTICE: TextField is no longer being maintained,
 * use Input component instead.
 */

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
  var wrapperClasses = (0, _classnames["default"])({
    'oui-form-bad-news': displayError
  });
  var inputClassNames = (0, _classnames["default"])('oui-text-input', {
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
    _react["default"].createElement("div", {
      "data-oui-component": true,
      className: wrapperClasses ? 'oui-form-bad-news' : null
    }, label && _react["default"].createElement(_Label["default"], {
      displayError: displayError,
      isRequired: isRequired,
      isOptional: isOptional
    }, label), _react["default"].createElement("span", {
      className: "flex flex-align--center"
    }, _react["default"].createElement("input", {
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
    }), type === 'percent' && _react["default"].createElement("span", {
      className: "push-half--left push--right"
    }, "%")), note && _react["default"].createElement("div", {
      className: "oui-form-note"
    }, note))
  );
};

TextField.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: _propTypes["default"].string,

  /** Toggle error state styles  */
  displayError: _propTypes["default"].bool,

  /** Prevents input from being modified and appears disabled */
  isDisabled: _propTypes["default"].bool,

  /** Includes error if true */
  isFilter: _propTypes["default"].bool,

  /** Adds an optional label if there is a label provided
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isOptional: _propTypes["default"].bool,

  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly: _propTypes["default"].bool,

  /** Prevents input from being submitted without value */
  isRequired: _propTypes["default"].bool,

  /** Text that describes the input */
  label: _propTypes["default"].string,

  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max: _propTypes["default"].number,

  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min: _propTypes["default"].number,

  /** Append note near form input. */
  note: _propTypes["default"].string,

  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
  */
  onBlur: _propTypes["default"].func,

  /** Function that fires when the input loses focus after the value changes */
  onChange: _propTypes["default"].func,

  /** Function that fires when the input gains focus */
  onFocus: _propTypes["default"].func,

  /** Function that fires on keypress */
  onInput: _propTypes["default"].func,

  /** Function that fires when a key is pressed down */
  onKeyDown: _propTypes["default"].func,

  /** Input placeholder text */
  placeholder: _propTypes["default"].string,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Supported input types */
  type: _propTypes["default"].oneOf(['text', 'password', 'date', 'number', 'percent', 'email', 'url', 'search', 'tel']).isRequired,

  /** Text within the input */
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = TextField;
exports["default"] = _default;