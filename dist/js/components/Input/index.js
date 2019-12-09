"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Label = _interopRequireDefault(require("../Label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generates an `input` element (optionally wrapped in a label) and accepts
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Input = _react["default"].forwardRef(function (props, ref) {
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
  var renderNote = (0, _react.useCallback)(function () {
    return _react["default"].createElement("div", {
      className: "oui-form-note",
      "data-test-section": testSection && testSection + '-note'
    }, note);
  }, [note, testSection]);

  var renderInput = function renderInput() {
    var hasAlignStyle = false;

    if (textAlign) {
      hasAlignStyle = true;
    }

    var classes = (0, _classnames["default"])('oui-text-input', {
      'oui-text-input--read-only': isReadOnly
    }, {
      'oui-text-input--search': isFilter
    }, {
      'oui-form-bad-news': displayError
    }, _defineProperty({}, "text--".concat(textAlign), hasAlignStyle));
    return _react["default"].createElement("input", _extends({
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
    return _react["default"].createElement("div", {
      "data-oui-component": true,
      className: (0, _classnames["default"])({
        'oui-form-bad-news': displayError
      })
    }, _react["default"].createElement(_Label["default"], {
      testSection: testSection && testSection + '-label',
      isRequired: isRequired,
      isOptional: isOptional,
      inputId: id
    }, label), renderInput(props, ref), note && renderNote(props));
  }

  return _react["default"].createElement(_react["default"].Fragment, null, renderInput(props, ref), note && renderNote(props));
});

Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: _propTypes["default"].string,

  /** Includes search icon if true */
  displayError: _propTypes["default"].bool,

  /** Id of the input to properly associate with the input's label */
  id: _propTypes["default"].string,

  /** Prevents input from being modified and appears disabled */
  isDisabled: _propTypes["default"].bool,

  /** Includes error if true */
  isFilter: _propTypes["default"].bool,

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
  isReadOnly: _propTypes["default"].bool,

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
  label: _propTypes["default"].string,

  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max: _propTypes["default"].number,

  /**
   * Max length of the input value. Should be used only when type is 'text',
   * 'email', 'search', 'password', 'tel', or 'url'.
   */
  maxLength: _propTypes["default"].number,

  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min: _propTypes["default"].number,

  /** Form note for the input */
  note: _propTypes["default"].string,

  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
   */
  onBlur: _propTypes["default"].func,

  /** Function that fires when the input loses focus after the value changes */
  onChange: _propTypes["default"].func,

  /** Function that fires when the input is clicked */
  onClick: _propTypes["default"].func,

  /** Function that fires when the input gains focus */
  onFocus: _propTypes["default"].func,

  /** Function that fires on keypress */
  onInput: _propTypes["default"].func,

  /** Function that fires when a key is pressed down */
  onKeyDown: _propTypes["default"].func,

  /** Input placeholder text */
  placeholder: _propTypes["default"].string,

  /** Input step value */
  step: _propTypes["default"].string,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Align text inside input. Default is left. */
  textAlign: _propTypes["default"].oneOf(['left', 'right']),

  /** Supported input types */
  type: _propTypes["default"].oneOf(['text', 'password', 'date', 'number', 'email', 'url', 'search', 'tel', 'time']).isRequired,

  /** Text within the input */
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Input.displayName = 'Input';
Input.defaultProps = {
  note: null,
  isRequired: false
};
var _default = Input;
exports["default"] = _default;