import React from 'react';
import moment from 'moment';
export var getDateString = function getDateString(date) {
  return date && moment.isMoment(date) && date.format('MMM DD, YYYY') || '';
};
export var getTimeString = function getTimeString(date) {
  return date && moment.isMoment(date) && date.format('HH:mm') || '';
};
export var preserveTime = function preserveTime(prevDate, newDate) {
  if (!prevDate || !newDate) {
    return newDate;
  }

  return newDate.set({
    hour: prevDate.get('hour'),
    minute: prevDate.get('minute'),
    second: prevDate.get('second'),
    millisecond: prevDate.get('millisecond')
  });
};
export var getAvailableStartDatePhrase = function getAvailableStartDatePhrase(_ref) {
  var date = _ref.date;
  return "Choose ".concat(date, " as your start date.");
};
export var getAvailableEndDatePhrase = function getAvailableEndDatePhrase(_ref2) {
  var date = _ref2.date;
  return "Choose ".concat(date, " as your end date.");
}; // eslint-disable-next-line react/prop-types

export var getCustomMonthElement = function getCustomMonthElement(_ref3) {
  var month = _ref3.month;
  return React.createElement("p", {
    className: "oui-date-picker__month-title"
  }, month.format('MMMM'), " ", month.year());
};
export var isOutsideAcceptableDateRange = function isOutsideAcceptableDateRange(day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable) {
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