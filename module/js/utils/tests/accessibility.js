import { getAssistiveTextFromColorClass } from '../accessibility';
describe('utils/accessibility', function () {
  describe('#getAssistiveTextFromColorClass', function () {
    it('should throw error if non-existent class is provided', function () {
      expect(function () {
        getAssistiveTextFromColorClass('foo-bar');
      }).toThrow();
    });
    it('should return a word if a correct color class is provided', function () {
      expect(getAssistiveTextFromColorClass('good-news')).toBe('Success');
    });
  });
});