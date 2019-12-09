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

/* eslint-disable react/jsx-no-bind */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import OutsideClickHandler from 'react-outside-click-handler';
import momentPropTypes from 'react-moment-proptypes';
import Input from '../Input';
import CalendarNavButton from './CalendarNavButton';
import { constants } from './constants';
import { getDateString, getCustomMonthElement, isOutsideAcceptableDateRange } from './fns';

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
        currentDateString: getDateString(date)
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
      return isOutsideAcceptableDateRange(day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable);
    });

    _this.state = {
      currentDate: _this.props.initialDate,
      currentDateString: getDateString(_this.props.initialDate),
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
      return React.createElement(OutsideClickHandler, {
        onOutsideClick: this.onOutsideClick
      }, React.createElement("div", {
        className: classNames('oui-date-picker', isAbsolutelyPositioned && 'oui-date-picker--absolute')
      }, React.createElement("div", {
        className: "oui-date-picker__input-row"
      }, React.createElement(Input, {
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
      })), dayPickerIsOpen && React.createElement(DayPickerSingleDateController, {
        date: this.state.currentDate,
        daySize: constants.DAY_SIZE,
        focused: this.state.isFocused,
        hideKeyboardShortcutsPanel: true,
        initialVisibleMonth: initialVisibleMonth,
        isOutsideRange: this.isOutsideAcceptableDateRange,
        navNext: React.createElement(CalendarNavButton, {
          type: "next"
        }),
        navPrev: React.createElement(CalendarNavButton, {
          type: "previous"
        }),
        numberOfMonths: constants.SINGLE_NUM_MONTHS,
        onClose: this.onClose,
        onDateChange: this.onDateChange,
        onFocusChange: this.onFocusChange,
        phrases: constants.PHRASES,
        renderMonthElement: getCustomMonthElement,
        transitionDuration: constants.TRANSITION_DURATION
      })));
    }
  }]);

  return DatePicker;
}(React.Component);

DatePicker.propTypes = {
  /** An initial date to populate the input with, must be a moment() */
  initialDate: momentPropTypes.momentObj,

  /** Function to determine what month the date picker
   *  should show on the left hand side
   */
  initialVisibleMonth: PropTypes.func,

  /** The id of the input, used to associate with a label */
  inputId: PropTypes.string.isRequired,

  /** The label text above the input */
  inputLabel: PropTypes.string,

  /** The text to use as the placeholder of the label */
  inputPlaceholder: PropTypes.string,

  /** When true, opens the calendar on top of other elements on the page */
  isAbsolutelyPositioned: PropTypes.bool,

  /** If true, disables the input */
  isDisabledInput: PropTypes.bool,

  /** Determines if the input is currently focused or not  */
  isFocused: PropTypes.bool,

  /** Determines if the user can choose a date in the future  */
  isFutureDateSelectable: PropTypes.bool,

  /**
   * Custom function to determine if a date is outside the acceptable range.
   * Function is called for each visible day, with a moment() object
   * passed as the first parameter.
   */
  isOutsideRange: PropTypes.func,

  /** Determines if the user can choose a date in the past  */
  isPastDateSelectable: PropTypes.bool,

  /**
   * Determines if the calendar remains open no matter
   * where the user clicks on the page
   */
  keepOpenAlways: PropTypes.bool,

  /** Determines if the calendar should stay
   * open when a date has been selected,
   * but close when user clicks away
   */
  keepOpenOnDateSelect: PropTypes.bool,

  /** Function callback to perform when a date has been selected.
   * The date selected is passed as a parameter.
   * Use React.createRef(); to get access to this component's
   * onDateChange method and set it from a parent
   */
  onDateChange: PropTypes.func
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
export default DatePicker;