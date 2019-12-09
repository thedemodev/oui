"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constants = void 0;

var _fns = require("./fns");

var constants = {
  'DAY_SIZE': 35,
  'PHRASES': {
    focusStartDate: 'Interact with the calendar and select a date.',
    chooseAvailableStartDate: _fns.getAvailableStartDatePhrase,
    chooseAvailableEndDate: _fns.getAvailableEndDatePhrase
  },
  'SINGLE_NUM_MONTHS': 1,
  'TRANSITION_DURATION': 0,
  'VERTICAL_SPACING': 10
};
exports.constants = constants;