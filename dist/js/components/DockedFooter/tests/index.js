"use strict";

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../Button"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/DockedFooter ', function () {
  describe('with Buttons as children supplied', function () {
    beforeEach(function () {
      var div = document.createElement('div');
      window.domNode = div;
      document.body.appendChild(div);
    });

    function componentFooter() {
      return _react["default"].createElement(_index["default"], {
        testSection: "docked-footer-less-content",
        parentTestSection: "helloTesting",
        includesMargin: false
      }, [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0
      }, "Cancel"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1
      }, "Confirm")]);
    }

    it('should render DockedFooter with testSection and parentTestSection', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement("div", {
        "data-test-section": "helloTesting",
        className: "overflow-y--hidden"
      }, _react["default"].createElement("h2", {
        className: "push-double--top"
      }, "Test"), _react["default"].createElement("p", null, "Test content..."), componentFooter()), {
        attachTo: window.domNode
      });
      expect(component.find('.oui-docked-footer').length).toBeGreaterThanOrEqual(1);
      expect(component.find('[data-test-section="docked-footer-less-content"]').length).toBe(1);
      expect(component.find('[data-test-section="helloTesting"]').length).toBe(1);
    });
    it('should not dock when isDocked is false', function () {
      var component = (0, _enzyme.mount)(componentFooter());
      component.setState({
        isDocked: false
      });
      expect(component.find('.oui-docked-footer--is-docked').length).toBeGreaterThanOrEqual(0);
    });
    it('should dock when isDocked is true', function () {
      var component = (0, _enzyme.mount)(componentFooter());
      component.setState({
        isDocked: true
      });
      expect(component.find('.oui-docked-footer--is-docked').length).toBeGreaterThanOrEqual(1);
    });
    it('should add margin styles when includesMargin is true', function () {
      var component = (0, _enzyme.mount)(componentFooter());
      component.setProps({
        includesMargin: true
      });
      expect(component.find('.push-double--top').length).toBeGreaterThanOrEqual(1);
    });
    it('should call onScroll method', function () {
      var div = document.createElement('div');
      window.domNode = div;
      document.body.appendChild(div);
      var component = (0, _enzyme.mount)(componentFooter(), {
        attachTo: window.domNode
      });
      var instance = component.instance();
      jest.spyOn(instance, 'onScroll');
      expect(instance.onScroll).not.toHaveBeenCalled();
      instance.onScroll();
      expect(instance.onScroll).toHaveBeenCalled();
    });
  });
});