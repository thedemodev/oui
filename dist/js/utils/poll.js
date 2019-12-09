"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForSelector = waitForSelector;

/**
 * Method to detect when a given selector appears in the DOM
 * using a recursive setTimeout.
 *
 * NOTE: For performance reasons, this should only be used
 * when an element is certain to appear.
 *
 * @param {String} selector - CSS selector for an element that will appear
 * @returns {Promise}
 */
function waitForSelector(selector) {
  var getElement = function getElement() {
    return document.querySelector(selector);
  };

  return new Promise(function (resolve) {
    var checkForElement = function checkForElement() {
      if (getElement()) {
        resolve(getElement());
      } else {
        setTimeout(checkForElement, 5);
      }
    };

    checkForElement();
  });
}