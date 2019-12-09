"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOutsideAcceptableDateRange = exports.getCustomMonthElement = exports.getAvailableEndDatePhrase = exports.getAvailableStartDatePhrase = exports.preserveTime = exports.getTimeString = exports.getDateString = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getDateString = function getDateString(date) {
  return date && _moment["default"].isMoment(date) && date.format('MMM DD, YYYY') || '';
};

exports.getDateString = getDateString;

var getTimeString = function getTimeString(date) {
  return date && _moment["default"].isMoment(date) && date.format('HH:mm') || '';
};

exports.getTimeString = getTimeString;

var preserveTime = function preserveTime(prevDate, newDate) {
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

exports.preserveTime = preserveTime;

var getAvailableStartDatePhrase = function getAvailableStartDatePhrase(_ref) {
  var date = _ref.date;
  return "Choose ".concat(date, " as your start date.");
};

exports.getAvailableStartDatePhrase = getAvailableStartDatePhrase;

var getAvailableEndDatePhrase = function getAvailableEndDatePhrase(_ref2) {
  var date = _ref2.date;
  return "Choose ".concat(date, " as your end date.");
}; // eslint-disable-next-line react/prop-types


exports.getAvailableEndDatePhrase = getAvailableEndDatePhrase;

var getCustomMonthElement = function getCustomMonthElement(_ref3) {
  var month = _ref3.month;
  return _react["default"].createElement("p", {
    className: "oui-date-picker__month-title"
  }, month.format('MMMM'), " ", month.year());
};

exports.getCustomMonthElement = getCustomMonthElement;

var isOutsideAcceptableDateRange = function isOutsideAcceptableDateRange(day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable) {
  if (isOutsideRange) {
    return isOutsideRange(day);
  }

  if (isPastDateSelectable && isFutureDateSelectable) {
    return false;
  }

  if (isFutureDateSelectable === false) {
    return day.isAfter((0, _moment["default"])()) && !day.isSame((0, _moment["default"])(), 'day');
  }

  if (isPastDateSelectable === false) {
    return day.isBefore((0, _moment["default"])()) && !day.isSame((0, _moment["default"])(), 'day');
  }
};

exports.isOutsideAcceptableDateRange = isOutsideAcceptableDateRange;