import React from 'react';
import moment from 'moment';

export const getDateString = (date) => {
  return (date && moment.isMoment(date) && date.format('MMM DD, YYYY')) || '';
};

export const getAvailableStartDatePhrase = ({ date }) => `Choose ${date} as your start date.`;
export const getAvailableEndDatePhrase = ({ date }) => `Choose ${date} as your end date.`;

// eslint-disable-next-line react/prop-types
export const getCustomMonthElement = ({ month }) => (
  <p className="oui-date-picker__month-title">
    { month.format('MMMM') } { month.year() }
  </p>
);

export const isOutsideAcceptableDateRange = (day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable) => {
  if (isOutsideRange) {
    return isOutsideRange(day);
  }
  if (isPastDateSelectable && isFutureDateSelectable) {
    return false;
  }
  if (isFutureDateSelectable === false) {
    return day.isAfter(moment()) && !day.isSame(moment(), 'day');
  }
  if (isPastDateSelectable === false) {
    return day.isBefore(moment()) && !day.isSame(moment(), 'day');
  }
};
