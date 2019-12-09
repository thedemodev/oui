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
import Button from '../Button';
import DateRangePicker from './DateRangePicker';
var presetPanelOptions = [{
  label: 'Last 7 days',
  startDate: moment().subtract(7, 'days').startOf('day'),
  endDate: moment().endOf('day')
}, {
  label: 'Last 30 days',
  startDate: moment().subtract(30, 'days').startOf('day'),
  endDate: moment().endOf('day')
}, {
  label: 'Last 60 days',
  startDate: moment().subtract(60, 'days').startOf('day'),
  endDate: moment().endOf('day')
}, {
  label: 'This Month',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}];
var stories = storiesOf('DateRangePicker', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default date range picker', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }), React.createElement("p", null, "I appear after the calendar."));
}).add('With absolute positioning', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    isAbsolutelyPositioned: _boolean('isAbsolutelyPositioned', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }), React.createElement("p", null, "I should be behind the calendar when opened"));
}).add('Focused initially', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: text('focusedInput (either "startDate" or "endDate"', 'startDate'),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With initial start date', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: text('focusedInput', 'endDate'),
    initialStartDate: moment(),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Allow any dates', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialStartDate: moment(),
    isFutureDateSelectable: _boolean('isFutureDateSelectable', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Only allow future dates', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialStartDate: moment(),
    isFutureDateSelectable: _boolean('isFutureDateSelectable', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', false),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Only allow past dates', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialVisibleMonth: function initialVisibleMonth() {
      return moment().subtract(1, 'months');
    },
    isFutureDateSelectable: _boolean('isFutureDateSelectable', false),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With custom range checker', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialStartDate: moment(),
    isOutsideRange: action('isOutsideRange'),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With an initial starting month', function () {
  return React.createElement(Container, null, React.createElement("p", null, "Adjust the left hand month using a function like:", React.createElement("code", null, "  () => moment().subtract(1, 'months')"), " with the", React.createElement("code", null, "  initialVisibleMonth  "), " prop."), React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "endDate",
    initialVisibleMonth: function initialVisibleMonth() {
      return moment().subtract(1, 'months');
    },
    isOutsideRange: action('isOutsideRange'),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Remains open after date selection', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    keepOpenOnDateSelect: _boolean('keepOpenOnDateSelect', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('Remains open always, even when clicking outside component', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    keepOpenAlways: _boolean('keepOpenAlways', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With time inputs', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    endTimeInputId: "endTimeInputId",
    focusedInput: "startDate",
    hasTimeInputs: _boolean('hasTimeInputs', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0",
    startTimeInputId: "startTimeInputId"
  }));
}).add('With preset options panel', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    panelButtons: [React.createElement(Button, {
      key: 0,
      style: "plain",
      onClick: action('onClick Clear')
    }, "Clear"), React.createElement(Button, {
      key: 1,
      style: "highlight",
      onClick: action('onClick Apply')
    }, "Apply")],
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With buttons panel', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    panelButtons: [React.createElement(Button, {
      key: 0,
      style: "plain",
      onClick: action('onClick Clear')
    }, "Clear"), React.createElement(Button, {
      key: 1,
      style: "highlight",
      onClick: action('onClick Apply')
    }, "Apply")],
    startDateInputId: "start-date-id-0"
  }));
}).add('With no border on calendar', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: _boolean('isBorderless', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0"
  }));
}).add('With no border and time inputs', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    endTimeInputId: "endTimeInputId",
    focusedInput: "startDate",
    isBorderless: _boolean('isBorderless', true),
    hasTimeInputs: _boolean('hasTimeInputs', true),
    onDatesChange: action('onDatesChange'),
    startDateInputId: "start-date-id-0",
    startTimeInputId: "startTimeInputId"
  }));
}).add('With preset options and no border on calendar', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: _boolean('isBorderless', true),
    hasTimeInputs: _boolean('hasTimeInputs', false),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    panelButtons: [React.createElement(Button, {
      key: 0,
      style: "plain",
      onClick: action('onClick Clear')
    }, "Clear"), React.createElement(Button, {
      key: 1,
      style: "highlight",
      onClick: action('onClick Apply')
    }, "Apply")],
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With panelButtons as an array (not render props)', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: _boolean('isBorderless', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    panelButtons: [React.createElement(Button, {
      key: 0,
      style: "plain",
      onClick: action('onClick Clear')
    }, "Clear"), React.createElement(Button, {
      key: 1,
      style: "highlight",
      onClick: action('onClick Apply')
    }, "Apply")],
    presetPanelOptions: presetPanelOptions,
    startDateInputId: "start-date-id-0"
  }));
}).add('With panelButtons as render props function returning an array', function () {
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    focusedInput: "startDate",
    isBorderless: _boolean('isBorderless', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    panelButtons: function panelButtons(_ref) {
      var endDate = _ref.endDate,
          onDatesChange = _ref.onDatesChange,
          startDate = _ref.startDate;
      return [React.createElement(Button, {
        key: 0,
        style: "plain",
        onClick: function onClick() {
          action('onClick Clear with onDatesChange via render props')();
          onDatesChange({
            startDate: null,
            endDate: null
          });
        }
      }, "Clear"), React.createElement(Button, {
        key: 1,
        style: "highlight",
        onClick: function onClick() {
          return action('onClick Apply')({
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
  return React.createElement(Container, null, React.createElement(DateRangePicker, {
    endDateInputId: "end-date-id-0",
    endTimeInputId: "endTimeInputId",
    focusedInput: "startDate",
    hasTimeInputs: _boolean('hasTimeInputs', true),
    isBorderless: _boolean('isBorderless', true),
    isPastDateSelectable: _boolean('isPastDateSelectable', true),
    keepOpenOnDateSelect: _boolean('keepOpenOndateSelect', true),
    onDatesChange: action('onDatesChange'),
    panelButtons: function panelButtons(_ref2) {
      var endDate = _ref2.endDate,
          onDatesChange = _ref2.onDatesChange,
          startDate = _ref2.startDate;
      return [React.createElement(Button, {
        key: 0,
        style: "plain",
        onClick: function onClick() {
          action('onClick Clear with onDatesChange via render props')();
          onDatesChange({
            startDate: null,
            endDate: null
          });
        }
      }, "Clear"), React.createElement(Button, {
        key: 1,
        style: "highlight",
        onClick: function onClick() {
          return action('onClick Apply')({
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
var Container = styled.div(_templateObject());