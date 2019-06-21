import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import DateRangePicker from './DateRangePicker';

const presetPanelOptions = [
  {
    'label': 'Last 7 days',
    'startDate': moment().subtract(7, 'days'),
    'endDate': moment(),
  },
  {
    'label': 'Last 30 days',
    'startDate': moment().subtract(30, 'days'),
    'endDate': moment(),
  },
  {
    'label': 'Last 60 days',
    'startDate': moment().subtract(60, 'days'),
    'endDate': moment(),
  },
  {
    'label': 'This Month',
    'startDate': moment().startOf('month'),
    'endDate': moment().endOf('month'),
  },
];

const stories = storiesOf('DateRangePicker', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add(
    'default date range picker', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
        <p>I appear after the calendar.</p>
      </Container>
    ))
  )
  .add(
    'with absolute positioning', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          isAbsolutelyPositioned={ boolean('isAbsolutelyPositioned', true) }
          isPastDateSelectable={ boolean('isPastDateSelectable', true) }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
        <p>I should be behind the calendar when opened</p>
      </Container>
    ))
  )
  .add(
    'focused initially', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput={ text('focusedInput (either "startDate" or "endDate"', 'startDate') }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'with initial start date', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput={ text('focusedInput', 'endDate') }
          initialStartDate={ moment() }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'with past dates selectable', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='endDate'
          initialStartDate={ moment() }
          isPastDateSelectable={ boolean('isPastDateSelectable', true) }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'remains open after date selection', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='startDate'
          keepOpenOnDateSelect={ boolean('keepOpenOndateSelect', true) }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'remains open always, even when clicking outside component', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='startDate'
          keepOpenAlways={ boolean('keepOpenAlways', true) }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'with preset options panel', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='startDate'
          isPastDateSelectable={ boolean('isPastDateSelectable', true) }
          keepOpenOnDateSelect={ boolean('keepOpenOndateSelect', true) }
          onDatesChange={ action('onDatesChange') }
          panelButtons={ [
            <Button key={ 0 } style="plain" onClick={ action('onClick Clear') }>Clear</Button>,
            <Button key={ 1 } style="highlight" onClick={ action('onClick Apply') }>Apply</Button>,
          ] }
          presetPanelOptions={ presetPanelOptions }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'with buttons panel', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='startDate'
          isPastDateSelectable={ boolean('isPastDateSelectable', true) }
          keepOpenOnDateSelect={ boolean('keepOpenOndateSelect', true) }
          onDatesChange={ action('onDatesChange') }
          panelButtons={ [
            <Button key={ 0 } style="plain" onClick={ action('onClick Clear') }>Clear</Button>,
            <Button key={ 1 } style="highlight" onClick={ action('onClick Apply') }>Apply</Button>,
          ] }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'with preset options and no border on calendar', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='startDate'
          isBorderless={ boolean('isBorderless', true) }
          isPastDateSelectable={ boolean('isPastDateSelectable', true) }
          keepOpenOnDateSelect={ boolean('keepOpenOndateSelect', true) }
          onDatesChange={ action('onDatesChange') }
          panelButtons={ [
            <Button key={ 0 } style="plain" onClick={ action('onClick Clear') }>Clear</Button>,
            <Button key={ 1 } style="highlight" onClick={ action('onClick Apply') }>Apply</Button>,
          ] }
          presetPanelOptions={ presetPanelOptions }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  )
  .add(
    'with no border on calendar', (() => (
      <Container>
        <DateRangePicker
          endDateInputId='end-date-id-0'
          focusedInput='startDate'
          isBorderless={ boolean('isBorderless', true) }
          isPastDateSelectable={ boolean('isPastDateSelectable', true) }
          keepOpenOnDateSelect={ boolean('keepOpenOndateSelect', true) }
          onDatesChange={ action('onDatesChange') }
          startDateInputId='start-date-id-0'
        />
      </Container>
    ))
  );

const Container = styled.div`
  height: 100vh;
`;
