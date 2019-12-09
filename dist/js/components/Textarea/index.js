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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Generates a `textarea` element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Textarea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: "blur",
    value: function blur() {
      if (this._textarea) {
        this._textarea.blur();
      }
    }
  }, {
    key: "renderTextarea",
    value: function renderTextarea(_ref) {
      var _this = this;

      var defaultValue = _ref.defaultValue,
          displayError = _ref.displayError,
          focus = _ref.focus,
          isReadOnly = _ref.isReadOnly,
          isRequired = _ref.isRequired,
          isDisabled = _ref.isDisabled,
          maxLength = _ref.maxLength,
          numRows = _ref.numRows,
          onBlur = _ref.onBlur,
          onChange = _ref.onChange,
          onFocus = _ref.onFocus,
          onInput = _ref.onInput,
          onKeyDown = _ref.onKeyDown,
          placeholder = _ref.placeholder,
          testSection = _ref.testSection,
          value = _ref.value;
      var classes = (0, _classnames["default"])({
        'oui-textarea': true
      }, {
        'oui-form-bad-news': displayError
      });
      return (
        /* eslint-disable react/jsx-no-bind */
        _react["default"].createElement("textarea", _extends({
          "data-oui-component": true,
          className: classes,
          ref: function ref(c) {
            _this._textarea = c;
          },
          value: value,
          defaultValue: defaultValue,
          placeholder: placeholder,
          required: isRequired,
          readOnly: isReadOnly,
          disabled: isDisabled
        }, typeof maxLength === 'undefined' ? {} : {
          maxLength: maxLength
        }, {
          maxLength: maxLength,
          rows: numRows,
          onInput: onInput,
          onChange: onChange,
          onBlur: onBlur,
          onKeyDown: onKeyDown,
          onFocus: onFocus,
          autoFocus: focus,
          "data-test-section": testSection
        }))
        /* eslint-enable react/jsx-no-bind */

      );
    }
  }, {
    key: "renderNote",
    value: function renderNote(_ref2) {
      var note = _ref2.note,
          testSection = _ref2.testSection;
      return _react["default"].createElement("div", {
        className: "oui-form-note",
        "data-test-section": testSection && testSection + '-note'
      }, note);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          displayError = _this$props.displayError,
          testSection = _this$props.testSection,
          isOptional = _this$props.isOptional,
          note = _this$props.note;

      if (label) {
        return _react["default"].createElement("div", {
          "data-oui-component": true,
          className: (0, _classnames["default"])({
            'oui-form-bad-news': displayError
          })
        }, _react["default"].createElement(_Label["default"], {
          testSection: testSection && testSection + '-label'
        }, _react["default"].createElement("div", {
          className: "oui-label"
        }, label, isOptional && _react["default"].createElement("span", {
          className: "oui-label__optional"
        }, "(Optional)")), this.renderTextarea(this.props)), note && this.renderNote(this.props));
      }

      if (note) {
        return [this.renderTextarea(this.props), this.renderNote(this.props)];
      }

      return this.renderTextarea(this.props);
    }
  }]);

  return Textarea;
}(_react["default"].Component);

Textarea.propTypes = {
  /** The default value of the textarea used on initial render */
  defaultValue: _propTypes["default"].string,

  /** Shows error styling if true */
  displayError: _propTypes["default"].bool,

  /** Auto focus the Textaraea if true */
  focus: _propTypes["default"].bool,

  /** Prevents textarea from being modified and appears disabled */
  isDisabled: _propTypes["default"].bool,

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

  /** Prevents textarea from being modified but doesn't appear disabled */
  isReadOnly: _propTypes["default"].bool,

  /** Prevents textarea from being submitted without value */
  isRequired: _propTypes["default"].bool,

  /** Text that describes the textarea */
  label: _propTypes["default"].string,

  /**
   * Max length of the input value
   */
  maxLength: _propTypes["default"].number,

  /** Form note for the input */
  note: _propTypes["default"].string,

  /** Number of rows to fit in the textarea */
  numRows: _propTypes["default"].number,

  /**
    Function that fires when the textarea loses focus. It fires regardless of
    whether the value has changed.
  */
  onBlur: _propTypes["default"].func,

  /**
    Function that fires when the textarea loses focus after the value
    changes
  */
  onChange: _propTypes["default"].func,

  /** Function that fires when the textarea gains focus */
  onFocus: _propTypes["default"].func,

  /** Function that fires the the textarea value changes */
  onInput: _propTypes["default"].func,

  /** Function that fires when a key is pressed down */
  onKeyDown: _propTypes["default"].func,

  /** Textarea placeholder text */
  placeholder: _propTypes["default"].string,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Text within the textarea */
  value: _propTypes["default"].string
};
Textarea.defaultProps = {
  displayError: false,
  focus: false,
  label: null,
  note: null,
  numRows: 3,
  isOptional: false
};
var _default = Textarea;
exports["default"] = _default;