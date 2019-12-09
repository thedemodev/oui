"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('components/BlockList/Item', function () {
  describe('#render', function () {
    describe('`isDisabled` is provided', function () {
      var component;
      var text = 'Goose';
      var disabled = true;
      var notDisabled = false;
      it('should render children and render item in a `div` if `isDisabled` is true', function () {
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          isDisabled: disabled
        }, text));
        expect(component.find('.oui-block-list__item .pointer-events--none .background--faint .muted').text()).toBe(text);
        expect(component.find('.oui-block-list__item .pointer-events--none .background--faint .muted').is('div')).toBe(true);
      });
      it('should NOT render childen and render item in a `div` if `isDisabled` is false', function () {
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          isDisabled: notDisabled
        }, text));
        expect(component.find('.oui-block-list__item .pointer-events--none .background--faint .muted').exists()).toBeFalsy();
      });
      it('should render without sidepadding if `hardSides` is true', function () {
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          hardSides: true
        }, text));
        expect(component);
      });
    });
    describe('`onClick` is provided', function () {
      var component;
      var func = jest.fn();
      var text = 'Goose';
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          onClick: func
        }, text));
      });
      it('should render children', function () {
        expect(component.find('.oui-block-list__item').text()).toBe(text);
      });
      it('should render item in a `div`', function () {
        expect(component.find('.oui-block-list__item').is('div')).toBe(true);
      });
      it('should pass `onClick`', function () {
        expect(component.find('.oui-block-list__item').prop('onClick')).toBe(func);
      });
      it('should provide function to handle `onKeyDown` event', function () {
        expect(_typeof(component.find('.oui-block-list__item').prop('onKeyDown'))).toBe('function');
      });
      it('should add a `ref` so other functions can reference the node', function () {
        var mountedComponent = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          onClick: func
        }, text));
        expect(mountedComponent.instance()._itemWithOnClick).toBeTruthy();
      });
    });
    describe('`href` is provided', function () {
      var href = 'https://www.example.com/';
      var text = 'Goose';
      it('should render children', function () {
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href
        }, text));
        expect(component.find('.oui-block-list__item').text()).toBe(text);
      });
      it('should render item in a `a`', function () {
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href
        }, text));
        expect(component.find('.oui-block-list__item').is('a')).toBe(true);
      });
      it('should pass `href`', function () {
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href
        }, text));
        expect(component.find('.oui-block-list__item').prop('href')).toBe(href);
      });
      it('should pass `hrefTarget`', function () {
        var hrefTarget = '_blank';
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href,
          hrefTarget: hrefTarget
        }, text));
        expect(component.find('.oui-block-list__item').prop('target')).toBe(hrefTarget);
      });
      it('should add `rel` attribute if `hrefTarget` is `_blank` for improved security', function () {
        var hrefTarget = '_blank';
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href,
          hrefTarget: hrefTarget
        }, text));
        expect(component.find('.oui-block-list__item').prop('rel')).toBe('noopener noreferrer');
      });
      it('should not add `rel` attribute if `hrefTarget` is not `_blank`', function () {
        var hrefTarget = '_self';
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href,
          hrefTarget: hrefTarget
        }, text));
        expect(component.find('.oui-block-list__item').prop('rel')).toBe(false);
      });
      it('should pass `hrefTitle`', function () {
        var hrefTitle = 'Duck';
        var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          href: href,
          hrefTitle: hrefTitle
        }, text));
        expect(component.find('.oui-block-list__item').prop('title')).toBe(hrefTitle);
      });
    });
    describe('neither `onClick` or `href` are provided', function () {
      var component;
      var text = 'Goose';
      beforeEach(function () {
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, text));
      });
      it('should render children', function () {
        expect(component.find('.oui-block-list__item').text()).toBe(text);
      });
      it('should render item in a `div`', function () {
        expect(component.find('.oui-block-list__item').is('div')).toBe(true);
      });
    });
    it('should properly set test section', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
        testSection: "foo"
      }, "Goose"));
      expect(component.is('[data-test-section="foo"]')).toBe(true);
    });
  });
  describe('#_handleOnKeyDown', function () {
    describe('spacebar is pressed on the item', function () {
      var component;
      var instance;
      var validEvent;
      var spyObj;
      beforeEach(function () {
        spyObj = {
          func: function func() {}
        };
        spyOn(spyObj, 'func').and.stub();
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          onClick: spyObj.func
        }, "Goose"));
        instance = component.instance();
        instance._itemWithOnClick = 'fakeElement';
        validEvent = {
          keyCode: 32,
          target: instance._itemWithOnClick,
          preventDefault: function preventDefault() {}
        };
      });
      it('should prevent default page scroll', function () {
        spyOn(validEvent, 'preventDefault');
        expect(validEvent.preventDefault.calls.count()).toBe(0);

        instance._handleOnKeyDown(validEvent);

        expect(validEvent.preventDefault.calls.count()).toBe(1);
      });
      it('should call function passed as `onClick`', function () {
        expect(spyObj.func.calls.count()).toBe(0);

        instance._handleOnKeyDown(validEvent);

        expect(spyObj.func.calls.count()).toBe(1);
      });
    });
    describe('non-spacebar keycode is passed on the correct element', function () {
      var component;
      var instance;
      var invalidEvent;
      var spyObj;
      beforeEach(function () {
        spyObj = {
          func: function func() {}
        };
        spyOn(spyObj, 'func').and.stub();
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          onClick: spyObj.func
        }, "Goose"));
        instance = component.instance();
        instance._itemWithOnClick = 'fakeElement';
        invalidEvent = {
          keyCode: 0,
          // Spacebar is 32
          target: instance._itemWithOnClick,
          preventDefault: function preventDefault() {}
        };
      });
      it('should not prevent default page scroll', function () {
        spyOn(invalidEvent, 'preventDefault');

        instance._handleOnKeyDown(invalidEvent);

        expect(invalidEvent.preventDefault.calls.count()).toBe(0);
      });
      it('should not call function passed as `onClick`', function () {
        instance._handleOnKeyDown(invalidEvent);

        expect(spyObj.func.calls.count()).toBe(0);
      });
    });
    describe('spacebar is pressed on a child of the item, not the container', function () {
      var component;
      var instance;
      var invalidEvent;
      var spyObj;
      beforeEach(function () {
        spyObj = {
          func: function func() {}
        };
        spyOn(spyObj, 'func').and.stub();
        component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
          onClick: spyObj.func
        }, "Goose"));
        instance = component.instance();
        instance._itemWithOnClick = 'fakeElement';
        invalidEvent = {
          keyCode: 32,
          target: 'notTheItem',
          // This should the function's conditional return false
          preventDefault: function preventDefault() {}
        };
      });
      it('should not prevent default page scroll', function () {
        spyOn(invalidEvent, 'preventDefault');

        instance._handleOnKeyDown(invalidEvent);

        expect(invalidEvent.preventDefault.calls.count()).toBe(0);
      });
      it('should not call function passed as `onClick`', function () {
        instance._handleOnKeyDown(invalidEvent);

        expect(spyObj.func.calls.count()).toBe(0);
      });
    });
  });
  describe('onMouseDown is provided', function () {
    var component;
    var onMouseDownSpy;
    var testSection;
    beforeEach(function () {
      onMouseDownSpy = jest.fn();
      testSection = 'oui-blocklist-item';
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        onMouseDown: onMouseDownSpy,
        testSection: testSection
      }, "test"));
    });
    afterEach(function () {
      component.unmount();
    });
    it('should call onMouseDown when an Item is mousedowned', function () {
      var divComponent = component.find("[data-test-section=\"".concat(testSection, "\"]")).childAt(0);
      divComponent.simulate('mousedown');
      expect(onMouseDownSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('gutters', function () {
    var component;
    var testSection;
    beforeEach(function () {
      testSection = 'oui-blocklist-item';
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        gutters: "tight",
        testSection: testSection
      }, "test"));
    });
    afterEach(function () {
      component.unmount();
    });
    it('should not remove padding on sides of the item when gutters is not defined', function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        testSection: testSection
      }, "test"));
      var divComponent = component.find("[data-test-section=\"".concat(testSection, "\"]")).childAt(0);
      expect(divComponent.hasClass('hard--sides')).toBe(false);
    });
    it('should not remove padding on sides of the item when gutters is "loose"', function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        gutters: "loose",
        testSection: testSection
      }, "test"));
      var divComponent = component.find("[data-test-section=\"".concat(testSection, "\"]")).childAt(0);
      expect(divComponent.hasClass('hard--sides')).toBe(false);
    });
    it('should remove padding on the sides of the item when gutters is "tight"', function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        gutters: "tight",
        testSection: testSection
      }, "test"));
      var divComponent = component.find("[data-test-section=\"".concat(testSection, "\"]")).childAt(0);
      expect(divComponent.hasClass('hard--sides')).toBe(true);
    });
  });
});