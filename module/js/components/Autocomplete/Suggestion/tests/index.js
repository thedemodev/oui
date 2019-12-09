import React from 'react';
import { mount } from 'enzyme';
import Suggestion from '../index';
describe('components/Autocomplete/Suggestion', function () {
  var mockSuggestion;
  var testSection;
  var component;
  beforeEach(function () {
    mockSuggestion = 'foo';
    testSection = 'oui-link';
    component = mount(React.createElement(Suggestion, {
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