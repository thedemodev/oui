"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("../Button"));

var _DateRangePicker = _interopRequireDefault(require("./DateRangePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var presetPanelOptions = [{
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
}];
var stories = (0, _react2.storiesOf)('DateRangePicker', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default date range picker', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }), _react["default"].createElement("p", null, "I appear after the calendar."));
}).add('With absolute positioning', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    isAbsolutelyPositioned: (0, _addonKnobs["boolean"])('isAbsolutelyPositioned', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }), _react["default"].createElement("p", null, "I should be behind the calendar when opened"));
}).add('Focused initially', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: (0, _addonKnobs.text)('focusedInput (either "startDate" or "endDate"', 'startDate'),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With initial start date', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: (0, _addonKnobs.text)('focusedInput', 'endDate'),
    initialStartDate: (0, _moment["default"])(),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Allow any dates', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialStartDate: (0, _moment["default"])(),
    isFutureDateSelectable: (0, _addonKnobs["boolean"])('isFutureDateSelectable', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Only allow future dates', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialStartDate: (0, _moment["default"])(),
    isFutureDateSelectable: (0, _addonKnobs["boolean"])('isFutureDateSelectable', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', false),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Only allow past dates', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialVisibleMonth: function initialVisibleMonth() {
      return (0, _moment["default"])().subtract(1, 'months');
    },
    isFutureDateSelectable: (0, _addonKnobs["boolean"])('isFutureDateSelectable', false),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With custom range checker', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialStartDate: (0, _moment["default"])(),
    isOutsideRange: (0, _addonActions.action)('isOutsideRange'),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With an initial starting month', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement("p", null, "Adjust the left hand month using a function like:", _react["default"].createElement("code", null, "  () => moment().subtract(1, 'months')"), " with the", _react["default"].createElement("code", null, "  initialVisibleMonth  "), " prop."), _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialVisibleMonth: function initialVisibleMonth() {
      return (0, _moment["default"])().subtract(1, 'months');
    },
    isOutsideRange: (0, _addonActions.action)('isOutsideRange'),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Remains open after date selection', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOnDateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Remains open always, even when clicking outside component', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    keepOpenAlways: (0, _addonKnobs["boolean"])('keepOpenAlways', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With time inputs', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    endTimeInputId: "endTimeInputId",
    focusedInput: "startDate",
    hasTimeInputs: (0, _addonKnobs["boolean"])('hasTimeInputs', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0",
    startTimeInputId: "startTimeInputId"
  }));
}).add('With preset options panel', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    panelButtons: [_react["default"].createElement(_Button["default"], {
      key: 0,
      style: "plain",
      onClick: (0, _addonActions.action)('onClick Clear')
    }, "Clear"), _react["default"].createElement(_Button["default"], {
      key: 1,
      style: "highlight",
      onClick: (0, _addonActions.action)('onClick Apply')
    }, "Apply")],
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With buttons panel', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    panelButtons: [_react["default"].createElement(_Button["default"], {
      key: 0,
      style: "plain",
      onClick: (0, _addonActions.action)('onClick Clear')
    }, "Clear"), _react["default"].createElement(_Button["default"], {
      key: 1,
      style: "highlight",
      onClick: (0, _addonActions.action)('onClick Apply')
    }, "Apply")],
    startDateInputId: "start-date-id-0"
  }));
}).add('With no border on calendar', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: (0, _addonKnobs["boolean"])('isBorderless', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With no border and time inputs', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    endTimeInputId: "endTimeInputId",
    focusedInput: "startDate",
    isBorderless: (0, _addonKnobs["boolean"])('isBorderless', true),
    hasTimeInputs: (0, _addonKnobs["boolean"])('hasTimeInputs', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    startDateInputId: "start-date-id-0",
    startTimeInputId: "startTimeInputId"
  }));
}).add('With preset options and no border on calendar', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: (0, _addonKnobs["boolean"])('isBorderless', true),
    hasTimeInputs: (0, _addonKnobs["boolean"])('hasTimeInputs', false),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    panelButtons: [_react["default"].createElement(_Button["default"], {
      key: 0,
      style: "plain",
      onClick: (0, _addonActions.action)('onClick Clear')
    }, "Clear"), _react["default"].createElement(_Button["default"], {
      key: 1,
      style: "highlight",
      onClick: (0, _addonActions.action)('onClick Apply')
    }, "Apply")],
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With panelButtons as an array (not render props)', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: (0, _addonKnobs["boolean"])('isBorderless', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    panelButtons: [_react["default"].createElement(_Button["default"], {
      key: 0,
      style: "plain",
      onClick: (0, _addonActions.action)('onClick Clear')
    }, "Clear"), _react["default"].createElement(_Button["default"], {
      key: 1,
      style: "highlight",
      onClick: (0, _addonActions.action)('onClick Apply')
    }, "Apply")],
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With panelButtons as render props function returning an array', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: (0, _addonKnobs["boolean"])('isBorderless', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    panelButtons: function panelButtons(_ref) {
      var endDate = _ref.endDate,
          onDatesChange = _ref.onDatesChange,
          startDate = _ref.startDate;
      return [_react["default"].createElement(_Button["default"], {
        key: 0,
        style: "plain",
        onClick: function onClick() {
          (0, _addonActions.action)('onClick Clear with onDatesChange via render props')();
          onDatesChange({
            startDate: null,
            endDate: null
          });
        }
      }, "Clear"), _react["default"].createElement(_Button["default"], {
        key: 1,
        style: "highlight",
        onClick: function onClick() {
          return (0, _addonActions.action)('onClick Apply')({
            startDate: startDate,
            endDate: endDate
          });
        }
      }, "Apply")];
    },
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With hasTimeInput and presetPanelOptions', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DateRangePicker["default"], {
    endDateInputId: "end-date-id-0",
    endTimeInputId: "endTimeInputId",
    focusedInput: "startDate",
    hasTimeInputs: (0, _addonKnobs["boolean"])('hasTimeInputs', true),
    isBorderless: (0, _addonKnobs["boolean"])('isBorderless', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOndateSelect', true),
    onDatesChange: (0, _addonActions.action)('onDatesChange'),
    panelButtons: function panelButtons(_ref2) {
      var endDate = _ref2.endDate,
          onDatesChange = _ref2.onDatesChange,
          startDate = _ref2.startDate;
      return [_react["default"].createElement(_Button["default"], {
        key: 0,
        style: "plain",
        onClick: function onClick() {
          (0, _addonActions.action)('onClick Clear with onDatesChange via render props')();
          onDatesChange({
            startDate: null,
            endDate: null
          });
        }
      }, "Clear"), _react["default"].createElement(_Button["default"], {
        key: 1,
        style: "highlight",
        onClick: function onClick() {
          return (0, _addonActions.action)('onClick Apply')({
            startDate: startDate,
            endDate: endDate
          });
        }
      }, "Apply")];
    },
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0",
    startTimeInputId: "startTimeInputId"
  }));
});

var Container = _styledComponents["default"].div(_templateObject());