"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Link = _interopRequireDefault(require("../../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Autocomplete', function () {
  var mockSuggestions;
  var onActionClickSpy;
  var onInputChangeSpy;
  var onSuggestionClickSpy;
  var testSection;
  var component;
  beforeEach(function () {
    mockSuggestions = ['foo', 'bar', 'baz'];
    onActionClickSpy = jest.fn();
    onInputChangeSpy = jest.fn();
    onSuggestionClickSpy = jest.fn();
    testSection = 'oui-autocomplete';
  });
  afterEach(function () {
    component.unmount();
  });
  describe('basic rendering', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        stateful: true,
        suggestions: mockSuggestions,
        onActionClick: onActionClickSpy,
        onInputChange: onInputChangeSpy,
        onSuggestionClick: onSuggestionClickSpy,
        testSection: testSection
      }));
    });
    it('should only render Input when input is out of focus', function () {
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-suggestions\"]"));
      expect(inputComponent.exists()).toBe(true);
      expect(suggestionsComponent.exists()).toBe(false);
    });
    it('should render suggestions when Input is in focus', function () {
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-suggestions\"]"));
      expect(inputComponent.exists()).toBe(true);
      expect(suggestionsComponent.exists()).toBe(true);
    });
    it('should render action field when Input is in focus', function () {
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      var actionComponent = component.find("[data-test-section=\"".concat(testSection, "-action\"]"));
      expect(actionComponent.exists()).toBe(true);
    });
  });
  describe('stateful editing', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        stateful: true,
        suggestions: mockSuggestions,
        onActionClick: onActionClickSpy,
        onInputChange: onInputChangeSpy,
        onSuggestionClick: onSuggestionClickSpy,
        testSection: testSection
      }));
    });
    it('should list suggestions when input value matches suggestions', function () {
      var mockQuery = 'ba';
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      inputComponent.simulate('change', {
        target: {
          value: mockQuery
        }
      });
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-suggestion\"]"));
      expect(onInputChangeSpy).toHaveBeenCalledTimes(1);
      expect(onInputChangeSpy).toHaveBeenCalledWith(mockQuery);
      expect(suggestionsComponent.exists()).toBe(true);
      expect(suggestionsComponent.length).toEqual(2);
      expect(suggestionsComponent.at(0).text()).toEqual('bar');
      expect(suggestionsComponent.at(1).text()).toEqual('baz');
    });
    it('should call suggestion click-handler when a suggestion is clicked', function () {
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-block-item\"]"));
      suggestionsComponent.at(0).childAt(0).simulate('mousedown');
      expect(onSuggestionClickSpy).toHaveBeenCalledTimes(1);
      expect(onSuggestionClickSpy).toHaveBeenCalledWith('foo');
    });
    it('should not set the Input value to the suggestion when a suggestion is clicked', function () {
      var mockQuery = 'f';
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      inputComponent.simulate('change', {
        target: {
          value: mockQuery
        }
      });
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-block-item\"]"));
      suggestionsComponent.at(0).childAt(0).simulate('mousedown');
      component.update();
      var inputValue = component.find("[data-test-section=\"".concat(testSection, "-input\"]")).prop('value');
      expect(inputValue).toEqual('f');
    });
    it('should call action click-handler when action is clicked', function () {
      var ActionField = function ActionField(props) {
        return _react["default"].createElement(_Link["default"], props, "test");
      };

      component.setProps({
        ActionField: ActionField
      });
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      var actionComponent = component.find("[data-test-section=\"".concat(testSection, "-action\"]")).childAt(0);
      actionComponent.simulate('mousedown');
      expect(onActionClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('stateless editing', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        stateful: false,
        suggestions: mockSuggestions,
        onActionClick: onActionClickSpy,
        onInputChange: onInputChangeSpy,
        onSuggestionClick: onSuggestionClickSpy,
        testSection: testSection
      }));
    }); // TODO: Kelly fix this test once you can
    // figure out how to mock AwesomeDebounce

    xit('should wrap onInputChange in a debounce method, which is called when input changes, without updating any state', function () {
      var mockQuery = 'ba';
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      inputComponent.simulate('change', {
        target: {
          value: mockQuery
        }
      });
      expect(onInputChangeSpy).toHaveBeenCalledTimes(1);
      expect(onInputChangeSpy).toHaveBeenCalledWith(mockQuery);
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-suggestion\"]"));
      expect(suggestionsComponent.exists()).toBe(true); // The internal suggestion list should match the suggestions
      // provided via props

      expect(suggestionsComponent.length).toEqual(mockSuggestions.length);
    });
    it('should not call onInputChange when focusing', function () {
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      expect(onInputChangeSpy).toHaveBeenCalledTimes(0);
    });
  });
  describe('when autoFillInputValue is true', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        stateful: true,
        suggestions: mockSuggestions,
        onActionClick: onActionClickSpy,
        onInputChange: onInputChangeSpy,
        onSuggestionClick: onSuggestionClickSpy,
        testSection: testSection,
        autoFillInputValue: true
      }));
    });
    it('should set the Input value to the suggestion when a suggestion is clicked', function () {
      var mockQuery = 'f';
      var inputComponent = component.find("[data-test-section=\"".concat(testSection, "-input\"]"));
      inputComponent.simulate('focus');
      inputComponent.simulate('change', {
        target: {
          value: mockQuery
        }
      });
      var suggestionsComponent = component.find("[data-test-section=\"".concat(testSection, "-block-item\"]"));
      suggestionsComponent.at(0).childAt(0).simulate('mousedown');
      component.update();
      var inputValue = component.find("[data-test-section=\"".concat(testSection, "-input\"]")).prop('value');
      expect(inputValue).toEqual('foo');
    });
  });
});