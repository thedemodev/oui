"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _DatePicker = _interopRequireDefault(require("./DatePicker.js"));

var _Input = _interopRequireDefault(require("../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100vh;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react2.storiesOf)('DatePicker', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default single date picker', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', false),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }), _react["default"].createElement("p", null, "I appear after the calendar"));
}).add('With absolute positioning', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', false),
    onDateChange: (0, _addonActions.action)('onDateChange'),
    isAbsolutelyPositioned: (0, _addonKnobs["boolean"])('isAbsolutelyPositioned', true)
  }), _react["default"].createElement("p", null, "I should be behind the calendar when opened"));
}).add('Part of a form', function () {
  return _react["default"].createElement(FlexContainer, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    inputLabel: (0, _addonKnobs.text)('inputLabel', 'Start Time'),
    inputPlaceholder: (0, _addonKnobs.text)('inputPlaceholder', 'Select Date'),
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', false),
    onDateChange: (0, _addonActions.action)('onDateChange'),
    isAbsolutelyPositioned: (0, _addonKnobs["boolean"])('isAbsolutelyPositioned', true)
  }), _react["default"].createElement("div", {
    className: "push--left"
  }, _react["default"].createElement(_Input["default"], {
    label: "Another Input",
    id: "another-input-01",
    placeholder: "Enter Info",
    type: "text"
  })));
}).add('With an initial date', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    inputLabel: (0, _addonKnobs.text)('inputLabel', 'Start Time'),
    inputPlaceholder: (0, _addonKnobs.text)('inputPlaceholder', 'Select Date'),
    initialDate: (0, _moment["default"])(),
    isFocused: (0, _addonKnobs["boolean"])('isFocused', false),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('Allow any dates', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', true),
    isFutureDateSelectable: (0, _addonKnobs["boolean"])('isFutureDateSelectable', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('Only allow past dates', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', true),
    isFutureDateSelectable: (0, _addonKnobs["boolean"])('isFutureDateSelectable', false),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('Only allow future dates', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', true),
    isFutureDateSelectable: (0, _addonKnobs["boolean"])('isFutureDateSelectable', true),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', false),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('With a custom range checker', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement("p", null, "Custom function for", _react["default"].createElement("code", null, "  isOutsideRange  "), " prop may look something like", _react["default"].createElement("code", null, "  ", '{ (day) => {return day.day() % 2 === 0; } }')), _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', true),
    isOutsideRange: function isOutsideRange(day) {
      return day.day() % 2 === 0;
    },
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('With a custom initial starting month', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement("p", null, "Adjust the left hand month using a function like:", _react["default"].createElement("code", null, "  () => moment().subtract(1, 'months')"), " with the", _react["default"].createElement("code", null, "  initialVisibleMonth  "), " prop."), _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    initialVisibleMonth: function initialVisibleMonth() {
      return (0, _moment["default"])().subtract(1, 'months');
    },
    isFocused: (0, _addonKnobs["boolean"])('isFocused', true),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('Remains open after date selection', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: (0, _addonKnobs["boolean"])('isFocused', false),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    keepOpenOnDateSelect: (0, _addonKnobs["boolean"])('keepOpenOnDateSelect', true),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
}).add('Remains open always, even when clicking outside the component', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_DatePicker["default"], {
    inputId: "date-picker-id",
    initialDate: null,
    keepOpenAlways: (0, _addonKnobs["boolean"])('keepOpenAlways', true),
    isFocused: (0, _addonKnobs["boolean"])('isFocused', false),
    isPastDateSelectable: (0, _addonKnobs["boolean"])('isPastDateSelectable', true),
    onDateChange: (0, _addonActions.action)('onDateChange')
  }));
});

var Container = _styledComponents["default"].div(_templateObject());

var FlexContainer = _styledComponents["default"].div(_templateObject2());