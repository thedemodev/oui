"use strict";

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../Button"));

var _ = _interopRequireDefault(require("../"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/ButtonRow', function () {
  describe('with no buttons supplied', function () {
    it('should not render buttons', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        testSection: "buttonRowTest"
      }));
      expect(component.find('[data-test-section="buttonRowTest-left"]').length).toBe(0);
      expect(component.find('[data-test-section="buttonRowTest-center"]').length).toBe(0);
      expect(component.find('[data-test-section="buttonRowTest-right"]').length).toBe(0);
    });
  });
  describe('with only left buttons supplied', function () {
    it('should render correct number of buttons if buttons are supplied', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        testSection: "buttonRowTest",
        leftGroup: [_react["default"].createElement(_Button["default"], {
          key: "1",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "2",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "3",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "4",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "5",
          style: "plain"
        }, "Button")]
      }));
      expect(component.find('[data-test-section="buttonRowTest-left"] button').length).toBe(5);
    });
  });
  describe('with only right buttons supplied', function () {
    it('should render correct number of buttons if buttons are supplied', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        testSection: "buttonRowTest",
        rightGroup: [_react["default"].createElement(_Button["default"], {
          key: "1",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "2",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "3",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "4",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "5",
          style: "plain"
        }, "Button")]
      }));
      expect(component.find('[data-test-section="buttonRowTest-right"] button').length).toBe(5);
    });
  });
  describe('with only center buttons supplied', function () {
    it('should render correct number of buttons if buttons are supplied', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
        testSection: "buttonRowTest",
        centerGroup: [_react["default"].createElement(_Button["default"], {
          key: "1",
          style: "plain"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "2",
          style: "plain"
        }, "Button")]
      }));
      expect(component.find('.oui-button-row--center').length).toBe(1);
      expect(component.find(_Button["default"]).length).toBe(2);
    });
    it('should add a wrapper and correct classes when a provided button in group is full width', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
        centerGroup: [_react["default"].createElement(_Button["default"], {
          key: "1",
          width: "full"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "2"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "3"
        }, "Button")]
      }));
      expect(component.find(_Button["default"]).at(0).parent().hasClass('push-half--right')).toBe(true);
      expect(component.find(_Button["default"]).at(0).parent().hasClass('push-half--left')).toBe(false);
      expect(component.find(_Button["default"]).at(0).parent().hasClass('flex--1')).toBe(true);
      expect(component.find(_Button["default"]).at(1).parent().hasClass('push-half--right')).toBe(true);
      expect(component.find(_Button["default"]).at(1).parent().hasClass('push-half--left')).toBe(true);
      expect(component.find(_Button["default"]).at(1).parent().hasClass('flex--1')).toBe(true);
      expect(component.find(_Button["default"]).at(2).parent().hasClass('push-half--right')).toBe(false);
      expect(component.find(_Button["default"]).at(2).parent().hasClass('push-half--left')).toBe(true);
      expect(component.find(_Button["default"]).at(2).parent().hasClass('flex--1')).toBe(true);
    });
    it('should not add a wrapper when none of the provided buttons in a group are full width', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
        centerGroup: [_react["default"].createElement(_Button["default"], {
          key: "1"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "2"
        }, "Button"), _react["default"].createElement(_Button["default"], {
          key: "3"
        }, "Button")]
      }));
      expect(component.find(_Button["default"]).at(0).parent().hasClass('push-half--right')).toBe(false);
      expect(component.find(_Button["default"]).at(0).parent().hasClass('push-half--left')).toBe(false);
      expect(component.find(_Button["default"]).at(1).parent().hasClass('push-half--right')).toBe(false);
      expect(component.find(_Button["default"]).at(1).parent().hasClass('push-half--left')).toBe(false);
      expect(component.find(_Button["default"]).at(2).parent().hasClass('push-half--right')).toBe(false);
      expect(component.find(_Button["default"]).at(2).parent().hasClass('push-half--left')).toBe(false);
    });
  });
  describe('with both left and right buttons supplied', function () {
    it('should render correct number of buttons if buttons are supplied', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        testSection: "buttonRowTest",
        leftGroup: [_react["default"].createElement(_Button["default"], {
          key: "1",
          style: "plain"
        }, "Button")],
        rightGroup: [_react["default"].createElement(_Button["default"], {
          key: "1",
          style: "plain"
        }, "Button")]
      }));
      expect(component.find('[data-test-section="buttonRowTest-left"] button').length).toBe(1);
      expect(component.find('[data-test-section="buttonRowTest-right"] button').length).toBe(1);
    });
    describe('with a test section', function () {
      it('should render with a test section', function () {
        var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
          testSection: "buttonRowTest",
          leftGroup: [_react["default"].createElement(_Button["default"], {
            key: "1",
            style: "plain"
          }, "Button")],
          centerGroup: [_react["default"].createElement(_Button["default"], {
            key: "1",
            style: "plain"
          }, "Button")],
          rightGroup: [_react["default"].createElement(_Button["default"], {
            key: "1",
            style: "plain"
          }, "Button")]
        }));
        expect(component.find('[data-test-section="buttonRowTest"]').length).toBe(1);
        expect(component.find('[data-test-section="buttonRowTest-left"]').length).toBe(1);
        expect(component.find('[data-test-section="buttonRowTest-center"]').length).toBe(1);
        expect(component.find('[data-test-section="buttonRowTest-right"]').length).toBe(1);
      });
    });
  });
});