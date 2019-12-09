"use strict";

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SAMPLE_DATA = [{
  name: 'error',
  style: 'error'
}, {
  name: 'no-style'
}, {
  name: 'primary',
  style: 'primary'
}, {
  name: 'secondary',
  style: 'secondary'
}, {
  name: 'tertiary',
  style: 'tertiary'
}];
describe('components/TokensInput', function () {
  var component;
  var mockOnChange;
  var mockOnInputBlur;
  var mockOnInputChange;
  var mockOnInputFocus;
  afterEach(function () {
    if (component) {
      component.unmount();
    }
  });
  describe('rendering tokens', function () {
    beforeEach(function () {
      mockOnChange = jest.fn();
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        onChange: mockOnChange,
        tokens: SAMPLE_DATA
      }));
    });

    function assertTokenRender(comp, style, font, text) {
      expect(comp.find('[data-test-section="token"]').hasClass('oui-token-wrap--snug')).toBe(true);
      expect(comp.find("[data-test-section=\"token\"] div.oui-token--".concat(style)).length).toBe(1);
      expect(comp.find("[data-test-section=\"token\"] div.oui-token--".concat(font)).length).toBe(1);
      expect(comp.find("[data-test-section=\"token\"] div.oui-token--".concat(font)).text()).toBe(text);
    }

    it('should render with 5 tokens', function () {
      expect(component.find('Token').length).toBe(5);
    });
    it('should render tokens with errors correctly', function () {
      var errorToken = component.find('Token').at(0);
      assertTokenRender(errorToken, 'error', 'font-light', 'error');
    });
    it('should render tokens with primary style correctly', function () {
      var primaryToken = component.find('Token').at(2);
      assertTokenRender(primaryToken, 'primary', 'font-light', 'primary');
    });
    it('should render tokens with secondary style correctly', function () {
      var secondaryToken = component.find('Token').at(3);
      assertTokenRender(secondaryToken, 'secondary', 'font-light', 'secondary');
    });
    it('should render tokens with tertiary style correctly', function () {
      var tertiaryToken = component.find('Token').at(4);
      assertTokenRender(tertiaryToken, 'tertiary', 'font-dark', 'tertiary');
    });
  });
  describe('when rendering tokens with optional props', function () {
    describe('when optional prop is placeholder', function () {
      var inputCSS = '.flex .flex--1 .min-width--150 .no-border .soft-half--ends .soft--sides .border-radius .push-half--left';
      beforeEach(function () {
        mockOnChange = jest.fn();
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          placeholder: "keywords",
          onChange: mockOnChange,
          tokens: SAMPLE_DATA
        }));
      });
      it('should SHOW input has custom placeholder', function () {
        expect(component.find('Token').length).toBe(5);
        expect(component.find(inputCSS).props().readOnly).toBe(false);
        expect(component.find(inputCSS).props().placeholder).toBe('keywords');
      });
    });
    describe('when optional prop is maxTags', function () {
      var inputCSS = '.flex .flex--1 .no-border .soft-half--ends .soft--sides .border-radius .push-half--left';
      beforeEach(function () {
        mockOnChange = jest.fn();
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          maxTags: 5,
          onChange: mockOnChange,
          tokens: SAMPLE_DATA
        }));
      });
      it('should SHOW input is readonly if the number of tokens is not less than the value of maxTags', function () {
        expect(component.find('Token').length).toBe(5);
        expect(component.find(inputCSS).props().readOnly).toBe(true);
        expect(component.find(inputCSS).props().placeholder).toBe('');
      });
    });
  });
  describe('entering tokens', function () {
    describe('with the default addKeys', function () {
      beforeEach(function () {
        mockOnChange = jest.fn();
        mockOnInputBlur = jest.fn();
        mockOnInputChange = jest.fn();
        mockOnInputFocus = jest.fn();
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          onChange: mockOnChange,
          onInputBlur: mockOnInputBlur,
          onInputChange: mockOnInputChange,
          onInputFocus: mockOnInputFocus,
          tokens: SAMPLE_DATA
        }));
      });
      it('should invoke onChange with the updated token list', function () {
        var input = component.find('input');
        input.simulate('change', {
          target: {
            value: 'newtokenval'
          }
        });
        input.simulate('keyDown', {
          keyCode: 13,
          key: 'Enter'
        });
        component.update();
        var expectedTokens = (0, _lodash.cloneDeep)(SAMPLE_DATA).concat({
          name: 'newtokenval'
        });
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(expectedTokens);
      });
      it('should not allow duplicates', function () {
        var input = component.find('input');
        input.simulate('change', {
          target: {
            value: 'primary'
          }
        });
        input.simulate('keyDown', {
          keyCode: 13,
          key: 'Enter'
        });
        component.update();
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(SAMPLE_DATA);
      });
      it('should call onInputChange when input is changed', function () {
        var input = component.find('input');
        input.simulate('change', {
          target: {
            value: 'primary'
          }
        });
        component.update();
        expect(mockOnInputChange).toBeCalled();
      });
      it('should call onInputFocus when input is focused', function () {
        var input = component.find('input');
        input.simulate('focus');
        expect(mockOnInputFocus).toBeCalled();
      });
      it('should call onInputBlur when input is blur', function () {
        var input = component.find('input');
        input.simulate('blur');
        expect(mockOnInputBlur).toBeCalled();
      });
    });
    describe('with extra addKeys allowed', function () {
      beforeEach(function () {
        mockOnChange = jest.fn();
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          onChange: mockOnChange,
          tokens: SAMPLE_DATA,
          extraAddKeys: [' ', '.', '_', ',']
        }));
      });
      it('should respect additional addKeys', function () {
        var input = component.find('input');
        input.simulate('change', {
          target: {
            value: 'new-token-val'
          }
        });
        input.simulate('keyDown', {
          keyCode: 191,
          key: '/'
        });
        component.update();
        expect(mockOnChange).not.toBeCalled();
        input.simulate('keyDown', {
          keyCode: 13,
          key: 'Enter'
        });
        component.update();
        var expectedTokens = (0, _lodash.cloneDeep)(SAMPLE_DATA).concat({
          name: 'new-token-val'
        });
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(expectedTokens);
      });
      it('should break up pasted strings based on the extra add keys', function () {
        var input = component.find('input');
        input.simulate('paste', {
          clipboardData: {
            getData: function getData() {
              return 'balloons_banana-smoothie   hotdogs';
            }
          }
        });
        component.update();
        var expectedTokens = (0, _lodash.cloneDeep)(SAMPLE_DATA).concat([{
          name: 'balloons'
        }, {
          name: 'banana-smoothie'
        }, {
          name: 'hotdogs'
        }]);
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(expectedTokens);
      });
      it('should break up pasted strings that contain tabs and newlines', function () {
        var input = component.find('input');
        /* eslint-disable no-tabs */

        var testString = "\n\n        some\n        \ttokens\n        \t\twith\n        \t\t\ttabs and      spaces\n        \tone.two\n        \tthree,\n        \tfour_five\n\n        ";
        input.simulate('paste', {
          clipboardData: {
            getData: function getData() {
              return testString;
            }
          }
        });
        component.update();
        var expectedTokens = (0, _lodash.cloneDeep)(SAMPLE_DATA).concat([{
          name: 'some'
        }, {
          name: 'tokens'
        }, {
          name: 'with'
        }, {
          name: 'tabs'
        }, {
          name: 'and'
        }, {
          name: 'spaces'
        }, {
          name: 'one'
        }, {
          name: 'two'
        }, {
          name: 'three'
        }, {
          name: 'four'
        }, {
          name: 'five'
        }]);
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(expectedTokens);
      });
    });
  });
});