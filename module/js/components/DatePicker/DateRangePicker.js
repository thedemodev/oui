function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { DayPickerRangeController } from 'react-dates';
import OutsideClickHandler from 'react-outside-click-handler';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import Button from '../Button';
import ButtonRow from '../ButtonRow';
import Input from '../Input';
import CalendarNavButton from './CalendarNavButton';
import { constants } from './constants';
import { getDateString, getTimeString, getCustomMonthElement, isOutsideAcceptableDateRange, preserveTime } from './fns';

var DateRangePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateRangePicker, _React$Component);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck(this, DateRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onFocusChange", function (focusedInput) {
      if (_this.props.keepOpenOnDateSelect || _this.props.keepOpenAlways) {
        _this.setState({
          focusedInput: !focusedInput ? 'startDate' : focusedInput,
          dayPickerIsOpen: true
        });
      } else {
        _this.setState({
          focusedInput: focusedInput,
          dayPickerIsOpen: !!focusedInput
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDatesChange", function (_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate,
          _ref$resetTime = _ref.resetTime,
          resetTime = _ref$resetTime === void 0 ? false : _ref$resetTime;
      var newStartDate = startDate && moment(startDate);
      var newEndDate = endDate && moment(endDate);
      var _this$state = _this.state,
          prevStartDate = _this$state.startDate,
          prevEndDate = _this$state.endDate;

      if (!resetTime) {
        if (!prevStartDate && newStartDate) {
          newStartDate.startOf('day');
        } else if (newStartDate) {
          newStartDate = preserveTime(prevStartDate, newStartDate);
        }

        if (!prevEndDate && newEndDate) {
          newEndDate.endOf('day');
        } else if (newEndDate) {
          newEndDate = preserveTime(prevEndDate, newEndDate);
        }
      } // if no endDate selected, set to the end of the startDate by default


      newEndDate = newEndDate || newStartDate && moment(newStartDate).endOf('day');

      _this.setState({
        startDate: newStartDate,
        endDate: newEndDate,
        startDateString: getDateString(newStartDate),
        endDateString: getDateString(newEndDate),
        startTimeString: getTimeString(newStartDate),
        endTimeString: getTimeString(newEndDate)
      });

      _this.props.onDatesChange && _this.props.onDatesChange({
        startDate: newStartDate,
        endDate: newEndDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOutsideClick", function () {
      !_this.props.keepOpenAlways && _this.setState({
        dayPickerIsOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      var dayPickerShouldRemainOpen = _this.props.keepOpenOnDateSelect || _this.props.keepOpenAlways;

      if (dayPickerShouldRemainOpen) {
        _this.setState({
          dayPickerIsOpen: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isOutsideAcceptableDateRange", function (day) {
      var _this$props = _this.props,
          isOutsideRange = _this$props.isOutsideRange,
          isFutureDateSelectable = _this$props.isFutureDateSelectable,
          isPastDateSelectable = _this$props.isPastDateSelectable;
      return isOutsideAcceptableDateRange(day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPresetButtons", function (presetPanelOptions) {
      var presetButtons = presetPanelOptions.map(function (_ref2, index) {
        var label = _ref2.label,
            startDate = _ref2.startDate,
            endDate = _ref2.endDate,
            _ref2$resetTime = _ref2.resetTime,
            resetTime = _ref2$resetTime === void 0 ? true : _ref2$resetTime;
        var isSelected = startDate === _this.state.startDate && endDate === _this.state.endDate;
        var classes = classNames('oui-date-picker__range-preset-option', isSelected && 'oui-date-picker__range-preset-option--active');
        return React.createElement("li", {
          className: classes,
          key: index
        }, React.createElement(Button, {
          style: "unstyled",
          width: "full",
          onClick: function onClick() {
            return _this.onDatesChange({
              startDate: startDate,
              endDate: endDate,
              resetTime: resetTime
            });
          }
        }, React.createElement("span", {
          className: "link"
        }, label)));
      });
      return presetButtons;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSidePanel", function () {
      var _this$state2 = _this.state,
          endDate = _this$state2.endDate,
          startDate = _this$state2.startDate;
      var presetPanelOptions = _this.props.presetPanelOptions;
      var panelOptionsArePresent = presetPanelOptions && presetPanelOptions.length > 0;
      var panelButtons = _this.props.panelButtons;
      return React.createElement("div", {
        className: "oui-date-picker__range-panel"
      }, panelOptionsArePresent && React.createElement("div", {
        className: "oui-date-picker__range-presets"
      }, React.createElement("ul", {
        className: "oui-date-picker__range-preset-list push-triple--bottom"
      }, _this.renderPresetButtons(presetPanelOptions))), // render panel buttons via render props if a function is provided
      panelButtons && (typeof panelButtons === 'function' ? React.createElement(ButtonRow, {
        rightGroup: panelButtons({
          endDate: endDate,
          startDate: startDate,
          onDatesChange: _this.onDatesChange
        })
      }) : React.createElement(ButtonRow, {
        rightGroup: panelButtons
      })));
    });

    _this.state = {
      endDate: _this.props.initialEndDate,
      focusedInput: _this.props.focusedInput || null,
      dayPickerIsOpen: !!_this.props.focusedInput || _this.props.keepOpenAlways,
      startDate: _this.props.initialStartDate,
      startDateString: getDateString(_this.props.initialStartDate),
      endDateString: getDateString(_this.props.initialEndDate),
      startTimeString: getTimeString(_this.props.initialStartDate),
      endTimeString: getTimeString(_this.props.initialEndDate)
    };
    return _this;
  }

  _createClass(DateRangePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.focusedInput !== this.props.focusedInput) {
        this.onFocusChange(this.props.focusedInput);
      }
    }
  }, {
    key: "onTimeChange",
    value: function onTimeChange(event, timeToUpdate) {
      var newTime = event.target.value;

      var _newTime$split = newTime.split(':'),
          _newTime$split2 = _slicedToArray(_newTime$split, 2),
          hour = _newTime$split2[0],
          minute = _newTime$split2[1];

      var startDate = this.state.startDate;
      var endDate = this.state.endDate;

      if (timeToUpdate === 'startTime') {
        startDate.set({
          hour: hour,
          minute: minute
        });
      } else if (timeToUpdate === 'endTime') {
        if (!endDate) {
          endDate = moment(startDate);
        }

        endDate.set({
          hour: hour,
          minute: minute
        });
      }

      this.setState({
        startDate: startDate,
        endDate: endDate,
        startTimeString: getTimeString(startDate),
        endTimeString: getTimeString(endDate)
      });
      this.props.onDatesChange && this.props.onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
    }
    /**
     * Function called when either a start date
     * or end date has been changed.
     * The dates are passed as a parameter object with startDate and endDate
     * as keys as well as resetTime which is used to handle time defaults
     * and time preservation.
     *
     * The new dates are used to set the internal component state, before
     * passing those dates to this.props.onDatesChange() implemented by the
     * consumer.
     *
     * When resetTime = false (default behavior):
     *  - By default, when selecting dates, resetTime will be false, since
     *    we want to initally set startDate to 12:00am
     *    and endDate to 11:59(:59.999)pm
     *  - If the previous date (prevStartDate & prevEndDate) are not null,
     *    we want to preserve the time of the previous selection since
     *    the react-dates component blindly resets the time to 12pm.
     * When resetTime = true (primarily helpful for panelButtons):
     *  - If resetTime is true, we allow the time of both startDate and endDate
     *    to be the source of truth for time, ignoring what was previously set
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          endDateInputId = _this$props2.endDateInputId,
          endDateInputLabel = _this$props2.endDateInputLabel,
          endDateInputPlaceholder = _this$props2.endDateInputPlaceholder,
          endTimeInputId = _this$props2.endTimeInputId,
          endTimeInputLabel = _this$props2.endTimeInputLabel,
          hasTimeInputs = _this$props2.hasTimeInputs,
          isAbsolutelyPositioned = _this$props2.isAbsolutelyPositioned,
          initialVisibleMonth = _this$props2.initialVisibleMonth,
          isBorderless = _this$props2.isBorderless,
          panelButtons = _this$props2.panelButtons,
          presetPanelOptions = _this$props2.presetPanelOptions,
          startDateInputId = _this$props2.startDateInputId,
          startDateInputLabel = _this$props2.startDateInputLabel,
          startDateInputPlaceholder = _this$props2.startDateInputPlaceholder,
          startTimeInputId = _this$props2.startTimeInputId,
          startTimeInputLabel = _this$props2.startTimeInputLabel;
      var _this$state3 = this.state,
          dayPickerIsOpen = _this$state3.dayPickerIsOpen,
          endDateString = _this$state3.endDateString,
          endTimeString = _this$state3.endTimeString,
          startDateString = _this$state3.startDateString,
          startTimeString = _this$state3.startTimeString;
      var infoPanelPosition = null;

      if (presetPanelOptions) {
        infoPanelPosition = 'after';
      } else if (!presetPanelOptions && panelButtons) {
        infoPanelPosition = 'bottom';
      }

      var computedClassNames = classNames('oui-date-picker', isBorderless && 'oui-date-picker--borderless', isAbsolutelyPositioned && 'oui-date-picker--absolute');
      return React.createElement(OutsideClickHandler, {
        onOutsideClick: this.onOutsideClick
      }, React.createElement("div", {
        className: computedClassNames
      }, React.createElement("div", {
        className: "oui-date-picker__input-row"
      }, React.createElement("div", {
        className: classNames('push--right', isBorderless && 'flex--1')
      }, React.createElement(Input, {
        id: startDateInputId,
        isReadOnly: true,
        label: startDateInputLabel,
        name: "startDate",
        onFocus: function onFocus() {
          return _this2.onFocusChange('startDate');
        },
        placeholder: startDateInputPlaceholder,
        testSection: "date-range-picker-start-date-input",
        type: "text",
        value: startDateString
      })), hasTimeInputs && React.createElement("div", {
        className: classNames('push--right', isBorderless && 'flex--1')
      }, React.createElement(Input, {
        id: startTimeInputId,
        isReadOnly: false,
        label: startTimeInputLabel,
        name: "startTime",
        onChange: function onChange(e) {
          return _this2.onTimeChange(e, 'startTime');
        },
        testSection: "date-range-picker-start-time-input",
        type: "time",
        value: startTimeString
      })), React.createElement("div", {
        className: classNames(isBorderless && 'flex--1', hasTimeInputs && 'push--right')
      }, React.createElement(Input, {
        id: endDateInputId,
        isReadOnly: true,
        label: endDateInputLabel,
        name: "endDate",
        onFocus: function onFocus() {
          return _this2.onFocusChange('endDate');
        },
        placeholder: endDateInputPlaceholder,
        testSection: "date-range-picker-end-date-input",
        type: "text",
        value: endDateString
      })), hasTimeInputs && React.createElement("div", {
        className: classNames(isBorderless && 'flex--1')
      }, React.createElement(Input, {
        id: endTimeInputId,
        isReadOnly: false,
        label: endTimeInputLabel,
        name: "endTime",
        onChange: function onChange(e) {
          return _this2.onTimeChange(e, 'endTime');
        },
        testSection: "date-range-picker-end-time-input",
        type: "time",
        value: endTimeString
      }))), dayPickerIsOpen && React.createElement(DayPickerRangeController, {
        calendarInfoPosition: infoPanelPosition,
        daySize: constants.DAY_SIZE,
        endDate: this.state.endDate,
        focusedInput: this.state.focusedInput,
        hideKeyboardShortcutsPanel: true,
        initialVisibleMonth: initialVisibleMonth,
        isOutsideRange: this.isOutsideAcceptableDateRange,
        navNext: React.createElement(CalendarNavButton, {
          type: "next"
        }),
        navPrev: React.createElement(CalendarNavButton, {
          type: "previous"
        }),
        numberOfMonths: 2,
        onClose: this.onClose,
        onDatesChange: this.onDatesChange,
        onFocusChange: this.onFocusChange,
        phrases: constants.PHRASES,
        renderCalendarInfo: this.renderSidePanel,
        renderMonthElement: getCustomMonthElement,
        startDate: this.state.startDate,
        transitionDuration: constants.TRANSITION_DURATION
      })));
    }
  }]);

  return DateRangePicker;
}(React.Component);

var timeInputValidator = function timeInputValidator(props, propName, componentName) {
  if (props['hasTimeInputs'] === true) {
    if (props[propName] === undefined) {
      return new Error("Prop `".concat(propName, "` is marked as required, but its value is `undefined`."));
    } else if (typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "`, expected `string`."));
    }
  }
};

DateRangePicker.propTypes = {
  /** The id of the end date input, used to associate with a label */
  endDateInputId: PropTypes.string.isRequired,

  /** The label of the end date input */
  endDateInputLabel: PropTypes.string,

  /** The placeholder text of the end date input */
  endDateInputPlaceholder: PropTypes.string,

  /** The id of the end time input, used to associate with a label */
  endTimeInputId: timeInputValidator,

  /** The label of the end time input */
  endTimeInputLabel: PropTypes.string,

  /**
   * Used to indicate the current active input,
   * aka which date is about to be selected,
   * or null if neither is active
   */
  focusedInput: PropTypes.oneOf(['startDate', 'endDate', null]),

  /** When true, adds time inputs next to date inputs */
  hasTimeInputs: PropTypes.bool,

  /** An initial end date to populate the end date input with,
   * must be type moment()
   */
  initialEndDate: momentPropTypes.momentObj,

  /** An initial end date to populate the end date input with,
   * must be type moment()
   */
  initialStartDate: momentPropTypes.momentObj,

  /** Function to determine what month the date picker
   *  should show on the left hand side
   */
  initialVisibleMonth: PropTypes.func,

  /** When true, opens the calendar on top of other elements on the page */
  isAbsolutelyPositioned: PropTypes.bool,

  /** When true, removes the border around the calendar portion */
  isBorderless: PropTypes.bool,

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

  /**
   * Determines if the calendar should stay
   * open when a date has been selected,
   * but close when user clicks away
   */
  keepOpenOnDateSelect: PropTypes.bool,

  /**
   * Function callback to perform when either a start date
   * or end date has been selected.
   * The dates are passed as a parameter object with startDate and endDate
   * as keys.
   * For access in panelButtons row items, use render prop function that returns
   * an array.
   */
  onDatesChange: PropTypes.func,

  /**
   * An array of buttons to display with the
   * calendar, such as Cancel and Apply. If presetPanelOptions
   * are also defined, the buttons will be to the right of the calendar.
   * Otherwise, they are directly below the calendar.
   * Use render prop function that returns an array to get access to component's
   * onDatesChange method
   */
  panelButtons: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),

  /**
   * Array of objects used to render preset buttons to the right
   * of the calendar. Each object must have a startDate, endDate,
   * resetTime (optional), and label.
   */
  presetPanelOptions: PropTypes.arrayOf(PropTypes.shape({
    endDate: momentPropTypes.momentObj.isRequired,
    label: PropTypes.string.isRequired,
    resetTime: PropTypes.bool,
    startDate: momentPropTypes.momentObj.isRequired
  })),

  /** The id of the start date input, used to associate with a label */
  startDateInputId: PropTypes.string.isRequired,

  /** The label of the start date input */
  startDateInputLabel: PropTypes.string,

  /** The placeholder text of the start date input */
  startDateInputPlaceholder: PropTypes.string,

  /**
   * The id of the start time input, used to associate with a label
   * Required if hasTimeInputs is true
   */
  startTimeInputId: timeInputValidator,

  /** The label of the start time input */
  startTimeInputLabel: PropTypes.string
};
DateRangePicker.defaultProps = {
  endDateInputLabel: 'End Date',
  endDateInputPlaceholder: 'End Date',
  endTimeInputLabel: 'End Time',
  focusedInput: null,
  isAbsolutelyPositioned: false,
  isFutureDateSelectable: true,
  isPastDateSelectable: true,
  initialStartDate: null,
  initialEndDate: null,
  keepOpenAlways: false,
  keepOpenOnDateSelect: false,
  startDateInputLabel: 'Start Date',
  startDateInputPlaceholder: 'Start Date',
  startTimeInputLabel: 'Start Time'
};
export default DateRangePicker;