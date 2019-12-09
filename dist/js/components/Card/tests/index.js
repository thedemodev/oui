"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Card', function () {
  var title = 'Hello world card';
  var body = 'Basic content inside this card';
  var test = 'foo';
  var mockFunction = jest.fn();
  it('should render the title passed in', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: title,
      testSection: test
    }, body));
    expect(component.find('[data-test-section="foo-title"]').text()).toBe(title);
  });
  it('should render text passed in as children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: title,
      testSection: test
    }, body));
    expect(component.find('[data-test-section="foo-body"]').text()).toBe(body);
  });
  it('should render element passed in as children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: title,
      testSection: test
    }, _react["default"].createElement("span", {
      "data-test-section": "foo-body-inner"
    }, body)));
    expect(component.exists('[[data-test-section="foo-body-inner"]]')).toBe(true);
  });
  it('should not render dismiss button by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: title,
      testSection: test
    }, body));
    expect(component.find('[data-test-section="foo-close"]').length).toBe(0);
  });
  it('should render dismiss button when prop is provided', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: title,
      testSection: test,
      onClose: mockFunction
    }, body));
    expect(component.find('[data-test-section="foo-close"]').length).toBe(1);
  });
});