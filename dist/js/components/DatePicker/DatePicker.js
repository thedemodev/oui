"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("react-dates/initialize");

var _reactDates = require("react-dates");

var _reactOutsideClickHandler = _interopRequireDefault(require("react-outside-click-handler"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _Input = _interopRequireDefault(require("../Input"));

var _CalendarNavButton = _interopRequireDefault(require("./CalendarNavButton"));

var _constants = require("./constants");

var _fns = require("./fns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onFocusChange", function (_ref) {
      var focused = _ref.focused;

      _this.setState({
        isFocused: focused,
        dayPickerIsOpen: focused || _this.props.keepOpenAlways
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDateChange", function (date) {
      _this.setState({
        currentDate: date,
        currentDateString: (0, _fns.getDateString)(date)
      });

      _this.props.onDateChange && _this.props.onDateChange(date);
    });

    _defineProperty(_assertThisInitialized(_this), "onOutsideClick", function () {
      !_this.props.keepOpenAlways && _this.onFocusChange({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        dayPickerIsOpen: _this.props.keepOpenOnDateSelect || _this.props.keepOpenAlways
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isOutsideAcceptableDateRange", function (day) {
      var _this$props = _this.props,
          isOutsideRange = _this$props.isOutsideRange,
          isFutureDateSelectable = _this$props.isFutureDateSelectable,
          isPastDateSelectable = _this$props.isPastDateSelectable;
      return (0, _fns.isOutsideAcceptableDateRange)(day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable);
    });

    _this.state = {
      currentDate: _this.props.initialDate,
      currentDateString: (0, _fns.getDateString)(_this.props.initialDate),
      isFocused: _this.props.isFocused,
      dayPickerIsOpen: _this.props.isFocused || _this.props.keepOpenAlways
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.isFocused !== this.props.isFocused) {
        this.onFocusChange({
          focused: this.props.isFocused
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          initialVisibleMonth = _this$props2.initialVisibleMonth,
          isDisabledInput = _this$props2.isDisabledInput,
          inputId = _this$props2.inputId,
          inputLabel = _this$props2.inputLabel,
          inputPlaceholder = _this$props2.inputPlaceholder,
          isAbsolutelyPositioned = _this$props2.isAbsolutelyPositioned;
      var _this$state = this.state,
          currentDateString = _this$state.currentDateString,
          dayPickerIsOpen = _this$state.dayPickerIsOpen;
      return _react["default"].createElement(_reactOutsideClickHandler["default"], {
        onOutsideClick: this.onOutsideClick
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('oui-date-picker', isAbsolutelyPositioned && 'oui-date-picker--absolute')
      }, _react["default"].createElement("div", {
        className: "oui-date-picker__input-row"
      }, _react["default"].createElement(_Input["default"], {
        isDisabled: isDisabledInput,
        id: inputId,
        isReadOnly: true,
        label: inputLabel,
        name: "date-picker",
        onBlur: this.onBlur,
        onFocus: this.onFocusChange.bind(this, {
          focused: true
        }),
        placeholder: inputPlaceholder,
        type: "text",
        value: currentDateString
      })), dayPickerIsOpen && _react["default"].createElement(_reactDates.DayPickerSingleDateController, {
        date: this.state.currentDate,
        daySize: _constants.constants.DAY_SIZE,
        focused: this.state.isFocused,
        hideKeyboardShortcutsPanel: true,
        initialVisibleMonth: initialVisibleMonth,
        isOutsideRange: this.isOutsideAcceptableDateRange,
        navNext: _react["default"].createElement(_CalendarNavButton["default"], {
          type: "next"
        }),
        navPrev: _react["default"].createElement(_CalendarNavButton["default"], {
          type: "previous"
        }),
        numberOfMonths: _constants.constants.SINGLE_NUM_MONTHS,
        onClose: this.onClose,
        onDateChange: this.onDateChange,
        onFocusChange: this.onFocusChange,
        phrases: _constants.constants.PHRASES,
        renderMonthElement: _fns.getCustomMonthElement,
        transitionDuration: _constants.constants.TRANSITION_DURATION
      })));
    }
  }]);

  return DatePicker;
}(_react["default"].Component);

DatePicker.propTypes = {
  /** An initial date to populate the input with, must be a moment() */
  initialDate: _reactMomentProptypes["default"].momentObj,

  /** Function to determine what month the date picker
   *  should show on the left hand side
   */
  initialVisibleMonth: _propTypes["default"].func,

  /** The id of the input, used to associate with a label */
  inputId: _propTypes["default"].string.isRequired,

  /** The label text above the input */
  inputLabel: _propTypes["default"].string,

  /** The text to use as the placeholder of the label */
  inputPlaceholder: _propTypes["default"].string,

  /** When true, opens the calendar on top of other elements on the page */
  isAbsolutelyPositioned: _propTypes["default"].bool,

  /** If true, disables the input */
  isDisabledInput: _propTypes["default"].bool,

  /** Determines if the input is currently focused or not  */
  isFocused: _propTypes["default"].bool,

  /** Determines if the user can choose a date in the future  */
  isFutureDateSelectable: _propTypes["default"].bool,

  /**
   * Custom function to determine if a date is outside the acceptable range.
   * Function is called for each visible day, with a moment() object
   * passed as the first parameter.
   */
  isOutsideRange: _propTypes["default"].func,

  /** Determines if the user can choose a date in the past  */
  isPastDateSelectable: _propTypes["default"].bool,

  /**
   * Determines if the calendar remains open no matter
   * where the user clicks on the page
   */
  keepOpenAlways: _propTypes["default"].bool,

  /** Determines if the calendar should stay
   * open when a date has been selected,
   * but close when user clicks away
   */
  keepOpenOnDateSelect: _propTypes["default"].bool,

  /** Function callback to perform when a date has been selected.
   * The date selected is passed as a parameter.
   * Use React.createRef(); to get access to this component's
   * onDateChange method and set it from a parent
   */
  onDateChange: _propTypes["default"].func
};
DatePicker.defaultProps = {
  inputLabel: 'Select Date',
  inputPlaceholder: 'Select Date',
  inputId: 'date-input-01',
  isAbsolutelyPositioned: false,
  isFutureDateSelectable: true,
  isPastDateSelectable: true,
  keepOpenAlways: false,
  keepOpenOnDateSelect: false
};
var _default = DatePicker;
exports["default"] = _default;