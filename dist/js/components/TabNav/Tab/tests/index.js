"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/TabNav/Tab', function () {
  var mockFunction = jest.fn();
  it('should render with correct classes', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      onClick: mockFunction,
      tabId: "foo"
    }));
    expect(component.hasClass('oui-tabs-nav__item')).toBe(true);
  });
  it('should call function passed to onClick after tab is clicked', function () {
    var obj = {
      func: mockFunction
    };
    spyOn(obj, 'func').and.stub();
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      onClick: obj.func,
      tabId: "foo"
    }));
    component.simulate('click');
    expect(obj.func).toHaveBeenCalled();
  });
  describe('with a child with `isDisabled` prop supplied', function () {
    it('should render only that child with a disabled class', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
        isDisabled: true,
        onClick: mockFunction,
        tabId: "foo"
      }));
      expect(component.hasClass('oui-tab-disabled')).toBe(true);
    });
  });
  it('should render with test section when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose",
      onClick: mockFunction,
      tabId: "foo"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});