"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssistiveTextFromColorClass = void 0;

/**
 * Map a color class to a human readable word that explains the context of when
 * the class is used. This is helpful for screen readers.
 * @param {String} className - an OUI class
 * @returns {String} English word describing the class provided
 */
var getAssistiveTextFromColorClass = function getAssistiveTextFromColorClass(className) {
  var classMapping = {
    'bad-news': 'Error',
    'brand': 'Info',
    'good-news': 'Success',
    'warning': 'Alert'
  };
  var text = classMapping[className];

  if (!text) {
    throw new Error('Provided class name does not map to a word.');
  }

  return text;
};

exports.getAssistiveTextFromColorClass = getAssistiveTextFromColorClass;