"use strict";

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _enzyme = require("enzyme");

var _DatePicker = _interopRequireDefault(require("../DatePicker"));

var _DateRangePicker = _interopRequireDefault(require("../DateRangePicker"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/DatePicker', function () {
  it('should only render the input by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01"
    }));
    expect(component.find('.oui-text-input').length).toBe(1);
    expect(component.find('.DayPicker').length).toBe(0);
  });
  it('should render the calendar portion if the input isFocused', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      isFocused: true
    }));
    expect(component.find('.oui-text-input').length).toBe(1);
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should not have a date initially', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01"
    }));
    expect(component.find('input').instance().value).toBe('');
  });
  it('should have a date if initialDate is passed in', function () {
    var testDate = (0, _moment["default"])('2019-01-01');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      initialDate: testDate
    }));
    expect(component.find('input').instance().value).toBe('Jan 01, 2019');
  });
  it('should open the calendar when the input is focused by user', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01"
    }));
    component.find('input').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should close the calendar on date selection by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01"
    }));
    component.find('input').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
    component.find('.CalendarDay__today').simulate('click');
    expect(component.find('.DayPicker').length).toBe(0);
  });
  it('should not close the calendar on date selection if keepOpenOnDateSelect is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      keepOpenOnDateSelect: true
    }));
    component.find('input').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
    component.find('.CalendarDay__today').simulate('click');
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should not close the calendar on focus change when keepOpenAlways is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement("div", null, _react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      keepOpenAlways: true
    }), _react["default"].createElement("input", {
      className: "test-input",
      id: "test"
    })));
    expect(component.find('.DayPicker').length).toBe(1);
    component.find('.test-input').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should allow past dates by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01"
    }));
    component.find('input').simulate('focus');
    expect(component.find('td[aria-disabled=true]').length).toBe(0);
  });
  it('should not allow past dates if isPastDateSelectable is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      isPastDateSelectable: false
    }));
    component.find('input').simulate('focus');
    expect(component.find('td[aria-disabled=true]').length).toBeGreaterThan(1);
  });
  it('should not allow future dates if isFutureDateSelectable is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      isFutureDateSelectable: false
    }));
    component.find('input').simulate('focus');
    expect(component.find('td[aria-disabled=true]').length).toBeGreaterThan(1);
  });
  it('should allow custom isOutsideRange function', function () {
    var isOutsideRangeMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      isOutsideRange: isOutsideRangeMock,
      inputId: "date-picker-01"
    }));
    component.find('input').simulate('focus');
    expect(isOutsideRangeMock).toHaveBeenCalled();
  }); // Disabled until we upgrade Enzyme to 3.10.0
  // (current version 3.0.0 doesn't support the :not selector)

  xit('should set an initialVisibleMonth', function () {
    var previousMonthText = (0, _moment["default"])().subtract(1, 'months').startOf('month').format('MMMM');

    function getVisibleMonth() {
      return (0, _moment["default"])().subtract(1, 'months');
    }

    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      isFutureDateSelectable: false,
      initialVisibleMonth: getVisibleMonth
    }));
    component.find('input').simulate('focus');
    expect(component // eslint-disable-next-line max-len
    .find('.CalendarMonthGrid_month__horizontal:not(.CalendarMonthGrid_month__hidden) .CalendarMonth_caption_1 .oui-date-picker__month-title').first().text()).toContain(previousMonthText);
  });
  it('should add default label and placeholder to the input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01"
    }));
    expect(component.find('.oui-date-picker__input-row').containsMatchingElement(_react["default"].createElement("label", null, "Select Date"))).toBe(true);
    expect(component.find('[placeholder="Select Date"]').exists()).toBe(true);
  });
  it('should render a custom label and placeholder when passed in', function () {
    var customLabel = 'Please select a start date';
    var customPlaceholder = 'Start Date';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DatePicker["default"], {
      inputId: "date-picker-01",
      inputLabel: customLabel,
      inputPlaceholder: customPlaceholder
    }));
    expect(component.find('.oui-date-picker__input-row').containsMatchingElement(_react["default"].createElement("label", null, customLabel))).toBe(true);
    expect(component.find("[placeholder='".concat(customPlaceholder, "']")).exists()).toBe(true);
  });
});
describe('components/DateRangePicker', function () {
  it('should only render the inputs by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01"
    }));
    expect(component.find('.oui-text-input').length).toBe(2);
    expect(component.find('.DayPicker').length).toBe(0);
  });
  it('should render the calendar when focusedInput is passed in', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-02",
      endDateInputId: "end-date-picker-02",
      focusedInput: "startDate"
    }));
    expect(component.find('.oui-text-input').length).toBe(2);
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should not have any dates initially', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate"
    }));
    expect(component.find('input[id="start-date-picker-01"]').instance().value).toBe('');
    expect(component.find('input[id="end-date-picker-01"]').instance().value).toBe('');
  });
  it('should have a start date if initialStartDate is passed in', function () {
    var testDate = (0, _moment["default"])('2019-01-01');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      initialStartDate: testDate
    }));
    expect(component.find('input[id="start-date-picker-01"]').instance().value).toBe('Jan 01, 2019');
    expect(component.find('input[id="end-date-picker-01"]').instance().value).toBe('');
  });
  it('should open the calendar when the input is focused by user', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate"
    }));
    component.find('input[id="start-date-picker-01"]').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should close the calendar on date selection by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate"
    }));
    component.find('input[id="start-date-picker-01"]').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
    component.find('.CalendarDay__today').simulate('click');
    component.find('.CalendarDay__lastDayOfWeek[aria-disabled=false]').last().simulate('click');
    component.update();
    expect(component.find('.DayPicker').length).toBe(0);
  });
  it('should not close the calendar on date selection if keepOpenOnDateSelect is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      keepOpenOnDateSelect: true
    }));
    component.find('input[id="start-date-picker-01"]').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
    component.find('.CalendarDay__today').simulate('click');
    component.find('.CalendarDay__lastDayOfWeek[aria-disabled=false]').last().simulate('click');
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should not close the calendar on focus change when keepOpenAlways is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement("div", null, _react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      keepOpenAlways: true
    }), _react["default"].createElement("input", {
      className: "test-input",
      id: "test"
    })));
    component.find('input[id="start-date-picker-01"]').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
    component.find('.test-input').simulate('focus');
    expect(component.find('.DayPicker').length).toBe(1);
  });
  it('should add custom labels and placeholders when passed in', function () {
    var customLabel = 'Please select a start date';
    var customPlaceholder = 'Pick a Date';
    var component = (0, _enzyme.mount)(_react["default"].createElement("div", null, _react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      startDateInputLabel: customLabel,
      startDateInputPlaceholder: customPlaceholder,
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      keepOpenAlways: true
    }), _react["default"].createElement("input", {
      className: "test-input",
      id: "test"
    })));
    expect(component.find("[label='".concat(customLabel, "']")).exists()).toBe(true);
    expect(component.find("[placeholder='".concat(customPlaceholder, "']")).exists()).toBe(true);
  });
  it('should add borderless and absolute classes when isBorderless and isAbsolutelyPositioned are true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      isBorderless: true,
      isAbsolutelyPositioned: true
    }));
    expect(component.find('.oui-date-picker--absolute').length).toBe(1);
    expect(component.find('.oui-date-picker--borderless').length).toBe(1);
  });
  it('should add buttons for all preset options passed in', function () {
    var presetPanelOptions = [{
      'label': 'Last 7 days',
      'startDate': (0, _moment["default"])().subtract(7, 'days'),
      'endDate': (0, _moment["default"])()
    }, {
      'label': 'Last 30 days',
      'startDate': (0, _moment["default"])().subtract(30, 'days'),
      'endDate': (0, _moment["default"])()
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      presetPanelOptions: presetPanelOptions
    }));
    expect(component.find('.oui-date-picker__range-panel').containsMatchingElement(_react["default"].createElement("button", null, _react["default"].createElement("span", null, "Last 7 days")))).toBe(true);
  });
  it('should add a button row for any panel buttons passed in', function () {
    var clickMock = jest.fn();
    var panelButtons = [_react["default"].createElement(_Button["default"], {
      key: 0,
      style: "plain",
      onClick: clickMock
    }, "Clear"), _react["default"].createElement(_Button["default"], {
      key: 1,
      style: "highlight",
      onClick: clickMock
    }, "Apply")];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-01",
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      panelButtons: panelButtons
    }));
    expect(component.find('.oui-button-row--right').containsMatchingElement(_react["default"].createElement("button", null, "Clear"))).toBe(true);
  });
  it('should pass onDatesChange via panelButtons when array is used (without render props pattern)', function () {
    var applyMock = jest.fn();
    var clearMock = jest.fn();
    var onDatesChangeMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      initialStartDate: (0, _moment["default"])('2019-01-01'),
      initialEndDate: (0, _moment["default"])('2019-12-31'),
      isPastDateSelectable: true,
      keepOpenOnDateSelect: true,
      onDatesChange: onDatesChangeMock,
      panelButtons: [_react["default"].createElement(_Button["default"], {
        key: 0,
        style: "plain",
        onClick: clearMock,
        testSection: "date-range-picker-clear-button"
      }, "Clear"), _react["default"].createElement(_Button["default"], {
        key: 1,
        style: "highlight",
        onClick: applyMock,
        testSection: "date-range-picker-apply-button"
      }, "Apply")],
      startDateInputId: "start-date-picker-01"
    }));
    expect(component.find('[data-test-section="date-range-picker-start-date-input"]').props().value).toBe('Jan 01, 2019');
    expect(component.find('[data-test-section="date-range-picker-end-date-input"]').props().value).toBe('Dec 31, 2019');
    expect(applyMock).toHaveBeenCalledTimes(0);
    expect(clearMock).toHaveBeenCalledTimes(0);
    expect(onDatesChangeMock).toHaveBeenCalledTimes(0);
    component.find('[data-test-section="date-range-picker-apply-button"]').simulate('click');
    expect(applyMock).toHaveBeenCalledTimes(1);
    expect(clearMock).toHaveBeenCalledTimes(0);
    expect(onDatesChangeMock).toHaveBeenCalledTimes(0);
    component.find('[data-test-section="date-range-picker-clear-button"]').simulate('click');
    expect(applyMock).toHaveBeenCalledTimes(1);
    expect(clearMock).toHaveBeenCalledTimes(1);
    expect(onDatesChangeMock).toHaveBeenCalledTimes(0);
    expect(component.find('[data-test-section="date-range-picker-start-date-input"]').props().value).toBe('Jan 01, 2019');
    expect(component.find('[data-test-section="date-range-picker-end-date-input"]').props().value).toBe('Dec 31, 2019');
  });
  it('should pass onDatesChange via panelButtons when render props pattern is used', function () {
    /* eslint-disable react/jsx-no-bind */
    var applyMock = jest.fn();
    var onDatesChangeMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-01",
      focusedInput: "startDate",
      initialStartDate: (0, _moment["default"])('2019-01-01'),
      initialEndDate: (0, _moment["default"])('2019-12-31'),
      isPastDateSelectable: true,
      keepOpenOnDateSelect: true,
      onDatesChange: onDatesChangeMock,
      panelButtons: function panelButtons(_ref) {
        var onDatesChange = _ref.onDatesChange;
        return [_react["default"].createElement(_Button["default"], {
          key: 0,
          style: "plain",
          onClick: function onClick() {
            return onDatesChange({
              startDate: null,
              endDate: null
            });
          },
          testSection: "date-range-picker-clear-button"
        }, "Clear"), _react["default"].createElement(_Button["default"], {
          key: 1,
          style: "highlight",
          onClick: applyMock,
          testSection: "date-range-picker-apply-button"
        }, "Apply")];
      },
      startDateInputId: "start-date-picker-01"
    }));
    expect(component.find('[data-test-section="date-range-picker-start-date-input"]').props().value).toBe('Jan 01, 2019');
    expect(component.find('[data-test-section="date-range-picker-end-date-input"]').props().value).toBe('Dec 31, 2019');
    expect(applyMock).toHaveBeenCalledTimes(0);
    expect(onDatesChangeMock).toHaveBeenCalledTimes(0);
    component.find('[data-test-section="date-range-picker-apply-button"]').simulate('click');
    expect(applyMock).toHaveBeenCalledTimes(1);
    expect(onDatesChangeMock).toHaveBeenCalledTimes(0);
    component.find('[data-test-section="date-range-picker-clear-button"]').simulate('click');
    expect(applyMock).toHaveBeenCalledTimes(1);
    expect(onDatesChangeMock).toHaveBeenCalledTimes(1);
    expect(onDatesChangeMock).toBeCalledWith({
      endDate: null,
      startDate: null
    });
    expect(component.find('[data-test-section="date-range-picker-start-date-input"]').props().value).toBe('');
    expect(component.find('[data-test-section="date-range-picker-end-date-input"]').props().value).toBe('');
    /* eslint-enable react/jsx-no-bind */
  });
  it('should allow past dates by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-02",
      endDateInputId: "end-date-picker-02",
      focusedInput: "startDate"
    }));
    expect(component.find('td[aria-disabled=true]').length).toBe(0);
  });
  it('should not allow past dates if isPastDateSelectable is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-02",
      endDateInputId: "end-date-picker-02",
      focusedInput: "startDate",
      isPastDateSelectable: false
    }));
    expect(component.find('td[aria-disabled=true]').length).toBeGreaterThan(1);
  });
  it('should not allow future dates if isFutureDateSelectable is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-02",
      endDateInputId: "end-date-picker-02",
      focusedInput: "startDate",
      isFutureDateSelectable: false
    }));
    expect(component.find('td[aria-disabled=true]').length).toBeGreaterThan(1);
  });
  it('should allow custom isOutsideRange function', function () {
    var isOutsideRangeMock = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-02",
      endDateInputId: "end-date-picker-02",
      focusedInput: "startDate",
      isOutsideRange: isOutsideRangeMock
    }));
    expect(isOutsideRangeMock).toHaveBeenCalled();
  });
  it('should load with time inputs when hasTimeInputs set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-02",
      endTimeInputId: "endTimeInputId",
      focusedInput: "startDate",
      hasTimeInputs: true,
      startDateInputId: "start-date-picker-02",
      startTimeInputId: "startTimeInputId"
    }));
    expect(component.find('#start-date-picker-02.oui-text-input').length).toBe(1);
    expect(component.find('#startTimeInputId.oui-text-input').length).toBe(1);
    expect(component.find('#end-date-picker-02.oui-text-input').length).toBe(1);
    expect(component.find('#endTimeInputId.oui-text-input').length).toBe(1);
  });
  it('should set endDate to match startDate after initial startDate selection', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-02",
      endTimeInputId: "endTimeInputId",
      focusedInput: "startDate",
      hasTimeInputs: true,
      startDateInputId: "start-date-picker-02",
      startTimeInputId: "startTimeInputId"
    }));
    component.find('.DayPicker .CalendarDay').first().simulate('click');
    expect(component.find('#end-date-picker-02.oui-text-input').text()).toEqual(component.find('#start-date-picker-02.oui-text-input').text());
  });
  it('should set startDate time to 12:00am and endDate time to 11:59pm by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-02",
      endTimeInputId: "endTimeInputId",
      focusedInput: "startDate",
      hasTimeInputs: true,
      keepOpenOnDateSelect: true,
      startDateInputId: "start-date-picker-02",
      startTimeInputId: "startTimeInputId"
    }));
    component.find('.DayPicker .CalendarDay').first().simulate('click');
    expect(component.find('#startTimeInputId.oui-text-input').props().value).toBe('00:00');
    expect(component.find('#endTimeInputId.oui-text-input').props().value).toBe('23:59');
  });
  it('should preserve the time if modified/changed by the user', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-02",
      endTimeInputId: "endTimeInputId",
      focusedInput: "startDate",
      hasTimeInputs: true,
      keepOpenOnDateSelect: true,
      startDateInputId: "start-date-picker-02",
      startTimeInputId: "startTimeInputId"
    }));
    component.find('.DayPicker .CalendarDay').first().simulate('click');
    component.update();
    component.find('#startTimeInputId.oui-text-input').simulate('change', {
      target: {
        value: '3:33'
      }
    });
    expect(component.find('#startTimeInputId.oui-text-input').props().value).toBe('03:33');
    component.find('#start-date-picker-02.oui-text-input').simulate('click');
    component.find('.DayPicker .CalendarDay').at(3).simulate('click');
    expect(component.find('#startTimeInputId.oui-text-input').props().value).toBe('03:33');
  });
  it('should reset times by default when preset buttons are clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-02",
      endTimeInputId: "endTimeInputId",
      focusedInput: "startDate",
      hasTimeInputs: true,
      keepOpenOnDateSelect: true,
      presetPanelOptions: [{
        label: 'Last 7 days',
        startDate: (0, _moment["default"])().subtract(7, 'days').startOf('day'),
        endDate: (0, _moment["default"])().endOf('day')
      }, {
        label: 'Last 30 days',
        startDate: (0, _moment["default"])().subtract(30, 'days').startOf('day'),
        endDate: (0, _moment["default"])().endOf('day')
      }, {
        label: 'Last 60 days',
        startDate: (0, _moment["default"])().subtract(60, 'days').startOf('day'),
        endDate: (0, _moment["default"])().endOf('day')
      }, {
        label: 'This Month',
        startDate: (0, _moment["default"])().startOf('month'),
        endDate: (0, _moment["default"])().endOf('month')
      }],
      startDateInputId: "start-date-picker-02",
      startTimeInputId: "startTimeInputId"
    }));
    component.find('.DayPicker .CalendarDay').first().simulate('click');
    component.update();
    component.find('#startTimeInputId.oui-text-input').simulate('change', {
      target: {
        value: '3:33'
      }
    });
    component.find('#endTimeInputId.oui-text-input').simulate('change', {
      target: {
        value: '16:55'
      }
    });
    expect(component.find('#startTimeInputId.oui-text-input').props().value).toBe('03:33');
    expect(component.find('#endTimeInputId.oui-text-input').props().value).toBe('16:55');
    component.find('.oui-date-picker__range-presets button').first().simulate('click');
    expect(component.find('#startTimeInputId.oui-text-input').props().value).toBe('00:00');
    expect(component.find('#endTimeInputId.oui-text-input').props().value).toBe('23:59');
  });
  it('should NOT reset times for panel button clicks if the resetTime property is set to false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      endDateInputId: "end-date-picker-02",
      endTimeInputId: "endTimeInputId",
      focusedInput: "startDate",
      hasTimeInputs: true,
      keepOpenOnDateSelect: true,
      presetPanelOptions: [{
        label: 'Last 7 days',
        startDate: (0, _moment["default"])().subtract(7, 'days').startOf('day'),
        endDate: (0, _moment["default"])().endOf('day'),
        resetTime: false
      }, {
        label: 'Last 30 days',
        startDate: (0, _moment["default"])().subtract(30, 'days').startOf('day'),
        endDate: (0, _moment["default"])().endOf('day'),
        resetTime: false
      }, {
        label: 'Last 60 days',
        startDate: (0, _moment["default"])().subtract(60, 'days').startOf('day'),
        endDate: (0, _moment["default"])().endOf('day'),
        resetTime: false
      }, {
        label: 'This Month',
        startDate: (0, _moment["default"])().startOf('month'),
        endDate: (0, _moment["default"])().endOf('month'),
        resetTime: false
      }],
      startDateInputId: "start-date-picker-02",
      startTimeInputId: "startTimeInputId"
    }));
    component.find('.DayPicker .CalendarDay').first().simulate('click');
    component.update();
    component.find('#startTimeInputId.oui-text-input').simulate('change', {
      target: {
        value: '3:33'
      }
    });
    component.find('#endTimeInputId.oui-text-input').simulate('change', {
      target: {
        value: '16:55'
      }
    });
    component.find('.oui-date-picker__range-presets button').first().simulate('click');
    expect(component.find('#startTimeInputId.oui-text-input').props().value).toBe('03:33');
    expect(component.find('#endTimeInputId.oui-text-input').props().value).toBe('16:55');
  }); // Disabled until we upgrade Enzyme to 3.10.0
  // (current version 3.0.0 doesn't support the :not selector)

  xit('should set an initialVisibleMonth', function () {
    var previousMonthText = (0, _moment["default"])().subtract(1, 'months').startOf('month').format('MMMM');

    function getVisibleMonth() {
      return (0, _moment["default"])().subtract(1, 'months');
    }

    var component = (0, _enzyme.mount)(_react["default"].createElement(_DateRangePicker["default"], {
      startDateInputId: "start-date-picker-02",
      endDateInputId: "end-date-picker-02",
      focusedInput: "startDate",
      initialVisibleMonth: getVisibleMonth
    }));
    component.find('input').simulate('focus');
    expect(component // eslint-disable-next-line max-len
    .find('.CalendarMonthGrid_month__horizontal:not(.CalendarMonthGrid_month__hidden) .CalendarMonth_caption_1 .oui-date-picker__month-title').first().text()).toContain(previousMonthText);
  });
});