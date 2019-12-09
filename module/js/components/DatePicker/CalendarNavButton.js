function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-oui-icons';

var CalendarNavButton = function CalendarNavButton(_ref) {
  var type = _ref.type;
  var title = type === 'previous' ? 'Previous Month' : 'Next Month';
  var style = type === 'previous' ? {
    left: '10px'
  } : {
    right: '10px'
  };
  var icon = type === 'previous' ? React.createElement(Icon, {
    name: "arrow-left"
  }) : React.createElement(Icon, {
    name: "arrow-right"
  });
  return React.createElement("button", {
    title: title,
    style: _objectSpread({
      backgroundColor: '#fff',
      color: '#484848',
      fontSize: 24,
      padding: '5px',
      position: 'absolute',
      top: '15px',
      border: 'none'
    }, style)
  }, icon);
};

CalendarNavButton.propTypes = {
  type: PropTypes.oneOf(['previous', 'next'])
};
export default CalendarNavButton;