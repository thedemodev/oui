function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import Input from '../Input';

var EditableInput =
/*#__PURE__*/
function (_Component) {
  _inherits(EditableInput, _Component);

  function EditableInput(props) {
    var _this;

    _classCallCheck(this, EditableInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "blur", function () {
      _this.setState({
        isEditing: false
      });

      _this.props.onBlur();
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.setState({
        isEditing: true
      });

      _this.props.onFocus();
    });

    _this.state = {
      isEditing: props.isEditing
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          displayError = _this$props.displayError,
          note = _this$props.note,
          label = _this$props.label,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          testSection = _this$props.testSection,
          type = _this$props.type,
          value = _this$props.value;
      var isEditing = this.state.isEditing;
      return React.createElement("div", {
        "data-oui-component": true
      }, isEditing ? React.createElement(Input, {
        focus: true,
        displayError: displayError,
        label: label,
        note: note,
        onFocus: this.focus,
        onBlur: this.blur,
        onChange: onChange,
        placeholder: placeholder,
        type: type,
        value: value
      }) : React.createElement("div", {
        "data-test-section": testSection,
        className: "cursor--pointer editable soft-half",
        onClick: this.focus
      }, value));
    }
  }]);

  return EditableInput;
}(Component);

EditableInput.defaultProps = {
  displayError: false,
  isEditing: false,
  label: '',
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  placeholder: '',
  value: ''
};
EditableInput.propTypes = {
  /** Toggle error state styles  */
  displayError: PropTypes.bool,

  /** Determines if the component is in edit mode */
  isEditing: PropTypes.bool,

  /** Text that describes the input */
  label: PropTypes.string,

  /** Append note near form input. */
  note: PropTypes.string,

  /** Function that fires when the input goes out of focus */
  onBlur: PropTypes.func,

  /** Function that fires when the input loses focus after the value changes */
  onChange: PropTypes.func,

  /** Function that fires when the input is focused */
  onFocus: PropTypes.func,

  /** Placeholder for input */
  placeholder: PropTypes.string,

  /** Used for data-test-section attribute on the link */
  testSection: PropTypes.string,

  /** Supported input types */
  type: PropTypes.oneOf(['text', 'password', 'date', 'number', 'percent', 'email', 'url', 'search', 'tel']).isRequired,

  /** Text within the input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default EditableInput;