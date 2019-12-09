"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Autocomplete/Suggestion', function () {
  var mockSuggestion;
  var testSection;
  var component;
  beforeEach(function () {
    mockSuggestion = 'foo';
    testSection = 'oui-link';
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      suggestion: mockSuggestion,
      testSection: testSection
    }));
  });
  afterEach(function () {
    component.unmount();
  });
  describe('basic rendering', function () {
    it('should render Link', function () {
      expect(component.find('Link').exists()).toBe(true);
    });
  });
});