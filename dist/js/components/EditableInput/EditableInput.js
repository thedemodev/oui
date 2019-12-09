"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.noop"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
      return _react["default"].createElement("div", {
        "data-oui-component": true
      }, isEditing ? _react["default"].createElement(_Input["default"], {
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
      }) : _react["default"].createElement("div", {
        "data-test-section": testSection,
        className: "cursor--pointer editable soft-half",
        onClick: this.focus
      }, value));
    }
  }]);

  return EditableInput;
}(_react.Component);

EditableInput.defaultProps = {
  displayError: false,
  isEditing: false,
  label: '',
  onBlur: _lodash["default"],
  onChange: _lodash["default"],
  onFocus: _lodash["default"],
  placeholder: '',
  value: ''
};
EditableInput.propTypes = {
  /** Toggle error state styles  */
  displayError: _propTypes["default"].bool,

  /** Determines if the component is in edit mode */
  isEditing: _propTypes["default"].bool,

  /** Text that describes the input */
  label: _propTypes["default"].string,

  /** Append note near form input. */
  note: _propTypes["default"].string,

  /** Function that fires when the input goes out of focus */
  onBlur: _propTypes["default"].func,

  /** Function that fires when the input loses focus after the value changes */
  onChange: _propTypes["default"].func,

  /** Function that fires when the input is focused */
  onFocus: _propTypes["default"].func,

  /** Placeholder for input */
  placeholder: _propTypes["default"].string,

  /** Used for data-test-section attribute on the link */
  testSection: _propTypes["default"].string,

  /** Supported input types */
  type: _propTypes["default"].oneOf(['text', 'password', 'date', 'number', 'percent', 'email', 'url', 'search', 'tel']).isRequired,

  /** Text within the input */
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = EditableInput;
exports["default"] = _default;