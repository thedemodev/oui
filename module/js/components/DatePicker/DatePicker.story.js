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

/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker.js';
import Input from '../Input';
var stories = storiesOf('DatePicker', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default single date picker', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', false),
    onDateChange: action('onDateChange')
  }), React.createElement("p", null, "I appear after the calendar"));
}).add('With absolute positioning', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', false),
    onDateChange: action('onDateChange'),
    isAbsolutelyPositioned: _boolean('isAbsolutelyPositioned', true)
  }), React.createElement("p", null, "I should be behind the calendar when opened"));
}).add('Part of a form', function () {
  return React.createElement(FlexContainer, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    inputLabel: text('inputLabel', 'Start Time'),
    inputPlaceholder: text('inputPlaceholder', 'Select Date'),
    initialDate: null,
    isFocused: _boolean('isFocused', false),
    onDateChange: action('onDateChange'),
    isAbsolutelyPositioned: _boolean('isAbsolutelyPositioned', true)
  }), React.createElement("div", {
    className: "push--left"
  }, React.createElement(Input, {
    label: "Another Input",
    id: "another-input-01",
    placeholder: "Enter Info",
    type: "text"
  })));
}).add('With an initial date', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    inputLabel: text('inputLabel', 'Start Time'),
    inputPlaceholder: text('inputPlaceholder', 'Select Date'),
    initialDate: moment(),
    isFocused: _boolean('isFocused', false),
    onDateChange: action('onDateChange')
  }));
}).add('Allow any dates', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', true),
    isFutureDateSelectable: _boolean('isFutureDateSelectable', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    onDateChange: action('onDateChange')
  }));
}).add('Only allow past dates', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', true),
    isFutureDateSelectable: _boolean('isFutureDateSelectable', false),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    onDateChange: action('onDateChange')
  }));
}).add('Only allow future dates', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', true),
    isFutureDateSelectable: _boolean('isFutureDateSelectable', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', false),
    onDateChange: action('onDateChange')
  }));
}).add('With a custom range checker', function () {
  return React.createElement(Container, null, React.createElement("p", null, "Custom function for", React.createElement("code", null, "  isOutsideRange  "), " prop may look something like", React.createElement("code", null, "  ", '{ (day) => {return day.day() % 2 === 0; } }')), React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', true),
    isOutsideRange: function isOutsideRange(day) {
      return day.day() % 2 === 0;
    },
    onDateChange: action('onDateChange')
  }));
}).add('With a custom initial starting month', function () {
  return React.createElement(Container, null, React.createElement("p", null, "Adjust the left hand month using a function like:", React.createElement("code", null, "  () => moment().subtract(1, 'months')"), " with the", React.createElement("code", null, "  initialVisibleMonth  "), " prop."), React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    initialVisibleMonth: function initialVisibleMonth() {
      return moment().subtract(1, 'months');
    },
    isFocused: _boolean('isFocused', true),
    onDateChange: action('onDateChange')
  }));
}).add('Remains open after date selection', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    isFocused: _boolean('isFocused', false),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOnDateSelect', true),
    onDateChange: action('onDateChange')
  }));
}).add('Remains open always, even when clicking outside the component', function () {
  return React.createElement(Container, null, React.createElement(DatePicker, {
    inputId: "date-picker-id",
    initialDate: null,
    keepOpenAlways: _boolean('keepOpenAlways', true),
    isFocused: _boolean('isFocused', false),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    onDateChange: action('onDateChange')
  }));
});
var Container = styled.div(_templateObject());
var FlexContainer = styled.div(_templateObject2());