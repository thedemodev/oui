"use strict";

var _accessibility = require("../accessibility");

describe('utils/accessibility', function () {
  describe('#getAssistiveTextFromColorClass', function () {
    it('should throw error if non-existent class is provided', function () {
      expect(function () {
        (0, _accessibility.getAssistiveTextFromColorClass)('foo-bar');
      }).toThrow();
    });
    it('should return a word if a correct color class is provided', function () {
      expect((0, _accessibility.getAssistiveTextFromColorClass)('good-news')).toBe('Success');
    });
  });
});